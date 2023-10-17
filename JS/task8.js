let alphabet = ["a", "b", "c"];

for(let i = 0; i < alphabet.length; i++){
    document.write(alphabet[i] + "<br>");
}

alphabet[0] = "Alphabet";
alphabet[1] = "Humanum errare est";
alphabet[2] = "Z";

for(let i = 0; i < alphabet.length; i++){
    document.write(alphabet[i] + "<br>");
}