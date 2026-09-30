
import {db} from '../db/config.js';
import {
    collection,
    addDoc,
    serverTimestamp,
    onSnapshot,
    query,
    orderBy,
    deleteDoc,
    getDocs,
    getDoc,
    setDoc,
    updateDoc,
    doc
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";


const expenseForm = document.getElementById('expenseForm'); 
const titleInput = document.getElementById('title'); 
const amountInput = document.getElementById('amount'); 
const typeInput = document.getElementById('type'); 
const categoryInput = document.getElementById('category'); 
const dateInput = document.getElementById('date'); 
const submitBtn = document.querySelector('.add-expense-btn');
const expensesTableBody = document.getElementById('expensesTableBody');

let currentEditId = null;
let allExpenses = [];

// (filter elements declared later near filter function)

function formatCurrency(amount){
    return `₹${Number(amount|| 0).toLocaleString('en-IN')}`;
}

// small helper to avoid HTML injection when rendering
function escapeHtml(string) {
    return String(string)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}



// Add expense
if (expenseForm) {
    expenseForm.addEventListener("submit", async (event) => {
        event.preventDefault();

       const title = document.getElementById("title").value;
       const amount = Number(document.getElementById("amount").value);
       const category = document.getElementById("category").value;
       const date = document.getElementById("date").value;
       const type = document.getElementById("type").value; 

        if(!title){alert("Enter a valid title")}
        if(!amount || amount<=0){alert("enter a valid amount")}
        if(!category){alert("enter a valid category")}

        try {
            if (currentEditId) {
                // update existing
                await updateDoc(doc(db, 'expenses', currentEditId), {
                    title: title,
                    amount: amount,
                    category: category,
                    date: date,
                    type: type
                });

                console.log('Expense updated:', currentEditId);
                currentEditId = null;
                if (submitBtn) submitBtn.textContent = ' + Add Expense';
                expenseForm.reset();
            } else {
                const docRef = await addDoc(collection(db, 'expenses'), {
                    title: title,
                    amount: amount,
                    category: category,
                    date: date,
                    type: type,
                    createdAt: serverTimestamp()
                });

                console.log("Expense added:", docRef.id);

                expenseForm.reset();
            }
        } catch (error) {
            console.error("Error adding/updating expense:", error);
        }
    });
}


// Real-time listener to update table
const expensesQuery = query(collection(db, 'expenses'), orderBy('createdAt', 'desc'));

onSnapshot(expensesQuery, (snapshot) => {
    const expenses = [];
    snapshot.forEach((docSnap) => {
        expenses.push({ id: docSnap.id, ...docSnap.data() });
    });

    allExpenses = expenses;

    // update summary cards and render table
    updateDashboard(expenses);
    displayExpenses(expenses);
    updateDashboardByMonth();
});

// Populate the form for editing
async function editExpense(id) {
    try {
        const docRef = doc(db, 'expenses', id);
        const snap = await getDoc(docRef);
        if (!snap.exists()) return;
        const data = snap.data();

        document.getElementById('title').value = data.title || '';
        document.getElementById('amount').value = data.amount || '';
        document.getElementById('category').value = data.category || '';
        document.getElementById('date').value = data.date || '';
        document.getElementById('type').value = data.type || 'expense';

        currentEditId = id;
        if (submitBtn) submitBtn.textContent = 'Save Changes';
    } catch (err) {
        console.error('Edit fetch error', err);
    }
}

const totalIncomeElement = document.getElementById('totalIncome');
const totalExpensesElement = document.getElementById('totalExpenses');
const remainBalanceElement = document.getElementById('remainBalance');
const editIncomeBtn = document.getElementById('editIncomeBtn');
const incomeInput = document.getElementById('incomeInput');
const saveIncomeBtn = document.getElementById('saveIncomeBtn');
const cancelIncomeBtn = document.getElementById('cancelIncomeBtn');

let currentIncome = 50000; // default



function updateDashboard(expenses){
    // Sum transaction incomes and expenses
    let txnIncome = 0;
    let txnExpenses = 0;

    expenses.forEach((expense) => {
        const amount = Number(expense.amount || 0);
        const t = String(expense.type || 'expense').toLowerCase();
        if (t === 'income') txnIncome += amount;
        else txnExpenses += amount;
    });

    // Effective income is the user-set currentIncome plus any transaction incomes
    const effectiveIncome = Number(currentIncome || 0) + txnIncome;
    const balance = effectiveIncome - txnExpenses;

    if (totalIncomeElement) totalIncomeElement.textContent = formatCurrency(effectiveIncome);
    if (totalExpensesElement) totalExpensesElement.textContent = formatCurrency(txnExpenses);
    if (remainBalanceElement) remainBalanceElement.textContent = formatCurrency(balance);
}

async function loadExpenses() {

    const querySnapshot = await getDocs(collection(db, "expenses"));

    const expenses = [];

    querySnapshot.forEach((doc) => {
        expenses.push({
            id: doc.id,
            ...doc.data()
        });
    allExpenses = expenses;
    });

    // Update dashboard
    updateDashboard(expenses);

}

// initialize totals on load
loadExpenses();

// Load income setting from Firestore
async function loadIncome() {
    try {
        const ref = doc(db, 'settings', 'income');
        const snap = await getDoc(ref);
        if (snap.exists()) {
            const val = snap.data().value;
            currentIncome = Number(val || currentIncome);
        }
        // reflect on UI
        if (totalIncomeElement) totalIncomeElement.textContent = formatCurrency(currentIncome);
        if (incomeInput) incomeInput.value = currentIncome;
    } catch (err) {
        console.error('loadIncome error', err);
    }
}

// Real-time listener for income changes (optional)
onSnapshot(doc(db, 'settings', 'income'), (snap) => {
    if (snap && snap.exists()) {
        const val = snap.data().value;
        currentIncome = Number(val || currentIncome);
        if (totalIncomeElement) totalIncomeElement.textContent = formatCurrency(currentIncome);
        if (incomeInput) incomeInput.value = currentIncome;
    }
});

// Wire income edit UI
if (editIncomeBtn && incomeInput && saveIncomeBtn && cancelIncomeBtn) {
    editIncomeBtn.addEventListener('click', () => {
        incomeInput.style.display = 'inline-block';
        saveIncomeBtn.style.display = 'inline-block';
        cancelIncomeBtn.style.display = 'inline-block';
        editIncomeBtn.style.display = 'none';
        incomeInput.focus();
    });

    cancelIncomeBtn.addEventListener('click', () => {
        incomeInput.style.display = 'none';
        saveIncomeBtn.style.display = 'none';
        cancelIncomeBtn.style.display = 'none';
        editIncomeBtn.style.display = 'inline-block';
        incomeInput.value = currentIncome;
    });

    saveIncomeBtn.addEventListener('click', async () => {
        const val = Number(incomeInput.value || 0);
        try {
            await setDoc(doc(db, 'settings', 'income'), { value: val }, { merge: true });
            currentIncome = val;
            if (totalIncomeElement) totalIncomeElement.textContent = formatCurrency(currentIncome);
            incomeInput.style.display = 'none';
            saveIncomeBtn.style.display = 'none';
            cancelIncomeBtn.style.display = 'none';
            editIncomeBtn.style.display = 'inline-block';
        } catch (err) {
            console.error('saveIncome error', err);
        }
    });
}

// load income once
loadIncome();


// Filters / search elements (used by filterExpenses)
const searchInput = document.getElementById("searchInput");
const typeFilter = document.getElementById("typeFilter");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");

function filterExpenses() {
    const searchValue = (searchInput?.value || '').toLowerCase();
    const selectedType = (typeFilter?.value) || 'all';
    const selectedCategory = (categoryFilter?.value) || 'all';
    const selectedSort = (sortFilter?.value) || 'newest';
      const selectedMonth = monthFilter.value;

    let filteredExpenses = Array.isArray(allExpenses) ? [...allExpenses] : [];

    // search
    if (searchValue) {
        filteredExpenses = filteredExpenses.filter((expense) => {
            return (
                (expense.title || '').toLowerCase().includes(searchValue) ||
                (expense.category || '').toLowerCase().includes(searchValue)
            );
        });
    }

    // Type filter
    if (selectedType !== "all") {
        filteredExpenses = filteredExpenses.filter((expense) => {
            return String(expense.type || '').toLowerCase() === selectedType;
        });
    }

    // Category filter
    if (selectedCategory !== "all") {
        filteredExpenses = filteredExpenses.filter((expense) => {
            return String(expense.category || '').toLowerCase() === selectedCategory;
        });
    }

    // Sort
    if (selectedSort === "high") {
        filteredExpenses.sort((a, b) => Number(b.amount || 0) - Number(a.amount || 0));
    } else if (selectedSort === "low") {
        filteredExpenses.sort((a, b) => Number(a.amount || 0) - Number(b.amount || 0));
    } else if (selectedSort === "newest") {
        filteredExpenses.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (selectedSort === "oldest") {
        filteredExpenses.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    if (selectedMonth) {
        filteredExpenses = filteredExpenses.filter((expense) => {
            return expense.date && expense.date.startsWith(selectedMonth);
        });
    }

    displayExpenses(filteredExpenses);
}


function displayExpenses(expenses) {
    expensesTableBody.innerHTML = "";
    expenses.forEach((expense) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>
                <div class="expense-title">
                    <span class="expense-avatar">🍔</span>
                    <div>
                        <strong>${escapeHtml(expense.title || '')}</strong>
                        <small>
                            ${escapeHtml(expense.category || '')}
                            ${expense.type === 'income' ? 'income' : 'expense'}
                        </small>
                    </div>
                </div>
            </td>
            <td class="amount">
                ₹${Number(expense.amount || 0)}
            </td>
            <td>
                <span class="category-badge ${escapeHtml(expense.category || 'other')}">
                    ${escapeHtml(expense.category || '')}
                </span>
            </td>
            <td>
                ${escapeHtml(expense.date || '')}
            </td>
            <td>
                <div class="table-actions">

                    <button type="button" class="delete-btn" data-id="${expense.id}"> Delete</button>
                    <button type="button" class="edit-btn" data-id="${expense.id}"> Edit</button>
                </div>
            </td>
        `;
        expensesTableBody.appendChild(tr);
    });
    attachTransactionEvents();
}


function attachTransactionEvents(){
    // attach delete handlers
    expensesTableBody.querySelectorAll('.delete-btn').forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });

    expensesTableBody.querySelectorAll('.edit-btn').forEach(btn => {
        btn.replaceWith(btn.cloneNode(true));
    });

    // re-query and add listeners
    expensesTableBody.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const id = e.currentTarget.getAttribute('data-id');
            if (!id) return;
            try {
                await deleteDoc(doc(db, 'expenses', id));
                console.log('Deleted', id);
            } catch (err) {
                console.error('Delete error', err);
            }
        });
    });

    expensesTableBody.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const expenseId = e.currentTarget.getAttribute('data-id');
            if (!expenseId) return;
            editExpense(expenseId);
        });
    });
}

searchInput.addEventListener("input", filterExpenses);
typeFilter.addEventListener("change", filterExpenses);
categoryFilter.addEventListener("change", filterExpenses);
sortFilter.addEventListener("change", filterExpenses);


const monthFilter = document.getElementById('month');


function updateDashboardByMonth (){
    const selectedMonth = monthFilter.value;

    const monthExpenses = allExpenses.filter((expense) => {
        return expense.date && expense.date.startsWith(selectedMonth);
    });

    updateDashboard(monthExpenses);
}