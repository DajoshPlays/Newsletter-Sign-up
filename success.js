// Dismiss message
const dismissMessage = document.querySelector(".button .success-button");
console.log(dismissMessage);

// Add click event listener to the button 
dismissMessage.addEventListener('click', function() {
    // Redirect to the success page after 2 seconds
    setTimeout(function() {
      window.location.href = 'index.html';
    }, 500);
});


const email = sessionStorage.getItem('subscribedEmail') || "your email";

document.querySelector('.email-input').textContent = email