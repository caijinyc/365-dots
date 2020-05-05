import { eat } from './math';

const dom = document.getElementById('root');

const h1 = document.createElement('h1');
h1.innerText = eat('apple');

dom.appendChild(h1);
