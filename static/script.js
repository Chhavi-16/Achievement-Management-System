document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("mode-toggle");
  if (!toggleButton) return;

  const savedTheme = localStorage.getItem("theme") || "dark";

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleButton.textContent = "☀️";
  } else {
    document.body.classList.remove("light-mode");
    toggleButton.textContent = "🌙";
  }

  toggleButton.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-mode");

    if (isLight) {
      toggleButton.textContent = "☀️";
      localStorage.setItem("theme", "light");
    } else {
      toggleButton.textContent = "🌙";
      localStorage.setItem("theme", "dark");
    }
  });
<<<<<<< HEAD
});

/* 👇👇 MUST BE OUTSIDE */
function applyFilter() {
  console.log("Filter clicked");

  const type = document.getElementById("type").value;
  const year = document.getElementById("year").value;
  const student = document.getElementById("student_name").value;

  fetch(`/api/achievements/filter?type=${type}&year=${year}&student_name=${student}`)
    .then(res => res.json())
    .then(data => {
      console.log("Filtered data:", data);

      const container = document.getElementById("achievement-list");
      container.innerHTML = "";

      if (data.length === 0) {
        container.innerHTML = "<p>No achievements found</p>";
        return;
      }

      data.forEach(a => {
        container.innerHTML += `
          <div class="card">
            <h4>${a.title}</h4>
            <p>Type: ${a.category}</p>
            <p>Student: ${a.student_name}</p>
            <p>Position: ${a.position}</p>
          </div>
        `;
      });
    });
}
=======



});
>>>>>>> c2e9f6021e5aa3f405794a69358b5d36c0350970
