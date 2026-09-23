
// 1. MOBILE SIDEBAR

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

if (menuBtn && sidebar) {
  menuBtn.addEventListener("click", function () {
    sidebar.classList.toggle("open");
  });
}



// 2. SIDEBAR NAVIGATION

const navLinks = document.querySelectorAll(".nav-link");
const pageTitle = document.getElementById("pageTitle");

navLinks.forEach(function (link) {

  link.addEventListener("click", function (event) {

    event.preventDefault();

    // Remove active from all links
    navLinks.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add active to clicked link
    link.classList.add("active");

    // Get page name
    const page = link.getAttribute("data-page");

    // Change page title
    if (pageTitle && page) {
      pageTitle.textContent = page;
    }

    // Close mobile sidebar
    if (sidebar) {
      sidebar.classList.remove("open");
    }

  });

});


// 3. DARK / LIGHT THEME

const themeBtn = document.getElementById("themeBtn");
const mobileThemeBtn = document.getElementById("mobileThemeBtn");

function toggleTheme() {

  document.body.classList.toggle("dark");

  const isDark = document.body.classList.contains("dark");

  // Save theme
  localStorage.setItem("theme", isDark ? "dark" : "light");

}


// Desktop theme button
if (themeBtn) {
  themeBtn.addEventListener("click", toggleTheme);
}


// Mobile theme button
if (mobileThemeBtn) {
  mobileThemeBtn.addEventListener("click", toggleTheme);
}


// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
}


// 4. DATE PICKER


const dateBtn = document.getElementById("dateBtn");
const dateMenu = document.getElementById("dateMenu");

if (dateBtn && dateMenu) {

  const dateOptions = dateMenu.querySelectorAll("button");

  // Open / close date menu
  dateBtn.addEventListener("click", function (event) {

    event.stopPropagation();

    dateMenu.classList.toggle("show");

  });


  // Select date
  dateOptions.forEach(function (button) {

    button.addEventListener("click", function () {

      const selectedDate = button.textContent.trim();

      // Change date displayed in button
      const dateText = dateBtn.querySelector("span");

      if (dateText) {
        dateText.textContent = selectedDate;
      }

      // Close menu
      dateMenu.classList.remove("show");

    });

  });


  // Close date menu when clicking outside
  document.addEventListener("click", function (event) {

    if (!dateBtn.contains(event.target) &&
        !dateMenu.contains(event.target)) {

      dateMenu.classList.remove("show");

    }

  });

}

// 5. GLOBAL SEARCH


const globalSearch = document.getElementById("globalSearch");

if (globalSearch) {

  globalSearch.addEventListener("input", function () {

    const searchValue = globalSearch.value.toLowerCase().trim();
    const channelRows = document.querySelectorAll(".channel-row");
    const countryRows = document.querySelectorAll(".country-row");

    // Search channels
    channelRows.forEach(function (row) {
      const name = row.getAttribute("data-name");
      if (!searchValue || name.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }

    });


    // Search countries
    countryRows.forEach(function (row) {

      const name = row.getAttribute("data-name");

      if (!searchValue || name.includes(searchValue)) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }

    });

  });

}



// 6. COUNTRY SEARCH


const countrySearch = document.getElementById("countrySearch");

if (countrySearch) {

  countrySearch.addEventListener("input", function () {

    const searchValue =
      countrySearch.value.toLowerCase().trim();

    const countryRows =
      document.querySelectorAll(".country-row");


    countryRows.forEach(function (row) {

      const name = row.getAttribute("data-name");

      if (!searchValue || name.includes(searchValue)) {

        row.style.display = "";

      } else {

        row.style.display = "none";

      }

    });

  });

}



// 7. COUNTRY TABS


const countryTabs = document.querySelectorAll("#countryTabs button");

countryTabs.forEach(function (tab) {

  tab.addEventListener("click", function () {

    // Remove active from all tabs
    countryTabs.forEach(function (item) {
      item.classList.remove("active");
    });

    // Add active to selected tab
    tab.classList.add("active");

    const selectedTab = tab.textContent.trim();

    console.log("Selected country tab:", selectedTab);

  });

});



// 8. CHART PERIOD


const chartPeriod = document.getElementById("chartPeriod");
const chartArea = document.getElementById("chartArea");


