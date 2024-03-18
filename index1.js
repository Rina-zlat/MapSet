const phones1 = ["+7-900-555-0181", "+7-900-555-0151", "+7-900-555-0184"];
const phones2 = ["+7-900-555-0151", "+7-900-555-0175", "+7-900-555-0199"];
const phones3 = ["+7-900-555-0199", "+7-900-555-0181", "+7-900-555-0163"];

const newArr = [...phones1, ...phones2, ...phones3];


let Arrey = new Set(newArr);


const hasTelef = Arrey.has("+7-900-555-0184");

console.log(
    `Номер "+7-900-555-0184" ${hasTelef ? "найден" : "не найден"}`
);


