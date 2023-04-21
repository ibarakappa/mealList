const mealList = [
   {
      name: "食在一方",
      category: ["brunch"],
      filter: false,
   },
   {
      name: "日十",
      category: ["brunch"],
      filter: false,
   },
   {
      name: "鹽行站",
      category: ["buffet", "rice"],
      filter: false,
   },
   {
      name: "鍋燒麵",
      category: ["noodle"],
      filter: false,
   },
   {
      name: "炒飯",
      category: ["rice"],
      filter: false,
   },
   {
      name: "八方雲集",
      category: ["others"],
      filter: false,
   },
   {
      name: "火鍋",
      category: ["others"],
      filter: false,
   },
   {
      name: "韓式料理",
      category: ["rice", "noodle"],
      filter: false,
   },
   {
      name: "小飯糰大飯糰",
      category: ["rice"],
      filter: false,
   },
   {
      name: "後校門滷肉飯",
      category: ["rice", "noodle"],
      filter: false,
   },
   {
      name: "魚耶",
      category: ["brunch", "rice", "noodle"],
      filter: false,
   },
   {
      name: "吳家鴨香飯",
      category: ["rice", "noodle"],
      filter: false,
   },
];

const roll = document.querySelector(".roll");
const answer = document.querySelector(".answer");

roll.addEventListener("click", function () {
   const random = Math.floor(Math.random() * mealList.length);
   answer.innerText = mealList[random].name;
});
