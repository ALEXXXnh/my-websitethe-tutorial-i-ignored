function verify(){
    const password = document.getElementById("pword").value;
     if (password === "ALEXSECURITYKEY2027NOTES") {
        window.location.href = "notes.html";
    } 
    
    else 
        {
        alert("WRONG PASSWORD");
    }
}