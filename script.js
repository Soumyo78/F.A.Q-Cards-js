let card_pos = [];

let faqs = [
    {question: "1. What is the capital of India ?", answer: "Ans: New Delhi."},
    {question: "2. How many states are there in India ?", answer: "Ans: 29 states and 7 union territories."},
    {question: "3. What is the current population of India ?", answer: "Ans: 135.26 crores (2018)."},
    {question: "4. What is the national bird of India ?", answer: "Ans: Peacock."},
    {question: "5. What is India's 1st super computer ?", answer: "Ans: PARAM 8000."},
    {question: "6. Who is the first Prime MInister of India ?", answer: "Ans: Rajendra Prasad."},
    {question: "7. Who is the Prime Minister of India ?", answer: "Ans: Narendra Damodardas Modi."},
    {question: "8. What is the National Anthem of India ?", answer: "Ans: 'Jan gana mana' written by Rabindranath Tagore."},
    {question: "9. What is the area of India ?", answer: "Ans: Over 3.3 million square kilometers."},
    {question: "10. What is the Length of India's Coastline ?", answer: "Ans: India's coastline extends for 7600 km."},
    {question: "11. Who is teh current President of India ?", answer: "Ans: Ram Nath Kovind."},
    {question: "12. What is the national flower of India ?", answer: "Ans: Lotus"}
]

for(let pos in faqs){
    card_pos.push(pos);
    var div_elem = document.createElement('div');
    div_elem.setAttribute('class', "div-cards")
    div_elem.setAttribute('id', "div-cards-"+pos);
    for(let key in faqs[pos]){
        var p_elem = document.createElement('p');
        p_elem.innerHTML = faqs[pos][key];
        div_elem.appendChild(p_elem);
        document.querySelector('.body-container').appendChild(div_elem);
    }
}

document.getElementById('search-btn').addEventListener("click", () =>{
    let item_no =(document.getElementById('search-box').value)-1;
    if(item_no < card_pos.length && item_no > 0){
        searched_div = document.getElementById('div-cards-'+item_no);
        searched_div.setAttribute('id', "srch-div")
        var body_container = document.querySelector('.body-container');
        while (body_container.hasChildNodes()) {
            body_container.removeChild(body_container.firstChild);
         }
        document.querySelector('.body-container').appendChild(searched_div);
    }
    else{
        alert("Question not found !");
        location.reload();
    }
    let temp_btn = document.getElementById('search-btn');
    temp_btn.innerHTML = "Refresh";
    temp_btn.setAttribute('id', "refresh-btn");
})

document.getElementById('search-btn').onclick = function(){
    document.getElementById('search-box').disabled = true;
    document.getElementById('refresh-btn').addEventListener("click", () =>{
        location.reload();
    })
}