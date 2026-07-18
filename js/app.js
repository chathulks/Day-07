function guessingNumber() {

    let randomNumber = Math.random() * 10 + 1;
    let num = Math.floor(randomNumber);

    let userNumber = document.getElementById("guessNumber").value;

    if (userNumber == "") {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        alert("Please enter your number.!");
    } else if (num > userNumber) {
        alert("Your enter number Greater than Random number!");
    } else if (num < userNumber) {
        alert("Your enter number Less than Random number!");
    } else if (num == userNumber) {
        alert("Your Guessing Success.!");
    } else {
        alert("Tryagin Leter.!");
    }

}