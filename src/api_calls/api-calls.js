const fetchUserData = async (username, password) => {
  console.log(username, password);

  //https://pet-picker-api.herokuapp.com/api/v1/users?name=Jimbo&password=123
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users?name=${username}&password=${password}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw Error(`Network request failed. (error: ${error.message})`);
  }
};

const fetchPets = async (id) => {
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/pets`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw Error(`Network request failed. (error: ${error.message})`);
  }
};

const fetchWelcomePet = async () => {
  const url = 'https://pet-picker-api.herokuapp.com/api/v1/pets';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw Error(`Network request failed. (error: ${error.message})`);
  }
};

const fetchDeleteAccount = async (id) => {
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw Error(`Network request failed. (error: ${error.message})`);
  }
};

const fetchMatches = async (id) => {
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/matches`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw Error(`Network request failed. (error: ${error.message})`);
  }
};

const fetchSignIn = async (username, password, description, pic) => {
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users`;
  const optionsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ user: username, password, description, pic })
  };
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) {
      throw Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw Error(`Network request failed. (error: ${error.message})`);
  }
};

export { fetchUserData, fetchPets, fetchWelcomePet, fetchDeleteAccount, fetchMatches, fetchSignIn };
