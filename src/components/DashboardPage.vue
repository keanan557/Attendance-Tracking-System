<template>
    ksknfksnfk
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
                <tr>
                    <td>Tarryn Masunda</td>
                    <td>HR</td>
                    <td>07:39</td>
                    <td>tarryn@microsoft.com</td>
                    <td>545545454</td>
                    <td><button>On Site</button></td>
                </tr>
                <tr>
                    <td>Owethu Sityata</td>
                    <td>Sales Force</td>
                    <td>07:39</td>
                    <td>owethu@yahoo.com</td>
                    <td>545545454</td>
                    <td><button>Off Site</button></td>
                </tr>
                <tr>
                    <td>Sinovuyo Joe</td>
                    <td>Administration</td>
                    <td>07:39</td>
                    <td>sino@adobe.com</td>
                    <td>545545454</td>
                    <td><button>Off Site</button></td>
                </tr>
                <tr>
                    <td>Keanan Oliver</td>
                    <td>HR</td>
                    <td>07:39</td>
                    <td>oliver@tesla.com</td>
                    <td>545545454</td>
                    <td><button>On Site</button></td>
                </tr>
                <tr>
                    <td>Yandisa Khumalo</td>
                    <td>Team Leader</td>
                    <td>07:39</td>
                    <td>yandisa@google.com</td>
                    <td>545545454</td>
                    <td><button>On Site</button></td>
                </tr>
                <tr>
                    <td>Asive Daniel</td>
                    <td>Team Leader</td>
                    <td>07:39</td>
                    <td>asive@microsoft.com</td>
                    <td>545545454</td>
                    <td><button>On Site</button></td>
                </tr>
                <tr>
                    <td>Tiffany Johnston</td>
                    <td>Floor Manager</td>
                    <td>07:39</td>
                    <td>tiffany@yahoo.com</td>
                    <td>545545454</td>
                    <td><button>On Site</button></td>
                </tr>
                <tr>
                    <td>Sibabalwe Lingani</td>
                    <td>Health & Safety</td>
                    <td>07:39</td>
                    <td>siba@gmail.com</td>
                    <td>545545454</td>
                    <td><button>Off Site</button></td>
                </tr>
            </tbody>
        </table>
        <div class="pagination">
            <span>Showing data 1 to 8 of 256K entries</span>
            <nav>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">...</a>
                <a href="#">40</a>
                <a href="#">Next</a>
            </nav>
        </div>
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
      welcomeMessage: "Welcome Yandisa 👋",
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
        // Add more if needed
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
