/*
    Function to toggle the visibility of the button
    Gamespot uses svg for dropdown toggle and close dropdown button
    Id names can be the same on multiple elements or single elements
*/
//DEPRECATED
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
//DEPRECATED
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
            
            if (url == 'deals.html') {
                // after a disgusting amount of guess and check trying to tracking this event from the start of index.html
                const checkboxes = document.querySelectorAll('input[type=checkbox]');
                checkboxes.forEach((checkbox) => {
                    checkbox.addEventListener('change', getTotals);
                });
            }
        });
}

function doTheMath(p0Arr, p1Arr) {
    if (!p0Arr || p0Arr.length === 0) { return [0, 0]; }

    totals = { 'subtotal': 0, 'savings': 0 };

    for (let i = 0; i < p0Arr.length; i++) {
        totals.subtotal += parseFloat(p1Arr[i])
        totals.savings += parseFloat(p0Arr[i]) - parseFloat(p1Arr[i]);
    }
    return [totals.subtotal, totals.savings];
}

function getTotals() {
    const p0Arr = [];
    const p1Arr = [];

    const subtotalOutput = document.getElementById('subtotal');
    const savingsOutput = document.getElementById('savings');
    
    // had help finding query search terms
    const checkedRows = document.querySelectorAll('tr.prod input[type=checkbox]:checked');
    checkedRows.forEach( row => {
        // grab the .p# closest to .prod and put the textContent into the array
        p0Arr.push( row.closest('tr.prod').querySelector('.p0').textContent );
        p1Arr.push( row.closest('tr.prod').querySelector('.p1').textContent );
    });

    const subSavingsArr = doTheMath(p0Arr, p1Arr);
    // everything has to have different escape characters :/
    subtotalOutput.textContent = `$${subSavingsArr[0].toFixed(2)}`;
    savingsOutput.textContent = `$${subSavingsArr[1].toFixed(2)}`;
}