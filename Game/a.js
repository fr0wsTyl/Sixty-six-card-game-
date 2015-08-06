 var cards = ['./images/9-karo.png', './images/9-pika.png', './images/9-spatiq.png', './images/9-kupa.png', './images/10-karo.png', './images/10-pika.png', './images/10-spatiq.png', './images/10-kupa.png', './images/J-karo.png', './images/J-pika.png', './images/J-spatiq.png', './images/J-kupa.png', './images/Q-karo.png', './images/Q-pika.png', './images/Q-spatiq.png', './images/Q-kupa.png', './images/K-karo.png', './images/K-pika.png', './images/K-spatiq.png', './images/K-kupa.png', './images/A-karo.png', './images/A-pika.png', './images/A-spatiq.png', './images/A-kupa.png'];
    var cardsNums = ['9ka', '9p', '9s', '9ku', '10ka', '10p', '10s', '10ku', 'Jka', 'Jp', 'Js', 'Jku', 'Qka', 'Qp', 'Qs', 'Qku', 'Kka', 'Kp', 'Ks', 'Kku', 'Aka', 'Ap', 'As ', 'Aku'];
    var cardBack = './images/card-back.png';
    var currentCards = [];
    var $playerOneFirstCard = $('#card-one-player-one');
    var $playerOneSecondCard = $('#card-two-player-one');
    var $playerOneThirdCard = $('#card-three-player-one');
    var $playerOneFourthCard = $('#card-four-player-one');
    var $playerOneFifthCard = $('#card-five-player-one');
    var $playerOneSixthCard = $('#card-six-player-one');

    var $playerTwoFirstCard = $('#card-one-player-two');
    var $playerTwoSecondCard = $('#card-two-player-two');
    var $playerTwoThirdCard = $('#card-three-player-two');
    var $playerTwoFourthCard = $('#card-four-player-two');
    var $playerTwoFifthCard = $('#card-five-player-two');
    var $playerTwoSixthCard = $('#card-six-player-two');

    var $currentCardsPlayerOne = $('#current-card-player-one');
    var $currentCardsPlayerTwo = $('#current-card-player-two');

    var playerOnePushedCard = '';
    var playerTwoPushedCard = '';

    var cardsWinner = 12;
    var cardsLoser = 13;

    var isThirteen = true;
    var isStepTwo = false;
