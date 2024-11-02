document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    alert(`Thank you for your feedback, ${name}!`);
});
