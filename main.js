const addNoteBtn = document.querySelector(".addNote__btn");


const notes = JSON.parse(localStorage.getItem("notes"));

console.log(notes);
if (notes) {
    notes.forEach((note) => {
        addNote(note);
    });
}
addNoteBtn.addEventListener("click",()=>{
    addNote()
})


function addNote(text = ""){
    const note = document.createElement("div");
    note.innerHTML = `
        <div class="note">
            <div class ="tools">
                <a href="#" class="delete__btn">
                <img src="img/delete.png" alt="">

                </a>
                <a href="#" class="edit__btn">
                <img src="img/edit.png" alt="">

                </a>
            </div>
            <div class="main ${text ? "" : "hidden"}"></div>
            <textarea class="${text ? "hidden" : ""}"></textarea>
        </div>
    `
    document.body.appendChild(note);
    
    const editBtn = note.querySelector(".edit__btn")
    editBtn.addEventListener("click",function(){
        document.querySelector("textarea").readOnly = true 

    })
    const textArea = note.querySelector("textarea")
    textArea.value = text;


    const deleteBtn = note.querySelector(".delete__btn")
    deleteBtn.addEventListener("click",function(e){
        note.remove()
        updateList();

    })
    updateList()
  
}
function updateList(){
    const notesText = document.querySelectorAll("textarea");

    const notes = [];

    notesText.forEach((note) => {
        notes.push(note.value);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}
