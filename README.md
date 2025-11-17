# Academic Mirror

This project is a responsive static website clone of `rbanmsfgc.ac.in`, created with Next.js and Tailwind CSS. It is designed to be a visually identical but content-agnostic template that can be easily customized and deployed.

This project was scaffolded using Firebase Studio.

## Visual Design

The goal was to meticulously replicate the visual design of the target website, including:
- **Layout & Responsiveness**: The grid, spacing, and responsive breakpoints for desktop, tablet, and mobile views are mirrored.
- **Color Palette**: The exact color scheme has been implemented using CSS custom properties for easy modification.
- **Typography**: The site uses 'PT Sans' for a clean, modern, and readable text experience.
- **Components**: Elements like the header, navigation, hero banner, cards, and footer are styled to match the original site.

## Customization

To make this website your own, you will need to replace the placeholder content. All content is designed to be easily swappable.

### 1. Text Content

All text on the website is placeholder text (e.g., "Lorem Ipsum," "Academic Institution"). To replace it, navigate through the component files in `src/components/sections/` and `src/components/layout/`. Each file corresponds to a section of the website. Open the file and replace the placeholder text with your own content.

### 2. Images & Logo

All images are placeholders sourced from `https://picsum.photos`.

- **Image Source**: All image URLs and metadata are managed in a single file: `src/lib/placeholder-images.json`.
- **Replacing Images**: To replace an image, first add your new image to a hosting service or your project's `/public/assets` directory. Then, update the corresponding `imageUrl` in the `placeholder-images.json` file. It's recommended to use images with the same aspect ratio to maintain the layout.
- **Logo**: The logo is an inline SVG located in `src/components/layout/header.tsx`. You can replace this SVG with your own.

**IMPORTANT LEGAL NOTICE**: Before publishing, you must obtain written permission from the original site owner to use any of their copyrighted images, text, or other proprietary content. The placeholder assets in this project are for development and demonstration purposes only.

## Project Structure

The project is organized into the following directories:

- `src/app`: The main application files, including the global layout (`layout.tsx`), global styles (`globals.css`), and the main page (`page.tsx`).
- `src/components`: Reusable React components.
  - `layout/`: Components for the main site layout (Header, Footer).
  - `sections/`: Components for each content section on the homepage.
  - `ui/`: Pre-built UI components from `shadcn/ui`.
- `src/lib`: Utility files, including the placeholder image data (`placeholder-images.json`).
- `public/`: Static assets like images can be placed here.

## Deployment with Firebase

This Next.js application is configured for deployment on **Firebase App Hosting**.

### Prerequisites

1.  An active Firebase project.
2.  The Firebase CLI installed on your machine: `npm install -g firebase-tools`.

### Deployment Steps

1.  **Login to Firebase**:
    ```bash
    firebase login
    ```

2.  **Initialize Firebase in your project (if not already done)**:
    This step links your local project to a Firebase project.
    ```bash
    firebase init hosting
    ```
    - When prompted, select 'Use an existing project' and choose your Firebase project.
    - When it asks for your public directory, you can press Enter to accept the default, but it won't be used by App Hosting.
    - When asked to configure as a single-page app, you can select 'No'. The `apphosting.yaml` handles this for the Next.js app.

3.  **Deploy**:
    Run the deploy command. The Firebase CLI will read the `apphosting.yaml` file, build your Next.js application, and deploy it to Firebase App Hosting.
    ```bash
    firebase deploy
    ```

After deployment, the CLI will provide you with the URL to your live website.
