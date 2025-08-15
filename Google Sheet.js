const scriptURL = 'https://script.google.com/macros/s/AKfycbwKXg8Ok3rACIEm5PQGl6lRxHPUl82vuqZG2Qr41mhKposYYvfBR7bk7Br1kWihsAuO/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

})

