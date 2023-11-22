function convert() {
    // Get the input value (minutes)
    var minutesInput = document.getElementById('minutes').value;
  
    // Check if the input is a valid number
    if (isNaN(minutesInput) || minutesInput === '') {
      alert('Please enter a valid number for minutes.');
      return;
    }
  
    // Convert minutes to seconds
    var seconds = minutesInput * 60;
  
    // Display the result
    document.getElementById('seconds').innerText = seconds;
  }