const userName = document.getElementById("name");
const userDesc = document.getElementById("desc");
const userAuth = document.getElementById("auth");
const userCert = document.getElementById("cert");
const userdesignation = document.getElementById("designation");

const submitBtn = document.getElementById("submitBtn");

const { PDFDocument, rgb, degrees } = PDFLib;
var xyz;
function myFunction(imgs) {
  // Get the expanded image
  var expandImg = document.getElementById("expandedImg");
  // console.log(imgs.id);
  
  // Get the image text
  var imgText = document.getElementById("imgtext");
  // Use the same src in the expanded image as the image being clicked on from the grid
  expandImg.src = imgs.src;
  // Use the value of the alt attribute of the clickable image as text inside the expanded image
  imgText.innerHTML = imgs.alt;
  // Show the container element (hidden with CSS)
  expandImg.parentElement.style.display = "block";
  

  xyz=imgs.id;
  console.log(xyz);

const capitalize = (str, lower = false) =>
  (lower ? str.toLowerCase() : str).replace(/(?:^|\s|["'([{])+\S/g, (match) =>
    match.toUpperCase()
  );

submitBtn.addEventListener("click", () => {

  const val = capitalize(userName.value);
  const val1= capitalize(userDesc.value);
  const val2= capitalize(userAuth.value);
  const val3= capitalize(userCert.value);
  const val4= capitalize(userdesignation.value);


  //check if the text is empty or not
  if (val.trim() !== "" && userName.checkValidity() && val1.trim() !=="" && userDesc.checkValidity() && val2.trim() && userAuth.checkValidity(), val3.trim() && userCert.checkValidity()  && val4.trim() !=="" && userdesignation.checkValidity() ) {
    // console.log(val);
    generatePDF(val,val1,val2,val3,val4);
  } else {
    userName.reportValidity();
    userDesc.reportValidity();
    userAuth.reportValidity();
    userCert.reportValidity();
    userdesignation.reportValidity();
  }
});


const generatePDF = async (name,desc,auth,cert,designation) => {

  if(imgs.id==='./xyz.pdf')
  {
    const existingPdfBytes = await fetch([xyz]).then((res) =>
    res.arrayBuffer()
    );

  // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

  //get font
    const fontBytes = await fetch("./Sanchez-Regular.ttf").then((res) =>
      res.arrayBuffer()
    );

    // Embed our custom font in the document
    const SanChezFont = await pdfDoc.embedFont(fontBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];



  //Image
    const pngUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png'
    const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer())
    const pngImage = await pdfDoc.embedPng(pngImageBytes)
    const pngDims = pngImage.scale(0.5)

    firstPage.drawImage(pngImage, {
      x: 410,
      y: 110,
      width:150,
      height:100,
    })
    // Draw a string of text diagonally across the first page
    firstPage.drawText(name, {
      x: 300,
      y: 280,
      size: 40,
      font: SanChezFont,
      color: rgb(0.06, 0.15, 0.33),
    });


    firstPage.drawText(desc, {
      x: 275,
      y: 240,
      size: 18,
      font: SanChezFont,
      color: rgb(0,0,0),
    
    });

    firstPage.drawText(auth, {
      x: 410,
      y: 110,
      size: 20,
      font: SanChezFont,
      color: rgb(0.06, 0.15, 0.33),

    });

    firstPage.drawText(cert, {
      x: 300,
      y: 367,
      size: 25,
      width:300,
      font: SanChezFont,
      color: rgb(0,0,0),

    });

    firstPage.drawText(designation, {
      x: 425,
      y: 85,
      size: 17,
      width:350,
      font: SanChezFont,
      color: rgb(0,0,0),
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");


  // this was for creating uri and showing in iframe
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("mypdf").src = pdfDataUri;

    var file = new File(
      [pdfBytes],
      "PWCertificate.pdf",
      {
        type: "application/pdf;charset=utf-8",
      }
    );
  saveAs(file);
  }
  else{

    console.log("Inside else block")
    const existingPdfBytes = await fetch([xyz]).then((res) =>
    res.arrayBuffer()
    );

  // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

  //get font
    const fontBytes = await fetch("./Sanchez-Regular.ttf").then((res) =>
      res.arrayBuffer()
    );

    // Embed our custom font in the document
    const SanChezFont = await pdfDoc.embedFont(fontBytes);

    // Get the first page of the document
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];



  //Image
    const pngUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Jon_Kirsch%27s_Signature.png'
    const pngImageBytes = await fetch(pngUrl).then((res) => res.arrayBuffer())
    const pngImage = await pdfDoc.embedPng(pngImageBytes)
    const pngDims = pngImage.scale(0.5)

    firstPage.drawImage(pngImage, {
      x: 410,
      y: 110,
      width:150,
      height:100,
    })
    // Draw a string of text diagonally across the first page
    firstPage.drawText(name, {
      x: 300,
      y: 280,
      size: 40,
      font: SanChezFont,
      color: rgb(0.06, 0.15, 0.33),
    });


    firstPage.drawText(desc, {
      x: 275,
      y: 240,
      size: 18,
      font: SanChezFont,
      color: rgb(0,0,0),
    
    });

    firstPage.drawText(auth, {
      x: 410,
      y: 110,
      size: 20,
      font: SanChezFont,
      color: rgb(0.06, 0.15, 0.33),

    });

    firstPage.drawText(cert, {
      x: 300,
      y: 367,
      size: 25,
      width:300,
      font: SanChezFont,
      color: rgb(0,0,0),

    });

    firstPage.drawText(designation, {
      x: 425,
      y: 85,
      size: 17,
      width:350,
      font: SanChezFont,
      color: rgb(0,0,0),
    });

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save();
    console.log("Done creating");


  // this was for creating uri and showing in iframe
    // const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
    // document.getElementById("mypdf").src = pdfDataUri;

    var file = new File(
      [pdfBytes],
      "C.pdf",
      {
        type: "application/pdf;charset=utf-8",
      }
    );
  saveAs(file);



  }
};

// generatePDF("Akshay Daundkar","For Successfully completing Training program","Karan Bembalge","Certificate of Participation","CIO Se2 India");

}
