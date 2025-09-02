
// basic MVC setup
const mainContent = document.getElementById('content');
setupStatics();


// Setup static event listeners and elements (model code)
function setupStatics() {
console.log('setupStatics called');

    const newListButton = document.getElementById('newListButton');
    newListButton.addEventListener('click', newListCallback);
      listView();
}



// Callback for creating a new list (model code)
function newListCallback() {
    console.log('create new list');
    newListCreationView();
}


// view code to create a new list creation view
function newListCreationView() {
    // Get the content element
    const content = document.getElementById('content');
    
    // Clear the content
    content.innerHTML = '';
    
    // Create a section container
    const section = document.createElement('section');
    
    // Create label
    const label = document.createElement('label');
    label.textContent = 'Name:';
    label.setAttribute('for', 'listName');
    
    // Create text input
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'listName';
    input.value = 'default name';
    
    // Create OK button
    const okButton = document.createElement('button');
    okButton.textContent = 'OK';
    okButton.addEventListener('click', () => {
        console.log('OK clicked, list name:', input.value);
        listView();
    });
    
    // Create Cancel button
    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
        console.log('Cancel clicked');
      listView();
    });
    
    // Append all elements to the section
    section.appendChild(label);
    section.appendChild(input);
    section.appendChild(okButton);
    section.appendChild(cancelButton);
    
    // Append section to content
    content.appendChild(section);
}

 





//---------------------------------------------------------------------------------------------------------------
// List view part of the view code that generates list views to show user the saved lists
function listView(){
    
    mainContent.innerHTML = '';
    const list = document.createElement('div');
    list.innerHTML = '<h2>List View</h2><ul></ul>';
    mainContent.appendChild(list);
}

