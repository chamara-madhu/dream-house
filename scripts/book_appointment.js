function handleBooking() {
  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  // Show the form
  const formHTML = `
    <div class="appointment-form-container">
      <h3>Book an Appointment</h3>
      <form id="appointment-form">
        <div class="form-input-container">
          <label for="name">Name*</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div class="form-input-container">
          <label for="phone">Phone*</label>
          <input type="number" id="phone" name="phone" min="8" required />
        </div>
        <div class="form-input-container">
          <label for="date">Appointment date*</label>
          <input type="date" id="date" name="date" min="${today}" required />
        </div>
        <div class="form-input-container">
          <label for="time">Appointment time*</label>
          <input type="time" id="time" name="time" required />
        </div>
        <button class="btn" type="submit">Submit</button>
      </form>
    </div>
  `;

  document.getElementById("book-appointment-form").innerHTML += formHTML;

  // Hide the booking button
  document.getElementById("book-btn").style.display = "none";

  // Add event listener for form submission
  document
    .getElementById("appointment-form")
    .addEventListener("submit", submitAppointment);
}

// Handle form submission
function submitAppointment(e) {
  e.preventDefault();

  const form = document.getElementById("appointment-form");

  // Collect form data
  const appointmentData = {
    name: form.name.value,
    phone: form.phone.value,
    date: form.date.value,
    time: form.time.value,
  };

  // Save to local storage
  const data = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];
  data.push(appointmentData);
  localStorage.setItem("data", JSON.stringify(data));

  document.getElementById("success-msg").innerText =
    "Appointment booked successfully!";

  // Hide the book-appointment-form
  document.getElementById("book-appointment-form").style.display = "none";

  // Clear form after submission
  form.reset();
}
