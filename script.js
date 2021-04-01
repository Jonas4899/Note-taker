const noteContent = document.getElementById('content_note');
const addBtn = document.querySelector('.add_note');
const notesList = document.querySelector('.note_list');

// To save the number of notes
let noteCount = 1;

addBtn.addEventListener('click', createNote);

// Create and show the note in the main screen
function createNote() {
  // Create the necessary elements to insert the note
  let noteWrapper = document.createElement('div');
  let title = document.createElement('h3');
  let noteDescription = document.createElement('p');
  let detailsBtn = document.createElement('button');
  detailsBtn.textContent = 'Details';
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';

  // Print the note number and add 1 to the note count
  title.textContent = 'Note ' + noteCount;
  noteCount += 1;
  noteDescription.textContent = noteContent.value;
  // emptying the input and focus it to enter a new value
  noteContent.value = '';
  noteContent.focus();

  // Append the elements into a div, then in the document
  noteWrapper.appendChild(title);
  noteWrapper.appendChild(noteDescription);
  noteWrapper.appendChild(detailsBtn);
  noteWrapper.appendChild(deleteBtn);
  // Add the note to the document
  notesList.appendChild(noteWrapper);

  deleteBtn.onclick = _ => {
    notesList.removeChild(noteWrapper);
    noteCount -= 1;
  };
  detailsBtn.addEventListener('click', showDetails);

  function showDetails() {
    const overlay = document.getElementById('overlay');
    const modal = document.querySelector('.modal');
    const modalTitle = document.querySelector('.modal-header .title');
    const modalBody = document.querySelector('.modal-body');
    const closeModal = document.querySelector('.modal-header .close-button');

    modalTitle.textContent = title.textContent;
    modalBody.textContent = noteDescription.textContent;

    overlay.classList.add('active');
    modal.classList.add('active');

    closeModal.onclick = _ => {
      overlay.classList.remove('active');
      modal.classList.remove('active');
    }
  }
}