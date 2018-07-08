$(document).ready(function () {

    console.log("loaded: create notes");
    function createNote() {
        var notesCategory = $('#notes-category').val();
        var notesTitle = $('#notes-title').val();
        var notesBody = $('#notes-body').val();
        var userId = parseInt($('#userid').text().trim(), 10); 
        var newNote = {
            category: notesCategory,
            title: notesTitle,
            body: notesBody,
            userId: userId

        };
        console.log(newNote)
        $.post("/api/notes", newNote)
            .then(console.log("created new note"));
        // Reload the page to get the updated list
        // Location.reload();            
    };
    $(document).on("click", "#publish-notes", function () {
        event.preventDefault();
        console.log("test button")
        createNote();
    });
    

});