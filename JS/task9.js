let arrayLength = 5;
let anotherArray = Array.from({length: arrayLength}, () => Math.floor(Math.random() * 11));
someArray.sort();

for(let i = 0; i < arrayLength ; i++){
    document.write(anotherArray[i] + "<br>");
}

document.write("<br>Инкрементированный на еденицу массив<br><br>")

for(let i = 0; i < arrayLength; i++){
    document.write(++anotherArray[i] + "<br>");
}