import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
        <div class="Characters-inner">
            ${character.data.results.map(
              (specific) => `
            <article class="Characters-card">
                <img src="${specific.thumbnail.path}.${specific.thumbnail.extension}" alt="${specific.name}">
                <h2>${specific.name}</h2>
            </article>
            <article class="Characters-card">
                <h3>Comics: <span>${specific.comics.available}</span></h3>
                <h3>Series:<span>${specific.series.available}</span></h3>
                <h3>Stories:<span>${specific.stories.available}</span></h3>
                <h3>Events:<span>${specific.events.available}</span></h3>
                <h3>Description:<span>${specific.description}</span></h3>
            </article>
            `
            )}

        </div>
    `;
  return view;
};

export default Character;
