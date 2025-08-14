const scriptURL = 'https://script.google.com/macros/s/AKfycbwsGhGvKh83pO9GOm7Y9dN5uxLKqPr7MX1IpO9UuhWV6ZnBC8ENIeUs25Nb4UOtDU8Oyg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})