import { For } from "solid-js";
import recipes from "../../recipes-json";

const slugify = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const RecipesList = () => {
  return (
    <>
      <h2>All Recipes</h2>
      <ul>
        <For each={recipes}>
          {(recipe) => (
            <li>
              <a href={`/recipes/${slugify(recipe.title)}`}>{recipe.title}</a>
            </li>
          )}
        </For>
      </ul>
    </>
  );
};

export default RecipesList;
