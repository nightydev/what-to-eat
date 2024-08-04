import { filterFoods } from './foodFilter';
import { Answer, FoodItem, Meal } from '@/types/types';

export function createMealPlan(answers: Answer[], totalCalories: number): Meal[] {
  const mealsCount = parseInt(answers[6] as string);
  const caloriesPerMeal = totalCalories / mealsCount;
  const suitableFoods = filterFoods(answers);

  let mealPlan: Meal[] = [];
  let usedFoods: Set<string> = new Set();

  for (let i = 0; i < mealsCount; i++) {
    const meal = chooseFoodsForMeal(suitableFoods, caloriesPerMeal, usedFoods);
    const totalMealCalories = meal.reduce((acc, item) => acc + item.caloriesPerServing * item.servings, 0);
    mealPlan.push({ meal: `Comida ${i + 1}`, items: meal, totalCalories: totalMealCalories });
  }

  return mealPlan;
}

function chooseFoodsForMeal(foods: FoodItem[], targetCalories: number, usedFoods: Set<string>): FoodItem[] {
  let selectedFoods: FoodItem[] = [];
  let currentCalories = 0;

  for (const food of foods) {
    if (!usedFoods.has(food.name) && currentCalories + food.caloriesPerServing * food.servings <= targetCalories) {
      selectedFoods.push(food);
      usedFoods.add(food.name);
      currentCalories += food.caloriesPerServing * food.servings;
      if (currentCalories >= targetCalories) break;
    }
  }

  return selectedFoods;
}
