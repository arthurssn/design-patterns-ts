import { MealBox } from './classes/meal-box'
import { Bean, Meat, Rice } from './classes/rice'

const rice = new Rice('Arroz', 20)
const beans = new Bean('Bean', 20)
const meat = new Meat('Meat', 30)

const mealBox = new MealBox()
mealBox.add(rice, beans, meat)
console.log(mealBox.getPrice())
