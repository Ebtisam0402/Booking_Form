// When the form is submitted, validate
document.getElementById('booking-form').onsubmit = () => {

    clearErrors();

//Flag variable to determine if form data is valid
let isValid = true;
//validiate first name
let destination = document.getElementById('destination').value.trim();
if(destination === "none" ){
document.getElementById("err-destination").style.display = "block";
isValid = false;
}

// Validate number of travelers
    let travelers = parseInt(document.getElementById('travelers').value);
    if(isNaN(travelers) || travelers <= 0) {
        
        document.getElementById("err-travelers").style.display = "block";
        isValid = false;
    }

// return isvalid flag
return isValid;

}

function clearErrors(){
    let errors = document.getElementsByClassName("error");
    for(let i=0; i<errors.length; i++){
        errors[i].style.display = "none";
    }
}