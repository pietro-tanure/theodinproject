export default function loadHome(){
    const content = document.createElement('div');
    content.id = "home";

    // Create header
    const header = document.createElement('div');
    header.classList.add('header');
    content.appendChild(header);

    const h1 = document.createElement('h1');
    h1.textContent = 'Mineirinho I';
    header.appendChild(h1);
    
    // const br = document.createElement('br');
    // header.appendChild(br);
    
    const h3 = document.createElement('h3');
    h3.textContent = 'Onde você come bem';
    header.appendChild(h3);
    
    // Create location
    const location = document.createElement('div');
    location.classList.add('leftgrid');
    content.appendChild(location);

    const location_h3 = document.createElement('h3');
    location_h3.textContent = "Location"
    location.appendChild(location_h3)

    const location_p = document.createElement('p');
    location_p.textContent = "1000 Av example, City Ville, Country"
    location.appendChild(location_p)

    // Create hours
    const hours = document.createElement('div');
    hours.classList.add('rightgrid');
    content.appendChild(hours);

    const hours_h3 = document.createElement('h3');
    hours_h3.textContent = "Hours"
    hours.appendChild(hours_h3)

    const hours_p = document.createElement('p');
    hours_p.textContent = "Monday: 7am - 7pm"
    hours.appendChild(hours_p)
    
    return content
}