# Admin CMS Demo Plan (10 Minutes)

## Objective
Demonstrate to the client that the Super Admin (`info@rbanmsfgc.edu.in`) has full control over the website's content, including legacy pages, hardcoded images, and previously blank sections.

## Prerequisites
1. Open browser to `http://localhost:3000/` (Homepage) in one tab.
2. Open `http://localhost:3000/admin/login` in another tab.
3. Login as `info@rbanmsfgc.edu.in`.

---

## 🕒 Minute 1-2: Login & The "Old vs New" Toggle
**Goal:** Show that we solve the "blank page" problem and allow referencing old content.

1. Navigate to **Manage Content**.
2. Select **"About: Founder"** from the dropdown.
3. Point out the **[ New (Current) | Old (Original) ]** toggle.
4. Explain: *"If you ever mess up or want to see the original text, just click 'Old (Original)'. It loads the factory default content instantly."*
5. Toggle between them to show it working.

## 🕒 Minute 3-5: Editing a Legacy Page & Hero Image
**Goal:** Show editing the "Hero" section which was previously hardcoded.

1. Select **"Home: Hero Section"** from the dropdown.
2. **Current State:** Show that the homepage (`localhost:3000`) has the standard carousel.
3. **Action:**
   - In Admin, add an Image URL: `/images/hero/hero-2.jpg` (or any valid path).
   - Add Content: `<h1>Welcome to our New Era</h1>`
   - Click **Update Page Content**.
4. **Verify:** Refund the homepage.
   - Show that the Carousel now features your new image and text overlay!
   - *Note: This proves the "Hero" is no longer hardcoded.*

## 🕒 Minute 6-8: Editing a "Right Column" Sidebar
**Goal:** Show we can edit sidebars/images that were stuck in code.

1. Navigate to **Department of Commerce** on the live site.
   - Point out the "sidebar image" (Group Photo).
2.  In Admin, Select **"Dept: Commerce Sidebar"** from the dropdown.
3. **Action:**
   - Change the Image URL to something else.
   - Add text in the content box: *"Group photo taken 2024"*.
   - Click **Update Page Content**.
4. **Verify:** Refresh the Commerce page.
   - Show the image updated and the text appeared below it.

## 🕒 Minute 9-10: Permissions Check
**Goal:** Confirm security.

1. Logout of Super Admin.
2. Login as `anand.b.j.7@gmail.com` (Content Admin).
3. **Verify:**
   - The "Manage Content", "Settings", and "Users" tabs are **MISSING**.
   - Anand can only see "Posts" (Blogs).
   - This prevents accidental damage to the site structure.

## ✅ Success Criteria
- [ ] Client sees "Old" content loads instantly.
- [ ] Client sees Homepage Hero change.
- [ ] Client sees Commerce Sidebar change.
- [ ] Client verifies Anand has restricted access.
