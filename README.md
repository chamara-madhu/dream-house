# Dream House

## Overview

Dream House is a property management site built with HTML, CSS, and JavaScript.

## Pages

- **Home**: Showing all the properties.
- **About us**: Showing about us details.
- **Contact us**: Showing company contact information.
- **Detailed property page**: Showing all details of the selected property.
- **Appointments**: Showing all appointments.

## Folder Structure

The project follows a structured folder layout for better organization:

# Dream House

## Overview

Dream House is a property management site built with HTML, CSS, and JavaScript.

## Pages

- **Home**: Showing all the properties.
- **About us**: Showing about us details.
- **Contact us**: Showing company contact information.
- **Detailed property page**: Showing all details of the selected property.
- **Appointments**: Showing all appointments.

## Folder Structure

The project follows a structured folder layout for better organization:

app/
├── assets/                             # Icons, Images, etc
    ├── icons/                          # Icon files
    ├── images/                         # Image files
├── components/                         # Reusable components
│       └── navbar.html                 # Navbar
│       └── footer.html                 # footer
├── data/                               # Constant data like json etc
│       └── properties.json             # All properties in json array
├── scripts/                            # Script files
│       └── load_navbar_and_footer.js   # To load navbar and footer dynamically
│       └── load_all_properties.js      # To load all properties from json file
│       └── property_details.js         # To load particular property from json file
│       └── book_appointments.js        # To make a book appointment
│       └── all_appointments.js         # To show all book appointments
├── styles/                             # CSS files
│       └── main.css                    # Main stylesheet for default styling and variable declaration, etc
│       └── navbar.css                  # Navbar stylesheet
│       └── footer.css                  # Footer stylesheet
│       └── home.css                    # Home stylesheet
│       └── about.css                   # About stylesheet
│       └── contact.css                 # Contact stylesheet
│       └── detail_page.css             # Detailed property stylesheet
│       └── appointments.css            # All appointments stylesheet
├── index.html                          # Home page
├── about.html                          # About us page
├── contact.html                        # Contact us page
├── property_details.html               # Property details page
├── appointments.html                   # All appointments page
└── README.md                           # Project documentation


## Run the Application

To get started with Dream House, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/chamara-madhu/dream-house.git

2. Run the application using live server