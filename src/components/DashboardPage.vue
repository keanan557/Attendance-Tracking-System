<template>
  <!-- Main container for the entire dashboard layout -->
  <div class="dashboard-container">

    <!-- Header Section -->
      
        <aside class="sidebar expanded">
          <div class="sidebar-header">
            <span>
              <div class="brand"><img src="https://github.com/luthandodake10111/iliso--frontend-images-/raw/main/iliso%20logo.png" alt="Logo"></div>
            </span>
          </div>

      <!-- TOP MENU -->
      <ul class="nav-menu top-menu">
        <li v-for="menu in topMenus" :key="menu.name" :class="{ active: activeMenu === menu.name }">
          <button @click="handleMenuClick(menu);" class="nav-link">
            <box-icon :name="menu.icon" color="white" class="icon" />
            <span class="tooltip">{{ menu.name }}</span>
          </button>
        </li>
      </ul>

      <!-- Spacer -->
      <div class="flex-spacer"></div>

          <!-- PROFILE DROPDOWN -->
          <div class="profile-dropdown">
            <button class="nav-link" @click="showProfileDropdown = !showProfileDropdown">
              <img src="https://github.com/luthandodake10111/iliso--frontend-images-/raw/main/tara%20logo.png" alt="Profile" class="profile-image" />
              <span class="tooltip"> Tara Snell</span>
            </button>

        <!-- Profile Dropdown Content -->
        <div v-show="showProfileDropdown" class="user-info-dropdown">
          <div class="user-details">
            <div class="user-title">Project Manager</div>
          </div>
        </div>
      </div>

      <!-- Logout Success Modal -->
      <div v-if="showLogoutModal" class="modal-overlay">
        <div class="logout-modal">
          <p>✅ Logged out successfully!</p>
        </div>
      </div>
      <!-- BOTTOM MENU -->
      <ul class="nav-menu bottom-menu">
        <li v-for="menu in bottomMenus" :key="menu.name" :class="{ active: activeMenu === menu.name }">
          <button @click="handleMenuClick(menu)" class="nav-link">
            <box-icon :name="menu.icon" color="white" class="icon" />
            <span class="tooltip">{{ menu.name }}</span>
          </button>
        </li>
      </ul>
    </aside>

    <!-- ADD PERSON MODAL -->
    <div v-if="showAddModal" class="modal-overlay">
      <div class="modal-content">
        <h2>Add Person</h2>
        <!-- Form Inputs -->
        <input type="text" placeholder="Employee Name	" />
        <input type="text" placeholder="Department" />
        <input type="time" placeholder="Clock In Time" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Employee ID" />

        <!-- Buttons -->
        <div class="button-group">
          <button @click="submitPerson">Submit</button>
          <button @click="showAddModal = false">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Dashboard Metrics Section -->
    <div class="main-board">
      <div class="welcome-msg">
        <h2>Welcome Tara 👋🏻</h2>

        <img class="Tara-Pfp" src="https://github.com/luthandodake10111/iliso--frontend-images-/raw/main/tara%20logo.png" alt="User's Avatar">
      </div>

      <section class="metrics">

        <div class="metric">

          <div class="image-contain">
            <img src="https://raw.githubusercontent.com/luthandodake10111/iliso--frontend-images-/main/Ellipse%203.png" alt="Inactive">
            <img src="https://github.com/luthandodake10111/iliso--frontend-images-/raw/main/profile-tick.png" class="overlay-image" />
          </div>
          <div class="metric-info">
            <span>Employees</span>
            <strong class="metric-num">5,423</strong>
          </div>
        </div>
        <div class="metric">
          <div class="image-contain">
            <img src="https://raw.githubusercontent.com/luthandodake10111/iliso--frontend-images-/main/Ellipse%203.png" alt="Inactive">
            <img src="https://raw.githubusercontent.com/luthandodake10111/iliso--frontend-images-/main/profile-2user.png" class="overlay-image" />
          </div>
          <div class="metric-info">
            <span>Inactive</span>
            <strong class="metric-num">1,893</strong>
          </div>
        </div>
        <div class="metric">
          <div class="image-contain">
            <img src="https://raw.githubusercontent.com/luthandodake10111/iliso--frontend-images-/main/Ellipse%203.png" alt="Active Now">
            <img src="https://github.com/luthandodake10111/iliso--frontend-images-/raw/main/monitor.png" class="overlay-image" />
          </div>

          <div class="metric-info">
            <span>Active Now</span>
            <strong class="metric-num">189</strong>
          </div>
          <div class="avatars">
            <!-- Placeholder for avatars -->
          </div>
        </div>
      </section>
      <!-- Active Employees Section -->
      <section class="active-employees">
        <div class="search-contain">
          <h3>Active Employees</h3>
          <div class="search-bar">
            <div class="search-icon-input">
              <input type="text" class="search-box" placeholder="Search" v-model="searchTerm">
              <img src="https://github.com/luthandodake10111/iliso--frontend-images-/raw/main/search%20icon.png" class="overlay-icon" />
            </div>

            <select v-model="sortByStatus">
              <option value="all">Sort by: All</option>
              <option value="On Site">Sort by: On Site</option>
              <option value="Off Site">Sort by: Off Site</option>
            </select>
          </div>
        </div>
        <div class="table-container">
          <table>
            <thead>
              <tr>
                <th>Employee Name</th>
                <th>Department</th>
                <th>Clock In Time</th>
                <th>Email</th>
                <th>Employee ID</th>
                <th>Status</th>
              </tr>
            </thead>

        <tbody>
          <tr v-for="employee in paginatedEmployees" :key="employee.id + employee.email">
            <td :data-label="'Employee Name'">{{ employee.name }}</td>
            <td :data-label="'Department'">{{ employee.department }}</td>
            <td :data-label="'Clock In Time'">{{ employee.time }}</td>
            <td :data-label="'Email'">{{ employee.email }}</td>
            <td :data-label="'Employee ID'">{{ employee.id }}</td>
            <td :data-label="'Status'">
              <button :class="employee.status === 'On Site' ? 'onsite' : 'offsite'">
                {{ employee.status }}
              </button>
            </td>
          </tr>
      </tbody>

        </table>
        </div>

        <div class="pagination">
          <span>Showing data 1 to 8 of 256K entries</span>
          <nav v-if="totalPages > 1">
            <a href="#" @click.prevent="prevPage()">Previous</a>
            <a v-for="page in totalPages" :key="page" href="#" :class="{ active: page === currentPage }"
              @click.prevent="goToPage(page)">
              {{ page }}
            </a>
            <a href="#" @click.prevent="nextPage()">Next</a>
          </nav>

        </div>


      </section>
      <!-- Footer Section -->
      <footer>

        <div class="footer-slogan">
          Powered By ILISO
        </div>
      </footer>
      <!-- new ends -->
    </div>
  </div>
