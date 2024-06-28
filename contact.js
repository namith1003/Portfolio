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


  document.addEventListener('DOMContentLoaded', () => {
    gsap.from(".contact-form-container", {
      duration: 1.5,
      y: 50,
      opacity: 0,
      ease: "power3.out"
    });
  
    gsap.from(".contact-form-container h1", {
      duration: 1.5,
      delay: 0.5,
      x: -100,
      opacity: 0,
      ease: "power3.out"
    });
  
    gsap.from(".form-group", {
      duration: 1.5,
      delay: 1,
      opacity: 0,
      stagger: 0.3,
      ease: "power3.out"
    });
  
    gsap.from("button.submit", {
      duration: 1.5,
      delay: 2,
      scale: 0.5,
      opacity: 0,
      ease: "elastic.out(1, 0.3)"
    });
  
    // Handle form submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();
      // Handle form submission logic here
      // Example: Send data to Google Sheets
    });
  });