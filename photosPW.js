function verify(){
    const password = document.getElementById("pword").value;
     if (password === "ALEXSECURITYKEY2027PHOTOS") {
        window.location.href = "photos.html";
    } 
    
    else 
        {
        alert("WRONG PASSWORD");
    }
}