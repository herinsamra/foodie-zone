"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boiled Egg",
            price: 10,
            text: "Perfectly boiled eggs served with seasoning. Simple and satisfying.",
            image: "/images/egg.png",
            type: "breakfast",
          },
          {
            name: "RAMEN",
            price: 25,
            text: "Deliciously rich, savory ramen with flavorful broth and tender noodles.",
            image: "/images/ramen.png",
            type: "lunch",
          },
          {
            name: "GRILLED CHICKEN",
            price: 45,
            text: "Tender, flavorful grilled chicken with savory seasonings. Satisfying and delicious.",
            image: "/images/chicken.png",
            type: "dinner",
          },
          {
            name: "CAKE",
            price: 18,
            text: "Irresistible, moist layers topped with velvety frosting and delightful flavors.",
            image: "/images/cake.png",
            type: "breakfast",
          },
          {
            name: "BURGER",
            price: 23,
            text: "Juicy grilled patty, melted cheese, fresh veggies; pure burger bliss. ",
            image: "/images/burger.png",
            type: "lunch",
          },
          {
            name: "PANCAKE",
            price: 25,
            text: "Fluffy stacks of sweetness, oozing with delightful toppings and syrup.",
            image: "/images/pancake.png",
            type: "dinner",
          },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map