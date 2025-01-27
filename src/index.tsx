import React from 'react';
import {createRoot} from 'react-dom/client';
import {MainComponent} from "./MainComponent";

document.body.innerHTML = '<div id="app"></div>';

const t: string = 'sobaka';
console.log(t);
const doc = document.getElementById('app');
if (doc) {
    const root = createRoot(doc);
    root.render(<MainComponent />);
}
