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
    {question: "11. Who is teh current President of India ?", answer: "Ans: Ram Nath Kovind"},
    {question: "12. What is the national flower of India ?", answer: "Ans: Lotus"}
]

for(let pos in faqs){
    var div_elem = document.createElement('div');
    div_elem.setAttribute('id', "div-cards")
    div_elem.setAttribute('class', "div-cards-"+pos);
    for(let key in faqs[pos]){
        var p_elem = document.createElement('p');
        p_elem.innerHTML = faqs[pos][key];
        div_elem.appendChild(p_elem);
        document.querySelector('.body-container').appendChild(div_elem);
    }
}