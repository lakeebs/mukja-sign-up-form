// Fade in image on load
const heroImg = document.querySelector('.hero img');

// Check if the image is already loaded
if (heroImg.complete) {
  fadeInImage();
} else {
  // If the image is not yet loaded, wait for the load event
  heroImg.addEventListener('load', fadeInImage);
}

// Add a delay before removing the hidden class
function fadeInImage() {
  setTimeout(() => {
    heroImg.classList.remove('hidden');
  }, 500);
}

// Show/hide placeholder and label
const inputFields = document.querySelectorAll('input');
const pwdNote = document.querySelector('.pwd-note');

inputFields.forEach(function(inputField) {
  inputField.addEventListener('focus', function(e) {
    const placeholder = inputField.getAttribute('placeholder');
    const label = inputField.previousElementSibling;

    if (placeholder) {
      inputField.setAttribute('placeholder', '');
      label.classList.add('focused');
    }

    if (placeholder == 'Password' || placeholder == 'Confirm password') {
      pwdNote.style.display = 'block';
    }

  });
});

inputFields.forEach(function(inputField) {
  inputField.addEventListener('blur', function(e) {
    const placeholder = inputField.getAttribute('placeholder');
    const label = inputField.previousElementSibling;
    const labelValue = inputField.previousElementSibling.textContent;

    if (labelValue == 'Password' || labelValue == 'Confirm password') {
      pwdNote.style.display = 'none';

      const pwdInput = document.querySelector('#pwd');
      const cpwdInput = document.querySelector('#cpwd');
      const validCheck = document.querySelector('.cpwd .valid')

      // Add an event listener to both password fields
      pwdInput.addEventListener('input', validatePasswords);
      cpwdInput.addEventListener('input', validatePasswords);

      function validatePasswords() {
        const pwdValue = pwdInput.value;
        const cpwdValue = cpwdInput.value;

        // Check if the passwords match
        if (pwdValue === cpwdValue && pwdInput.validity.valid && cpwdInput.validity.valid) {
          validCheck.style.display = 'block';
        } else {
          validCheck.style.display = 'none';
        }
      }
    }

    if (placeholder == '') {
      inputField.setAttribute('placeholder', labelValue);
      label.classList.remove('focused');
    }

  });
});

// match up the input:valid states? (if #pwd:valid == #cpwd:valid)