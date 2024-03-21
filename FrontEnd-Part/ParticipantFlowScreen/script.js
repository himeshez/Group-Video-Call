//constants
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');
const dots = document.getElementById('dots');
const op= document.getElementById('option');


if (bar){
    bar.addEventListener('click',() =>{
        nav.classList.add('active');
    })
}

if (close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

if (dots){
    dots.addEventListener('click',()=>{
        op.classList.add('active');
    })
}

$(document).ready(function() {
  var toggleAudioBtn = $('#dots')
  toggleAudioBtn.click(function() {
     toggleAudioBtn.toggleClass("fa-microphone-slash").toggleClass("fa-microphone");
     publisher.publishAudio(!publisher.stream.hasAudio); 
  });
});

$(document).ready(function() {
    // Event listener for closing the participant list
    $('#close').click(function() {
        $('#dots').removeClass('active'); // Remove the 'active' class to hide the participant list
    });

    // Event listener for clicking on participant names
    $('div[id="p"]').click(function() {
        var participantName = $(this).text().trim(); // Get the text content of the clicked participant name
        console.log('Clicked on participant:', participantName);
        // Add your logic here, such as opening a modal or showing participant details
    });

    // Event listener for clicking on the "Change Role" option
    $('div[id="1"]').click(function() {
        var participantName = $(this).closest('li').find('div[id="p"]').text().trim(); // Get the participant name associated with the clicked option
        console.log('Clicked on "Change Role" for participant:', participantName);
        // Add your logic here to handle changing the role of the participant
    });
});


$(document).ready(function() {
    $('#Roles').change(function() {
        var selectedRole = $(this).val(); // Get the selected role from the dropdown
        var participantName = "Participant 4"; // Replace with the appropriate participant name
        changeParticipantRole(participantName, selectedRole); // Call function to change participant role
    });
});

function changeParticipantRole(participantName, selectedRole) {
    // Logic to change the role of the specified participant
    // Example: Update the participant's role in the UI or send a request to the server
    console.log(`Changing role of ${participantName} to ${selectedRole}`);
    // Add your logic here
}
