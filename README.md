# #NinjaWedding invitation website

A mobile-first static wedding invitation for Syeda Rubaiya Nahar and Farhan Al Zabeer.

## Files
- `index.html` — invitation content
- `style.css` — responsive design and colours
- `config.js` — venue addresses and Google Maps links
- `script.js` — opening interaction and live countdowns

## Preview on your computer
1. Download and unzip `ninjawedding-site.zip`.
2. Open the `ninjawedding-site` folder.
3. Double-click `index.html` to open it in your browser.
4. Internet access is needed for the optional Google Fonts. The site itself has fallback fonts.

## Add your address later
1. Open `config.js` in Notepad or VS Code.
2. Put your address inside the quotation marks for `mehendiAddress` and `akhdAddress`.
3. Save the file. Example:
   `mehendiAddress: "Your address, Dhaka, Bangladesh",`
4. If both events are at the same place, use the same address for both.
5. Refresh the browser. Google Maps buttons will appear automatically.
6. Do not publish your home address until you're comfortable sharing it with invitees.

If you have a direct Google Maps share link, paste it into `mehendiMapUrl` or `akhdMapUrl`. A custom map link overrides the generated address search.

## Deploy to Vercel using GitHub
1. Create or sign in to a GitHub account.
2. Create a new repository named `ninjawedding`.
3. Upload the contents of this folder to the repository (the files should be at the repository root, especially `index.html`).
4. Sign in to Vercel with GitHub.
5. Choose **Add New → Project**, then import `ninjawedding`.
6. Use the **Other** framework preset for this plain HTML/CSS/JS site. No build command is needed; serve the project root.
7. Click **Deploy**. Vercel will provide a public link.
8. Later edits pushed to GitHub can trigger a fresh deployment automatically.

Official Vercel deployment overview: https://vercel.com/docs/deployments/overview

## Before sharing with guests
- Confirm the event dates, start times, and venue text.
- Add the address and test both Google Maps buttons.
- Open the site on a phone.
- Test the countdowns.
- If adding photos or music later, use files you have permission to share and test performance on mobile.

## Notes
- Countdown times use Bangladesh Standard Time (UTC+6).
- Both events are currently set to 12:00 PM.
- No RSVP backend or audio file is included in this first version.
