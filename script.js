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
  
  
  if (textFromScan) {
    document.getElementById('qrData').innerHTML = 
      
     "Name:  " +decodeURIComponent(textFromScan)  + '<br>' + '<br>' +
      "Age:  "+decodeURIComponent(textFromScan2) + '<br>' + '<br>'+
      "Allergies:  "+decodeURIComponent(textFromScan3) + '<br>' +
      "Medications/OTC:  "+decodeURIComponent(textFromScan4) + '<br>' +
      "Dietary Restrictions:  "+decodeURIComponent(textFromScan5) + '<br>' +
      "Emergency Contact:  "+decodeURIComponent(textFromScan6) + '<br>' +
      "Preferred Hospital:  "+decodeURIComponent(textFromScan7)
      }
    };






    