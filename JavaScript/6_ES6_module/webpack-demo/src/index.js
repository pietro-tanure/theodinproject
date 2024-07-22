
// import _ from 'lodash';
import myName from './myName'
import { functionOne, functionTwo } from './myModule';
import './style.css';
import _ from 'lodash';
import Icon from './icon.png'
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';
import printMe from './print';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}
 

console.log(toml.title); // output `TOML Example`
console.log(toml.owner.name); // output `Tom Preston-Werner`
console.log(yaml.title); // output `YAML Example`
console.log(yaml.owner.name); // output `Tom Preston-Werner`
console.log(json.title); // output `JSON5 Example`
console.log(json.owner.name); // output `Tom Preston-Werner`

function component() {
	const element = document.createElement('div');
	const btn = document.createElement('button');

	//use your function
	element.textContent = myName('Cody') + functionOne() + functionTwo();
	// Lodash, now imported by this script
	// element.innerHTML = _.join(['Hello', 'webpack'], ' ');

	element.classList.add('hello');

	// Add the image to our existing div.
	const myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	console.log(Data);
	console.log(Notes);

	btn.innerHTML = 'Click me and check the console!';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());