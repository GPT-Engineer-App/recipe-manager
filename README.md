# recipe-manager

A management system for recipes.

We have a database consisting of 1000s of recipes, and I would like a good way of browsing through them, and build features on top of all that great data.

First off:
- List of all the recipes, with some key information in the table:
-- Recipe ID, Brand (can be represented by a logo, i'll pass that in later), a set of taxonomies (tags) that are connected to a recipe (some examples are: "family friendly", "asian", "bbq" etc), the cooking time, the main ingredient (meat, chicken, vegetarian etc), and an average rating on a 1-100 scale. There should also be a small picture of the dish on each row.
- it should be simple to filter and search for names, taxonomies etc. I like the approach of just having one search bar where you can do simple quering like: "tags: Asian", or just search for names. The search should be quick.
- When clicking one of the recipes, a full recipe card should open on the right in form of a split screen (or overlay if the window is to small).
-- It should have the picture of the dish on the top, as well as the key data from the list in a nice form.
-- It should also have the complete recipe steps displayed and the different ingredients, need to be able to select between the portion sizes as well (we have 2,3,4,6 portion options, each with it different recipe steps and ingredient list).
-- Include ratings and recipe comments made by our customers.

Should also be able to do bulk actions, so search for something, select all, add taxonomy "mexico 🇲🇽" to all of them, for instance.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/recipe-manager.git
cd recipe-manager
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
