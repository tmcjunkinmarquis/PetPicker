import React from 'react';
import { mockUserData, mockPetData } from './mockUserData';
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

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockUserData)
    }));
  });

  it('should call fetch with the correct params', async () => {
    const username= "Theresa";
    const password="123";

    let url = `https://pet-picker-api.herokuapp.com/api/v1/users?name=${username}&password=${password}`;
    await fetchUserData();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it.skip('should return correct data', async () => {
    const expected = mockUserData;
    const result = await fetchUserData();

    expect(result).toEqual(expected);
  });
});

describe('fetchPets', () => {

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockPets)
    }));
  });

  it('should call fetch with the correct params', async () => {
    const id = 1;
    
    const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/pets`;
    await fetchPets();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it.skip('should return correct data', async () => {
    const expected = mockPets;
    const result = await fetchPets();

    expect(result).toEqual(expected);
  });
});

