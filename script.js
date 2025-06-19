
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("tracking-form");
  const resultSection = document.getElementById("result");
  const trackingData = {
    "TDP123456": {
      status: "In Transit",
      deliveryDate: "2025-06-21",
      location: "Douala, Cameroon",
      item: "Golden Retriever Puppy"
    },
    "TDP654321": {
      status: "Delivered",
      deliveryDate: "2025-06-17",
      location: "Yaoundé, Cameroon",
      item: "Persian Kitten"
    }
  };

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const trackingNumber = document.getElementById("tracking-number").value.trim();
      const data = trackingData[trackingNumber];

      if (data) {
        resultSection.innerHTML = `
          <h3>Delivery Details</h3>
          <p><strong>Status:</strong> ${data.status}</p>
          <p><strong>Delivery Date:</strong> ${data.deliveryDate}</p>
          <p><strong>Current Location:</strong> ${data.location}</p>
          <p><strong>Item:</strong> ${data.item}</p>
        `;
      } else {
        resultSection.innerHTML = "<p style='color: red;'>Tracking number not found. Please check and try again.</p>";
      }
    });
  }
});
