export function renderCauntry(data){
    return /*html*/ `<h1><img src="${data[0].flags.svg}" alt="" height = "30" width = "50">${data[0].name.official}</h1>
    <ul>
    <li><p>Capital: <span>${data[0].capital[0]}</span></p></li>
      <li><p>Population: <span>${data[0].population}</span></p></li>
      <li><p>Languages: <span>${Object.values(data[0].languages)}</span></p></li>
    </ul>`
}   