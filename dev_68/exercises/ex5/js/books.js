if (window.location.href === 'http://localhost/index.php') {
    localStorage.setItem("selectedOption", "None");
}

function change() {
    let selectedOption = document.getElementById("categorySelect").value;
    localStorage.setItem("selectedOption", selectedOption);
    window.location.href = selectedOption;
}

function showData(data) {
    const ulFlag = document.createDocumentFragment();
    select = document.createElement('select');
    select.id = "categorySelect";
    select.className  = "form-select";
    select.onchange = change;
    const storedOption = localStorage.getItem("selectedOption");
    ulFlag.appendChild(select);
    const option = document.createElement('option');
    option.value = `index.php`;
    sHtml = `None`;
    option.innerHTML = sHtml;
    select.appendChild(option);
    for (const key in data.categorys) {
        const option = document.createElement('option');
        option.value = `index.php?categoryId=${data.categorys[key].id}`;
        sHtml = `${data.categorys[key].category}`;
        option.innerHTML = sHtml;
        if (option.value === storedOption) {
            option.selected = true;
        }
        select.appendChild(option);
    }
    document.getElementById("dataServices").appendChild(ulFlag);
}

fetch("data/books.json")
    .then(response => response.json())
    .then(data => showData(data));

