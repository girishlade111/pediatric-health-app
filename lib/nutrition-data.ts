// Nutrition data organized by age ranges in months
type FoodGroup = {
  name: string
  description: string
  examples: string[]
  serving: string
}

type NutritionGuidance = {
  generalGuidelines: string
  foodGroups: FoodGroup[]
  feedingTips?: string[]
  foodsToAvoid?: string[]
}

type NutritionData = {
  [key: string]: NutritionGuidance
}

// Nutrition guidance based on age ranges
const nutritionData: NutritionData = {
  // 0-6 months
  "0-6": {
    generalGuidelines:
      "Breast milk or iron-fortified infant formula is the only food your baby needs for the first 6 months of life. Breastfeeding is recommended exclusively until 6 months of age.",
    foodGroups: [
      {
        name: "Breast Milk/Formula",
        description: "Provides all necessary nutrients for growth and development.",
        examples: ["Breast milk", "Iron-fortified infant formula"],
        serving: "On demand, typically 8-12 feedings in 24 hours",
      },
    ],
    feedingTips: [
      "Feed on demand, looking for hunger cues like rooting, sucking motions, or putting hands to mouth.",
      "Newborns typically feed every 2-3 hours, 8-12 times in 24 hours.",
      "As your baby grows, they may feed less frequently but take more milk at each feeding.",
      "Burp your baby during and after feedings to reduce gas and discomfort.",
    ],
    foodsToAvoid: [
      "Solid foods of any kind",
      "Honey (never give honey to infants under 12 months due to risk of botulism)",
      "Cow's milk or other milk alternatives",
      "Juice or other beverages",
    ],
  },

  // 6-8 months
  "6-8": {
    generalGuidelines:
      "Continue breast milk or formula as the primary source of nutrition. Begin introducing single-ingredient purees and soft foods. Watch for allergic reactions when introducing new foods.",
    foodGroups: [
      {
        name: "Breast Milk/Formula",
        description: "Remains the primary source of nutrition.",
        examples: ["Breast milk", "Iron-fortified infant formula"],
        serving: "24-32 ounces per day",
      },
      {
        name: "Cereals",
        description: "Iron-fortified infant cereals are often recommended as first foods.",
        examples: ["Rice cereal", "Oatmeal cereal", "Barley cereal"],
        serving: "1-2 tablespoons, gradually increasing to 1/4 cup daily",
      },
      {
        name: "Fruits",
        description: "Introduce single-ingredient fruit purees.",
        examples: ["Applesauce", "Mashed banana", "Pureed pears", "Pureed peaches"],
        serving: "1-2 tablespoons, gradually increasing to 2-4 tablespoons per feeding",
      },
      {
        name: "Vegetables",
        description: "Introduce single-ingredient vegetable purees.",
        examples: ["Pureed sweet potatoes", "Pureed carrots", "Pureed peas", "Pureed green beans"],
        serving: "1-2 tablespoons, gradually increasing to 2-4 tablespoons per feeding",
      },
    ],
    feedingTips: [
      "Start with thin purees and gradually move to thicker textures.",
      "Introduce one new food at a time and wait 3-5 days before introducing another to watch for allergic reactions.",
      "Offer solid foods after breast milk or formula feeding, 1-2 times per day.",
      "Look for signs that your baby is ready for solids: sitting with support, good head control, showing interest in food.",
    ],
    foodsToAvoid: [
      "Honey (until after 12 months)",
      "Cow's milk as a beverage (can be used in cooking)",
      "Added salt or sugar",
      "Choking hazards like whole grapes, nuts, popcorn, hot dogs",
      "Fruit juice",
      "Foods that commonly cause allergies (discuss with your pediatrician)",
    ],
  },

  // 9-11 months
  "9-11": {
    generalGuidelines:
      "Continue breast milk or formula while increasing variety and texture of solid foods. Begin offering soft finger foods to encourage self-feeding and development of fine motor skills.",
    foodGroups: [
      {
        name: "Breast Milk/Formula",
        description: "Still an important source of nutrition.",
        examples: ["Breast milk", "Iron-fortified infant formula"],
        serving: "16-24 ounces per day",
      },
      {
        name: "Grains",
        description: "Expand beyond infant cereals to include more textures.",
        examples: [
          "Iron-fortified infant cereals",
          "Soft pasta",
          "Soft rice",
          "Small pieces of bread or toast",
          "O-shaped cereals",
        ],
        serving: "1/4 cup cereals or grains per day",
      },
      {
        name: "Fruits",
        description: "Progress from purees to mashed and small soft pieces.",
        examples: ["Mashed banana", "Soft diced peaches", "Soft diced pears", "Small pieces of melon"],
        serving: "1/4 to 1/2 cup per day",
      },
      {
        name: "Vegetables",
        description: "Progress from purees to mashed and small soft pieces.",
        examples: ["Mashed sweet potatoes", "Soft cooked carrots", "Soft cooked peas", "Soft cooked broccoli florets"],
        serving: "1/4 to 1/2 cup per day",
      },
      {
        name: "Protein",
        description: "Introduce protein-rich foods.",
        examples: [
          "Well-cooked, finely chopped meat",
          "Well-cooked, mashed beans",
          "Scrambled eggs",
          "Small pieces of tofu",
        ],
        serving: "1-2 tablespoons, gradually increasing to 1/4 cup per day",
      },
      {
        name: "Dairy",
        description: "Introduce dairy products (not cow's milk as a beverage yet).",
        examples: ["Yogurt", "Cottage cheese", "Shredded cheese"],
        serving: "1/4 cup yogurt or cottage cheese, 1/2 ounce shredded cheese",
      },
    ],
    feedingTips: [
      "Offer solid foods 2-3 times per day, plus snacks.",
      "Encourage self-feeding with appropriate finger foods.",
      "Introduce a sippy cup with water.",
      "Establish a routine of family meals, with baby joining at the table.",
      "Continue to introduce new foods and flavors regularly.",
    ],
    foodsToAvoid: [
      "Honey (until after 12 months)",
      "Cow's milk as a beverage (until 12 months)",
      "Added salt or sugar",
      "Choking hazards like whole grapes, nuts, popcorn, hot dogs",
      "Excessive fruit juice",
      "Highly processed foods",
    ],
  },

  // 12-24 months
  "12-24": {
    generalGuidelines:
      "Transition to whole milk and family foods. Toddlers should be eating most of the same foods as the rest of the family, with appropriate textures. Establish healthy eating patterns and offer a variety of nutritious foods.",
    foodGroups: [
      {
        name: "Dairy",
        description: "Transition from formula to whole milk; continue breastfeeding if desired.",
        examples: ["Whole milk", "Yogurt", "Cheese", "Cottage cheese"],
        serving: "16-24 ounces of milk per day, or equivalent dairy products",
      },
      {
        name: "Grains",
        description: "Offer a variety of whole grains.",
        examples: ["Whole grain bread", "Pasta", "Rice", "Cereals", "Crackers", "Oatmeal"],
        serving: "3-5 servings per day (1 serving = 1/2 slice bread, 1/4 cup pasta/rice, 1/2 cup cereal)",
      },
      {
        name: "Fruits",
        description: "Offer a variety of fruits, focusing on whole fruits rather than juices.",
        examples: ["Berries", "Sliced apples", "Bananas", "Peaches", "Pears", "Melon"],
        serving: "1-1.5 cups per day, cut into small pieces",
      },
      {
        name: "Vegetables",
        description: "Offer a variety of vegetables, including different colors.",
        examples: ["Cooked carrots", "Peas", "Green beans", "Sweet potatoes", "Broccoli", "Cauliflower"],
        serving: "1-1.5 cups per day",
      },
      {
        name: "Protein",
        description: "Offer a variety of protein sources.",
        examples: ["Lean meat", "Poultry", "Fish", "Eggs", "Beans", "Tofu", "Nut butters (thinly spread)"],
        serving: "2-3 servings per day (1 serving = 1 ounce meat, 1/4 cup beans, 1 egg)",
      },
    ],
    feedingTips: [
      "Establish regular meal and snack times, typically 3 meals and 2-3 snacks per day.",
      "Allow your toddler to self-feed and experiment with utensils.",
      "Expect food jags and pickiness - continue to offer a variety of foods even if rejected.",
      "Make mealtime pleasant and avoid power struggles over food.",
      "Be a good role model by eating healthy foods yourself.",
      "Limit juice to 4 ounces or less per day, diluted with water.",
    ],
    foodsToAvoid: [
      "Choking hazards like whole grapes, nuts, popcorn, hot dogs (unless cut appropriately)",
      "Added sugars and highly processed foods",
      "Excessive salt",
      "Unpasteurized foods",
      "Excessive fruit juice or sugar-sweetened beverages",
    ],
  },

  // 2-5 years
  "24-60": {
    generalGuidelines:
      "Preschoolers need the same variety of foods as the rest of the family but in smaller portions. Focus on establishing healthy eating habits and a positive relationship with food.",
    foodGroups: [
      {
        name: "Dairy",
        description: "Can transition to low-fat milk (2%) after age 2 if appropriate.",
        examples: ["Milk", "Yogurt", "Cheese", "Fortified non-dairy alternatives if needed"],
        serving: "2-2.5 cups per day",
      },
      {
        name: "Grains",
        description: "Emphasize whole grains for fiber and nutrients.",
        examples: ["Whole grain bread", "Pasta", "Rice", "Cereals", "Crackers", "Oatmeal"],
        serving: "3-5 ounces per day (1 ounce = 1 slice bread, 1/2 cup pasta/rice, 1 cup cereal)",
      },
      {
        name: "Fruits",
        description: "Offer a variety of colorful fruits.",
        examples: ["Apples", "Berries", "Citrus fruits", "Bananas", "Grapes (cut for younger children)", "Melon"],
        serving: "1-1.5 cups per day",
      },
      {
        name: "Vegetables",
        description: "Offer a variety of colorful vegetables.",
        examples: ["Carrots", "Broccoli", "Spinach", "Bell peppers", "Tomatoes", "Sweet potatoes"],
        serving: "1.5-2 cups per day",
      },
      {
        name: "Protein",
        description: "Offer a variety of protein sources.",
        examples: ["Lean meat", "Poultry", "Fish", "Eggs", "Beans", "Lentils", "Tofu", "Nut butters"],
        serving: "2-5 ounces per day",
      },
    ],
    feedingTips: [
      "Maintain regular meal and snack times.",
      "Involve children in meal planning and preparation when possible.",
      "Offer appropriate portion sizes - typically about 1 tablespoon of each food per year of age.",
      "Continue to introduce new foods alongside familiar favorites.",
      "Limit highly processed foods, sugary drinks, and excessive snacking.",
      "Make water the primary beverage.",
      "Be patient with picky eating, which is common at this age.",
    ],
    foodsToAvoid: [
      "Excessive added sugars",
      "Highly processed foods",
      "Sugar-sweetened beverages",
      "Excessive sodium",
      "Foods that pose choking hazards for younger children",
    ],
  },

  // 6-12 years
  "60-144": {
    generalGuidelines:
      "School-age children need nutrient-dense foods to support growth and increasing activity levels. Portion sizes increase, but the basic food groups remain the same.",
    foodGroups: [
      {
        name: "Dairy",
        description: "Low-fat or fat-free milk and dairy products.",
        examples: ["Milk", "Yogurt", "Cheese", "Fortified non-dairy alternatives if needed"],
        serving: "2.5-3 cups per day",
      },
      {
        name: "Grains",
        description: "At least half should be whole grains.",
        examples: ["Whole grain bread", "Pasta", "Brown rice", "Quinoa", "Oatmeal", "Whole grain cereals"],
        serving: "4-6 ounces per day",
      },
      {
        name: "Fruits",
        description: "Emphasize whole fruits over juices.",
        examples: ["Apples", "Berries", "Oranges", "Bananas", "Grapes", "Peaches"],
        serving: "1.5-2 cups per day",
      },
      {
        name: "Vegetables",
        description: "Offer a variety from all vegetable subgroups.",
        examples: [
          "Leafy greens",
          "Red and orange vegetables",
          "Beans and peas",
          "Starchy vegetables",
          "Other vegetables",
        ],
        serving: "2-2.5 cups per day",
      },
      {
        name: "Protein",
        description: "Offer a variety of lean protein sources.",
        examples: ["Lean meat", "Poultry", "Fish", "Eggs", "Beans", "Nuts", "Seeds", "Soy products"],
        serving: "4-5.5 ounces per day",
      },
    ],
    feedingTips: [
      "Encourage children to listen to their hunger and fullness cues.",
      "Provide structured meals and snacks.",
      "Include children in grocery shopping, meal planning, and cooking.",
      "Pack nutritious lunches and snacks for school.",
      "Limit fast food and eating out.",
      "Be a good role model for healthy eating habits.",
      "Encourage regular physical activity alongside healthy eating.",
    ],
    foodsToAvoid: [
      "Excessive added sugars",
      "Sugar-sweetened beverages",
      "Highly processed snack foods",
      "Foods high in sodium",
      "Excessive caffeine",
    ],
  },

  // 13-18 years
  "144-216": {
    generalGuidelines:
      "Teenagers need increased calories and nutrients to support rapid growth and development. Calcium and iron are particularly important during adolescence.",
    foodGroups: [
      {
        name: "Dairy",
        description: "Important for bone development during growth spurts.",
        examples: ["Low-fat or fat-free milk", "Yogurt", "Cheese", "Fortified non-dairy alternatives"],
        serving: "3 cups per day",
      },
      {
        name: "Grains",
        description: "Provide energy for active teenagers.",
        examples: ["Whole grain bread", "Pasta", "Brown rice", "Quinoa", "Oatmeal", "Whole grain cereals"],
        serving: "6-8 ounces per day",
      },
      {
        name: "Fruits",
        description: "Provide vitamins, minerals, and fiber.",
        examples: ["Apples", "Berries", "Citrus fruits", "Bananas", "Melons", "Dried fruits"],
        serving: "1.5-2 cups per day",
      },
      {
        name: "Vegetables",
        description: "Provide vitamins, minerals, and fiber.",
        examples: [
          "Leafy greens",
          "Red and orange vegetables",
          "Beans and peas",
          "Starchy vegetables",
          "Other vegetables",
        ],
        serving: "2.5-3 cups per day",
      },
      {
        name: "Protein",
        description: "Important for muscle development and growth.",
        examples: ["Lean meat", "Poultry", "Fish", "Eggs", "Beans", "Nuts", "Seeds", "Soy products"],
        serving: "5-7 ounces per day",
      },
    ],
    feedingTips: [
      "Teens need more calories, but these should come from nutrient-dense foods, not empty calories.",
      "Iron is particularly important for adolescent girls who have started menstruating.",
      "Calcium is crucial during the teen years when bone mass is being built.",
      "Encourage regular meals, including breakfast.",
      "Keep nutritious snacks available for hungry teenagers.",
      "Involve teens in meal planning and preparation to develop lifelong cooking skills.",
      "Be aware of disordered eating patterns, which often emerge during adolescence.",
    ],
    foodsToAvoid: [
      "Excessive fast food and processed foods",
      "Sugar-sweetened beverages",
      "Energy drinks and excessive caffeine",
      "Skipping meals, especially breakfast",
      "Fad diets or restrictive eating patterns",
    ],
  },
}

// Function to get nutrition guidance based on age in months
export function getNutritionGuidance(ageInMonths: number): NutritionGuidance | null {
  // Define age ranges
  const ageRanges = [
    { range: "0-6", min: 0, max: 6 },
    { range: "6-8", min: 6, max: 8 },
    { range: "9-11", min: 9, max: 11 },
    { range: "12-24", min: 12, max: 24 },
    { range: "24-60", min: 24, max: 60 },
    { range: "60-144", min: 60, max: 144 },
    { range: "144-216", min: 144, max: 216 },
  ]

  // Find the appropriate age range
  const ageRange = ageRanges.find((range) => ageInMonths >= range.min && ageInMonths <= range.max)

  // If no range matches (e.g., age > 216 months), return the guidance for the oldest age group
  if (!ageRange) {
    if (ageInMonths > 216) {
      return nutritionData["144-216"]
    }
    return null
  }

  // Return nutrition guidance for the matching age range
  return nutritionData[ageRange.range]
}
