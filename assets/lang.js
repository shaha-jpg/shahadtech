(function () {
  const isEn = location.pathname.includes("/en/");
  const preferred = localStorage.getItem("lang"); // 'ar' أو 'en'

  if (!isEn && preferred === "en") {
    const path = location.pathname.replace(/^\//, "");
    location.replace("/en/" + (path || "index.html"));
    return;
  }

  if (isEn && preferred === "ar") {
    const path = location.pathname.replace(/^\/en\//, "");
    location.replace("/" + (path || "index.html"));
    return;
  }

  window.toggleLang = function () {
    if (isEn) {
      localStorage.setItem("lang", "ar");
      const path = location.pathname.replace(/^\/en\//, "");
      location.href = "/" + (path || "index.html");
    } else {
      localStorage.setItem("lang", "en");
      const path = location.pathname.replace(/^\//, "");
      location.href = "/en/" + (path || "index.html");
    }
  };
})();
