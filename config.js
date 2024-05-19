//google sheets
const sheets = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1wugpx5COQWP0XUWDI5f-tvLiuZW-GYiyGcXXNFR-JOQ/edit#gid=0");
 //if you have changed your sheet name then replace the below Sheet1 with your sheet name
const sheet = sheets.getSheetByName("Page1");
function doPost(e){
  let data = e.parameter;
  sheet.appendRow([data.Name,data.Email,data.Message]);
  return ContentService.createTextOutput("Your message was successfully sent to the Googlesheet database!");
}

//code
function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxUX4hu2QEQ7r9TwrSo9vAHydDXv4VwtEDUacCifXaEecIH2bWHQSnFWtd9NdNIUVGDdQ/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
   });
 
//link collor
const link = https://colorhunt.co/palette/fffbdaffec9effbb70ed9455