var fieldCount = 0; // Contador de campos adicionados dinamicamente

document.getElementById('add-field').addEventListener('click', function() {
  // Crie um novo elemento <input>
  var input = document.createElement('input');
  input.type = 'text';
  input.name = 'field' + fieldCount; // Atribua um nome ao campo
  fieldCount++; // Incremente o contador de campos

  // Adicione o elemento ao formulário
  document.getElementById('fields').appendChild(input);
});

function removeField() {
  // Obtém a lista de campos de entrada
  var inputFields = document.getElementsByTagName("input");
  // Obtém o último campo de entrada da lista
  var lastInputField = inputFields[inputFields.length - 1];

  // Remove o último campo de entrada do formulário
  //lastInputField.parentNode.removeChild(lastInputField);

  var SecondToLastInputField = inputFields[inputFields.length - 2];
  
  var ThirdToLastInputField = inputFields[inputFields.length - 3];
  
  var FourthToLastInputField = inputFields[inputFields.length - 4];

  var FifthToLastInputField = inputFields[inputFields.length - 5];

  var SixthToLastInputField = inputFields[inputFields.length - 6];

  var SeventhToLastInputField = inputFields[inputFields.length - 7];

  var EighthToLastInputField = inputFields[inputFields.length - 8];

  lastInputField.parentNode.removeChild(lastInputField);
  SecondToLastInputField.parentNode.removeChild(SecondToLastInputField);
  ThirdToLastInputField.parentNode.removeChild(lastInputField);
  FourthToLastInputField.parentNode.removeChild(lastInputField);
  FifthToLastInputField.parentNode.removeChild(lastInputField);
  SixthToLastInputField.parentNode.removeChild(lastInputField);
  SeventhToLastInputField.parentNode.removeChild(lastInputField);
  EighthToLastInputField.lastInputField.parentNode.removeChild(lastInputField);

}