'use strict';
const popupBtn = document.querySelector('.add_btn')
const popupForm = document.querySelector('.popup_box')
const inputTitle = document.querySelector('#input_title')
const inputDesc = document.querySelector('#description')
const addNotebtn = document.querySelector('.form_btn')
const closeBtn = document.querySelector('.fa-xmark')
const noteApp = document.querySelector('.note_app')
const addContainer = document.querySelector('.add_container')
const settingsBtn = document.querySelector('.fa-ellipsis')
const text = document.querySelector('.add_text')

let isUpdate = false, editID = null


let currentDate;
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let notes = []

const allnotes = getNotes();
allnotes.forEach(note => createNote(note.title, note.content, note.id));

popupBtn.addEventListener('click', function () {
    popupForm.classList.toggle('activate')
})

addNotebtn.addEventListener('click', (e) => {
    e.preventDefault()
    addNotes()
    popupForm.classList.toggle('activate')

    inputTitle.value = inputDesc.value = ''
})

noteApp.addEventListener('click', function (e) {
    if (e.target.classList.contains('fa-ellipsis')) {
        const noteId = e.target.parentElement.parentElement.parentElement.id;
        const menu = e.target.nextElementSibling
        menu.classList.remove('activate')
        menu.addEventListener('click', function (e) {
            if (e.target.classList.contains('trash')) {
                menu.classList.add('activate')
                deleteNote(noteId)
            }
            if (e.target.classList.contains('edit')) {
                menu.classList.add('activate')
                popupForm.classList.remove('activate')

                updateNote(noteId)
            }
        })
    }

})


function updateNote(id) {
    isUpdate = true
    editID = id
    const savednotes = getNotes()
    const note = savednotes.find(note => note.id == id)

    inputTitle.value = note.title
    inputDesc.value = note.content
    text.textContent = 'Update A Note'
    addNotebtn.textContent = 'Update Note'
}

function deleteNote(id) {
    const savednotes = getNotes()
    const notes = savednotes.filter(note => note.id != id)
    saveNotes(notes)
    document.getElementById(id).remove()
}

function addNotes() {
    text.textContent = 'Add a new Note'
    addNotebtn.textContent = 'Add Note'
    let title = inputTitle.value
    let content = inputDesc.value
    if (title || content) {
        let date = new Date()
        let year = date.getFullYear()
        let day = date.getDate()
        let month = date.getMonth()

        if (isUpdate) {
            const savednotes = getNotes()
            const index = savednotes.findIndex(note => note.id == editID);

            savednotes[index].title = title
            savednotes[index].content = content

            saveNotes(savednotes)

            const noteEl = document.getElementById(editID)
            noteEl.querySelector('.title').textContent = title
            noteEl.querySelector('.desc').textContent = content
        }
        else {

            const obj = {
                id: Math.floor(Math.random() * 10000),
                title: title,
                content: content,
                date: `${months[month]} ${day}, ${year}`

            }
            notes.push(obj)

            createNote(obj.title, obj.content, obj.id, obj.date)
            saveNotes(notes)
        }
    }



}

function createNote(title, content, id, date) {
    let html = `
<div id='${id}' class="note_container container">
            <div class="note_header">
                <p class="title">${title}</p>
                <p class="desc">${content}</p>
            </div>
            <div class="date_container">
                <p class="date">${date}</p>
                <div class="settings">
                    <i class="fa-solid fa-ellipsis"></i>
                    <ul class="menu activate">
                        <li class="edit"><i class="fa-solid fa-pen"></i>Edit</li>
                        <li class="trash"><i class="fa-regular fa-trash-can"></i>Delete</li>
                    </ul>
                </div>
            </div>
        </div>
`
    return noteApp.insertAdjacentHTML('beforeend', html)
}


function saveNotes(notes) {
    localStorage.setItem('notes', JSON.stringify(notes))
}

function getNotes() {
    return JSON.parse(localStorage.getItem('notes') || '[]')
}

closeBtn.addEventListener('click', function () {
    popupForm.classList.add('activate')
})

// document.querySelector('.popup_box').addEventListener('click', function () {
    // popupForm.classList.toggle('activate')
// })

