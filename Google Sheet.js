const scriptURL = 'https://script.google.com/macros/s/AKfycbwYmP3kVRGoBTjmb3RC3PsURb8WXAV5r6JkZmzI990HXn5UTd6K9C9QARww-aYKOp5u-A/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

})
