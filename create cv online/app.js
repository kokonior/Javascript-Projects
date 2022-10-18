const jokes = document.querySelector('#jokes');
const form = document.querySelector('#searchForm');
const resultDiv = document.querySelector('#searchResult')

form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    // API CALL
    const searchTerm = document.querySelector('#searchText').value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`)
    const bestMatch = res.data[0].show

    // ALL API DATA
    const id = bestMatch.id;
    const image = bestMatch.image.medium
    const premeired = bestMatch.image.medium
    const name = bestMatch.name 
    const rating = "Ratings: "+bestMatch.rating.average+" ⭐️"
    const summary = bestMatch.summary

 
    // CREATE DOM ELEMENTS HERE
    const img = document.createElement('IMG');    
    img.src = image;
    const h1 = document.createElement('H1');
    h1.innerText = name;
    const p = document.createElement('p');
    p.innerText = summary;
    const p2 = document.createElement('p');
    p2.innerText = rating;

    // STYLE CREATED ELEMENTS HERE
    h1.style.fontSize = '50px';

    p.style.fontFamily= 'Courgette, cursive';
    p.style.fontSize= '22px';
    p.style.fontWeight= '100'

    p2.style.fontSize = '20px';
    
    // APPEND ELEMENTS TO WEB PAGE
    resultDiv.append(img)
    resultDiv.append(h1)
    resultDiv.append(p)
    resultDiv.append(p2)

    form.reset();

    
})


