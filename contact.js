document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };
  
    fetch('https://script.google.com/macros/s/AKfycbxRS-_MlFSlG3byCKKPqKTewa1RwcYLwIfvSemdkqqjvof92XJdyIK0ebr7lNAmeYit/exec', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      alert('Your message has been sent!');
    }).catch(error => {
      console.error('Error:', error);
      alert('There was an error sending your message.');
    });
  });