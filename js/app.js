function guessingNumber() {

    let randomNumber = Math.random() * 10 + 1;
    let num = Math.floor(randomNumber);

    let userNumber = document.getElementById("guessNumber").value;

    if (userNumber == "") {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Please enter your number.!",
            showConfirmButton: true,
        });
    } else if (num > userNumber) {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Your enter number Greater than Random number!",
            showConfirmButton: true,
        });
    } else if (num < userNumber) {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Your enter number Less than Random number!",
            showConfirmButton: true,
        });
    } else if (num == userNumber) {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your Guessing Success.!",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        Swal.fire({
            position: "center",
            icon: "warning",
            title: "Tryagin Leter.!",
            showConfirmButton: false,
            timer: 1500
        });
    }

}