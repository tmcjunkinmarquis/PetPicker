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

  it('throws an error if response.ok is false', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ data: 'mock data' })
      })
    );

    const expected = Error(`Network request failed. (error: 500)`);
    await expect(fetchUserData()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = Error('Network request failed. (error: mock error)');

    await expect(fetchUserData()).rejects.toEqual(expected);
  });
});

describe('fetchPets', () => {
  jest.resetAllMocks();

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockPetData)
    }));
  });

  it('should call fetch with the correct params', async () => {
    const id = 1;
    const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/pets`;


    await fetchPets(id);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return correct data', async () => {
    const expected = mockPetData;
    const result = await fetchPets();

    expect(result).toEqual(expected);
  });
});

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
