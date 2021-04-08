import{
    Header
}from './header.js';

class Main{
    constructor(){
        new Header();
       
    }
}

window.onload = () => {
    new Main();
}