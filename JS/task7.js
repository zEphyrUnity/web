let someArray = Array.from({length: 10}, () => Math.floor(Math.random() * 101));
someArray.sort();

for(let i = 0; i < someArray.length; i++){
    document.write(someArray[i] + "<br>");
}