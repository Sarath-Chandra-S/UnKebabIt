(function () {

    
    var capitalizeFirstLetter= function(word) {
        return word[0].toUpperCase().concat(word.substring(1).toLowerCase());
    };

    var unKebabIt = function (kebabString) {
        console.log(this.arguments);
        let seed = "";
        let words = kebabString.split('-');
        return words.reduce((accumulator, currentValue) =>
            accumulator
            .concat(capitalizeFirstLetter(currentValue)), seed);
    };

    this.unKebabThis = function (e) {
        let inputString = document.querySelector("#kebabText").value;
        let outputString = inputString == ""? inputString :unKebabIt(inputString);
        document.querySelector("#unKebabText").value = outputString;
    }

})();