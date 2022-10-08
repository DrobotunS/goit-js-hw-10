import {countryList} from './index';

export function renderCountriesList(data) {
    data.forEach((country) => {
        const element = document.createElement("li");
        element.textContent = country.name.official;
        const image = document.createElement("img");
        image.src = `${country.flags.svg}`
        image.height = `20`;
        image.width = `35`;
        element.prepend(image)
        countryList.append(element);
    });
    };  