</template>
<script>
export default {
  name: "AttendanceDashboard",
  props: {
    currentUser: String,
    msg: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      welcomeMessage: "Welcome Er5en Yeager 👋",
      currentPage: 1,
      pageSize: 5,
      searchTerm: '',
      sortByStatus: 'all',
      isSidebarCollapsed: true,
      activeMenu: 'Dashboard',
      showProfileDropdown: false,
      showAddModal: false,
      showLogoutModal: false,
      topMenus: [
        { name: "Dashboard", icon: "home-smile", action: "dashboardAction" },
        { name: "Add", icon: "user-circle", action: "addPersonAction" },
      ],
      bottomMenus: [

        { name: "Log-Out", icon: "log-out", action: "logoutAction" },
      ],
      metrics: [],
      allEmployees: [],
      user: {}
    };
  },
  mounted() {
    fetch("/employees_data.json")
      .then(response => response.json())
      .then(data => {
        this.metrics = data.metrics;
        this.allEmployees = data.allEmployees;
        this.user = data.user;
      })
      .catch(error => {
        console.error("Error fetching JSON:", error);
      });
  },

  computed: {

    filteredEmployees() {
      let tempEmployees = this.allEmployees;
      // Filter by search term
      if (this.searchTerm) {
        const lowerCaseSearchTerm = this.searchTerm.toLowerCase();
        tempEmployees = tempEmployees.filter(employee => {
          // Search across multiple fields: name, department, email, ID
          return employee.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            employee.department.toLowerCase().includes(lowerCaseSearchTerm) ||
            employee.email.toLowerCase().includes(lowerCaseSearchTerm) ||
            employee.id.toLowerCase().includes(lowerCaseSearchTerm);
        });
      }
      // Filter by status (Onsite/Absent)
      if (this.sortByStatus !== 'all') {
        tempEmployees = tempEmployees.filter(employee =>
          employee.status === this.sortByStatus
        );
      }
      return tempEmployees;
    },
    TopMenus() {
      return this.isSidebarCollapsed
        ? this.topMenus.filter(menu => menu.name === 'Dashboard')
        : this.topMenus;
    },
    paginatedEmployees() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.filteredEmployees.slice(start, end + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.allEmployees.length / this.pageSize);
    },
  },

  methods: {

    addPersonAction() {
      this.showAddModal = true;
    },

    submitPerson() {
      this.showAddModal = false;
    },

    logoutAction() {
      this.showLogoutModal = true;
      setTimeout(() => {
        this.showLogoutModal = false;
        this.$router.push('/');
      }, 2000); // 2 second delay
    },

    handleMenuClick(menu) {
      this.activeMenu = menu.name;
      // Call the corresponding action method
      if (this[menu.action]) {
        this[menu.action]();
      }
    },

    goToPage(page) {
      if (page >= 1 && page <= this.totalPages) {
        this.currentPage = page;
      }
    },
    nextPage() {
      this.goToPage(this.currentPage + 1);
    },
    prevPage() {
      this.goToPage(this.currentPage - 1);
    },
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: #FAFBFF;

}
</style>

