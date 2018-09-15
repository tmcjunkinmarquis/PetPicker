const fetchUsers = () => {
  const url = 'api/v1/users';

  console.log('I will fetch users');
}

const fetchPets = () => {
  const url = 'https://pet-picker-api.herokuapp.com/api/v1/users/1/pets';

  return fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((pets) => {
      return pets
    })

}

export { fetchUsers, fetchPets };
