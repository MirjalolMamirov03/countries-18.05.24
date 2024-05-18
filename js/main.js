//   https://restcountries.com/v3.1/all

const countries = document.querySelector('.country-cards')
const input = document.querySelector('.search-form__inut')
const regioinSelect = document.querySelector('.search-form__select')

let url = "https://restcountries.com/v3.1/all"
let countryData;
async function fetchCountryData() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        // console.log(data); 
        const countrySort = data.sort((a, b) => {
            return a.name.common.localeCompare(b.name.common)
        })
        countryData = countrySort
        renderCountry(countryData)
        // console.log(countrySort);
    } catch (error) {
        console.log("Xatolik❌", error);
    }
}


function renderCountry(data) {
    
    countries.innerHTML = ""
    data.forEach(country => {
        // console.log(country);
        const cardLink = document.createElement('a')
        cardLink.classList.add('country-card')
        cardLink.setAttribute("href", "./country-inner.html")

        cardLink.innerHTML = `
        <img src="${country.flags.png}" alt="${country.flags.alt}" class="country-card__img">
        <div class="country-card__body">
          <h3 class="country-title">${country.name.common}</h3>
          <p class="country-text"><b>Population:</b> ${country.population}</p>
          <p class="country-text"><b>Region:</b>${country.region}</p>
          <p class="country-text"><b>Capital:</b> ${country.capital}</p>
        </div>
        `

        countries.append(cardLink)
    });

}

// input Search

input.addEventListener("input", function() {
    // console.log(input.value);

    let inputValue = input.value.toLowerCase()
    // console.log(inputValue);

    let filterCountry = countryData.filter(function (country) {
        return country.name.common.toLowerCase().includes(inputValue)
    })

    renderCountry(filterCountry)
})

// region Select
regioinSelect.addEventListener("change", () => {
    // alert('salom')
    const selectRegion = regioinSelect.value
    // console.log(selectRegion);
    
    if (selectRegion === "all") {
        renderCountry(countryData)
    }else {
        const filterRegionCountry = countryData.filter(country => country.region === selectRegion)
        renderCountry(filterRegionCountry)
    }
})



fetchCountryData()

