function isDupe(guess, array) {
    var dupe = false;
    array.forEach(function(number) {
        if (guess === number) {
            dupe = true
        }
    });
    return dupe;
}


$(document).ready(function() {
    $("#numInput").on("click", function() {
        $(this).val(' ');
    });

    var guesses = [];
    var randNum = Math.floor(Math.random(1)* 100);

    console.log(randNum);


    $("#restart").on("click", function() {
        guesses = [];
        randNum = Math.floor(Math.random(1)* 100);
        console.log(randNum);
        $("#numInput").val(' ');
        $('h1').text('Guess the Number');
        $('h1').removeClass('blinkdiv');
        $('#hotcold').text(' ');
        $('#yourguess').text(' ');
        $('span').text("5");
    });

    $("#hint").on("click", function() {
        if (guesses.length >= 1) {
            if (randNum % 2 === 0) {
                $('#hotcold').text('The number is '+ randNum/2 + ' + ' + randNum/2).show();
            }
            else {
                $('#hotcold').text('The number is one more than ' + (randNum - 1)).show();
            }
        }
        else {
            $('#hotcold').text("Why don't you try a guess first?").show();
        }
    });



    $("#guess").on("click", function() {
        var guess = +$("#numInput").val();
        if (guesses.length >= 5) {
            return;
        }
        // first if
        if (guesses.length >= 1) {
            debugger;
            if (isDupe(guess, guesses)) {
                // this is where dupe numbers go.
                $('#hotcold').text("Oops, you've already guessed that number").show();
            }
            else if (!(guess > 0) || !(guess < 101) || (guess === NaN)){
                $('#hotcold').text('please choose a number between 1 & 100').show();
            }
            else {
                guesses.push(guess);
                $('#yourguess').text('your guesses: ' + guesses.join(', ')).show();

                if (guess > randNum && guess <= randNum + 10) {
                    $('#hotcold').text("You're hot hot hot! Guess lower.").css('color', '#FAAA6A').show();
                }
                else if(guess < randNum && guess >= randNum - 10) {
                    $('#hotcold').text("You're hot hot hot!, Guess higher.").css('color', '#FAAA6A').show();
                }
                else if(guess > randNum && guess <= randNum + 20) {
                    $('#hotcold').text("You're getting warmer. Guess lower.").css('color', '#FACA4F').show();
                }
                else if(guess < randNum && guess >= randNum - 20){
                    $('#hotcold').text("You're getting warmer. Guess higher.").css('color', '#FACA4F').show();
                }
                else if(guess < randNum) {
                    $('#hotcold').text("You're ice cold. Guess higher.").css('color', '#94D7EF').show();
                }
                else if(guess > randNum) {
                    $('#hotcold').text("You're ice cold! Guess lower.").css('color', '#94D7EF').show();
                }
                else if(guess === randNum) {
                    $('h1').text('You Win!!!');
                    $('h1').addClass('blinkdiv');
                    $('#hotcold').css('display', 'none');
                    $('#yourguess').text(' ');
                }
            }
        }
        else {
            if (!(guess > 0) || !(guess < 101) || (guess === NaN)) {
                $('#hotcold').text('please choose a number between 1 & 100').show();
            }
            else {
            guesses.push(guess);
            $('#yourguess').text('your guesses: ' + guesses.join(', ')).show();
            }
            // next if statement
            if (guess > randNum && guess <= randNum + 10) {
                $('#hotcold').text("You're hot hot hot! Guess lower.").css('color', '#FAAA6A').show();
            }
            else if(guess < randNum && guess >= randNum - 10) {
                $('#hotcold').text("You're hot hot hot!, Guess higher.").css('color', '#FAAA6A').show();
            }
            else if(guess > randNum && guess <= randNum + 20) {
                $('#hotcold').text("You're getting warmer. Guess lower.").css('color', '#FACA4F').show();
            }
            else if(guess < randNum && guess >= randNum - 20){
                $('#hotcold').text("You're getting warmer. Guess higher.").css('color', '#FACA4F').show();
            }
            else if(guess < randNum) {
                $('#hotcold').text("You're ice cold. Guess higher.").css('color', '#94D7EF').show();
            }
            else if(guess > randNum) {
                $('#hotcold').text("You're ice cold! Guess lower.").css('color', '#94D7EF').show();
            }
            else if(guess === randNum) {
                $('h1').text('You Win!!!');
                $('h1').addClass('blinkdiv');
                $('#hotcold').text(' ');
                $('#yourguess').text(' ');
            }
        }
        // next if statement
        if (guesses.length >= 5) {
            if (guess === randNum) {
                $('span').text("0");
                $('#hotcold').text(" ").css('color', '#FAAA6A').show();
            }
            else {
                $('span').text("0");
            // end of guesses
                $('#hotcold').text("You lose, start over!").css('color', '#FAAA6A').show();
            }
        }
        else if (guesses.length === 4) {
            $('span').text("1");
        }
        else if (guesses.length === 3) {
            $('span').text("2");
        }
        else if (guesses.length === 2) {
            $('span').text("3");
        }
        else if (guesses.length === 1) {
            $('span').text("4");
        }

    });
});