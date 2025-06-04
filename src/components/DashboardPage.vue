<template>
     <!-- Header Section -->
    <header>
        <div class="logo">ILISO v.01</div>
        <h2>Welcome Yandisa :wave:</h2>
    </header>
    <!-- Dashboard Metrics Section -->
    <section class="metrics">
        <div class="metric">
            <img src="insert employees-icon.png" alt="Employees">
            <span>Employees</span>
            <strong>5,423</strong>
        </div>
        <div class="metric">
            <img src=" insert inactive-icon.png" alt="Inactive">
            <span>Inactive</span>
            <strong>1,893</strong>
        </div>
        <div class="metric">
            <img src="active-now-icon.png" alt="Active Now">
            <span>Active Now</span>
            <strong>189</strong>
            <div class="avatars">
                <!-- Placeholder for avatars -->
            </div>
        </div>
    </section>
    <!-- Active Employees Section -->
    <section class="active-employees">
        <h3>Active Employees</h3>
        <div class="search-bar">
            <input type="text" placeholder="Search">
            <select>
                <option value="newest">Sort by: Newest</option>
                <option value="oldest">Sort by: Oldest</option>
            </select>
        </div>
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
              <tr v-for="(employee, index) in paginatedEmployees" :key="index">
                <td>{{ employee.name }}</td>
                <td>{{ employee.department }}</td>
                <td>{{ employee.time }}</td>
                <td>{{ employee.email }}</td>
                <td>{{ employee.id }}</td>
                <td><button>{{ employee.status }}</button></td>
              </tr>
            </tbody>
            
        </table> 
         
         <div class="pagination">
          <span>Showing data 1 to 8 of 256K entries</span>
        <nav v-if="totalPages > 1">
          <a href="#" @click.prevent="prevPage()">Previous</a>
          <a
            v-for="page in totalPages"
            :key="page"
            href="#"
            :class="{ active: page === currentPage }"
            @click.prevent="goToPage(page)"
          >
            {{ page }}
          </a>
          <a href="#" @click.prevent="nextPage()">Next</a>
        </nav>
        </div>

      

        <!-- new ends -->
    </section>
    <!-- Footer Section -->
    <footer>
        <div class="user-info">
            <img src="" alt="User's Avatar">
            <span>Yandisa Khumalo</span>
            <span>Project Manager</span>
        </div>
        <div class="footer-slogan">
            Powered By Life Choices
        </div>
    </footer>
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
      welcomeMessage: "Welcome Eren Yeager 👋",
      currentPage: 1,
      pageSize: 5,
      metrics: [
        { title: "Employees", count: "5,423" },
        { title: "Inactive", count: "1,893" },
        { title: "Active Now", count: "189" },
      ],
      allEmployees: [
        { name: "Tarryn Masunda", department: "HR", time: "07:39", email: "tarryn@microsoft.com", id: "545545454", status: "On Site" },
        { name: "Owethu Sityata", department: "Sales Force", time: "07:39", email: "owethu@yahoo.com", id: "545545454", status: "Off Site" },
        { name: "Sinovuyo Joe", department: "Administration", time: "07:39", email: "sino@adobe.com", id: "545545454", status: "Off Site" },
        { name: "Keanan Oliver", department: "HR", time: "07:39", email: "oliver@tesla.com", id: "545545454", status: "On Site" },
        { name: "Yandisa Khumalo", department: "Team Leader", time: "07:39", email: "yandisa@google.com", id: "545545454", status: "On Site" },
        { name: "Nandipha Zigwebile", department: "Finance", time: "07:39", email: "nandipha@gmail.com", id: "545545454", status: "On Site" },
        { name: "Asive Daniel", department: "Team Leader", time: "07:39", email: "asive@microsoft.com", id: "545545454", status: "On Site" },
        { name: "Tiffany Johnston", department: "Floor Manager", time: "07:39", email: "tiffany@yahoo.com", id: "545545454", status: "On Site" },
        { name: "Sibabalwe Lingani", department: "Health & Safety", time: "07:39", email: "siba@gmail.com", id: "545545454", status: "Off Site" },
        { name: "Lebo Mokoena", department: "Customer Service", time: "07:39", email: "lebo@uber.com", id: "545545454", status: "On Site" },
        { name: "Thabiso Molefe", department: "IT", time: "07:39", email: "thabiso@facebook.com", id: "545545454", status: "On Site" },
        { name: "Zanele Tshabalala", department: "HR", time: "07:39", email: "zanele@amazon.com", id: "545545454", status: "Off Site" },
        { name: "Linda Dlamini", department: "Marketing", time: "07:39", email: "linda@nike.com", id: "545545454", status: "On Site" },
        { name: "Khaya Dube", department: "IT", time: "07:39", email: "khaya@intel.com", id: "545545454", status: "On Site" },
        { name: "Amanda Cele", department: "Security", time: "07:39", email: "amanda@paypal.com", id: "545545454", status: "Off Site" },
      ],
      user: {
        name: "Yandisa Khumalo",
        role: "Project Manager",
      },
    };
  },
  computed: {
    paginatedEmployees() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.allEmployees.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.allEmployees.length / this.pageSize);
    },
  },
  // methods: {
  //   goToPage(page) {
  //     if (page >= 1 && page <= this.totalPages) {
  //       this.currentPage = page;
  //     }
  //   },
//     watch: {
//   currentPage(newVal) {
//     console.log("Page changed to:", newVal);
//   }
// }

// jk

//     methods: {
//       paginatedEmployees() {
//         const start = (this.currentPage - 1) * this.pageSize;
//         return this.allEmployees.slice(start, start + this.pageSize);
//     },
//     nextPage() {
//       this.goToPage(this.currentPage + 1);
//     },
//     prevPage() {
//       this.goToPage(this.currentPage - 1);
//     },
//   },
// };

methods: {
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
