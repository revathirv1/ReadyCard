function generateQR() { 
    const text = document.getElementById("text").value;
    const text1 = document.getElementById("text1").value;
    const text2 = document.getElementById("text2").value;
    const text3 = document.getElementById("text3").value;
    const text4 = document.getElementById("text4").value;
    const text5 = document.getElementById("text5").value;
    const text6 = document.getElementById("text6").value;

    if (!text) { 
        alert("Please enter text or URL or both"); 
        return; 
    } 

    document.getElementById("qrcode").innerHTML = ""; 

    new QRCode(document.getElementById("qrcode"), { 
        text: `https://revathirv1.github.io/x/?namedata=${encodeURIComponent(text)}&agedata=${encodeURIComponent(text1)}&allergydata=${encodeURIComponent(text2)}&medicationdata=${encodeURIComponent(text3)}&dietarydata=${encodeURIComponent(text4)}&specialdata=${encodeURIComponent(text5)}&specialdata2=${encodeURIComponent(text6)}`, 
        width: 200, 
        height: 200 
    }); 
    document.getElementById("qrcode").insertAdjacentHTML('beforeend', "<br>" + text);
    const error = document.getElementById("form-error");
    if (!text.trim()) {
        error.textContent = "Please enter the child's name.";
        document.getElementById("text").focus();
        return;
    }
    error.textContent = "";

    document.getElementById("qrcode").innerHTML = "";

    shareUrl = `https://revathirv1.github.io/x/?namedata=${encodeURIComponent(text)}&agedata=${encodeURIComponent(text1)}&allergydata=${encodeURIComponent(text2)}&medicationdata=${encodeURIComponent(text3)}&dietarydata=${encodeURIComponent(text4)}&specialdata=${encodeURIComponent(text5)}&specialdata2=${encodeURIComponent(text6)}`;
    shareName = text;

    new QRCode(document.getElementById("qrcode"), {
        text: shareUrl,
        width: 200,
        height: 200
    });

    showShareOptions();
}

let shareUrl = "";
let shareName = "";

// Points each app at the card's link and shows the Share button.
function showShareOptions() {
    const message = `${shareName}'s health card: ${shareUrl}`;
    const encoded = encodeURIComponent(message);

    document.getElementById("share-messages").href = `sms:?&body=${encoded}`;
    document.getElementById("share-whatsapp").href = `https://wa.me/?text=${encoded}`;
    document.getElementById("share-email").href =
        `mailto:?subject=${encodeURIComponent(`${shareName}'s health card`)}&body=${encoded}`;
    document.getElementById("share-link").value = shareUrl;

    // "More" opens the phone's own share sheet, where it's supported.
    document.getElementById("share-more").hidden = !navigator.share;
    document.getElementById("share-button").hidden = false;
}

function openShareSheet() {
    document.getElementById("share-status").textContent = "";
    document.getElementById("share-sheet").showModal();
}

function closeShareSheet() {
    document.getElementById("share-sheet").close();
}

// Close the sheet when tapping the dimmed area around it.
document.addEventListener("DOMContentLoaded", function() {
    const sheet = document.getElementById("share-sheet");
    sheet.addEventListener("click", function(event) {
        const box = sheet.getBoundingClientRect();
        const outside = event.clientX < box.left || event.clientX > box.right ||
            event.clientY < box.top || event.clientY > box.bottom;
        if (event.target === sheet && outside) {
            closeShareSheet();
        }
    });
});

async function copyLink() {
    const status = document.getElementById("share-status");
    try {
        await navigator.clipboard.writeText(shareUrl);
        status.textContent = "Link copied. Paste it to share.";
    } catch (err) {
        status.textContent = "Couldn't copy the link.";
    }
}

// Opens the phone's share sheet (AirDrop, Notes, other apps).
async function shareLink() {
    const status = document.getElementById("share-status");
    status.textContent = "";

    try {
        await navigator.share({ title: `${shareName}'s health card`, url: shareUrl });
    } catch (err) {
        if (err.name !== "AbortError") {
            status.textContent = "Couldn't share the link.";
        }
    }
}


   window.onload = function() {
  const targetParams = new URLSearchParams(window.location.search);
  const textFromScan = targetParams.get('namedata');
  const textFromScan2 = targetParams.get('agedata');
  const textFromScan3 = targetParams.get('allergydata');
  const textFromScan4 = targetParams.get('medicationdata');
  const textFromScan5 = targetParams.get('dietarydata');
  const textFromScan6 = targetParams.get('specialdata');
  const textFromScan7 = targetParams.get('specialdata2')
  
  
  if (textFromScan !== null) {
    const fields = [
      ["Name", textFromScan],
      ["Age", textFromScan2],
      ["Allergies", textFromScan3],
      ["Medications/OTC", textFromScan4],
      ["Dietary Restrictions", textFromScan5],
      ["Emergency Contact", textFromScan6],
      ["Preferred Hospital", textFromScan7]
    ];
    const details = document.getElementById("card-details");

    fields.forEach(([label, value]) => {
      if (value === null || value === "") return;
      const row = document.createElement("p");
      const heading = document.createElement("strong");
      heading.textContent = `${label}: `;
      row.append(heading, document.createTextNode(value));
      details.appendChild(row);
    });

    document.body.classList.add("scanned-view");
    document.getElementById("health-card").hidden = false;
  }
};






    
