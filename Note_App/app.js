'use strict';

const btn = document.querySelector('.add_btn')
const noteApp = document.querySelector('.note_container')

getNotes().forEach(note => {
  const noteEl = createNoteEl(note.val, note.id)
  noteApp.insertBefore(noteEl, btn)
})

function createNoteEl(val, id) {
  const textEl = document.createElement('textarea')
  textEl.classList.add('note')
  textEl.placeholder = 'Empty Note'
  textEl.value = val

  textEl.addEventListener("dblclick", () => {
    const warning = confirm("Do you want to delete this note?");
    if (warning) {
      deleteNote(textEl, id);
    }
  });


  textEl.addEventListener('input', function () {
    updateNote(textEl.value, id)
  })
  return textEl
}


function deleteNote(el, id) {
  const notes = getNotes().filter(note => note.id != id)
  console.log(notes);
  setNotes(notes)
  noteApp.removeChild(el)
}

function updateNote(val, id) {
  const notes = getNotes()
  const current = notes.filter(note => note.id == id)[0]
  current.val = val
  setNotes(notes)
}


function addNote() {
  const notes = getNotes()

  const obj = {
    id: Math.floor(Math.random() * 10000),
    val: ''
  }

  const noteEl = createNoteEl(obj.val, obj.id)
  noteApp.insertBefore(noteEl, btn)

  notes.push(obj)
  setNotes(notes)
}

function setNotes(notes) {
  localStorage.setItem('notes', JSON.stringify(notes))
}

function getNotes() {
  return JSON.parse(localStorage.getItem('notes') || '[]')
}

btn.addEventListener('click', addNote)

