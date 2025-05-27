document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;

    // Toggle display
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector('.about');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        aboutSection.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  if (aboutSection) {
    observer.observe(aboutSection);
  }
});

  function handleLogin(grantType) {
    google.accounts.id.initialize({
      client_id: "YOUR_GOOGLE_CLIENT_ID_HERE", // Replace with your actual client ID
      callback: (response) => {
        // ✅ Logged in successfully
        console.log("Google ID Token:", response.credential);

        // Redirect based on selected grant
        switch (grantType) {
          case "research":
            window.location.href = "/apply/research";
            break;
          case "integration":
            window.location.href = "/apply/integration";
            break;
          case "social":
            window.location.href = "/apply/social";
            break;
        }
      }
    });

    // Prompt the user to sign in
    google.accounts.id.prompt(); // Show popup
  } // <-- ✅ Closing brace for function
function submitEmail() {
  const emailInput = document.getElementById("email");
  const thankYouText = document.getElementById("thankYouText");

  const email = emailInput.value;
  if (email && email.includes("@")) {
    emailInput.value = "";
    thankYouText.style.display = "block";
  } else {
    alert("Please enter a valid email.");
  }
}
function handleSubmit(event) {
  event.preventDefault(); // Prevent real form submission

  // Optional: grab values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  // Simulate form processing
  document.getElementById("contact-form").reset();
  document.getElementById("thank-you-message").classList.remove("hidden");
}



