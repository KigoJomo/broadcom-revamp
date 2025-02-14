# Edit-Guide.md

## Table of Contents

1. [Running the Project Locally](#running-the-project-locally)
   - [Prerequisites](#prerequisites)
   - [Installation Steps (Mac & Windows)](#installation-steps-mac--windows)
2. [Editing Content](#editing-content)
   - [Understanding the Project Structure](#understanding-the-project-structure)
   - [Modifying Web Page Content](#modifying-web-page-content)
   - [Editing Data Files](#editing-data-files)
3. [Pushing Changes to the Repository](#pushing-changes-to-the-repository)
   - [Working with Git Branches & Pull Requests](#working-with-git-branches--pull-requests)
4. [Troubleshooting & Additional Resources](#troubleshooting--additional-resources)

---

## Running the Project Locally

Before editing any content, it’s essential that you can run the project locally. This guide assumes you have basic familiarity with the command line.

### Prerequisites

- **Node.js and npm:**  
  Verify installation by running:
  ```bash
  node -v
  npm -v
  ```
  If not installed, download and install from [nodejs.org](https://nodejs.org/).

- **Git:**  
  Ensure Git is installed. Check with:
  ```bash
  git --version
  ```
  If missing, download it from [git-scm.com](https://git-scm.com/).

### Installation Steps (Mac & Windows)

#### On Mac:

1. **Open Terminal.**
2. **Clone the repository (if not already done):**
   ```bash
   git clone https://github.com/KigoJomo/broadcom-revamp.git
   cd broadcom-revamp
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open your browser and navigate to:**  
   [http://localhost:3000](http://localhost:3000)

#### On Windows:

1. **Open Command Prompt or PowerShell.**
2. **Clone the repository (if not already done):**
   ```bash
   git clone https://github.com/KigoJomo/broadcom-revamp.git
   cd broadcom-revamp
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Visit [http://localhost:3000](http://localhost:3000) in your browser.**

*Note:* The same commands work on both operating systems. The only difference is which terminal you use.

---

## Editing Content

This section explains where to find and update content within your Next.js project.

### Understanding the Project Structure

Here’s a brief overview of the key folders and files:

- **`app/` Directory:**  
  Contains the pages and shared layout. For example:
  - **`app/layout.js`:** Sets up the global layout including header and footer.
  - **`app/page.js`:** Represents the Home page. It composes components like Landing, Carousel, Who, What, Featured, ChooseUs, and ContactUs.
  - **`app/contact/page.js`:** Contains the Contact page, along with its own components (e.g., Hero, ContactMethods).

- **`app/components/` Directory:**  
  Houses reusable UI elements such as:
  - **`Header.js` and `Footer.js`:** Navigation and footer content.
  - **`Landing.js`:** The component for the landing section.
  - Other components for various sections on different pages.

- **`public/data/` Directory:**  
  Contains JSON files that hold content data. For example:
  - **`services.json`:** Lists details for different services. Updating this file changes service-related content on the website.

- **Styling Files:**  
  - **`app/globals.css`:** Global CSS rules.
  - **`tailwind.config.js`:** Tailwind CSS configuration (defines colors, breakpoints, etc.).

### Modifying Web Page Content

For each major section, here are some guidelines on where and how to make changes:

#### Home Page

- **File:** `app/page.js`  
  This file composes the home page using multiple components.  
  **To update text or layout:**
  - Edit the JSX markup directly.
  - For instance, if you wish to change the header text in the Landing component, locate the component usage in `app/page.js` and update its properties or text content.
  
- **Component Files (e.g., Landing, Carousel, Who, What, etc.):**  
  - Navigate to the relevant file under `app/components/` (e.g., `Landing.js` for the landing section).
  - Modify static text, images, or any hardcoded content within these components.

#### Contact Page

- **File:** `app/contact/page.js`  
  The contact page is built from components like Hero and ContactMethods.
  - To change introductory text or imagery, edit the **Hero** component.
  - If you need to modify the contact form or office details, check the respective components under `app/components/Contact/`.

#### Data-Driven Content (e.g., Services)

- **File:** `public/data/services.json`  
  This JSON file holds service information that is rendered on the services page.
  - **To update service details:**  
    Find the JSON object for the service you wish to edit (e.g., “GSM Network Optimization”) and update the `"title"`, `"description"`, `"details"`, or `"image"` properties.
  - After making changes, save the file and refresh your browser to see the updates.

### Editing Tips

- **Use Code Comments:**  
  When making changes, add comments to clarify what was updated. This is helpful for future maintenance.
- **Test Changes Locally:**  
  Always refresh [http://localhost:3000](http://localhost:3000) to verify your modifications appear as expected.
- **Keep a Backup:**  
  Consider versioning your changes locally before pushing them to GitHub.

---

## Pushing Changes to the Repository

Once you’ve made and tested your updates locally, you can push them to your GitHub repository.

### Working with Git Branches & Pull Requests

1. **Ensure you are in your project directory:**
   ```bash
   cd broadcom-revamp
   ```
2. **Create a new branch for your changes:**  
   It’s a good practice to use a descriptive branch name.
   ```bash
   git checkout -b feature/edit-guide-updates
   ```
3. **Stage and commit your changes:**  
   Stage all modified files:
   ```bash
   git add .
   ```
   Then commit with a descriptive message:
   ```bash
   git commit -m "Update local run instructions and content editing guide"
   ```
4. **Push the branch to GitHub:**  
   ```bash
   git push origin feature/edit-guide-updates
   ```
5. **Create a Pull Request (PR):**  
   - Go to your GitHub repository page at [https://github.com/KigoJomo/broadcom-revamp](https://github.com/KigoJomo/broadcom-revamp).
   - You should see a prompt to compare & create a PR for your recently pushed branch.
   - Follow the on-screen instructions to open a pull request. Add details about what changes you’ve made and why.
6. **Review and Merge:**  
   Once the PR is approved (by yourself or team members), merge it into the main branch.

*Optional:* If you are new to Git or prefer a graphical interface, consider using GitHub Desktop which simplifies these tasks.

---

## Troubleshooting & Additional Resources

- **Development Server Issues:**  
  - Ensure all dependencies are installed (`npm install`).
  - Confirm that you are using a compatible Node.js version.
  - Check the terminal for error messages during `npm run dev`.

- **Content Not Updating:**  
  - Verify that you’ve saved your changes.
  - Clear your browser cache or use an incognito window to see the latest updates.

- **Learn More About Next.js:**  
  - [Next.js Documentation](https://nextjs.org/docs)  
  - [Tailwind CSS Documentation](https://tailwindcss.com/docs)

- **Git Resources:**  
  - [GitHub Docs](https://docs.github.com/en)
  - [Pro Git Book](https://git-scm.com/book/en/v2)

---