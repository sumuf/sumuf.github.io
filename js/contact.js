// Initialize EmailJS with your public key
(function() {
    emailjs.init("VGpeGem5TUFUATM09"); // Public key configured
})();

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show loading state
    const submitButton = this.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.disabled = true;
    submitButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';

    // Get form data
    const templateParams = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    emailjs.send('service_default', 'template_default', templateParams)
        .then(function() {
            // Show success message
            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'Thank you for contacting us. We will get back to you soon!',
                confirmButtonColor: '#0d6efd'
            });

            // Reset form
            document.getElementById('contactForm').reset();
        }, function(error) {
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong! Please try again later.',
                confirmButtonColor: '#0d6efd'
            });
            console.error('EmailJS error:', error);
        })
        .finally(function() {
            // Reset button state
            submitButton.disabled = false;
            submitButton.innerHTML = originalButtonText;
        });
}));