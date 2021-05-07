const maleRef = firebase.firestore().collection('Male');
const femaleRef = firebase.firestore().collection('Female');
const otherRef = firebase.firestore().collection('Other');

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

maleRef.onSnapshot(snapshot => {
    let hacks = [];
    snapshot.forEach(doc => {
        hacks.push({...doc.data(), id: doc.id})
    });
    // console.log(hacks);
    let html = ``;
    hacks.forEach(hacks => {        
        html += 
        `
        <div class="col-6">
            <div class="item">
                <h4 id="itemName">${hacks.name}</h4>
                <hr>
                <div class="row">
                    <div class="col-4">
                        <img id="itemPhoto" src="${hacks.photo}">
                    </div>
                    <div id="itemInfo" class="col-8">
                        <p><b>Age:</b></p>
                        <p>${hacks.age}</p><br><br>
                        <p><b>Gender:</b></p>
                        <p>${hacks.gender}</p><br><br>
                        <p><b>Email:</b></p>
                        <p>${hacks.email}</p><br><br>
                        <p><b>Number:</b></p>
                        <p>${hacks.number}</p><br><br>
                        <p><b>Address:</b></p>
                        <p>${hacks.address}</p>
                    </div>
                </div>
                <div style="width=80%; height: 1000px;" id="map"></div>
            </div>
        </div>
        `
        document.querySelector('.maleContainer').innerHTML = html;
    
    });
});

femaleRef.onSnapshot(snapshot => {
    let hacks = [];
    snapshot.forEach(doc => {
        hacks.push({...doc.data(), id: doc.id})
    });
    // console.log(requests);
    let html = ``;
    hacks.forEach(hacks => {
        html += 
        `
        <div class="col-6">
            <div class="item">
                <h4 id="itemName">${hacks.name}</h4>
                <hr>
                <div class="row">
                    <div class="col-4">
                        <img id="itemPhoto" src="${hacks.photo}">
                    </div>
                    <div id="itemInfo" class="col-8">
                        <p><b>Age:</b></p>
                        <p>${hacks.age}</p><br><br>
                        <p><b>Gender:</b></p>
                        <p>${hacks.gender}</p><br><br>
                        <p><b>Email:</b></p>
                        <p>${hacks.email}</p><br><br>
                        <p><b>Number:</b></p>
                        <p>${hacks.number}</p><br><br>
                        <p><b>Address:</b></p>
                        <p>${hacks.address}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        document.querySelector('.femaleContainer').innerHTML = html;
    });
});

otherRef.onSnapshot(snapshot => {
    let hacks = [];
    snapshot.forEach(doc => {
        hacks.push({...doc.data(), id: doc.id})
    });
    // console.log(requests);
    let html = ``;
    hacks.forEach(hacks => {
        html += 
        `
        <div class="col-6">
            <div class="item">
                <h4 id="itemName">${hacks.name}</h4>
                <hr>
                <div class="row">
                    <div class="col-4">
                        <img id="itemPhoto" src="${hacks.photo}">
                    </div>
                    <div id="itemInfo" class="col-8">
                        <p><b>Age:</b></p>
                        <p>${hacks.age}</p><br><br>
                        <p><b>Gender:</b></p>
                        <p>${hacks.gender}</p><br><br>
                        <p><b>Email:</b></p>
                        <p>${hacks.email}</p><br><br>
                        <p><b>Number:</b></p>
                        <p>${hacks.number}</p><br><br>
                        <p><b>Address:</b></p>
                        <p>${hacks.address}</p>
                    </div>
                </div>
            </div>
        </div>
        `
        document.querySelector('.otherContainer').innerHTML = html;
    });
});
