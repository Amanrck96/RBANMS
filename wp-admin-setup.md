# 🛠️ WordPress Setup & Implementation Guide (IT Only)

I have converted the RBANMS Next.js theme into a production-ready **WordPress Theme Shell**. Follow these steps to complete the deployment as requested.

## 1. Theme Installation
1.  Compress the `wordpress-theme/` folder into a `.zip` file.
2.  In WP Admin, go to **Appearance > Themes > Add New > Upload Theme** and upload the zip.
3.  Activate the theme.

## 2. Required Plugins
Install and activate the following:
*   **Advanced Custom Fields (ACF)**: To manage the editable home structure.
*   **User Role Editor**: To fine-tune the `Content Admin` role permissions.
*   **Elementor** (Optional): If you wish to use the visual drag-and-drop editor for other pages.
*   **WP 2FA**: To satisfy the two-factor authentication requirement.
*   **WP Activity Log**: To satisfy the logging requirement.
*   **UpdraftPlus**: For regular backups.

## 3. Account Setup (Super Admin & Content Admin)
1.  **Super Admin**:
    *   Email: `info@rbanmsfgc.edu.in`
    *   Role: **Administrator**
2.  **Content Admin**:
    *   Email: `anand.b.j.7@gmail.com`
    *   Role: **Content Admin** (This role was registered automatically by the theme's `functions.php`).
    *   Capabilities: `read`, `upload_files`, `edit_posts`, `edit_published_posts`, `publish_posts`, `edit_pages`, `edit_published_pages`.

## 4. Front Page Configuration
1.  Create a page named "Home".
2.  Go to **Settings > Reading** and set "Your homepage displays" to **A static page**, selecting "Home".
3.  The Home page will now show the ACF fields:
    *   `home_hero_title`
    *   `home_hero_paragraph`
    *   `home_hero_image`
    *   `right_column_card_title`/`text`/`image`
    *   `rbnam_experience_text`

## 5. Security & Onboarding
*   **Passwords**: When creating users, use the "Send New User Email" option in WordPress. This sends a secure setup link and forces them to choose their own password.
*   **2FA**: Use the **WP 2FA** plugin configuration wizard to enforce 2FA for both accounts.
*   **Activity Log**: Enable **WP Activity Log** to track all content changes made by the Content Admin.

## 6. Testing (Handover)
*   [ ] Login as `anand.b.j.7@gmail.com` and verify the **"Content Editor"** menu is visible.
*   [ ] Edit the Hero text on the Home page and verify it updates in the preview.
*   [ ] Verify access is **denied** for Plugins, Tools, and Settings for the Content Admin.
*   [ ] Perform a test backup with UpdraftPlus.
