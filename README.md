# ReadyCard

ReadyCard helps parents share a child's important health and emergency information with a coach, camp leader, or other caregiver. A parent enters the details and creates a QR code. The caregiver scans it to view the card in a browser, with no app to install and no account needed. If information changes, the parent creates and shares an updated card.

## Why we made it

Information such as allergies, medicine instructions, and emergency contacts is often kept on paper and can be hard to find or update when a child needs help. ReadyCard puts those details in one scannable card so a caregiver can find them quickly.

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

## AI assistance

AI assistance was used for the CSS styling and for the functionality of the share button. The HTML form and the QR-code generation flow were hand-coded. The app uses the QRCode.js library to render the generated QR code.

## Repository files

- `index.html`: the active app, including its form, styling, and JavaScript.
