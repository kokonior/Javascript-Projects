display();
let addNote = document.getElementById('addBtn');
addNote.addEventListener("click",function(event){
    let textArea = document.getElementById("noteText");
    let input = document.getElementById("noteTitle"); //input refers to title
    let notes = localStorage.getItem("notes");
    
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let Obj = {
        title: input.value,
        text: textArea.value
    }
    if(textArea.value != "" && input.value != ""){
    notesObj.push(Obj);
    localStorage.setItem("notes", JSON.stringify(notesObj))
    textArea.value = "";
    input.value = "";;
}
else{
    alert("Empty notes NOT allowed. Please write a note.");
}
    
    display();
});

function display() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index){
        html += `<div class="card">
        <h2>${element.title}</h2>
       <p>${element.text}</p>
        <div class="removeBtn">
        <button id ="${index}" class="remove" onclick="deleteNote(this.id)"><i class="fa fa-times" aria-hidden="true" style="font-size: 30px; "></i></button>
        </div>
        <div class="editBtn">
        <button id ="${index}" class="edit" onclick="editNote(this.id)"><i class="fa fa-pencil" aria-hidden="true" style="font-size: 30px; "></i></button>
        </div>
      </div>`;
    });
    let notesElem = document.getElementById("cardBox");
    if (notesObj.length != 0){
        notesElem.innerHTML = html;
    }
    else{
        notesElem.innerHTML = `Sorry, no note exists. Add a note from the ADD NOTE section`;
    }

}

function deleteNote(index){

    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",   JSON.stringify(notesObj));
    display();
}

let search = document.getElementById('searchBox');
search.addEventListener('input', function(){

    let inputVal = search.value.toLowerCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

let addTxt = document.getElementById("noteText");
let addTitle = document.getElementById("noteTitle");

function editNote(index){
    
    if(addTxt.value !== "" || addTitle.value !== ""){
        return alert("Please clear the text and title to enable editing");
    }
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.findIndex((element, index) => {
        addTxt.value = element.text;
        addTitle.value = element.title;
    })
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    display();
}
