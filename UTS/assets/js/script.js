document.addEventListener("DOMContentLoaded", () => {
  /* ---------- 1. Tema Terang / Gelap ---------- */
  const toggleBtn = document.getElementById("toggle-theme");
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  toggleBtn.addEventListener("click", () => {
    const newTheme = document.body.classList.toggle("dark-mode") ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  });

  function applyTheme(mode) {
    if (mode === "dark") {
      document.body.classList.add("dark-mode");
      toggleBtn.textContent = "☀️";
    } else {
      document.body.classList.remove("dark-mode");
      toggleBtn.textContent = "🌙";
    }
  }

  /* ---------- 2. Smooth-Scroll Navigasi ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      const targetId = link.getAttribute("href");
      if (targetId.length > 1) {
        e.preventDefault();
        document.querySelector(targetId)?.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  });

  /* ---------- 3. Animasi Progress Bar ---------- */
  const skillSection = document.querySelector(".skills");
  if (skillSection) {
    const progObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".progress div").forEach(bar => {
              const finalWidth = bar.style.width || "0%";
              bar.style.width = "0%";
              setTimeout(() => (bar.style.width = finalWidth), 100);
            });
            progObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );
    progObserver.observe(skillSection);
  }

  /* ---------- 4. Validasi Form & Toast ---------- */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", e => {
      const { name, email, message } = form;
      const errs = [];

      if (!name.value.trim()) errs.push("Nama wajib diisi.");
      if (!validateEmail(email.value.trim())) errs.push("Email tidak valid.");
      if (!message.value.trim()) errs.push("Pesan tidak boleh kosong.");

      if (errs.length) {
        e.preventDefault();
        showToast(errs.join(" "));
      } else {
        showToast("Pesan berhasil dikirim!", true);
      }
    });
  }

  function validateEmail(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }

  function showToast(text, success = false) {
    const toast = document.createElement("div");
    toast.textContent = text;
    toast.style.position = "fixed";
    toast.style.bottom = "30px";
    toast.style.right = "30px";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "8px";
    toast.style.fontWeight = "500";
    toast.style.zIndex = "9999";
    toast.style.opacity = "0";
    toast.style.transition = "opacity 0.4s ease";
    toast.style.backgroundColor = success ? "var(--cream)" : "var(--maroon)";
    toast.style.color = success ? "var(--hitam)" : "var(--putih-lembut)";

    document.body.appendChild(toast);
    requestAnimationFrame(() => (toast.style.opacity = "1"));

    setTimeout(() => {
      toast.style.opacity = "0";
      toast.addEventListener("transitionend", () => toast.remove());
    }, 4000);
  }
});
