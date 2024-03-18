const words = ["храм", "авиамодель", "храм", "атаман", "интернет", "вестибюль", "интернет", "вестибюль", "вестибюль"];

const counts = {};

words.forEach(function (elem) {
    counts[elem] = (counts[elem] || 0) + 1;
});

console.log(counts); 

let arr = new Map(Object.entries(counts));

console.log(arr);

let arrey = arr.entries();

console.log(arrey);



