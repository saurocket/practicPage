"use strict";
document.addEventListener('DOMContentLoaded', () => {
    
    function heightElement(selector) {
        let height = document.querySelector(selector).clientHeight;
        
        return height;
    }
    
    let width = heightElement('.header') + heightElement('.hero');
    document.querySelector('.background-header').style.height = width + 'px';
    
});