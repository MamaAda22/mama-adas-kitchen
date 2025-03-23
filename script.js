document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Hide the form
    document.getElementById('orderForm').classList.add('hidden');

    // Show the confirmation message
    document.getElementById('confirmation').classList.remove('hidden');
});

// Handle the "Click here to submit a new order" link
document.getElementById('newOrderLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the link from navigating

    // Show the form
    document.getElementById('orderForm').classList.remove('hidden');

    // Hide the confirmation message
    document.getElementById('confirmation').classList.add('hidden');
});
