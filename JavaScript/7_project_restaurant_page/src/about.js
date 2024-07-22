export default function loadAbout(){
    const content = document.createElement('div');
    content.id = "info";

    // Create header
    const header = document.createElement('h1');
    header.textContent = 'Contact Us';
    content.appendChild(header);

    // Create info
    const info = document.createElement('div');
    content.appendChild(info);

    const p1 = document.createElement('p');
    p1.textContent = 'Manager';
    info.appendChild(p1);

    const p2 = document.createElement('p');
    p2.textContent = '000-111-2222';
    info.appendChild(p2);

    const p3 = document.createElement('p');
    p3.textContent = 'email@example.com';
    info.appendChild(p3);
    
    return content
}