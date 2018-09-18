import React from 'react';
import { mockUserData } from './mockUserData';
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

    let url = `https://pet-picker-api.herokuapp.com/api/v1/users?name=${mockUserData.username}&password=${mockUserData.password}`;
    await fetchUserData();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return correct data', async () => {
    const expected = mockUserData;
    const result = await fetchUserData();

    expect(result).toEqual(expected);
  });
});
