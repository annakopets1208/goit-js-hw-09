const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', function (event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value.trim();
  }

  if (event.target.name === 'message') {
    formData.message = event.target.value.trim();
  }

  //   console.log(formData);

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const hasData = localStorage.getItem('feedback-form-state');
if (hasData) {
  const parsedData = JSON.parse(hasData);
  if (parsedData.email) {
    form.elements.email.value = parsedData.email;
    formData.email = parsedData.email;
  }

  if (parsedData.message) {
    form.elements.message.value = parsedData.message;
    formData.message = parsedData.message;
  }
}

form.addEventListener('submit', function (event) {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');

  formData.email = '';
  formData.message = '';
  form.reset();
});
