document.addEventListener("DOMContentLoaded", function () {
  // Get the property ID from the URL
  const urlParams = new URLSearchParams(window.location.search);
  const propertyId = urlParams.get("id");

  if (propertyId) {
    fetch("../data/properties.json")
      .then((response) => response.json())
      .then((properties) => {
        const property = properties.find((prop) => prop.id == propertyId);

        if (property) {
          const propertyDetails = document.getElementById("propertyDetails");
          propertyDetails.innerHTML = `
            <div class="property-details-container">
              <h2 class="go-back">
                <a href="/">
                  <i class="fa-solid fa-arrow-left"></i> 
                  </a>
                  Property details
              </h2>
              <div class="image-container">
                <div class="main-image">
                  <img src="${property.images[0]}" alt="Main property image" />
                </div>
                <div class="other-images">
                  ${property.images
                    .slice(1)
                    .map((img) => `<img src="${img}" alt="Property image" />`)
                    .join("")}
                </div>
              </div>
              <div class="content-container">
                <div class="content">
                  <div class="header">
                    <h1 class="title">${property.title}</h1>
                    <p class="type">${property.type}</p>
                  </div>
                  <p class="address">
                    <i class="fa-solid fa-location-dot"></i> ${property.address}
                  </p>
                  <div class="main-features">
                    <span><i class="fa-solid fa-bed"></i> ${
                      property.bedrooms || "N/A"
                    }</span>
                    <span><i class="fa-solid fa-bath"></i> ${
                      property.bathrooms || "N/A"
                    }</span>
                    <span><i class="fa-solid fa-house"></i> ${
                      property.size || "N/A"
                    } sq. ft.</span>
                    <span><i class="fa-solid fa-hammer"></i> Year ${
                      property.year_built || "N/A"
                    }</span>
                  </div>

                  <h2 class="sub-title">About this property</h2>
                  <p class="property-description">
                    ${property.description || "No description available."}
                  </p>

                  <h2 class="sub-title">What makes this property special?</h2>
                  <div class="features">
                    ${
                      property.special_features
                        ?.map((item) => `<div>${item}</div>`)
                        .join("") || "No special features available."
                    }
                  </div>

                  <h2 class="sub-title">Amenities</h2>
                  <div class="features">
                    ${
                      property.amenities
                        ?.map((item) => `<div>${item}</div>`)
                        .join("") || "No amenities available."
                    }
                  </div>

                  <h2 class="sub-title">Included items</h2>
                  <div class="features">
                    ${
                      property?.included_items
                        ?.map((item) => `<div>${item}</div>`)
                        .join("") || "No included items available."
                    }
                  </div>
                </div>
                <div class="side-container">
                ${
                  property?.video_url
                    ? `<div class="video">
                        <iframe
                          src="${property.video_url}" 
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>`
                    : ""
                }
                  <div class="contact">
                    <p class="title">Buy with this price</p>
                    <p class="property-price">
                      <i class="fa-solid fa-euro-sign"></i> ${
                        property.price || "N/A"
                      }
                    </p>
                    <hr />

                    <div class="agent">
                      <div class="user">
                        <i class="fa-regular fa-user"></i>
                      </div>
                      <div>
                        <p class="name">${
                          property?.owner?.name ||
                          "Owner information not available"
                        }</p>
                        <p class="phone">${
                          property?.owner?.contact ||
                          "Contact information not available"
                        }</p>
                      </div>
                    </div>

                    <button class="btn" onClick="handleBooking()" id="book-btn">Book an appointment</button>
                    <p id="success-msg" class="success-msg"></p>
                    <div id="book-appointment-form"></div>
                  </div>
                </div>
              </div>
            </div>
          `;
        } else {
          document.getElementById("propertyDetails").innerText =
            "Property not found.";
        }
      })
      .catch((error) =>
        console.error("Error loading property details:", error)
      );
  } else {
    document.getElementById("propertyDetails").innerText =
      "No property ID provided.";
  }
});
