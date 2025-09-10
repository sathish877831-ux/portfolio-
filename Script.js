document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    let message = '';

    if (fullname.length < 3) {
        message = 'Full Name must be at least 3 characters.';
    } else if (!validateEmail(email)) {
        message = 'Please enter a valid email.';
    } else if (password.length < 6) {
        message = 'Password must be at least 6 characters.';
    } else if (password !== confirmPassword) {
        message = 'Passwords do not match.';
    } else if (!terms) {
        message = 'You must accept the Terms & Conditions.';
    } else {
        message = 'Registration Successful!';
        document.getElementById('registrationForm').reset();
    }

    document.getElementById('message').textContent = message;
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
