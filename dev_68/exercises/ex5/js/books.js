
function change() {
    let selectedOption = document.getElementById("categorySelect").value;
    let books = document.getElementsByClassName("col");
    let count = 0;
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        if (book.getAttribute("data-category") == selectedOption || selectedOption == 0) {
            book.style.display = 'flex';
            count++;
        } else {
            book.style.display = 'none';
        }
    }
    let noBook = document.getElementById("noBook");
    if (count == 0) {
        noBook.style.display = "block";
    } else {
        noBook.style.display = "none";
    }
}

function showData(data) {
    const ulFlag = document.createDocumentFragment();
    select = document.createElement('select');
    select.id = "categorySelect";
    select.className = "form-select";
    select.onchange = change;
    ulFlag.appendChild(select);
    const option = document.createElement('option');
    option.value = `0`;
    sHtml = `None`;
    option.innerHTML = sHtml;
    select.appendChild(option);
    for (const key in data.categorys) {
        const option = document.createElement('option');
        option.value = `${data.categorys[key].id}`;
        sHtml = `${data.categorys[key].category}`;
        option.innerHTML = sHtml;
        select.appendChild(option);
    }
    document.getElementById("dataServices").appendChild(ulFlag);
}

fetch("data/books.json")
    .then(response => response.json())
    .then(data => showData(data));

