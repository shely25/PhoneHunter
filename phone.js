const searchPhone = () => {
    const searchfield = document.getElementById('searchfield');
    const searchValue = searchfield.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data.data))
    searchfield.value = "";
}

const displayResult = phones => {
    //console.log(phones);
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = "";
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <h5 class="card-title"> Brand : ${phone.brand}</h5>
                <button onClick="SeeDetails()" class="btn btn-outline-secondary bg-dark text-white" type="button"
                id="button-addon2">Detail</button>
            </div>
        </div>`;
        searchResult.appendChild(div)

    })
}


const SeeDetails = () => {
    console.log("clicked")
}