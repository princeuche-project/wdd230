const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// initialize the Array

let chapterArrays = setChapterList() || [];


chapterArrays.forEach(chapter => {
    displayList(chapter)

});

button.addEventListener("click", () => {
    // make sure the input is not empty
    if (input.value != "") {
        // call the function that outputs the submitted chapter
        displayList(input.value);
        // add the chapter to the array
        chapterArrays.push(input.value);
        // update the localStorage with the new array
        setChapterList();
        // clear the input
        input.value = "";
        // set the focus back to the input
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");
    li.textContent = item;
    deleteButton.textContent = "❌";
    deleteButton.classList.add("delete");
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}
// function setChapterList() {
//     localStorage.setItem('myFavBOMList', JSON.stringify(chapterArrays));
// }

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chapterArrays = chapterArrays.filter(item => item !== chapter);
    setChapterList();
}