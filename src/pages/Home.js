import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
        <div class="Characters">
            ${characters.data.results
              .map((character) => {
                var image = character.thumbnail.path;
                if (!image.includes("image_not_available")) {
                  var miniview = `
                    <article class="Characters-item">
                        <a href="#/${character.id}/">
                            <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
                            <h2>${character.name}</h2>
                        </a>
                    </article>
                    `;
                }
                return miniview;
              })
              .join("")}
        </div>
    `;
  return view;
};

export default Home;
