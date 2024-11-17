# Dream House

## Overview

Dream House is a property management website built using HTML, CSS, and JavaScript. It provides an intuitive platform for browsing properties, viewing details, and managing appointments.

## Pages

- **Home**: Displays a list of all properties.
- **About Us**: Provides details about the company.
- **Contact Us**: Displays company contact information.
- **Detailed Property Page**: Shows complete details of a selected property.
- **Appointments**: Lists all booked appointments.

## Folder Structure

The project follows a structured folder layout for better organization:

````plaintext
app/
├── assets/                             # Icons, images, and other assets
│   ├── icons/                          # Icon files
│   ├── images/                         # Image files
├── components/                         # Reusable components
│   ├── navbar.html                     # Navbar component
│   ├── footer.html                     # Footer component
├── data/                               # Constant data files
│   ├── properties.json                 # JSON file containing property data
├── scripts/                            # JavaScript files
│   ├── load_navbar_and_footer.js       # Dynamically loads the navbar and footer
│   ├── load_all_properties.js          # Loads all properties from the JSON file
│   ├── property_details.js             # Fetches details of a specific property
│   ├── book_appointments.js            # Handles booking appointments
│   ├── all_appointments.js             # Displays all booked appointments
├── styles/                             # CSS files for styling
│   ├── main.css                        # Main stylesheet for default styles and variables
│   ├── navbar.css                      # Stylesheet for the navbar
│   ├── footer.css                      # Stylesheet for the footer
│   ├── home.css                        # Stylesheet for the home page
│   ├── about.css                       # Stylesheet for the about page
│   ├── contact.css                     # Stylesheet for the contact page
│   ├── detail_page.css                 # Stylesheet for the detailed property page
│   ├── appointments.css                # Stylesheet for the appointments page
├── index.html                          # Home page
├── about.html                          # About Us page
├── contact.html                        # Contact Us page
├── property_details.html               # Detailed property page
├── appointments.html                   # Appointments page
└── README.md                           # Project documentation

## Run the Application

To get started with Dream House, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/chamara-madhu/dream-house.git

2. Run the application using live server
````
