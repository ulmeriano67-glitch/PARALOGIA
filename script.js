document.addEventListener("DOMContentLoaded", () => {
  const cookie = document.getElementById("cookieNotice");
  const accept = document.getElementById("acceptCookies");
  if (cookie && localStorage.getItem("paralogiaCookies") === "accepted") {
    cookie.classList.add("hidden");
  }
  if (accept) {
    accept.addEventListener("click", () => {
      localStorage.setItem("paralogiaCookies", "accepted");
      cookie.classList.add("hidden");
    });
  }
});
