// Adding event listener to the input field
const input = document.querySelector('input');

// UI implementation
const ui_action = new UI_actions();

// Create an instance of the GithubFinder class
const github = new GithubFinder();

// Event listener for keyup event on the input field
input.addEventListener('keyup', (e) => {
    // Get the value entered in the input field
    const textvalue = e.target.value;

    // Check if the input field is not empty
    if (textvalue !== "") {
        // Make a request to the GitHub API using the entered value
        github.get(textvalue).then((objectValue) => {
            console.log(objectValue);
            
            // Check if the GitHub API response indicates that the user is not found
            if (objectValue.profile.message == 'Not Found') {
                // Display an alert indicating that the user is not found
                ui_action.displayerr("User not Found", "alert");
            } else {
                // Display the user's repositories and profile
                ui_action.displayRepos(objectValue.repos);
                ui_action.displayProfile(objectValue.profile);
            }
        });
    } else {
        // Clear the user profile if the input field is empty
        ui_action.clearProfile();
    }
});
