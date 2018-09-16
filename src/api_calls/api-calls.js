const fetchUserData = (username, password) => {
  //https://pet-picker-api.herokuapp.com/api/v1/users?name=Jimbo&password=123
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users?name=${username}&password=${password}`;
  return fetch(url)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((user) => {
      return user;
    });
};
  
const fetchPets = (id) => {
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/pets`;
    
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((pets) => {
      return pets;
    });
};

const fetchWelcomePet = () => {
  const url = 'https://pet-picker-api.herokuapp.com/api/v1/pets';

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((pet) => {
      return pet;
    });
};

const fetchDeleteAccount = (id) => {
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users//${id}`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((pet) => {
      return pet;
    });
};

const fetchMatches = (id) => {
  const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/matches`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((match) => {
      return match;
    });
};
export { fetchUserData, fetchPets, fetchWelcomePet, fetchDeleteAccount, fetchMatches };
