const searchInput = document.getElementById('search');
const enter = document.querySelector('.enter');
const btn = document.querySelector('.btn');
const list = document.querySelector('#list');

btn.addEventListener('click', () => {
    const value = enter.value
    if (value.trim() === "") {
        alert('Įveskite šalį')
        return
    }
    else {
        list.append(Object.assign(document.createElement('li'), { textContent: value }))
    }
})

searchInput.addEventListener("keyup", search)

function search() {
    const searchInputValue = searchInput.value

    const listElements = document.getElementsByTagName("li")

    for (let i = 0; i < listElements.length; i++) {
        if (listElements[i].innerHTML.toLocaleLowerCase().includes(searchInputValue) || listElements[i].innerHTML.toUpperCase().includes(searchInputValue)) {
            listElements[i].style.display = ""
        }
        else {
            listElements[i].style.display = "none"
        }
    }
}

/*
enterCountryBtn.addEventListener('click', () => {
    if (enterCountry.value !== '') {
        countryList.innerHTML += `<li>${enterCountry.value}</li>`;
    }
});
*/