// Obtener datos del formulario
function handleFormSubmit(event) {
    event.preventDefault(); // Prevenir el envío tradicional del formulario
    
    const formData = new FormData(event.target);
    
    const name = formData.get('name');
    const visitor_email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    const email_from = 'git8269@gmail.com';
    const email_subject = 'New Form Submission';
    
    const email_body = `User Name: ${name}.\n` +
                      `User Email: ${visitor_email}.\n` +
                      `Subject: ${subject}.\n` +
                      `User Message: ${message}.\n`;
    
    const to = 'stephano8269@gmail.com';
    
    // Enviar datos al servidor usando fetch
    fetch('/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: visitor_email,
            subject: subject,
            message: message,
            email_from: email_from,
            email_subject: email_subject,
            email_body: email_body,
            to: to
        })
    })
    .then(response => {
        if (response.ok) {
            // Redirigir igual que en PHP
            window.location.href = 'contact.html';
        } else {
            console.error('Error al enviar el formulario');
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// Agregar el event listener al formulario
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form'); // Asume que tu formulario tiene este ID
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});