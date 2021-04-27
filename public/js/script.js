const newHack = document.querySelector('.new-hack form');

newHack.addEventListener('submit', (e) => {
    e.preventDefault();

    const addHack = firebase.functions().httpsCallable('addHack');

    addHack({
        name: newHack.nameField.value,
        gender: newHack.genderField.value,
        age: newHack.ageField.value,
        email: newHack.emailField.value,
        address: newHack.addressField.value,
        number: newHack.phoneField.value       

        // name: document.getElementById("nameField").value,
        // gender: document.getElementById("genderField").value,
        // age: document.getElementById("ageField").value,
        // email: document.getElementById("emailField").value,
        // address: document.getElementById("addressField").value,
        // number: document.getElementById("phoneField").value
    })
    .then(() => {
        alert('Submission Successful! Enjoy your visit!');
        newHack.reset();
    })
    .catch(error => {
        alert(error.message);
    }) 

})