const button = document.querySelector('.call');
button.addEventListener('click', () => {
    var checkBox = document.getElementById("checkbox");
    if(checkBox.checked){
        console.log("checked");
        submitHack();
    }
    else{
        console.log("unchecked");
        alert("You must accept the Terms and Conditions in order to register");
    } 
});

function submitHack() {
    const formContainer = document.querySelector('#formContainer');
    const addHack = firebase.functions().httpsCallable('addHack');
    addHack({
        name: document.getElementById("nameField").value,
        gender: document.getElementById("genderField").value,
        age: document.getElementById("ageField").value,
        email: document.getElementById("emailField").value,
        address: document.getElementById("addressField").value,
        number: document.getElementById("phoneField").value
    })
    .then(() => {
        formContainer.reset();
        alert('Submission Successful! Enjoy your visit!')
    })
    .catch(error => {
        alert(error.message);
    }) 
}