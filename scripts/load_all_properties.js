document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/properties.json")
    .then((response) => response.json())
    .then((properties) => {
      const propertyGrid = document.getElementById("propertyGrid");

      properties.forEach((property) => {
        // Create the clickable link wrapping the entire card
        const propertyLink = document.createElement("a");
        propertyLink.href = `./property_details.html?id=${property.id}`;
        propertyLink.classList.add("property-link");

        // Create the property card div
        const propertyCard = document.createElement("div");
        propertyCard.classList.add("property-card");

        propertyCard.innerHTML = `
          <img src="${property.images[0]}" alt="${property.title}" class="property-image">
          <div class="property-details">
              <h2 class="property-title">${property.title}</h2>
              <p class="property-address">${property.address}</p>
              <div class="features">
                <span>
                  <i class="fa-solid fa-bed"></i>
                  ${property.bedrooms}
                </span>
                <span>
                  <i class="fa-solid fa-bath"></i>
                  ${property.bathrooms}
                </span>
                <span>
                  <i class="fa-solid fa-house"></i>
                  ${property?.size} sq. ft.
                </span>
              </div>
              <p class="property-price"><i class="fa-solid fa-euro-sign"></i> ${property.price}</p>
          </div>
        `;

        // Append the card div inside the link
        propertyLink.appendChild(propertyCard);

        // Append the link to the grid
        propertyGrid.appendChild(propertyLink);
      });
    })
    .catch((error) => console.error("Error loading properties:", error));
});
