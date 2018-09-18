const fetchUserData = async (username, password) => {

  
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
    const petsData = await response.json();
    return petsData;
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

const fetchPostNewMatch = async (id) => {
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

const fetchSignUp = async (name, password, role, description, pic) => {
  const url = 'https://pet-picker-api.herokuapp.com/api/v1/users';
  const optionsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ user: { name, password, role, description, pic } })
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

const fetchDeletePet = async (user_id, id) => {
  // https://pet-picker-api.herokuapp.com/api/v1/users/2/connections?pet_id=10

  const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${user_id}/connections?pet_id=${id}`;
  const optionsObj = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
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

const fetchLikePostPet = async (user_id, id) => {
  // https://pet-picker-api.herokuapp.com/api/v1/users/2/connections?pet_id=10
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${user_id}/connections?pet_id=${id}`;
  const optionsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    }
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

export {
  fetchUserData,
  fetchPets,
  fetchWelcomePet,
  fetchDeleteAccount,
  fetchMatches,
  fetchSignUp,
  fetchDeletePet,
  fetchLikePostPet,
  fetchPostNewMatch
};
