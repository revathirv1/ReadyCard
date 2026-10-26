# ReadyCard

ReadyCard helps parents keep their children safe by putting vital emergency information into a single, instantly scannable QR code. Whether a child is at sports practice, summer camp, or Scout meetings, parents do not have to fill out long paper forms or worry about leaders searching through heavy binders during an emergency. Instead, a coach, team manager, or camp director simply scans the QR code using their regular phone camera to instantly display essential medical details, critical allergies, required medications, and parent contact phone numbers.

The main benefit of ReadyCard is complete simplicity and zero friction: there are no mobile apps to download, no user accounts to set up, and no login passwords to remember.

## Why we made it

Information such as allergies, medicine instructions, and emergency contacts is often kept on paper and can be hard to find or update when a child needs help. ReadyCard puts those details into one scannable card so a caregiver can find them immediately when seconds count, without relying on paperwork or extra software.

## Using ReadyCard

1. Open the ReadyCard page: [add your GitHub Pages URL here].
2. Enter the child's name and any relevant details: age, dietary restrictions, allergies, medicine instructions, emergency contact, and preferred hospital.
3. Select **Create health card** to generate a QR code.
4. Use **Share** to send the link by message, email, WhatsApp, or your device's share options.

The recipient scans the code with a phone camera, or opens the link, to read the card. To update a card, create a new one and share it; previously shared links keep showing the old information.

## Privacy and safety

ReadyCard does not use an app server or database to store card details. The data is encoded in the URL fragment (the part after `#`), which browsers do not send to the website when requesting the page. The app reads that fragment in the browser and displays the card.

This is **not access control or encryption**: anyone who scans the QR code or receives the link can view the information. Share cards only with trusted caregivers, and use sample information for demonstrations. To change a card, create and distribute a new QR code or link.

### Browser support

ReadyCard uses the HTML `<dialog>` element and, optionally, the Web Share API. Recent versions of major mobile and desktop browsers work, but the **More** share option appears only where the browser supports sharing.

## Built with

- HTML, CSS, and JavaScript
- [QRCode.js](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js), loaded from a CDN, used only to draw the QR code
- GitHub Pages for static hosting

No build step or account is required. Open `index.html` in a browser or host the repository with GitHub Pages. Creating a QR code needs an internet connection to load the library. Displaying a scanned card does not depend on it.

## Version 2.0 / Future Improvements

If we were to create a 2.0 version of ReadyCard, we plan to implement the following upgrades:

1. **Enhanced Security & User Management**: Introduce user accounts, secure PINs, and permissions that give parents full control to choose specific coaches or leaders authorized to view sensitive details.
2. **Offline-First Design**: Implement an offline-first architecture so coaches and Scout leaders can view critical allergy and emergency details even when outdoors with no cellular service or Wi-Fi, with automatic background syncing once reconnected.
3. **Official App Stores (iOS & Android)**: Publish native mobile apps to make downloading and access easier for parents and leaders, while securely saving emergency information directly to local device storage for reliable offline access.

## AI Assistance & Team Contributions

Our team made all core decisions and built ReadyCard ourselves, with AI acting as a helpful tutor and assistant guided by our coaches:

- **AI Tools**: Used for brainstorming use cases, exploring tech options (helping us choose JavaScript and suitable libraries), generating CSS styling for a clean, modern user interface, writing share button code, drafting project documentation, and refining our demonstration video script.
- **Team Contributions**: Inspired by our own real-world experiences, our team finalized all core decisions, features, and overall structure. We coded the HTML web pages from scratch, implemented the main JavaScript logic that generates, scans, and reads the medical details stored in the QR codes, and thoroughly tested every feature (form generation, QR scanning, data reading, and the share button).

## Repository files

- `index.html`: the active app, including its form, styling, and JavaScript.
