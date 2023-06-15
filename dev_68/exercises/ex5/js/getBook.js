
function getCategoryById(data,id) {
    const categoryObject = data.categorys.find(item => item.id === id);
    return categoryObject ? categoryObject.category : null;
}

function showData(data) {
    let divElelemnt = document.getElementById('categoryVal');
    let id = divElelemnt.dataset.value;
    let category = getCategoryById(data,id);

    const ulFlag = document.createDocumentFragment();
    h4 = document.createElement('h4')
    sHtml = 'Category: '+ category;
    h4.innerHTML = sHtml;
    ulFlag.appendChild(h4);
    document.getElementById("dataServices").appendChild(ulFlag);

}

fetch("../data/books.json")
    .then(response => response.json())
    .then(data => showData(data));