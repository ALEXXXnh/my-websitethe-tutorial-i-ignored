function verify(){
    const password = document.getElementById("pword").value;
     if (password === "ALEXSECURITYKEY2027SCHOOL") {
        window.location.href = "school.html";
    } 
    
    else 
        {
        alert("WRONG PASSWORD");
    }
}
