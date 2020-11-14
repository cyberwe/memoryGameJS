
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
    const grid=document.querySelector(".grid");


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

    }





    // Check for match
















createBoard();






})