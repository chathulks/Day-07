function guessingNumber(){

    let randomNumber = Math.random()*10+1;
    let num = Math.floor(randomNumber);

    let userNumber = document.getElementById("guessNumber").value;

    if(userNumber == ""){
        alert("Please enter your number.!");
    }else if(num == userNumber){
        alert("Your Guessing Success.!");
    }else{
        alert("Tryagin Leter.!");
    }
    
}