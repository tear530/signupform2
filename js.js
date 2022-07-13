const btn = document.querySelector('#but');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');
const cards = document.querySelector('.cards');
const card = document.querySelector('.card');
const form = document.querySelector('.form1');



let myLibrary = [];

function Book(title, author, pages, readStatus, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus
    this.index = index;

}



function addBookToLibrary(title, author, pages, readStatus, index) {
    let book = new Book(title, author, pages, readStatus, index);
    myLibrary.push(book);
}




btn.addEventListener('click', () => {

    let a = (title.value);
    let b = (author.value);
    let c = (pages.value);
    let d = (read.checked);
    let index = (myLibrary.length);


    addBookToLibrary(a, b, c, d, index);
    appendData(a, b, c, d, index);
    form.reset();


});

function displayOnScreen() {
    myLibrary.forEach((val, index) => {

        appendData(val.title, val.author, val.pages, val.readStatus, index);


    });

}

function appendData(a, b, c, d, ind) {

    const el = document.createElement('div');
    el.classList.add('card');
    cards.appendChild(el);

    const para = document.createElement('p');
    para.classList.add('titles');
    para.textContent = `Title: ${a}`
    el.appendChild(para);

    const para1 = document.createElement('p');
    para1.classList.add('titles');
    para1.textContent = `Author: ${b}`
    el.appendChild(para1);

    const para2 = document.createElement('p');
    para2.classList.add('titles');
    para2.textContent = `Pages: ${c}`
    el.appendChild(para2);

    const para3 = document.createElement("BUTTON");

    if (d == "true" || d == true) {

        para3.classList.add('titles', 'read', "bts");
        para3.textContent = "Read";

    } if (d == "false" || d == false) {
        para3.classList.add('titles', 'noread', "bts");
        para3.textContent = "Unread";
    }

    el.appendChild(para3);

    para3.setAttribute('id', "b" + ind);



    const imgs = document.createElement('img');
    imgs.src = "/trashcan.png";
    imgs.classList.add('imgs');
    el.appendChild(imgs);


    imgs.setAttribute('id', ind);
    el.setAttribute('id', "div" + ind);



    document.getElementById(ind).addEventListener('click', () => {
        myLibrary.splice(ind, 1);
        reorderArray();
    });

    function reorderArray() {
        document.getElementById("div" + ind).remove();
        document.querySelectorAll('.card').forEach(card => cards.removeChild(card));
        displayOnScreen();

    }

    document.getElementById("b" + ind).addEventListener('click', () => {

        if (para3.textContent == "Unread") {

            para3.textContent = "Read";
            para3.classList.replace('noread', 'read');

        } else if (para3.textContent == "Read") {

            para3.textContent = "Unread"
            para3.classList.replace('read', 'noread');
        }


    });



}


addBookToLibrary("Harry Potter", "JK Rowling", "88", "true");
addBookToLibrary("Harry Potter2", "JK Rowling2", "88", "false");

displayOnScreen();



