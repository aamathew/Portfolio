$(document).ready(function() {
    $("#contact-form").submit(function(e) {
      e.preventDefault(); // Prevent form submission
  
      // Get form data
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
  
      // Perform form validation (you can add more validation if needed)
  
      // Send form data using AJAX
      $.ajax({
        url: "https://formspree.io/f/xyylngw",
        method: "POST",
        data: {
          name: name,
          email: email,
          message: message
        },
        dataType: "json",
        success: function(response) {
          // Handle success response
          console.log("Form submitted successfully");
          // You can display a success message or redirect to another page here
        },
        error: function(xhr, status, error) {
          // Handle error response
          console.log("Form submission failed");
          // You can display an error message here
        }
      });
    });
  });
  