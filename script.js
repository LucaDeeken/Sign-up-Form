//grab inputfields and prevent them to turn red before the user enters something; this is supposed to happen after the input
const inputFields = document.getElementsByTagName("input");
for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].classList.add("touched");
    inputFields[i].addEventListener('blur', () => {
        inputFields[i].classList.remove("touched"); // Entferne die Klasse "untouched"
        inputFields[i].classList.add("untouched");      // Füge die Klasse "touched" hinzu
      });
};
