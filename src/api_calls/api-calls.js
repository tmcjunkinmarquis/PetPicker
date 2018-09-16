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

const fetchSignUp = async (user, password, role, description, pic) => {
  const url = 'https://pet-picker-api.herokuapp.com/api/v1/users';
  const optionsObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ user: { user, password, role, description, pic } })
  };
  try {
    console.log('optionsObj: ', optionsObj)
    const response = await fetch(url, optionsObj);
    if (!response.ok) {
      throw Error(`${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw Error(`Network request failed. (error: ${error.message})`);
  }
};

const fetchDeletePet = async (id, pet_id) => {
  // https://pet-picker-api.herokuapp.com/api/v1/users/2/connections?pet_id=10
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/connnections?pet_id=${pet_id}`;
  const optionsObj = {
    method: "DELETE", 
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({id, pet_id})
  };
  try {
    console.log('optionsObj: ', optionsObj)
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
  fetchDeletePet
};
