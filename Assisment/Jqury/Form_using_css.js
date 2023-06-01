function ValidDate() {
    var name = document.getElementById("name").value;
    if (name == "") 
    {
        alert("pls Enter Name!")
        document.getElementById("name").focus();
        return false;
        
    }
    // email mate
    var email = document.getElementById("email").value;
    if (email == "") 
    {
        alert("Pls Enter the Email!")
        document.getElementById("email").focus();
        return false;
        
    }
    //mobile mate 
    var mobile = document.getElementById("mobile").value;
    if (mobile == "") 
    {
        alert("pls Enter the Mobile Numbe!")
        document.getElementById("mobile").focus()
        return false;    
    }

    // select gender
    var gender = document.getElementById("gender").value;
    if (gender == "") 
    {
        alert("Pls Select the Gender!")
        document.getElementById("gender").focus();
        return false;    
    }

    // dob mate
    var dob = document.getElementById("dob").value;
    if (dob == "") 
    {
        alert("Pls Enter the DOB !")
        document.getElementById("dob").focus();
        return false;   
    }
    // Address mate

    var Address = document.getElementById("Address").value;
    if (Address == "") 
    {
        alert("Pls Enter the Address !")
        document.getElementById("Address").focus();
        return false;   
    }
    // city mate

    var city = document.getElementById("city").value;
    if (city == "") 
    {
        alert("Pls Enter the City !")
        document.getElementById("city").focus();
        return false;   
    }
    // pincode 

    var pincode = document.getElementById("pincode").value;
    if (pincode == "") 
    {
        alert("Pls Enter the Pincode !")
        document.getElementById("pincode").focus();
        return false;   
    }
    // select state
    var state = document.getElementById("state").value;
    if (state == "") 
    {
        alert("Pls Enter the State Name !")
        document.getElementById("state").focus();
        return false;   
    }

    // chekbox mate
    var chek = document.getElementById("chek").value;
    if (chek == "") 
    {
        alert("Pls Select the Specialization !")
        document.getElementById("chek").focus();
        return false;   
    }
    // password

    var password = document.getElementById("password").value;
    if (password == "") 
    {
        alert("Pls Select the Specialization !")
        document.getElementById("password").focus();
        return false;   
    }



    
}