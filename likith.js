function showMessage(message) {
document.getElementById('message').innerText = message;
    document.getElementById('gif-container').innerHTML = ''; // Clear the GIF if present
}

function showGif() {
    document.getElementById('message').innerText = ''; // Clear the message if present
document.getElementById('gif-container').innerHTML = '<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWtlOGRyb2Mxejl3bWdrdTQwczN2eDhycWQ4NGxqczhzOW5lbDVoNSZlcD12MV9
