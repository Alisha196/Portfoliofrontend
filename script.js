document.getElementById("contact-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch("https://your-backend.vercel.app/api/contact", { // ✅ Must match backend route
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
      alert("Message sent successfully!");
      document.getElementById("contact-form").reset();
    } else {
      alert("Failed to send message: " + (result.error || "Server Error"));
    }
  } catch (error) {
    console.error("Error sending message:", error);
    alert("Something went wrong. Please try again later.");
  }
});
