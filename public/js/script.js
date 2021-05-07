const button = document.querySelector('.call');
button.addEventListener('click', (e) => {
    e.preventDefault();

    var checkBox = document.getElementById("checkbox");
    if(checkBox.checked){
        console.log("checked");
        // submitHack();
        getLocation();
    }
    else{
        console.log("unchecked");
        alert("You must accept the Terms and Conditions in order to register");
    } 
});

function getLocation() {
    const newHack = document.querySelector('.new-hack form');
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
            address: newHack.addressField.value,
            key: 'AIzaSyCROu2-uxM2krjhKwIOr9s18Owgy3lTfew'
        }
    })
    .then(function(response){
        const latLocation = response.data.results[0].geometry.location.lat;
        const lngLocation = response.data.results[0].geometry.location.lng;

        $("#latContainer").append(
            "<input style='display: none;' type='text' name='latField' value="+latLocation+">"
        );

        $("#lngContainer").append(
            "<input style='display: none;' type='text' name='lngField' value="+lngLocation+">"
        );

        submitHack();
    })
    .catch(function(error){
        console.log(error);
    });
}

function submitHack() {
    const newHack = document.querySelector('.new-hack form');
    const addHack = firebase.functions().httpsCallable('addHack');
    
    addHack({
        name: newHack.nameField.value,
        gender: newHack.genderField.value,
        age: newHack.ageField.value,
        email: newHack.emailField.value,
        address: newHack.addressField.value,
        number: newHack.phoneField.value,
        photo: newHack.photoField.value,
        lat: newHack.latField.value,
        lng: newHack.lngField.value
        

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

}

function hinge() {
    const logoBrand = document.querySelector('.nav-logo');

    logoBrand.classList.add('animate__animated', 'animate__hinge');
}

function changeText() {
    const plymouthText = document.querySelector('.plymouth');
    const permitionText = document.querySelector('.permition');
    const plymouthImg = document.getElementById('plymouthImg');

    plymouthText.style.display = "none";
    permitionText.style.display = "block";
    plymouthImg.style.filter = "grayscale(100%)";
}
