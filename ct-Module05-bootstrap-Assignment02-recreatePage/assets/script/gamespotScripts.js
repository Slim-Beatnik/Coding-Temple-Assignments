/*
    Function to toggle the visibility of the button
    Gamespot uses svg for dropdown toggle and close dropdown button
    Id names can be the same on multiple elements or single elements
*/

function swapVisById(elId) {
    // in html, escape css id name -- '#elId' looks like '\#elId'
    const els = document.querySelectorAll(elId);
    els.forEach((el) => el.hidden = !el.hidden);
    console.log(els, els.hidden);
}