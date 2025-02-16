# Edit-Guide.md  
*An In-Depth Guide to Navigating, Editing, and Deploying the Broadcom Revamp Project*  

---

## Table of Contents

1. [Introduction](#introduction)
2. [Running the Project Locally](#running-the-project-locally)  
   2.1. [Overview of the Project](#overview-of-the-project)  
   2.2. [Prerequisites](#prerequisites)  
   2.3. [Installation & Setup on Mac](#installation--setup-on-mac)  
   2.4. [Installation & Setup on Windows](#installation--setup-on-windows)  
   2.5. [Common Issues & Troubleshooting](#common-issues--troubleshooting)
3. [Understanding & Editing the Project Structure](#understanding--editing-the-project-structure)  
   3.1. [Project Directory Layout](#project-directory-layout)  
   3.2. [The app/ Directory – Pages & Layout](#the-app-directory---pages--layout)  
   3.3. [Components Folder – Reusable UI Elements](#components-folder---reusable-ui-elements)  
   3.4. [Data & Assets – public/ Directory](#data--assets---public-directory)  
   3.5. [Styling – globals.css and Tailwind Config](#styling---globalscss-and-tailwind-config)
4. [Editing Web Page Content](#editing-web-page-content)  
   4.1. [Home Page Modifications](#home-page-modifications)  
   4.2. [Contact Page Updates](#contact-page-updates)  
   4.3. [Data-Driven Pages (Services, Products, etc.)](#data-driven-pages-services-products-etc)
5. [Working with Git: Branches, Commits & PRs](#working-with-git-branches-commits--prs)  
   5.1. [Setting Up Git Locally](#setting-up-git-locally)  
   5.2. [Creating a New Branch](#creating-a-new-branch)  
   5.3. [Committing and Staging Changes](#committing-and-staging-changes)  
   5.4. [Pushing Changes & Creating Pull Requests](#pushing-changes--creating-pull-requests)
6. [Advanced Tips & Troubleshooting](#advanced-tips--troubleshooting)  
   6.1. [Debugging Common Errors](#debugging-common-errors)  
   6.2. [Using Browser Dev Tools](#using-browser-dev-tools)  
   6.3. [Best Practices for Maintaining Consistency](#best-practices-for-maintaining-consistency)
7. [Additional Resources & References](#additional-resources--references)
8. [Appendices & Glossary](#appendices--glossary)

---

## 1. Introduction

Welcome to the comprehensive Edit Guide for the Broadcom Revamp project. This document is designed to help understand how the project is structured, how to run it locally, edit the content, and push updates using Git. It’ll take you step by step from environment setup through to making your first pull request.

---

## 2. Running the Project Locally

Before editing content, it is critical that you get the project up and running on your local machine. This section explains every detail—from checking prerequisites to starting the development server.

### 2.1. Overview of the Project

The Broadcom Revamp is built with Next.js and Tailwind CSS. It uses a modular structure:
- **Pages and Layouts** in the `app/` directory.
- **Reusable components** in the `app/components/` directory.
- **Static content and data** in the `public/` folder.
- **Styling** via Tailwind and a global stylesheet.

### 2.2. Prerequisites

Make sure the following are installed:

- **Node.js & npm:**  
  - To verify installation, open your terminal (or Command Prompt on Windows) and run:  
    ```bash
    node -v
    npm -v
    ```
  - If not installed, download from [nodejs.org](https://nodejs.org/).

- **Git:**  
  - Confirm installation by running:  
    ```bash
    git --version
    ```
  - Download from [git-scm.com](https://git-scm.com/) if necessary.

- **A Code Editor:**  
  - I'd recommend [Visual Studio Code](https://code.visualstudio.com/), which provides excellent support for JavaScript, Next.js, and Git.

### 2.3. Installation & Setup on Mac

1. **Open Terminal.**

2. **Clone the Repository:**
   ```bash
   git clone 
   cd broadcom-revamp
   ```
   *This clones your project to your local machine and navigates into the project folder.*

3. **Install Dependencies:**
   ```bash
   npm install
   ```
   *This command downloads all the packages listed in package.json (like Next.js, Tailwind CSS, etc.).*

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *The project will compile and start a local server.*

5. **View the Project:**
   Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).  
   *Any changes you make will be reflected here immediately.*

### 2.4. Installation & Setup on Windows

1. **Open Command Prompt or PowerShell.**

2. **Clone the Repository:**
   ```bash
   git clone 'my github link'
   cd broadcom-revamp
   ```
   *This creates a local copy of the repository.*

3. **Install Dependencies:**
   ```bash
   npm install
   ```
   *Ensure all required Node modules are installed.*

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   *Your project will compile and start running on port 3000.*

5. **View in Browser:**
   Visit [http://localhost:3000](http://localhost:3000) to see the site.

### 2.5. Common Issues & Troubleshooting

- **Installation Errors:**  
  - If `npm install` fails, check your Node.js version and ensure your internet connection is stable.
  - Delete the `node_modules` folder and try again if issues persist.

- **Server Fails to Start:**  
  - Look for error messages in the terminal.  
  - Ensure no other processes are using port 3000 (or change the port in the package.json/start script).

- **Cache Issues:**  
  - Sometimes browsers cache older versions. Clear your cache or use an incognito window.

- **Environment Variables:**  
  - If you’re using Google Maps or other services, ensure that you have correctly set up any necessary environment variables (e.g., NEXT_PUBLIC_GOOGLE_MAPS_API_KEY).

---

## 3. Understanding & Editing the Project Structure

Before making any content changes, it’s essential to understand how the project is organized.

### 3.1. Project Directory Layout

Below is an ASCII diagram of the major folders:

```
broadcom-revamp/
├── app/
│   ├── layout.js       // Global layout and meta information
│   ├── page.js         // Home page definition
│   ├── contact/
│   │   └── page.js     // Contact page and its sections
│   └── components/     // Reusable UI components
│       ├── Header.js
│       ├── Footer.js
│       └── (other component files)
├── public/
│   ├── data/           // JSON data (e.g., services.json)
│   ├── images/         // Static images and icons
│   └── (other static assets)
├── styles/
│   └── globals.css     // Global CSS styles (Tailwind & custom rules)
├── tailwind.config.js  // Tailwind CSS configuration
├── package.json        // Project dependencies and scripts
└── jsconfig.json       // JavaScript configuration (paths, etc.)
```

### 3.2. The app/ Directory – Pages & Layout

- **`app/layout.js`:**  
  This file sets the overall layout. It imports global CSS, fonts, and contains the Header and Footer.  
  *Tip: Changing the layout here affects every page.*

- **`app/page.js`:**  
  The Home page is built by composing multiple components such as Landing, Carousel, Who, What, Featured, ChooseUs, and ContactUs.  
  *To change the homepage structure, edit this file or its individual components.*

### 3.3. Components Folder – Reusable UI Elements

The `app/components/` folder contains components that can be reused across multiple pages.

- **Header & Footer:**  
  These files manage navigation and footer content. For example, modifying `Header.js` changes the menu across all pages.
  
- **Specific Components:**  
  Files like `Landing.js`, `Carousel.js`, or `ContactForm.js` hold content for specific sections.  
  *To update content, you might only need to change the JSX markup or the imported data within these files.*

### 3.4. Data & Assets – public/ Directory

- **Static Content:**  
  Images, fonts, and other assets are stored in the `public/` folder.
  
- **Content Data:**  
  The `public/data/services.json` file contains details about your services.  
  *When you update JSON objects in this file, the corresponding web pages automatically reflect the changes.*

### 3.5. Styling – globals.css and Tailwind Config

- **Global Styles:**  
  The `app/globals.css` file includes Tailwind’s directives and custom CSS rules.  
  *Changes here affect the entire site, so make sure to comment and document any modifications.*

- **Tailwind Configuration:**  
  The `tailwind.config.js` file defines your custom colors, fonts, and breakpoints.  
  *Updating these values lets you customize the theme and design consistency across the project.*

---

## 4. Editing Web Page Content

This section explains in detail how to locate and modify content for different parts of the site.

### 4.1. Home Page Modifications

- **File:** `app/page.js`  
  - The home page is built by combining various components (e.g., Landing, Carousel, Who, What, Featured, ChooseUs, ContactUs).  
  - **To update a section:**  
    1. Identify which component contains the content you wish to change (for instance, to update the banner text, check `Landing.js`).
    2. Open the corresponding file in `app/components/`.
    3. Look for hardcoded text, image URLs, or props that control the content.
    4. Modify the text or image source as needed.  
  - **Example:**  
    In `Landing.js`, you might find:  
    ```jsx
    <h1>Welcome to Broadband Communication Networks Ltd</h1>
    ```  
    Change it to:  
    ```jsx
    <h1>Welcome to Our Updated Broadband Experience</h1>
    ```
  - **Testing:**  
    Save your changes and refresh [http://localhost:3000](http://localhost:3000) to see the updates.

### 4.2. Contact Page Updates

- **File:** `app/contact/page.js`  
  - The contact page includes components such as Hero, ContactMethods, and forms.  
  - **Updating Text or Images:**  
    1. For the hero image and tagline, edit the `Hero.js` component.  
    2. For the contact form details or instructions, check `ContactForm.js` in the `app/components/Contact/` folder.
  - **Example:**  
    In `Hero.js`, update the heading or image source:  
    ```jsx
    <h1>Get in Touch with Us – We’re Here to Help!</h1>
    ```
  - **Interactive Elements:**  
    If you need to modify how FAQs or office locations are presented, inspect the respective components (e.g., `FAQ.js`, `Offices.js`) for details and instructions.

### 4.3. Data-Driven Pages (Services, Products, etc.)

- **File:** `public/data/services.json`  
  - This file holds JSON objects for each service, including title, slug, description, details, and image paths.
  - **To update a service’s content:**  
    1. Open the JSON file and locate the specific service by title (e.g., "GSM Network Optimization").
    2. Modify the fields such as `"description"` or `"details"`.  
  - **Example JSON Update:**  
    ```json
    {
      "title": "GSM Network Optimization",
      "slug": "gsm-network-optimization",
      "description": "Our enhanced GSM optimization now includes advanced data analytics and real-time monitoring.",
      "details": [
        "Installation and commissioning of upgraded GSM base stations",
        "New training modules on TEMS investigation tools",
        "Regular system updates and performance reviews"
      ],
      "image": "/images/products/gsm-optimization-new.webp"
    }
    ```
  - **Testing Data Changes:**  
    After saving the JSON file, revisit the corresponding page on your local server to confirm the updates appear correctly.

---

## 5. Working with Git: Branches, Commits & PRs

Version control is critical for any project. The following detailed instructions explain how to manage your changes using Git.

### 5.1. Setting Up Git Locally

- **Initialize or Clone:**  
  If you haven’t already cloned the repository, follow the commands in Section 2.  
- **Configuration:**  
  Ensure your Git configuration is set up with your name and email:
  ```bash
  git config --global user.name "your-github-username"
  git config --global user.email "email-associated-with-your-github"
  ```

### 5.2. Creating a New Branch

- **Always create a branch for new features or changes:**  
  ```bash
  git checkout -b feature/your-branch-name
  ```
  *Use descriptive branch names (e.g., `feature/update-edit-guide` or `bugfix/fix-nav-menu`).*

### 5.3. Committing and Staging Changes

- **Stage Your Changes:**  
  ```bash
  git add .
  ```
- **Commit with a Clear Message:**  
  ```bash
  git commit -m "Detailed commit message explaining the changes made"
  ```
  *Include information about which pages or components were updated.*

### 5.4. Pushing Changes & Creating Pull Requests

1. **Push Your Branch:**
   ```bash
   git push origin feature/your-branch-name
   ```
2. **Create a Pull Request (PR):**  
   - Visit the remote repository on GitHub at [https://github.com/KigoJomo/broadcom-revamp](https://github.com/KigoJomo/broadcom-revamp).
   - You should see a prompt to open a PR for your pushed branch.
   - Fill in the PR description with details on what you’ve updated and why.
3. **Merging the PR:**  
   - After review, I'll merge the branch into the main branch.  
   - This workflow helps maintain a clean history and reduces conflicts.

*Pro Tip:* If you’re new to Git, consider using GitHub Desktop for a graphical interface.

---

## 6. Advanced Tips & Troubleshooting

### 6.1. Debugging Common Errors

- **Module Not Found:**  
  Double-check that all dependencies are installed. Run:
  ```bash
  npm install
  ```
- **Syntax or Compilation Errors:**  
  - Read the terminal error logs carefully.  
  - Use your code editor’s integrated linting to spot issues.
- **Port Conflicts:**  
  If port 3000 is busy, change it by modifying your start script or setting an environment variable (e.g., `PORT=3001 npm run dev`).

### 6.2. Using Browser Dev Tools

- **Inspect Elements:**  
  Use Chrome DevTools or Firefox Developer Tools to inspect HTML/CSS, which helps in debugging layout issues.
- **Console Logging:**  
  Add temporary `console.log` statements in your React components to verify data flows and state changes.
- **Responsive Design Testing:**  
  Use the responsive design mode in your browser to check Tailwind CSS breakpoints and layout adjustments.

### 6.3. Best Practices for Maintaining Consistency

- **Comment Your Code:**  
  Add comments in your JSX and JavaScript files to explain non-obvious logic.
- **Keep Commits Focused:**  
  Each commit should address a single logical change.
- **Use Version Control Branching:**  
  Experiment in feature branches and merge only when you’re confident the changes work.
- **Document Changes:**  
  Update this guide if you discover new procedures or run into new issues—this document should evolve with the project.

---

## 7. Additional Resources & References

- **Next.js Documentation:**  
  [Next.js Docs](https://nextjs.org/docs)
- **Tailwind CSS Documentation:**  
  [Tailwind CSS Docs](https://tailwindcss.com/docs)
- **Git & GitHub Resources:**  
  - [GitHub Docs](https://docs.github.com/en)
  - [Pro Git Book](https://git-scm.com/book/en/v2)
- **Node.js:**  
  [Node.js Official Site](https://nodejs.org/)

*These resources can be used to troubleshoot advanced issues and learn more about the technologies powering this project.*

---

## 8. Appendices & Glossary

### 8.1. Glossary of Terms

- **Next.js:** A React framework for building server-side rendered (SSR) web applications.
- **JSX:** A syntax extension for JavaScript used with React.
- **Component:** A reusable piece of UI that can be nested, managed, and composed.
- **Layout:** A wrapper component (often found in layout.js) that sets the global page structure.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Branch:** An independent line of development in Git.
- **Pull Request (PR):** A GitHub feature to review and merge code changes.

### 8.2. ASCII Diagram: Project Structure Recap

```
broadcom-revamp/
├── app/                  # Pages & Layouts
│   ├── layout.js       // Global site structure
│   ├── page.js         // Home page composed of multiple sections
│   └── components/     // Reusable UI components (Header, Footer, etc.)
├── public/               # Static assets (images, data, fonts)
│   └── data/           // JSON files (services.json, etc.)
├── styles/               # Global CSS (Tailwind and custom styles)
└── package.json          # Dependency definitions and scripts
```

---
