const countryDetail = document.querySelector('.country-detail')

let countryName = new URLSearchParams(window.location.search)
    countryName = countryName.get('name')
console.log(countryName);