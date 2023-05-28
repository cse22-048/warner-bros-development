// JavaScript code for the feedback page
document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the form element
    var feedbackForm = document.querySelector("main .feedback form");
  
    // Add event listener for form submission
    feedbackForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Retrieve the form values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var message = document.getElementById("message").value;
  
      // Perform validation (Example: Checking if name and message are not empty)
      if (name.trim() === "" || message.trim() === "") {
        alert("Please fill in all the required fields.");
        return;
      }
  
      // Perform further actions (Example: Sending the feedback to a server)
      // ...
  
      // Reset the form
      feedbackForm.reset();
      alert("Thank you for your feedback!");
    });
  });
  
  // JavaScript code for the search button
  document.addEventListener("DOMContentLoaded", function() {
    // Retrieve the search button element
    var searchButton = document.querySelector("header nav .search-box button");
  
    // Add event listener for search button click
    searchButton.addEventListener("click", function() {
      // Retrieve the search input value
      var searchInput = document.querySelector("header nav .search-box input").value;
  
      // Perform search (Example: Display search results)
      // ...
  
      alert("Performing search: " + searchInput);
    });
  });
  


