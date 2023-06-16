document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for signing up!');
});

<button onclick="signUp()">Sign Up for a Class</button>

function signUp() {
    alert('Thank you for signing up for a class! We will be in touch with more information.');
}
