# Project Structure

This document describes the overall structure of the project and the purpose of each directory and file.

## Directory Overview

public/
|
|── assets/                             # Static files (images, logo).
│
src/
│
├── components/                     # Reusable components for UI.
│   ├── Header/
│   │   ├── Header.tsx              # Header with navigation bar includong logo and social media links and icons.
│   │   └── header.css
│   ├── ProjectCard                 
│   │   ├── ProjectCard.tsx         # Display individual projects
│   │   └── projectCard.css
│   ├── Modal/
│   │   ├── ContactModal.tsx
│   │   └── contactModal.css
│   ├── Contact/                    
│   │   ├── Contact.tsx             # Contact form component displayed via modal.
│   │   └── contact.css
│   ├── ScrollToTopButton/
│   │   ├── ScrollToTopButton.tsx
│   │   └── scrollToTopButton.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── footer.css
├── data/                           # Contains project data in a structured format - TS file.
│   └── projects.ts                 # Data for all portfolio projects.
├── pages/                          # Individual pages of the site, built using components.
│   ├── Home.tsx                    # The landing page with an introduction and project highlights.
│   ├── AboutMe.tsx                   # About section containing personal details, bio, etc.
│   └── Projects.tsx                # Project listing and details.
├── styles/                         # Global styles.
│   └── main.css                    # Global reset and typography styles.
├── types/                          # Interface for data models.
│   └── project.ts                  # Types for project data.
├── utils/                          # Utility functions that perform common tasks.
│   └── textUtils.ts                # Contains logic for showing "Read more / Show less" text.
└── App.tsx                         # The main app component where routes are defined.


## Key Files

- **public/assets/**: Contains images, logos, and other static assets that will be used in the app (e.g., background images, icons).
- **src/components/**: Reusable UI components that are shared across multiple pages or sections (e.g., `Header`, `Footer`, buttons, modals).
- **src/data/**: Static or dynamic data and configuration files (e.g., navigation links, social media information).
- **src/pages/**: Individual pages that define the content and structure for each route in the app (e.g., `Home`, `About`, `Projects`, `Contact`).
- **src/styles/**: Global styles, CSS variables, and theme-related files.
- **src/types/**: Interfaces used throughout the app to maintain type safety.
- **src/utils/**: Utility functions and helper modules for common operations (e.g., form validation, email handling).

## Project Flow

1. **App.tsx**: The entry point of the application where all pages are defined and routing is handled.
2. **Header/Footer**: Common components rendered on most pages to provide consistent navigation and branding.
3. **Pages**: Each page is self-contained, including its own components and styles, while reusing shared components where applicable.
4. **Custom Hooks**: Reusable logic is abstracted into custom hooks to ensure the separation of concerns and cleaner components.

## Additional Information

- **Routing**: React Router is used to handle navigation between pages.
- **Forms and Validation**: The contact form uses basic validation logic and can be extended to integrate with external services ( EmailJS).
- **Theming and Styles**: Global styles are applied via CSS, and CSS variables are used for theming, allowing easy customization.
