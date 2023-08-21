document.getElementById('sign-up-form').addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:4000/test', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        document.getElementById('message').textContent = data.message;
    } catch (error) {
        console.error('Error during sign up:', error);
        document.getElementById('message').textContent = 'An error occurred while signing up.';
    }
});
