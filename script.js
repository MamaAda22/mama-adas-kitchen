document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const item1 = document.getElementById('item1').value;
    const item2 = document.getElementById('item2').value;
    const item3 = document.getElementById('item3').value;

    if (item1 > 0 || item2 > 0 || item3 > 0) {
        document.getElementById('orderForm').classList.add('hidden');
        document.getElementById('confirmation').classList.remove('hidden');
    } else {
        alert('Please enter a quantity for at least one item.');
    }
});