// Create chart labels
function createChart(period) {

  if (!chartArea) {
    return;
  }

  chartArea.innerHTML = "";


  let labels = [];


  if (period === "Monthly") {

    labels = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

  }


  else if (period === "Weekly") {

    labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8"
    ];

  }


  else if (period === "Yearly") {

    labels = [
      "2021",
      "2022",
      "2023",
      "2024",
      "2025",
      "2026"
    ];

  }


  // Create chart columns
  labels.forEach(function (label, index) {

    const column = document.createElement("div");

    column.className = "chart-column";


    // Demo values
    const organicHeight = 30 + ((index * 17) % 65);
    const invalidHeight = 20 + ((index * 13) % 50);
    const referralHeight = 15 + ((index * 11) % 45);


    column.innerHTML = `
      <div class="chart-bars">
        <span
          class="bar organic-bar"
          style="height:${organicHeight}%">
        </span>

        <span
          class="bar invalid-bar"
          style="height:${invalidHeight}%">
        </span>

        <span
          class="bar referral-bar"
          style="height:${referralHeight}%">
        </span>
      </div>

      <small>${label}</small>
    `;


    chartArea.appendChild(column);

  });

}


// Change chart period
if (chartPeriod) {

  chartPeriod.addEventListener("change", function () {

    const selectedPeriod = chartPeriod.value;

    createChart(selectedPeriod);

  });


  // Initial chart
  createChart(chartPeriod.value);

}



// 9. EXPORT DATA


const exportBtn = document.getElementById("exportBtn");

if (exportBtn) {

  exportBtn.addEventListener("click", function () {

    const data = [
      ["Channel", "Percent", "Total"],
      ["Instagram", "65%", "17,143"],
      ["Facebook", "55%", "14,321"],
      ["Google", "43%", "11,843"]
    ];


    let csv = "";

    data.forEach(function (row) {

      csv += row.join(",") + "\n";

    });


    // Create file
    const blob = new Blob([csv], {
      type: "text/csv"
    });


    const url = URL.createObjectURL(blob);


    // Create download link
    const link = document.createElement("a");

    link.href = url;
    link.download = "datagrow-analytics.csv";

    link.click();


    // Clean URL
    URL.revokeObjectURL(url);

  });

}



// 10. NOTIFICATION BUTTON


const notificationBtn =
  document.getElementById("notificationBtn");

if (notificationBtn) {

  notificationBtn.addEventListener("click", function () {

    alert(
      "You have 3 new notifications."
    );

  });

}



// 11. UPGRADE PLAN


const upgradeBtn =
  document.getElementById("upgradeBtn");

if (upgradeBtn) {

  upgradeBtn.addEventListener("click", function () {

    alert(
      "Upgrade Plan clicked!"
    );

  });

}



// 12. LOGOUT


const logoutBtn =
  document.getElementById("logoutBtn");

if (logoutBtn) {

  logoutBtn.addEventListener("click", function (event) {

    event.preventDefault();


    const confirmLogout =
      confirm("Are you sure you want to logout?");


    if (confirmLogout) {

      alert("You have been logged out.");

      // Example:
      // window.location.href = "login.html";

    }

  });

}



// 13. PROFILE CLICK


const profile =
  document.querySelector(".profile");

if (profile) {

  profile.addEventListener("click", function () {

    alert("Profile menu clicked.");

  });

}



// 14. MORE BUTTONS


const moreButtons =
  document.querySelectorAll(".more-btn");

moreButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    alert("More options clicked.");

  });

});



// 15. MESSAGE BUTTON


const messageButton =
  document.querySelector(
    '.circle-btn[title="Messages"]'
  );

if (messageButton) {

  messageButton.addEventListener("click", function () {

    alert("Messages opened.");

  });

}



// 16. CLOSE SIDEBAR WHEN CLICKING OUTSIDE


document.addEventListener("click", function (event) {

  if (!sidebar || !menuBtn) {
    return;
  }


  const clickedInsideSidebar =
    sidebar.contains(event.target);

  const clickedMenuButton =
    menuBtn.contains(event.target);


  if (
    !clickedInsideSidebar &&
    !clickedMenuButton
  ) {

    sidebar.classList.remove("open");

  }

});



// 17. CONSOLE MESSAGE


console.log(
  "DataGrow Dashboard JavaScript loaded successfully."
);
