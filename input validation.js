document.getElementById('booking-form').addEventListener('submit', function(event) {
 var dateInput = document.getElementById('date');
 var timeInput = document.getElementById('time');

 if (dateInput.value === '' || timeInput.value === '') {
    alert('Please fill in both the date and time fields.');
    event.preventDefault();
 }
});