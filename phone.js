const searchPhone = () => {
    const searchfield = document.getElementById('searchfield');
    const searchValue = searchfield.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))

}