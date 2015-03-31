//File Name: contact_me.js
//Author's Name: Sunny Gupta
//Website Name: Sunny Gupta Personal Portfolio (github.com/guptasunny664)
//File Description: javascript to validate the fields of the form if they are null or not. then send the mail.

function validateContactForm() 
{

    var subject = document.getElementById("txtSubject").value;
    var name = document.getElementById("txtName").value;
    var email = document.getElementById("txtEmail").value;
    var message = document.getElementById("txtMessage").value;

    if(subject==null || subject=="") {
        alert("Enter subject");
    }
    else if (name == null || name == "") {
        alert("Enter name");
    }
    else if (email == null || email == "") {
        alert("Enter email");
    }
    else if (message == null || message == "") {
        alert("Enter message");
    }
    else {
        sendMail();
    }
}

function sendMail() {
    
    var subject = document.getElementById("txtSubject").value;
    var name = document.getElementById("txtName").value;
    var email = document.getElementById("txtEmail").value;
    var message = document.getElementById("txtMessage").value;

    var body = "Name: " + name + "%0DEmail: " + email + "%0D%0D" + message;
    document.getElementById("btnSendMail").href = "mailto:gupta.sunny664@gmail.com?subject="+subject+"&body="+body;
}