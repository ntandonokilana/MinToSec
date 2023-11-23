function convertMinstoSecs() {
    // Get the value entered in the 'minutes' input
    let minutes = document.getElementById('minutes').value;
    // Validate if the input is a valid number
    if (!isNaN(minutes) && minutes !== "") {
        // Convert minutes to seconds
        let seconds = minutes * 60;
        // Update the 'seconds' input with the result
        document.getElementById('seconds').value = seconds;
    } else {
        alert('Please enter a valid number for minutes.');
    }
}