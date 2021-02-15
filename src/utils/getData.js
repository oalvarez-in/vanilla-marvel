const API = "https://gateway.marvel.com:443/v1/public/characters";

const CREDENTIALS = "apikey=a385a6e087c5e98eb78d4d9c01421ce7";

const getData = async (id) => {
  const apiURL = id
    ? `${API}/${id}?${CREDENTIALS}`
    : `${API}?limit=35&nameStartsWith=F&orderBy=name&${CREDENTIALS}`;
  try {
    const response = await fetch(apiURL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Fetch Error");
  }
};

export default getData;