<style scope>
.dashboard-container {

  display: flex;
  justify-content: space-between;
  height: 100vh;
  /* padding: 20px; */
  gap: 3rem;
}

.welcome-msg {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 10px; */
  /* border: 2px solid blue; */
}

.Tara-Pfp {
  width: 60px;
  height: 50px;
}

.search-contain {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-icon-input {
  position: relative;
  /* border: 2px solid brown; */
}

.overlay-icon {
  position: absolute;
  top: 10px;
  left: 5px;
}

.search-box {
  /* border: 2px solid brown; */
  /* position: absolute; */
  /* left: 1000px; */

  width: 300px;
  height: 33px;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #4a4a4a;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -0.01em;
  /* margin-right: -200px; */
  /* margin-top: -20px; */

}

select {
  /* position: absolute; */
  /* left: 1360px; */
  width: 120px;
  height: 29px;
  border-radius: 10px;
  background-color: #f0f0f0;
  color: #4a4a4a;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: -0.01em;
  /* margin-right: -180px; */
  /* margin-top: -20px; */

}

.table-container {
  max-height: 300px;
  /* adjust this height as needed */
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 6px;
}

/* Optional: make headers sticky */
.table-container thead th {
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

/* Optional: improve appearance */
.table-container table {
  width: 100%;
  border-collapse: collapse;
}

.table-container th,
.table-container td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}


/* Sidebar */
.sidebar {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 200px;
  background: white;
  padding: 1rem;
  height: 100vh;
  transition: max-height 0.3s ease, background-color 0.3s ease;

}

.sidebar-header .brand {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 50px auto;
  padding: 0.5rem 0;
}

.sidebar-header .brand img {
  max-width: 100%;
  max-height: 50px;
  object-fit: contain;
}

.flex-spacer {
  flex-grow: 1;
}


.sidebar.collapsed {
  height: auto;
  background: transparent;
  box-shadow: none;
}

.sidebar-collapsed li:not(.active) {
  padding: 0;
  transform: scaleY(0);
  margin: 0;
  height: 0;
  overflow: hidden;
}

.sidebar-header {
  display: flex;
  background: transparent;
  align-items: center;
  justify-content: space-between;
}

/* Navigation Menu */
.sidebar ul {
  list-style: none;
  padding: 0;
}

.nav-menu {
  display: flex;
  flex-direction: column;
}

.sidebar ul li {
  border-radius: 6px;
  margin: 8px 0;
  padding: 10px;
  opacity: 1;
  transform: scaleY(1);
  background-color: #004aad;
  transition: opacity 0.3s ease, transform 0.3s ease;
  transform-origin: top;
  cursor: pointer;
}

.sidebar ul li:hover {
  transform: scale(1.05);
}

.sidebar ul li.active {
  background-color: #0056b3;
}

/* Nav link styling */
.nav-link {
  display: flex;
  align-items: center;
  color: white;
  width: 100%;
  text-decoration: none;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}

.nav-link .icon {
  font-size: 1.5rem;
  margin-right: 10px;
}

.profile-dropdown {
  width: 200px;
  box-sizing: border-box;

}

.profile-dropdown .nav-link {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 25px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-sizing: border-box;
  transition: background-color 0.3s;
}

.profile-dropdown .nav-link:hover {
  background-color: rgba(0, 0, 0, 0.5);
}

.profile-dropdown .profile-image {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
}

.profile-dropdown .tooltip {
  white-space: nowrap;
}

.user-info-dropdown {
  background: white;
  border-radius: 8px;
  margin-top: 10px;
  padding: 15px;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.2);
  width: 180px;

}

