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
  // $(document).ready(function() {:
  //   This line sets up a function to be executed when the document (HTML) has finished loading. It ensures that the code inside the function will run only when the document is ready.
    
  //   $("#contact-form").submit(function(e) {:
  //   This line attaches an event handler to the form with the ID "contact-form". It listens for the form submission event and executes the provided function when the event occurs. The function receives the event object (e) as an argument.
    
  //   e.preventDefault();:
  //   This line prevents the default form submission behavior. It stops the form from being submitted and the page from being refreshed.
    
  //   var name = $("#name").val();:
  //   This line retrieves the value entered in an input field with the ID "name" and assigns it to the variable name.
    
  //   var email = $("#email").val();:
  //   This line retrieves the value entered in an input field with the ID "email" and assigns it to the variable email.
    
  //   var message = $("#message").val();:
  //   This line retrieves the value entered in a textarea field with the ID "message" and assigns it to the variable message 
  // $.ajax({:
  //   This line starts an AJAX request using the $.ajax() function provided by jQuery.
    
  //   url: "https://formspree.io/f/xyylngw",:
  //   This line specifies the URL where the form data will be sent. In this case, it is set to "https://formspree.io/f/xyylngw". This URL is typically the endpoint that handles the form submission on the server.
    
  //   method: "POST",:
  //   This line specifies the HTTP method to be used for the AJAX request. In this case, it is set to "POST". It indicates that the data will be sent to the server using the POST method.
//   data: { name: name, email: email, message: message },:
// This line defines the data to be sent to the server. It includes the values of name, email, and message variables, which were obtained from the form inputs.

// dataType: "json",:
// This line specifies the expected data type of the response from the server. In this case, it is set to "json", indicating that the server should respond with JSON data.
// success: function(response) {:
//   This line sets up a success callback function to handle the response when the AJAX request is successful. The response from the server will be passed as an argument to this function.
  
//   console.log("Form submitted successfully");:
//   This line logs a success message to the browser's console, indicating that the form was submitted successfully. 
// console.log("Form submission failed");:
// This line logs an error message to the console if the AJAX request fails. It indicates that the form submission was not successful.