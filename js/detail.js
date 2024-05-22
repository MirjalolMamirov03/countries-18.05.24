const countryDetail = document.querySelector('.country-detail')

let countryName = new URLSearchParams(window.location.search)
    countryName = countryName.get('name')


    async function fetchCountryDetail () {
        try {
            const response = await fetch (`https://restcountries.com/v3.1/name/${countryName}`)
            const data = await response.json();
            // console.log(data);
            data.forEach((country) => {
                console.log (country)

                const lang = Object.values(country.languages).join(',') 
                console.log(lang);
                const currence = Object.keys(country.currencies).join(',')
                console.log(currence);

                countryDetail.innerHTML = `
                <img src="${country.flags.svg}" alt="${country.flags.alt}" class="country-detail__img">

                <div class="country-detail__desc">
                    <h3 class="country-detail__title">${country.name.common}</h3>

                    <div class="country-detail__information">
                        <div class="country-detail__population">
                            <p class="country-detail__text"><b>Native Name:</b> ${country.subregion} </p>
                            <p class="country-detail__text"><b>Population:</b> ${country.population} </p>
                            <p class="country-detail__text"><b>Region:</b> ${country.region}  </p>
                            <p class="country-detail__text"><b>Sub Region:</b> ${country.subregion} </p>
                            <p class="country-detail__text"><b>Capital:</b> ${country.capital} </p>
                        </div>
                        <div class="country-detail__lang">
                            <p class="country-detail__text"><b>op Level Domain:</b> .be </p>
                            <p class="country-detail__text"><b>Currencies:</b> ${currence}  </p>
                            <p class="country-detail__text"><b>Languages:</b> ${lang} </p>
                        </div>
                    </div>

                    <div class="country-border">
                        <h4 class="country-border__title">Border Countries: </h4>
                        <ul class="country-border__list">
                            <li class="country-border__item"><a href="#!" class="country-border__link">France</a></li>
                            <li class="country-border__item"><a href="#!" class="country-border__link">Germany</a></li>
                            <li class="country-border__item"><a href="#!" class="country-border__link">Netherlands</a></li>
                        </ul>
                    </div>

                </div>
                `
            });
        } catch (error) {
            console.error("Xatolik", error)
        }
    }
    
    fetchCountryDetail()