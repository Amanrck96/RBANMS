# Super Admin Testing Checklist

## ✅ Test 1: Login & Access
- [ ] Navigate to http://localhost:3000/admin/login
- [ ] Login with `info@rbanmsfgc.edu.in`
- [ ] Confirm you see Dashboard, Manage Content, Settings, Users in sidebar
- [ ] Confirm Dashboard shows "Full Access: ✓ Enabled"

## ✅ Test 2: Edit Existing Page Content
- [ ] Go to "Manage Content"
- [ ] Select "About: Founder" from dropdown
- [ ] **VERIFY**: Editor shows existing content (not blank!)
- [ ] Change the title to "Our Visionary Founder"
- [ ] Click "Update Page Content"
- [ ] Open http://localhost:3000/about/founder in new tab
- [ ] **VERIFY**: Title changed on live site

## ✅ Test 3: Edit Homepage Leadership Cards
- [ ] In Manage Content, select "About: Director Message"
- [ ] **VERIFY**: You see existing director message
- [ ] Change some text in the message
- [ ] Update the Image URL field to a different image path
- [ ] Click "Update Page Content"
- [ ] Open http://localhost:3000/ (homepage)
- [ ] **VERIFY**: Director card shows your changes

## ✅ Test 4: Edit Previously "Blank" Areas
- [ ] Select "About: History" from dropdown
- [ ] **VERIFY**: Editor shows college history content (not blank!)
- [ ] Add a new paragraph or edit existing text
- [ ] Click "Update Page Content"
- [ ] Open http://localhost:3000/about/history
- [ ] **VERIFY**: Changes appear on live page

## ✅ Test 5: Edit Department Pages
- [ ] Select "Dept: Commerce" from dropdown
- [ ] **VERIFY**: Shows existing department content
- [ ] Edit the welcome message
- [ ] Update Image URL if desired
- [ ] Click "Update Page Content"
- [ ] Open http://localhost:3000/departments/commerce
- [ ] **VERIFY**: Changes are live

## ✅ Test 6: Edit Cells & Committees
- [ ] Select "Cell: IQAC" from dropdown
- [ ] **VERIFY**: Shows existing IQAC content
- [ ] Make some edits
- [ ] Click "Update Page Content"
- [ ] Open http://localhost:3000/iqac
- [ ] **VERIFY**: Changes are visible

## ✅ Test 7: Site-Wide Settings
- [ ] Go to "Settings" page
- [ ] Update college phone number
- [ ] Update email address
- [ ] Click "Save Settings"
- [ ] **VERIFY**: Success message appears

## ✅ Test 8: Image Management
To upload a new image:
- [ ] Save your image to `c:\Users\amanr\RBANMS\RBANMS\public\images\`
- [ ] Note the filename (e.g., `new-director.jpg`)
- [ ] In Manage Content, set Image URL to `/images/new-director.jpg`
- [ ] Click Update
- [ ] **VERIFY**: New image appears on the page

## ✅ Test 9: Visual Editor Features
- [ ] Select any page
- [ ] Try making text **Bold**
- [ ] Try adding a bulleted list
- [ ] Try adding a link (URL prompt)
- [ ] Switch to "Code" view to see HTML
- [ ] Switch back to "Visual" view
- [ ] **VERIFY**: All formatting tools work

## ✅ Test 10: Limited Admin Role Check
- [ ] Logout from Super Admin
- [ ] Login as `anand.b.j.7@gmail.com` (regular admin)
- [ ] **VERIFY**: You do NOT see "Manage Content" in sidebar
- [ ] **VERIFY**: You do NOT see "Settings" in sidebar
- [ ] **VERIFY**: You do NOT see "Users" in sidebar
- [ ] **VERIFY**: You only see "Dashboard" and "Posts"

---

## 🎯 All Tests Passed?

If YES → Your Super Admin CMS is working perfectly! ✅

If NO → Note which test failed and we'll fix it.

## 📞 Questions?

- **How to add more pages?** Add to `EDITABLE_PAGES` array in `manage-content/page.tsx`
- **How to add more default content?** Add to `cms-defaults.ts`
- **How to upload images?** Place in `/public/images/` folder and use path `/images/filename.jpg`
- **How to change permissions?** Edit `src/types/user.ts` ROLE_PERMISSIONS
