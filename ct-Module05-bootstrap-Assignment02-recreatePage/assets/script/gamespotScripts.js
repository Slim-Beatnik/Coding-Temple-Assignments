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

function toggleNavIcons() {
    const openIcon = document.getElementById("navToggleOpen");
    const closeIcon = document.getElementById("navToggleClose");

    // Toggle visibility of the icons
    openIcon.classList.toggle("d-none");
    closeIcon.classList.toggle("d-none");
}

// copy height from absolute div and apply it to spacer div
function setSpacerHeight(spacerId, idToMatchHeight) {
    const spacer = document.getElementById(spacerId);
    const heightToMatch = document.getElementById(idToMatchHeight).offsetHeight;
    spacer.style.height = heightToMatch + 'px';
}

// adjust gamespot logo based on window size
function logoSizeUpdate() {
    const logo = document.getElementById('gsLogo');
    let windowWidth = window.innerWidth;
    if (windowWidth <= 768) {
        logo.style.width = '30px';
        logo.style.height = '30px';
    } else {
        logo.style.width = '40px';
        logo.style.height = '40px';
    }
}

function swapMainContent(url) {
    // fetch and get response (works like ready as long as files exist)
    fetch(url)
        .then(response => response.text())
        .then(fetchedUrlContent => {
            // swap new page into the content div
            document.getElementById('mainContent').innerHTML = fetchedUrlContent;
    });
}