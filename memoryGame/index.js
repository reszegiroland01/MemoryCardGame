let animals = {
    questions: [
        {
            id: 1,
            name: "Oroszlán",
            flipped: false,
            matched: false
        },
        {
            id: 2,
            name: "Tigris",
            flipped: false,
            matched: false
        },
        {
            id: 3,
            name: "Elefánt",
            flipped: false,
            matched: false
        },
        {
            id: 4,
            name: "Zebra",
            flipped: false,
            matched: false
        },
        {
            id: 5,
            name: "Gorilla",
            flipped: false,
            matched: false
        },
        {
            id: 6,
            name: "Pingvin",
            flipped: false,
            matched: false
        },
        {
            id: 7,
            name: "Zsiráf",
            flipped: false,
            matched: false
        },
        {
            id: 8,
            name: "Kenguru",
            flipped: false,
            matched: false
        },
        {
            id: 9,
            name: "Oroszlán",
            flipped: false,
            matched: false
        },
        {
            id: 10,
            name: "Tigris",
            flipped: false,
            matched: false
        },
        {
            id: 11,
            name: "Elefánt",
            flipped: false,
            matched: false
        },
        {
            id: 12,
            name: "Zebra",
            flipped: false,
            matched: false
        },
        {
            id: 13,
            name: "Gorilla",
            flipped: false,
            matched: false
        },
        {
            id: 14,
            name: "Pingvin",
            flipped: false,
            matched: false
        },
        {
            id: 15,
            name: "Zsiráf",
            flipped: false,
            matched: false
        },
        {
            id: 16,
            name: "Kenguru",
            flipped: false,
            matched: false
        } 
    ]
}
let doubledCards = animals.questions;
let card1 = null
let card2 = null
let point = 0
let isChecking = false;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; 
    }
}
shuffle(doubledCards);
function renderMemoryCards(){
    let cards = ``
    doubledCards.forEach((question)=>{
        cards += 
        ` <div class="${question.flipped ? "bg-red-900" : "bg-slate-300"} w-[150px] h-[200px] shadow-md flex items-center justify-center rounded-2xl" onclick="saveCards(${question.id},'${question.name}')">
            <p>${question.flipped || question.matched ? question.name : ''}</p>
        </div>`      
    })
    document.getElementById("memoryCards").innerHTML = cards
}
renderMemoryCards()

function changeFlip(index) {
    doubledCards = doubledCards.map((question) => {
        if (question.id === index) {
            return {
                ...question,
                flipped: !question.flipped
            };
        } else {
            return question;
        }

    });
    renderMemoryCards();
}

function saveCards(id,value){
    if (isChecking) {
        return;
    }

    changeFlip(id)

    if(card1 === null){
        card1 = {
            id: id,
            value: value
        }
    }
    else{
        card2 = {
            id: id,
            value: value
        }
    }
    if (card1 !== null && card2 !== null) {
        isChecking = true; 
        if (card1.value === card2.value) {
            point++;
            console.log(point)
            // doubledCards = doubledCards.map((question) => {
            //     if (question.id === card1.id || question.id === card2.id) {
            //         return {
            //             ...question,
            //             matched: true
            //         };
            //     }
            //     return question;
            // });
            card1 = null;
            card2 = null;
            isChecking = false;  // Ellenőrzés vége, újra lehet kattintani
            renderMemoryCards();
        } else {
            setTimeout(() => {
                changeFlip(card1.id);
                changeFlip(card2.id);
                card1 = null;
                card2 = null;
                isChecking = false;  // Ellenőrzés vége, újra lehet kattintani
            }, 1000);
        }
    }
    
}
    

