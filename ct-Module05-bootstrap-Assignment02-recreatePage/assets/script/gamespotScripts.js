/*
    Function to toggle the visibility of the button
    Gamespot uses svg for dropdown toggle and close dropdown button
    Id names can be the same on multiple elements or single elements
*/

function swapVisById(elId) {
    // in html, escape css id name -- '#elId' looks like '\#elId'
    const els = document.querySelectorAll(elId);
    els.forEach((el) => el.hidden = !el.hidden);
}

// copy height from absolute div and apply it to spacer div
function setSpacerHeight(spacerId, idToMatchHeight) {
    const spacer = document.getElementById(spacerId);
    const heightToMatch = document.getElementById(idToMatchHeight).offsetHeight;
    spacer.style.height = heightToMatch + 'px';
}

