const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main');

addBtn.addEventListener('click',addNote);

function addNote(){
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML=`
        <div class="tool">
            <i class="save fas fa-save"></i>
            <i class="trash fas fa-trash"></i>
        </div>
        <textarea></textarea>`;

    const transIcon = note.querySelector('.trash');
    const saveIcon = note.querySelector('.save');
    const textarea = note.querySelector('textarea');

    transIcon.addEventListener("click",()=>{
        note.remove();
        saveNote();
    });

    saveIcon.addEventListener("click",saveNote);
    textarea.addEventListener("input",saveNote);

    main.appendChild(note);
}

function saveNote(){

    const notes = document.querySelectorAll('.note textarea');
    const data = [];

    for(let i = 0; i < notes.length; i++){
        data.push(notes[i].value);//su dung data luu du lieu
    }

    if(data.length === 0){
        localStorage.removeItem("notes");
    }else{
        localStorage.setItem("notes",JSON.stringify(data));//luu vao localstorage
    }

};

function loadNotes(){
    const IsNotes = JSON.parse(localStorage.getItem('notes'));

    if(IsNotes !== null){
        IsNotes.forEach(noteText => {
            addNote();
            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length - 1];
            lastNote.value = noteText;
        });
    }else{
        addNote();
    }
}

loadNotes();