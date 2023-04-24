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

const brunch = document.querySelector("#brunch");
const rice = document.querySelector("#rice");
const noodle = document.querySelector("#noodle");
const buffet = document.querySelector("#buffet");
const others = document.querySelector("#others");

let pickMealList = [];

let category = [brunch, rice, noodle, buffet, others];

console.log(rice);
function pickMeal() {
   category.forEach((i) => {
      if (i.checked) {
         mealList.forEach((j) => {
            if (j.category.includes(i.name)) {
               pickMealList.push(j);
            }
         });
      }
   });
   pickMealList = pickMealList.filter(function (element, index, self) {
      return self.indexOf(element) === index;
   });
}

roll.addEventListener("click", function () {
   pickMeal();
   if (pickMealList.length > 0) {
      console.log("TRUE");
      random = Math.floor(Math.random() * pickMealList.length);
      answer.innerText = pickMealList[random].name;
   } else {
      console.log("FALSE");
      random = Math.floor(Math.random() * mealList.length);
      answer.innerText = mealList[random].name;
   }
   pickMealList = [];
});
