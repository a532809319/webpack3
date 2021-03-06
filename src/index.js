import _ from 'lodash';
import printMe from './print.js';
import './b.css'
import Library from './library';
import './style.scss'
import './f.ts';


if (module.hot) {
    module.hot.accept('./b.css', function() {
        console.log('Accepting the updated library module!');
        Library.log();
    })
}
function component() {

    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());