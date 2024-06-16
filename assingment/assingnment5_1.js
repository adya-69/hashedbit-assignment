// write for part 2 <div id="hot-or-cold"></div>
function displayRandomNumber() {
    // Generate a random number between -20 and 20
    const randomNumber = Math.floor(Math.random() * 41) - 20;

    // Display the random number in the paragraph with id 'num'
    document.getElementById('num').innerText = randomNumber;

    // Check if the number is "Hot" or "Cold"
    const hotOrColdDiv = document.getElementById('hot-or-cold');
    if (randomNumber < 0) {
        hotOrColdDiv.innerText = 'Cold';
    } else {
        hotOrColdDiv.innerText = 'Hot';
    }
}