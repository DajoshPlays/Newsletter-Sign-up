"use strict"

const form = document.getElementById('email-form')

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const emailInput = document.getElementById('email');
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;

  // Resetting error message
  emailInput.parentElement.classList.remove('error');
  emailInput.setAttribute('aria-invalid', false);

  // validate email
  if(!emailRegex.test(emailValue)){
    emailInput.parentElement.classList.add('error')
    emailInput.setAttribute('aria-invalid', true)
    emailInput.focus();
  }else{
    // store in session storage
    sessionStorage.setItem('subscribedEmail', emailValue)
    // redirect to success page
    window.location.href = 'success.html'
  }

})