import{
    Header
}from './header.js';
import{
    Page
}from './page.js';

class Main{
    constructor(){
        new Header();
        new Page();
    }
}

window.onload = () => {
    new Main();
}