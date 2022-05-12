function myFunction() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Sheet1');
  const range = sheet.getDataRange();
  const values = range.getValues();

  var template = HtmlService.createTemplateFromFile('Template');
  template.values = values; // define o valor da variável values usada dentro das tags especiais no HTML
  
  // executa o Apps Script dentro do HTML e gera um arquivo HTML com valores fixos
  var html = template.evaluate().getContent();
  console.log(html);

  GmalApp.isendEmail(['destinatario@domain.com.br'], "Email gerado via Apps Script", "", { name: 'Email Automático', htmlBody: html });
}