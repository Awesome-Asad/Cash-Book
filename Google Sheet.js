const scriptURL = 'https://script.google.com/macros/s/AKfycbyUuh6rUYu8b1deQfOrsQ8VCRfSl-LMP1T-GEmN9OlbQxiuX2WTtD_bYqnSpyKCcV6v/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))

})


