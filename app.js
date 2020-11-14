
document.addEventListener("DOMContentLoaded",()=>{

    // Create array of objects
    const cardArray=[
        
        {
            name:"pizza",
            img:"images/pizza.png"
        },
    
        {
            name:"milkshake",
            img:"images/milkshake.png"
        },
    
        {
            name:"ice-cream",
            img:"images/ice-cream.png"
        },
    
        {
            name:"hotdog",
            img:"images/hotdog.png"
        },
    
        {
            name:"fries",
            img:"images/fries.png"
        },
    
        {
            name:"cheeseburger",
            img:"images/cheeseburger.png"
        },
    
        {
            name:"pizza",
            img:"images/pizza.png"
        },
    
        {
            name:"milkshake",
            img:"images/milkshake.png"
        },
    
        {
            name:"ice-cream",
            img:"images/ice-cream.png"
        },
    
        {
            name:"hotdog",
            img:"images/hotdog.png"
        },
    
        {
            name:"fries",
            img:"images/fries.png"
        },
    
        {
            name:"cheeseburger",
            img:"images/cheeseburger.png"
        },

    ]

    
    //Define variable to work on later
    const resultDisplay=document.querySelector("#result");
    const grid=document.querySelector(".grid");

    let cardsChosen=[];
    let cardsChosenId=[];
    let cardsWon=[];

    // Shuffle the array for randomness
    cardArray.sort(()=>0.5-Math.random());


    // Loop through array and create a board
    // Set attribute source
    // Define data-id variable for identification
    // On click of each img element flip the img element
    // Attach each img element to grid class
    
    function createBoard(){
        for(let i=0;i<cardArray.length;i++){
            let card=document.createElement("img");
            card.setAttribute("src","images/blank.png");
            card.setAttribute("data-id",i);
            card.addEventListener("click",flipCard);
            grid.appendChild(card);

        }
    }

    
    // Create flip img function
    function flipCard(){
        let cardId=this.getAttribute("data-id");
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute("src",cardArray[cardId].img);
        if(cardsChosen.length===2){
            setTimeout(checkForMatch,500)
        }


    }


    // Check for match

function checkForMatch(){
    let cards=document.querySelectorAll("img");
    const optionOneId=cardsChosenId[0];
    const optionTwoId=cardsChosenId[1];
    if(cardsChosen[0]===cardsChosen[1]){
        alert("YOu've got it");
        cards[optionOneId].setAttribute("src","images/white.png");
        cards[optionTwoId].setAttribute("src","images/white.png");
        cardsWon.push(cardsChosen);
    }else{
        
        cards[optionOneId].setAttribute("src","images/blank.png");
        cards[optionTwoId].setAttribute("src","images/blank.png");
        alert("Sorry, try again")
    }
    cardsChosen=[];
    cardsChosenId=[];
    resultDisplay.textContent="Score: "+cardsWon.length;
    if(cardsWon.length===cardArray.length/2){
        resultDisplay.textContent="Congratulations, YOU won!!!"
    }
    
}
















createBoard();






})