import '../css/styles.css';
import debounce from "lodash.debounce";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import {fetchCountries} from './fetchCountries';
import {renderCauntry} from './renderCauntry';
import {renderCountriesList} from './renderCountriesList';

const DEBOUNCE_DELAY = 300;
export const countryList = document.querySelector('.country-list');
const inputRef = document.querySelector('#search-box');
const countryInfoRef = document.querySelector('.country-info');

inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));

function onInput (evt) {
    const name = evt.target.value.trim().toLowerCase();
    if (!name) {
        return;
        } else {
            countryList.innerHTML = '';
        };
        fetchCountries(name).then(data => {
            if (data.length === 1) {
                countryInfoRef.innerHTML = renderCauntry(data);
                countryList.innerHTML = '';
            } else if (data.length >= 2 && data.length <= 10) {
                renderCountriesList(data);
                countryInfoRef.innerHTML = '';
            } else {
                Notify.info("Too many matches found. Please enter a more specific name.", {
                    position: "center-top",
                    clickToClose: true
                      });
                countryInfoRef.innerHTML = '';
            }
        }).catch(error => {
            console.log(error.message);
            countryInfoRef.innerHTML = '';
            Notify.failure("Oops, there is no country with that name", {
                position: "center-top",
                clickToClose: true
                  });   
        });    
};
    
