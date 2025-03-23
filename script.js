document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Hide the form
    document.getElementById('orderForm').classList.add('hidden');

    // Show the confirmation message
    document.getElementById('confirmation').classList.remove('hidden');
    document.getElementById('confirmation').classList.add('visible');
});

// Handle the "Click here to submit a new order" link
document.getElementById('newOrderLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the link from navigating

    // Show the form
    document.getElementById('orderForm').classList.remove('hidden');
    document.getElementById('orderForm').classList.add('visible');

    // Hide the confirmation message
    document.getElementById('confirmation').classList.add('hidden');
    document.getElementById('confirmation').classList.remove('visible');
});
