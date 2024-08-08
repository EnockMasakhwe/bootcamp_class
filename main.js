let lionID = prompt("Enter your Lion ID: "); 
let lionName;
let outputName = document.getElementById("header");

switch (lionID) {
    case "1279":
        lionName = "Enock Eliaro Masakhwe";
        break;
    case "1286":
        lionName = "Kelvin Ekuwom";
        break;
    case "1281":
        lionName = "Epakan Ruth Lotini";
        break;
    case "1289":
        lionName = "Anyonje Rael Nandi";
        break;
    case "1276":
        lionName = "John Mary Gorety";
        break;
    case "1292":
        lionName = "Velma Adung Nabe";
        break;
    case "1280":
        lionName = "Mwangi Kariuki";
        break;
    case "1284":
        lionName = "Alek Alaak Atem";
        break;
    case "1277":
        lionName = "Deruka Apat Bul";
        break;
    case "1282":
            lionName = "Ekai Ekuwom";
        break;
    case "1290":
            lionName = "Philimon Elailo";
        break;
    case "1294":
            lionName = "Meshack Immanuel";
        break;
    
    default: 
        lionName = "Guest";

}
outputName.innerHTML = "<h1 style='color:green; font-family: Arial; font-size: 40px; font-weight: bold;text-align: center;'>Hello " + lionName + "!</h1>";
let header2 = document.getElementById("header2");
header2.setAttribute("style", "font-size:40px; font-weight: bold; color:green; text-align: center;font-family: Arial;");

const image = document.getElementById('image');
const paragraph = document.getElementById('paragraph');
const container = document.getElementById('container');

// Add event listener for mouseover on the container
container.addEventListener('mouseover', function() {
    // Hide the image
    image.classList.add('hidden');
    // Show the paragraph
    paragraph.classList.add('visible');
});

// Add event listener for mouseout on the container (optional to show image again)
container.addEventListener('mouseout', function() {
    // Show the image
    image.classList.remove('hidden');
    // Hide the paragraph
    paragraph.classList.remove('visible');
});

document.getElementById('toggleButton').addEventListener('click', function() {
    var container = document.getElementById('traineesContainer');
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        container.classList.add('visible');
    } else {
        container.classList.remove('visible');
        container.classList.add('hidden');
    }
});
// // Get references to the button and the student names div
// const meetOurTrainees = document.getElementById('meetOurTrainees');
// const studentsNames = document.getElementById('studentsNames');

// // Add event listener for click on the button
// // // Add event listener for click on the button
// // meetOurTrainees.addEventListener('click', function() {
// //     // Toggle the display property of the student names div
// //     studentsNames.classList.toggle('hidden');
// // });

// meetOurTrainees.addEventListener('click', function() {
//   // Toggle the display property of the student names div
//   if (studentsNames.style.display === 'none') {
//     studentsNames.style.display = 'block';
//   } else {
//     studentsNames.style.display = 'none';
//   }
// });


function validateForm() {
    let isValid = true;
    let name = document.getElementById('name').value;
    let phoneNumber = document.getElementById('phoneNumber').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;
    let errorMessage = "";

    let errorElements = document.querySelectorAll('.error');
    errorElements.forEach(function(errorElement) {
        errorElement.remove();
    });

    if (name === "") {
        errorMessage = document.createElement("div");
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "Name is required";
        document.getElementById('name').after(errorMessage);
        isValid = false;
    }

    if (phoneNumber === "") {
        errorMessage = document.createElement("div");
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "Phone number is required";
        document.getElementById('phoneNumber').after(errorMessage);
        isValid = false;
    }

    if (phoneNumber.length !== 10) {
        errorMessage = document.createElement("div");
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "Phone number must be 10 digits";
        document.getElementById('phoneNumber').after(errorMessage);
        isValid = false;
    }

    if (email === "") {
        errorMessage = document.createElement("div");
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "Email is required";
        document.getElementById('email').after(errorMessage);
        isValid = false;
    } else {
        // Validate email format using regular expression
        if (!isValidEmail(email)) {
            errorMessage = document.createElement("div");
            errorMessage.classList.add("error");
            errorMessage.innerHTML = "Invalid email format";
            document.getElementById('email').after(errorMessage);
            isValid = false;
        }
    }

    if (password === "") {
        errorMessage = document.createElement("div");
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "Password is required";
        document.getElementById('password').after(errorMessage);
        isValid = false;
    }

    if (confirmPassword === "") {
        errorMessage = document.createElement("div");
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "Confirm Password is required";
        document.getElementById('confirmPassword').after(errorMessage);
        isValid = false;
    }

    if (password !== confirmPassword) {
        errorMessage = document.createElement("div");
        errorMessage.classList.add("error");
        errorMessage.innerHTML = "Passwords do not match";
        document.getElementById('confirmPassword').after(errorMessage);
        isValid = false;
    }

    return isValid;
}

// Function to validate email format
function isValidEmail(email) {
    // Basic email format regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}


// Event listener for form submission
const form = document.querySelector('.contactForm'); // Changed to class selector
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    if (!validateForm()) {
        alert('Please fill out all fields correctly.'); // Alert for validation error
    } else {
        alert('Form submitted successfully!'); // Alert for successful submission
        form.reset(); // Reset the form fields after successful submission
    }
});


document.getElementById('showCongratulations').addEventListener('click', function() {
    const congratsMessage = document.getElementById('congratsMessage');
    congratsMessage.classList.toggle('hidden');
  });
  

// // Event listener for form submission
// const form = document.getElementById('myForm');
// form.addEventListener('submit', function(event) {
//     if (!validateForm()) {
//         event.preventDefault(); // Prevent form submission if validation fails
//     }
// });

























// function validateForm (){
//     let isValid = true;
//     let name = document.getElementById('name').value;
//     let phoneNumber = document.getElementById('phoneNumber').value;
//     let email = document.getElementById('email').value;
//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirmPassword').value;
//     let errorMessage ="";

//     let errorElements = document.querySelectorAll('.error');
//     errorElements.forEach(function (errorElement){
//         errorElement.remove ();
//     });

//     if (name === "") {
//         errorMessage = document.createElement ("div");
//         errorMessage.classList.add("error");
//         errorMessage.innerHTML = "Name is required";
//         document.getElementById('name').after(errorMessage);
//         isValid = false;
//     }

//     if (phoneNumber === "") {
//         errorMessage = document.createElement ("div");
//         errorMessage.classList.add("error");
//         errorMessage.innerHTML = "Phone number is required";
//         document.getElementById('phoneNumber').after(errorMessage);
//         isValid = false;
//     }

//     if (phoneNumber.length < 10) {
//         errorMessage = document.createElement ("div");
//         errorMessage.classList.add("error");
//         errorMessage.innerHTML = "Phone number must be 10 digits";
//         document.getElementById('phoneNumber').after(errorMessage);
//         isValid = false;
//     }

//     if (email === "") {
//         errorMessage = document.createElement ("div");
//         errorMessage.classList.add("error");
//         errorMessage.innerHTML = "Email is required";
//         document.getElementById('email').after(errorMessage);
//         isValid = false;
//     }

//     if 
// }