// src/seeds.js

const feathers = require('feathers-client');
const rest = require('feathers-rest/client');
const superagent = require('superagent');
const host = 'http://localhost:3030';
const app = feathers()
  .configure(feathers.hooks())
  .configure(feathers.authentication({
    type: 'local'
  }))
  .configure(rest(host).superagent(superagent));

// services
const userService = app.service('users');
const recipeService = app.service('recipes');

const user = {
  name: 'Jamie Gulliver',
  email: 'jamie@gulliver.dev',
  password: 'abcd1234'
}

const recipes = [
  {
    title: 'Paella',
    summary: 'This is the dramatic seafood paella that looks stunning, with crustaceans and shellfish. You can vary the quantities of seafood and also use crab, crayfish, or lobster (boil them separately). Andresito, who is collecting reminiscences of people in villages around him in Alicante, told me that on the Alicante Coast, fishermen\'s families made seafood paellas without any vegetables. When they did not go out to fish, they made arroz de piedras with mollusks from the rocks (piedras means rocks). The fishermen went around local villages selling their fish on scooters, and people inland added vegetables. In Catalonia, where the tradition of mixing meat and seafood is very old, they had pieces of chicken, pork, rabbit, or duck and sausage in their seafood paellas. Today adding meat and vegetables to seafood paella has become common in other regions, where seasonal vegetables such as green beans, peas, artichokes, or peppers also go in. It is called paella mixta. Wine was not added in the past but it is sometimes today. Serve this with Alioli if you like.',
    vegan: false,
    vegetarian: false,
    pescatarian: true,
    photo: 'http://cd.sseu.re/mixed-seafood-paella.jpeg',
    ingredients: [
      { amount: '1', name: 'large onion, finely chopped', optional: false },
      { amount: '5 Tbsp.', name: 'olive oil', optional: false },
      { amount: '2', name: 'garlic cloves, crushed to a paste or finely chopped', optional: false },
      { amount: '2', name: 'tomatoes, peeled and chopped', optional: false },
      { amount: '1/2 tsp.', name: 'sugar', optional: false },
      { amount: '', name: 'salt', optional: false },
      { amount: '1 tsp.', name: 'pimentón dulce (or sweet paprika)', optional: false },
      { amount: 'a good pinch of', name: 'saffron threads', optional: false },
      { amount: '4', name: 'cleaned small squid, bodies sliced into 1/4-inch-wide rings, tentacles left whole', optional: false },
      { amount: '2 cups', name: 'medium-grain Spanish paella rice or risotto rice, such as Arborio or Carnaroli', optional: false },
      { amount: '3 cups', name: 'fish or chicken stock, plus more if needed', optional: false },
      { amount: '1 cup', name: 'dry white wine', optional: false },
      { amount: '12', name: 'shrimp in their shells', optional: false },
      { amount: '16', name: 'mussels, scrubbed and debearded', optional: false },
    ],
    cookingSteps: [
      { title: 'Preparation', description: 'Fry the onion in the oil in a 16-inch paella pan until soft, stirring often. Stir in the garlic, and before it begins to color, add the tomatoes. Add the sugar, salt to taste, pimentón (or paprika), and saffron, stir well, and cook until the tomatoes are reduced to a jammy sauce and the oil is sizzling. Add the squid and cook, stirring, for a minute or so. Add the rice and stir well until all the grains are coated. (You can prepare the dish to this point up to an hour in advance.)' },
      { description: 'Bring the stock and wine to a boil in a saucepan. Pour over the rice, bring to a boil, and add salt to taste (even if the broth tastes a bit salty, it will not be salty when it is absorbed by the rice). Stir well and spread the rice out evenly in the pan (do not stir again). Cook the rice over low heat for 18 to 20 minutes, moving the pan around and rotating it so that the rice cooks evenly. Lay the shrimp on top after 10 minutes and turn them when they have become pink on the first side. Add a little more hot stock toward the end if the rice seems too dry and you hear crackly frying noises before it is done. When the rice is done, turn off the heat and cover the pan with a large piece of foil.' },
      { description: 'Steam the mussels with a finger of water in a pan with a tight-fitting lid. As soon as they open, they are cooked. Throw away any that have not opened.' },
      { description: 'Arrange the mussels on top of the paella.' },
    ],
    cookingTime: 60,
  },
  {
   title: 'Tomato Basil Penne Pasta',
   summary: 'A Mediterranean-style family staple',
   vegan: false,
   vegetarian: true,
   pescatarian: false,
   photo: 'http://images.media-allrecipes.com/userphotos/720x405/242356.jpg',
   ingredients: [
     { amount: '1 tablesp', name: 'basil oil', optional: false },
     { amount: '1 cup', name: 'shredded pepperjack cheese', optional: false },
     { amount: '1 cup', name: 'shredded mozzarella cheese', optional: false },
     { amount: '8 ounces', name: 'package penne pasta', optional: false },
     { amount: '1 tablesp', name: 'olive oil', optional: false },
     { amount: '3 cloves', name: 'garlic, minced', optional: false },
     { amount: '1 pint', name: 'grape tomatoes, halved', optional: false },
     { amount: '1 tablesp', name: 'minced fresh basil', optional: false },
     { amount: '1/4 cup', name: 'grated parmesan cheese', optional: false },
   ],
   cookingSteps: [
     { title: 'Preparation', description: 'Bring a large pot of water to a rolling boil over high heat. Cook pasta in boiling water until the pasta has cooked through, but is still firm to the bite, about 11 minutes. Drain.' },
     { description: 'Heat basil and olive oils in a large skillet over medium-high heat. Cook garlic in oil until soft. Add tomatoes, reduce heat to medium, and simmer for 10 minutes. Stir in pepperjack, mozzarella, and Parmesan cheese. When cheese begins to melt, mix in cooked penne pasta. Season with fresh basil.' },
   ],
   cookingTime: 45,
  },
  {
   title: 'Bibimbap',
   summary: 'This is vegetarian but there are many bibimbap recipes with beef or chicken marinades, if you want to add beef or chicken to this dish',
   vegan: false,
   vegetarian: true,
   pescatarian: false,
   photo: 'http://images.media-allrecipes.com/userphotos/560x315/882007.jpg',
   ingredients: [
     { amount: '1 tablesp', name: 'sesame oil', optional: false },
     { amount: '1 cup', name: 'carrot matchsticks', optional: false },
     { amount: '1 cup', name: 'zucchini matchsticks', optional: false },
     { amount: '1/2 can', name: 'bean sprouts, drained', optional: false },
     { amount: '6 ounces', name: 'canned bamboo shoots, drained', optional: false },
     { amount: '1 can', name: 'sliced mushrooms, drained', optional: false },
     { amount: '1/8 teasp', name: 'salt to taste', optional: false },
     { amount: '2 cups', name: 'cooked and cooled rice', optional: false },
     { amount: '1/3 cup', name: 'sliced green onions', optional: false },
     { amount: '2 tablesp', name: 'soy sauce', optional: false },
     { amount: '1/4 teasp', name: 'ground black pepper', optional: false },
     { amount: '1 tablesp', name: 'butter', optional: false },
     { amount: '3', name: 'eggs', optional: false },
     { amount: '3 teasp', name: 'sweet red child sauce', optional: true },
   ],
   cookingSteps: [
     { title: 'Preparation', description: 'Heat sesame oil in a large skillet over medium heat; cook and stir carrot and zucchini in the hot oil until vegetables begin to soften, about 5 minutes. Stir in bean sprouts, bamboo shoots, and mushrooms. Cook and stir until carrots are tender, about 5 more minutes. Season to taste with salt and set vegetables aside.' },
     { description: 'Stir cooked rice, green onions, soy sauce, and black pepper in the same skillet until the rice is hot. In a separate skillet over medium heat, melt butter and gently fry eggs, turning once, until the yolks are still slightly runny but the egg whites are firm, about 3 minutes per egg.' },
     { description: 'To serve, divide hot cooked rice mixture between 3 serving bowls and top each bowl with 1/3 of the vegetable mixture and a fried egg. Serve sweet red chili sauce on the side for mixing into bibimbap.' },
   ],
   cookingTime: 50,
  }
]

// Seed the user and recipe!
userService.create(user)
  .then((result) => {
    console.log('User created, authenticating as user...');

    app.authenticate({
      type: 'local',
      email: user.email,
      password: user.password,
    }).then((result) => {
      console.log('Authenticated, seeding recipes...');

      recipes.map((recipe) => {
        recipeService.create(Object.assign({}, recipe, { token: result.token }))
          .then((result) => {
            console.log('Recipe seeded...');
          }).catch((error) => {
            console.error('Error seeding recipe!', error);
          });
      })
    }).catch((error) => {
      console.error('Error authenticating!', error);
    });
  })
  .catch((error) => {
    console.error('Error creating user!', error);
  });
