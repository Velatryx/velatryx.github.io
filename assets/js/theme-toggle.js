document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  const icon = document.getElementById("theme-toggle-icon");
  const root = document.documentElement;

  // Load saved theme
  const saved = localStorage.getItem("theme");
  if (saved) {
    root.classList.add(saved + "-theme");
    icon.classList.replace("bi-moon", saved === "dark" ? "bi-sun" : "bi-moon");
  }

  toggleBtn.addEventListener("click", function () {
    if (root.classList.contains("dark-theme")) {
      root.classList.remove("dark-theme");
      root.classList.add("light-theme");
      localStorage.setItem("theme", "light");
      icon.classList.replace("bi-sun", "bi-moon");
    } else {
      root.classList.remove("light-theme");
      root.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
      icon.classList.replace("bi-moon", "bi-sun");
    }
  });
});
