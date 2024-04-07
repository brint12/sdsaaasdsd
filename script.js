// Function to run the code
function runCode() {
  var htmlCode = document.getElementById("html-code").value;
  var cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
  var jsCode = "<script>" + document.getElementById("js-code").value + "</script>";

  var preview = document.getElementById("preview").contentWindow.document;
  
  preview.open();
  preview.write(htmlCode + cssCode + jsCode);
  preview.close();
}

// Event listener for the Run button
document.getElementById("run-btn").addEventListener("click", runCode);

// Function to export the code
function exportCode() {
  var htmlCode = document.getElementById("html-code").value;
  var cssCode = document.getElementById("css-code").value;
  var jsCode = document.getElementById("js-code").value;

  // You can implement your export functionality here, such as saving the code to a file or copying it to the clipboard
  // For demonstration purposes, let's just log the code to the console
  console.log("HTML Code:");
  console.log(htmlCode);
  console.log("CSS Code:");
  console.log(cssCode);
  console.log("JavaScript Code:");
  console.log(jsCode);
}

// Event listener for the Export button
document.getElementById("export-btn").addEventListener("click", exportCode);