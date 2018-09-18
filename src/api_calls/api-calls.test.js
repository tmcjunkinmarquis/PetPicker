import React from 'react';
import { mockUserData, mockPetData, mockWelcomePetData } from './mockData';
import {
  fetchUserData,
  fetchPets,
  fetchWelcomePet,
  fetchDeleteAccount,
  fetchMatches,
  fetchSignUp,
  fetchDeletePet,
  fetchLikePostPet,
  fetchPostNewMatch
} from './api-calls';


describe('fetchUserData', () => {
  jest.resetAllMocks();

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUserData)
    }));
  });

  it('should call fetch with the correct params', async () => {
    const username = "Theresa";
    const password = "123";
    const url = `https://pet-picker-api.herokuapp.com/api/v1/users?name=${username}&password=${password}`;

    await fetchUserData(username, password);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return correct data', async () => {
    const expected = mockUserData;
    const result = await fetchUserData();

    expect(result).toEqual(expected);
  });
});

// describe('fetchPets', () => {

//   beforeEach(() => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: true,
//       json: () => Promise.resolve(mockPetData)
//     }));
//   });

//   it('should call fetch with the correct params', async () => {
//     const id = 1;

//     const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/pets`;
//     await fetchPets();

//     expect(window.fetch).toHaveBeenCalledWith(url);
//   });

//   it('should return correct data', async () => {
//     const expected = mockPetData;
//     const result = await fetchPets();

//     expect(result).toEqual(expected);
//   });
// });

// describe('fetchWelcomePet', () => {

//   beforeEach(() => {
//     window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
//       status: true,
//       json: () => Promise.resolve(mockWelcomePetData)
//     }));
//   });

//   it.only('should call fetch with the correct params', async () => {
//     const url = 'https://pet-picker-api.herokuapp.com/api/v1/pets';
//     await fetchWelcomePet();

//     expect(window.fetch).toHaveBeenCalledWith(url);
//   });

//   it('should return correct data', async () => {
//     const expected = mockWelcomePetData;
//     const result = await fetchWelcomePet();

//     expect(result).toEqual(expected);
//   });
// });
