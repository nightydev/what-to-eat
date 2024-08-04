import { Answer, FoodItem } from '@/types/types';

export const foodDatabase: FoodItem[] = [
  { name: "200g de Pollo asado", caloriesPerServing: 200, servings: 1, vegan: false, lactoseFree: true, nutFree: true },
  { name: "100g de Tofu", caloriesPerServing: 80, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "1 rebanada de Pan integral", caloriesPerServing: 120, servings: 1, vegan: true, lactoseFree: true, nutFree: false },
  { name: "1 vaso de Yogur", caloriesPerServing: 60, servings: 1, vegan: false, lactoseFree: false, nutFree: true },
  { name: "100g de Quinoa", caloriesPerServing: 120, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "150g de Salmón a la parrilla", caloriesPerServing: 230, servings: 1, vegan: false, lactoseFree: true, nutFree: true },
  { name: "1 plato de Ensalada de espinacas", caloriesPerServing: 80, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "50g de Hummus", caloriesPerServing: 70, servings: 1, vegan: true, lactoseFree: true, nutFree: false },
  { name: "1 Aguacate", caloriesPerServing: 160, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "30g de Almendras", caloriesPerServing: 170, servings: 1, vegan: true, lactoseFree: true, nutFree: false },
  { name: "150g de Pechuga de pavo", caloriesPerServing: 110, servings: 1, vegan: false, lactoseFree: true, nutFree: true },
  { name: "1 Huevo", caloriesPerServing: 70, servings: 1, vegan: false, lactoseFree: true, nutFree: true },
  { name: "100g de Lentejas", caloriesPerServing: 100, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "150g de Boniato", caloriesPerServing: 90, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "100g de Arroz integral", caloriesPerServing: 110, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "1 Manzana", caloriesPerServing: 52, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "100g de Brócoli", caloriesPerServing: 34, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "100g de Pasta integral", caloriesPerServing: 157, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "1 vaso de Leche de almendra", caloriesPerServing: 40, servings: 1, vegan: true, lactoseFree: true, nutFree: false },
  { name: "1 cucharada de Mantequilla de cacahuete", caloriesPerServing: 94, servings: 1, vegan: true, lactoseFree: true, nutFree: false },
  { name: "1 Pera", caloriesPerServing: 57, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "100g de Zanahorias", caloriesPerServing: 41, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "100g de Fresas", caloriesPerServing: 32, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "150g de Pollo a la plancha", caloriesPerServing: 165, servings: 1, vegan: false, lactoseFree: true, nutFree: true },
  { name: "150g de Ternera magra", caloriesPerServing: 250, servings: 1, vegan: false, lactoseFree: true, nutFree: true },
  { name: "150g de Batata", caloriesPerServing: 86, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "100g de Garbanzos", caloriesPerServing: 164, servings: 1, vegan: true, lactoseFree: true, nutFree: true },
  { name: "100g de Atún enlatado", caloriesPerServing: 116, servings: 1, vegan: false, lactoseFree: true, nutFree: true },
  { name: "100g de Champiñones", caloriesPerServing: 22, servings: 1, vegan: true, lactoseFree: true, nutFree: true }
];

export function filterFoods(answers: Answer[]): FoodItem[] {
  const lactoseIntolerant = answers[7] === true;
  const vegan = answers[8] === false;
  const nutAllergic = answers[9] === true;

  return foodDatabase.filter(food => {
    if (lactoseIntolerant && !food.lactoseFree) return false;
    if (vegan && !food.vegan) return false;
    if (nutAllergic && !food.nutFree) return false;
    return true;
  });
}
