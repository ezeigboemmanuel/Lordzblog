# Next.js Blog Template

## Lordzblog

Modernize your online presence with Lordzblog, a cutting-edge blog template powered by Next.js and tailored for seamless content management with Sanity CMS. Elevate your content with TypeScript and style with ease using Tailwind CSS. Crafted for simplicity, performance, and a captivating user experience.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Setup and Configuration](#setup-and-configuration)
- [Customization](#customization)
- [Folder Structure](#folder-structure)
- [Deployment](#deployment)
- [Support and Documentation](#support-and-documentation)
- [License](#license)
- [Credits](#credits)
- [Contact](#contact)

---

## Features

- [Next.js](https://nextjs.org/) powered React framework.
- Utilizes [TypeScript](https://www.typescriptlang.org/) for enhanced development.
- Responsive design with [Tailwind CSS](https://tailwindcss.com/) for rapid styling.
- Seamless content management through [Sanity CMS](https://www.sanity.io/).
- [Include any additional features or benefits of your theme.]

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ezeigboemmanuel/Lordzblog.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd my-app
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

---

## Setup and Configuration

1. **Create a `.env` file in the project root.**

2. **Add necessary environment variables:**

   ```env
   # Sanity CMS
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   SANITY_API_TOKEN=your-sanity-api-token

   # Add any other configuration variables here
   ```

---

## Customization

## Customization

**1. Styling:**

Leverage the power of Tailwind CSS to modify colors, typography, and layout according to your brand or personal preferences.

**2. Components:**

The `/components` folder contains modular React components. Feel free to enhance, modify, or create new components to tailor the user interface. This flexibility ensures that your blog reflects your unique style and functionality requirements.

**3. Content Management:**

Customize and structure your content seamlessly with Sanity CMS. Head to the Sanity Studio (`/studio` directory) to modify the content schema, create new document types, and adjust the content structure to suit your specific blogging needs.

**4. Configuration:**

Fine-tune your blog settings by adjusting environment variables in the `.env` file. Tailor configurations related to Sanity CMS, API tokens, and any additional variables that impact your blog's behavior.

**5. Theming:**

Explore the theme-specific files to easily switch between different color schemes or themes. Adjusting these theme-related files allows you to personalize the overall look and feel of your blog effortlessly.

**6. Additional Features:**

Extend the functionality of your blog by exploring and integrating additional features. The modular nature of the project enables straightforward integration of new components or features to enhance the user experience.

Refer to the documentation for detailed guidance on customization options and best practices. Enjoy the freedom to make Lordzblog truly yours!

---

## Folder Structure

- `/app`: Next.js pages.
- `/components`: Reusable React components.

---

## Deployment

### Deploying Lordzblog to Vercel

Follow these clear instructions to deploy Lordzblog to Vercel, a powerful platform for hosting and deploying web applications.

**1. Sign Up/Log In to Vercel:**

If you don't have a Vercel account, sign up at [vercel.com](https://vercel.com/). If you already have an account, log in.

**2. Import Your Project:**

1. In the Vercel dashboard, click on the "Import Project" button.

2. Choose the Git provider where your theme is hosted (e.g., GitHub, GitLab, Bitbucket).

3. Select your theme repository.

4. Configure the settings:
   - **Framework Preset:** Choose "Next.js" as the preset.
   - **Project Name:** Specify a unique name for your project.

5. Click "Deploy" to start the initial deployment.

**3. Configure Environment Variables:**

1. In the Vercel dashboard, navigate to your project.

2. Go to "Settings" > "Environment Variables."

3. Add the necessary environment variables, especially those related to Sanity CMS:

   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
   SANITY_API_TOKEN=your-sanity-api-token
   ```

   Include any other production-specific configuration variables.

4. Save the environment variables.

**4. Deploy to Production:**

Vercel automatically deploys changes when you push to your Git repository.

1. Make sure your changes are committed and pushed to your Git repository.

2. Vercel will automatically detect the changes and deploy your theme to production.

3. Once the deployment is complete, your theme will be live at the provided Vercel domain (e.g., `your-theme-name.vercel.app`).

**5. Custom Domain (Optional):**

If you have a custom domain, you can configure it in the Vercel dashboard under "Settings" > "Domains." Follow the instructions to add your custom domain.

Congratulations! Lordzblog is now deployed to Vercel and accessible online. Check the Vercel dashboard for deployment logs and monitor your theme's performance.

---

## Credits

## Credits

Lordzblog acknowledges and appreciates the following third-party libraries, tools, and resources that have contributed to its development:

- [Next.js](https://nextjs.org/): A powerful React framework for building web applications.
- [TypeScript](https://www.typescriptlang.org/): Enhancing development with static typing and modern JavaScript features.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for building scalable and responsive user interfaces.
- [Sanity CMS](https://www.sanity.io/): Providing a flexible and efficient headless content management system.
- [React](https://reactjs.org/): The JavaScript library for building user interfaces.
- [GitHub](https://github.com/): Version control and collaboration platform.
- [Vercel](https://vercel.com/): A cloud platform for hosting and deploying web applications.

We express our gratitude to the developers and communities behind these tools for their invaluable contributions to the open-source ecosystem.

Lordzblog stands on the shoulders of these giants, leveraging their capabilities to deliver a robust and feature-rich blogging experience.

---

## Contact

For any questions or feedback, feel free to reach out:

- Ezeigbo Emmanuel
- ezeigboemmanuel2@gmail.com

---

Lordzblog - An Ezeigbo Emmanuel Product