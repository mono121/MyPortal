function getData(sheetName) {
  const id = "ここにスプレッドシートのIDを記入";
  var ss = SpreadsheetApp.openById(id).getSheetByName(sheetName);
  return (ss = ss
    .getRange(2, 1, ss.getLastRow() - 1, ss.getLastColumn())
    .getValues());
}

function doGet(e) {
  let responseText;
  let output = ContentService.createTextOutput();

  let sheetName = e.parameter.sheet;
  let result = { data: getData(sheetName), sheetName: sheetName };

  let callback = e.parameter.callback;
  responseText = callback + "(" + JSON.stringify(result) + ")";
  output.setMimeType(ContentService.MimeType.JAVASCRIPT);

  output.setContent(responseText);
  return output;
}
