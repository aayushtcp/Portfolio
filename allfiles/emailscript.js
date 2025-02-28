function sendMail() {
    if (!validateName() || !validateEmail() || !validatePhone() || !validateSubject() || !validateMessage()) {
        return;
    }

    let params = {
       name: document.getElementById("name").value,
       email: document.getElementById("email").value,
       phone: document.getElementById("phone").value,
       subject: document.getElementById("subject").value,
       message: document.getElementById("comments").value
    };
    emailjs.send("service_javb51n", "template_nkklit5", params)
       .then(function(response) {
          alert("Message sent successfully!");
       }, function(error) {
          alert("Failed to send message. Please try again later.");
       });
}

function validateName() {
    const name = document.getElementById("name").value;
    const regex = /^[a-zA-Z]+(?:\s[a-zA-Z]+){1,2}$/;
    if (!regex.test(name)) {
        document.getElementById("name").classList.add("error");
        document.getElementById("form_result").innerText = "Name must be 2 or 3 words, no symbols or numbers.";
        return false;
    } else {
        document.getElementById("name").classList.remove("error");
        document.getElementById("form_result").innerText = "";
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        document.getElementById("email").classList.add("error");
        document.getElementById("form_result").innerText = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email").classList.remove("error");
        document.getElementById("form_result").innerText = "";
        return true;
    }
}

function validatePhone() {
    const phone = document.getElementById("phone").value;
    const regex = /^\+?[0-9]{10,15}$/;
    if (!regex.test(phone)) {
        document.getElementById("phone").classList.add("error");
        document.getElementById("form_result").innerText = "Phone number must be valid, no symbols except +.";
        return false;
    } else {
        document.getElementById("phone").classList.remove("error");
        document.getElementById("form_result").innerText = "";
        return true;
    }
}

function validateSubject() {
    const subject = document.getElementById("subject").value;
    if (subject.length < 4 || subject.length > 40) {
        document.getElementById("subject").classList.add("error");
        document.getElementById("form_result").innerText = "Subject must be between 4 and 40 characters.";
        return false;
    } else {
        document.getElementById("subject").classList.remove("error");
        document.getElementById("form_result").innerText = "";
        return true;
    }
}

function validateMessage() {
    const message = document.getElementById("comments").value;
    if (message.length < 12) {
        document.getElementById("comments").classList.add("error");
        document.getElementById("form_result").innerText = "Message must be greater than 12 characters.";
        return false;
    } else {
        document.getElementById("comments").classList.remove("error");
        document.getElementById("form_result").innerText = "";
        return true;
    }
}