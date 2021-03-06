const searchPhone = () => {
    const searchfield = document.getElementById('searchfield');
    const searchValue = searchfield.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data =>
            displayResult(data.data.slice(0, 20)))
    searchfield.value = "";
}
//display result
const displayResult = phones => {
    //console.log(phones);
    if (phones.length == 0) {
        const phoneDetails = document.getElementById('phone-details');
        phoneDetails.textContent = "";
        const absenceMassege = document.getElementById('search-result')
        //console.log(absenceMassege)
        // absenceMassege.classList.add('text-info');
        absenceMassege.innerHTML = `<h3 class="mx-auto text-danger">Sorry Your Result Is Not Found</h3>`;

    }

    else {
        const phoneDetails = document.getElementById('phone-details');
        phoneDetails.textContent = "";
        const searchResult = document.getElementById('search-result');
        searchResult.textContent = "";
        phones.forEach(phone => {
            // console.log(phone);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `<div class="card">
            <img src="${phone.image}" class="card-img-top w-75 mx-auto pt-2" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h5 class="card-title"> Brand : ${phone.brand}</h5>
                <button onClick="SeeDetails('${phone.slug}')" class="btn btn-outline-secondary
                rounded-pill px-4 text-dark" style="background-image: linear-gradient(rgba(400, 65, 13, 0.87),rgba(380, 129, 18, 0.719)
                )" type="button"
                id="button-addon2">Detail</button>
            </div>
        </div>`;
            searchResult.appendChild(div)

        })
    }



}

//id fetch
const SeeDetails = PhoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/${PhoneId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
}
//See Detail
const displayDetails = details => {
    console.log(details)
    const phoneDetails = document.getElementById('phone-details');
    phoneDetails.textContent = "";
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `<img src="${details.image}" class="card-img-top w-50 mx-auto pt-3" alt="...">
    <div class="card-body">
        <h5 class="card-title">${details.name}</h5>
        <h5 class="card-title">Brand : ${details.brand}</h5>
       
    </div> `;
    if (details.releaseDate != "") {
        const p = document.createElement('p');
        p.classList.add('ps-3');
        p.innerText = (`reaseled date : ${details.releaseDate}`);
        div.appendChild(p);
    }
    else {
        const p = document.createElement('p');
        p.classList.add('ps-3');
        p.innerText = (`reaseled date : No Released Date Here`);
        div.appendChild(p);
    }


    for (const property in details.mainFeatures) {
        const p = document.createElement('p');
        p.classList.add('ps-3');
        p.innerText = (`${property}: ${details.mainFeatures[property]}`);
        div.appendChild(p);
    }

    for (const property in details.others) {
        const p = document.createElement('p');
        p.classList.add('ps-3');
        p.innerText = (`${property}: ${details.others[property]}`);
        div.appendChild(p);
    }


    phoneDetails.appendChild(div)



}