.user-details {
  display: flex;
  flex-direction: column;
}

.user-title {
  font-size: 0.85rem;
  color: #666;
  margin-top: 0.3rem;
  font-weight: 500;
}



.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(4px);
}

.modal-content {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  width: 400px;
  max-width: 90%;
  padding: 2rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.modal-content h2 {
  margin: 0 0 1rem 0;
  font-weight: 700;
  color: #004aad;
  text-align: center;
}

.modal-content input {
  padding: 0.6rem 1rem;
  border: 1.5px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.modal-content input:focus {
  outline: none;
  border-color: #004aad;
  box-shadow: 0 0 5px #004aad66;
}


.button-group {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 1rem;
}

.button-group button {
  flex: 1;
  padding: 0.75rem 1.2rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

/* Submit Button */
.button-group button:first-of-type {
  background-color: #004aad;
  color: #fff;
}

.button-group button:first-of-type:hover {
  background-color: #003580;
  transform: translateY(-2px);
}

/* Cancel Button */
.button-group button:last-of-type {
  background-color: #f0f0f0;
  color: #333;
}

.button-group button:last-of-type:hover {
  background-color: #dcdcdc;
  transform: translateY(-2px);
}


.modal-content button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.modal-content button:first-of-type {
  background-color: #004aad;
  color: white;
  margin-bottom: 0.5rem;
}

.modal-content button:first-of-type:hover {
  background-color: #003580;
}

.modal-content button:last-of-type {
  background-color: #f0f0f0;
  color: #555;
}

.modal-content button:last-of-type:hover {
  background-color: #dcdcdc;
}

.logout-modal {
  background-color: white;
  padding: 1.5rem 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  font-size: 1.1rem;
  font-weight: 500;
  color: #333;
}

.search-bar {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-right: 100px;
}

.metric-info {
  display: flex;
  flex-direction: column;
}

.metric {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.metric-num {
  line-height: 32px;
  font-size: 32px;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  color: #333;
}

.image-contain {
  position: relative;
  display: inline-block;
}

.overlay-image {
  position: absolute;
  top: 20px;
  left: 30px;
}

.side-bar {
  /* border:2px solid blue; */
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
}

.main-board {
  /* border:2px solid green; */
  display: flex;
  flex-direction: column;
  /* height: 500px; */
  gap: 2rem;
}

.metrics {
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  background-color: #fff;
  width: 1250px;
  height: 151px;
  border-radius: 30px;
  box-shadow: 0 10px 60px rgba(226, 236, 249, 0.5);
  padding: 16px 8px;
}

.active-employees {
  background-color: #fff;
  width: 1250px;
  height: 613px;
  border-radius: 30px;
  box-shadow: 0 10px 60px rgba(226, 236, 249, 0.5);
  padding: 16px 8px;
}

.active-employees table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #292D32;
}

.active-employees th,
.active-employees td {
  padding: 12px 16px;
  text-align: left;
  /* You can also use 'center' or 'right' per column */
  vertical-align: middle;
  border-bottom: 1px solid #e0e0e0;
}

.active-employees th {
  font-weight: 600;
  background-color: #fff;
  color: #B5B7C0;
}

.active-employees h3 {
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: -0.01em;
  color: #333333;

}



button {
  font-size: 14px;
  font-weight: 600;
  border-radius: 4px;
  padding: 4px 12px;
  border: 1px solid;
  cursor: default;
  width: 86px;
  height: 29px;
  text-align: center;
  gap: 10px;

}

button.onsite {
  background-color: rgba(0, 176, 135, 0.38);
  /* #00B087 at 38% opacity */
  border-color: #00B087;
  color: #00B087;
}

button.offsite {
  background-color: rgba(255, 71, 71, 0.38);
  /* #FF4747 at 38% opacity */
  border-color: #FF4747;
  color: #FF4747;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  color: #b5b7c0;
}

.pagination nav {
  display: flex;
  gap: 6px;
}

.pagination a {
  display: inline-block;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #e5e7eb;
  background-color: #f9fafb;
  color: #0f4392;
  text-decoration: none;
  font-weight: 500;
  min-width: 25px;
  text-align: center;
  gap: 10px;
  transition: background-color 0.2s, color 0.2s;
}

.pagination a:hover {
  background-color: #e5e7eb;
}

.pagination a.active {
  background-color: #0f4392;
  color: #fff;
  border-color: #0f4392;
}


footer {
  /* border:2px solid orange; */
  text-align: center;
}

.footer-slogan {
  color: #928282;
}

@media (max-width: 768px) {
  .dashboard-container {
    flex-direction: column;
    gap: 1rem;
    height: auto;
    padding: 1rem;
  }
  .welcome-msg {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .Tara-Pfp {
    width: 50px;
    height: 45px;
  }
  .metrics {
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 1rem;
    padding: 1rem;
  }
  .metric {
    justify-content: flex-start;
    gap: 1rem;
  }
  .active-employees {
    width: 100%;
    height: auto;
    overflow-x: auto;
    padding: 1rem;
  }
  .search-contain {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .search-bar {
    flex-direction: column;
    width: 100%;
    margin-right: 0;
    gap: 1rem;
  }
  .search-box {
    width: 100%;
  }
  select {
    width: 100%;
  }
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }
  .pagination nav {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
  
  thead .table-container table {
    font-size: 12px;
    min-width: 600px;
  }
}
@media (max-width: 768px) {
  .dashboard-container {
    flex-direction: column;
    padding: 1rem;
  }
  .welcome-msg {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  .Tara-Pfp {
    width: 50px;
    height: 45px;
  }
  .metrics {
    flex-direction: column;
    gap: 1rem;
  }
  .metric {
    justify-content: flex-start;
    gap: 1rem;
  }
  .search-contain {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
  .search-bar {
    flex-direction: column;
    width: 100%;
    gap: 1rem;
  }
  .search-box,
  select {
    width: 100%;
  }
  /* Responsive Table */
  .active-employees {
    width: 100%;
    overflow-x: auto;
    padding: 1rem;
  }
  table {
    min-width: 100%;
    border-collapse: collapse;
  }
 
  @media (max-width: 768px) {
  thead {
    display: none;
  }
}

  tbody tr {
    display: block;
    border-bottom: 1px solid #ddd;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
  tbody td {
    display: flex;
    justify-content: space-between;
    padding: 6px 10px;
    font-size: 14px;
    text-align: left;
    border: none;
    white-space: normal;
    word-wrap: break-word;
  }
  tbody td::before {
    content: attr(data-label);
    font-weight: bold;
    color: #666;
    min-width: 100px;
  }
  .pagination {
    flex-direction: column;
    gap: 1rem;
  }
  .pagination nav {
    flex-wrap: wrap;
    justify-content: center;
  }
 
 }
</style>
