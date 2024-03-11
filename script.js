const inputFields = document.querySelectorAll('input');

inputFields.forEach(function(inputField) {
  inputField.addEventListener('focus', function(e) {
    const placeholder = inputField.getAttribute('placeholder');
    const label = inputField.previousElementSibling;

    if (placeholder) {
      inputField.setAttribute('placeholder', '');
      label.classList.add('focused');
    }
  });
});

inputFields.forEach(function(inputField) {
  inputField.addEventListener('blur', function(e) {
    const placeholder = inputField.getAttribute('placeholder');
    const label = inputField.previousElementSibling;
    const labelValue = inputField.previousElementSibling.textContent;

    if (placeholder == '') {
      inputField.setAttribute('placeholder', labelValue);
      label.classList.remove('focused');
    }
  });
});
