import React from 'react';
import { 
  mockUserData, 
  mockPetData, 
  mockWelcomePetData, 
  mockMatchDataForAdopter, 
  mockMatchDataForOwner,
  mockMakeMatchData,
  mockSignUpData  } from './mockData';
import {
  fetchUserData,
  fetchPets,
  fetchWelcomePet,
  fetchDeleteAccount,
  fetchMatches,
  fetchPostMakeMatch,
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

  it('throws an error if response.ok is false', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        status: 500,
        ok: false,
        json: () => Promise.resolve({ data: 'mock data' })
      })
    );

    const expected = Error(`Network request failed. (error: 500)`);
    await expect(fetchPets()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = Error('Network request failed. (error: mock error)');

    await expect(fetchPets()).rejects.toEqual(expected);
  });
});

describe('fetchWelcomePet', () => {
  jest.resetAllMocks();

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockWelcomePetData)
    }));
  });

  it('should call fetch with the correct params', async () => {
    const url = 'https://pet-picker-api.herokuapp.com/api/v1/pets';

    await fetchWelcomePet();

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return correct data', async () => {
    const expected = mockWelcomePetData;
    
    const result = await fetchWelcomePet();

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
    await expect(fetchWelcomePet()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = Error('Network request failed. (error: mock error)');

    await expect(fetchPets()).rejects.toEqual(expected);
  });
});

describe('fetchMatches for adopter', () => {
  jest.resetAllMocks();

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMatchDataForAdopter)
    }));
  });

  it('should call fetch with the correct params for an adopter', async () => {
    const id = 1;
    const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/matches`;

    await fetchMatches(id);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return correct data', async () => {
    const expected = mockMatchDataForAdopter;
    const result = await fetchMatches();

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
    await expect(fetchMatches()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = Error('Network request failed. (error: mock error)');

    await expect(fetchMatches()).rejects.toEqual(expected);
  });
});

describe('fetchMatches for owner', () => {
  jest.resetAllMocks();

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMatchDataForOwner)
    }));
  });

  it('should call fetch with the correct params for an adopter', async () => {
    const id = 1;
    const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${id}/matches`;

    await fetchMatches(id);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return correct data', async () => {
    const expected = mockMatchDataForOwner;
    const result = await fetchMatches();

    expect(result).toEqual(expected);
  });
});

describe('fetchPostMakeMatch', () => {
  jest.resetAllMocks();

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMakeMatchData)
    }));
  });

  it('should call fetch with the correct params', async () => {
    const userId = 1;
    const matchId = 1;
    const url = `https://pet-picker-api.herokuapp.com/api/v1/users/${userId}/matches/${matchId}`;

    await fetchPostMakeMatch(userId, matchId);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should return correct data', async () => {
    const expected = mockMakeMatchData;
    const result = await fetchPostMakeMatch(userId, matchId);

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
    await expect(fetchPostMakeMatch()).rejects.toEqual(expected);
  });

  it('throws an error if fetch fails', async () => {
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.reject(Error('mock error')));
    const expected = Error('Network request failed. (error: mock error)');

    await expect(fetchPostMakeMatch()).rejects.toEqual(expected);
  });
});

describe('fetchSignUp', () => {
  let url;
  let mockOptionsObj;
  let mockUser;
 
  beforeEach(() => {
    mockUser = { 
      name: "Theresa", 
      password: "123", 
      role: 'adopter', 
      description:"I absolutely love pups!", 
      pic:"https://avatars2.githubusercontent.com/u/25600007?..." 
    };
    url = 'https://pet-picker-api.herokuapp.com/api/v1/users';
    
    mockOptionsObj = {
      method: 'POST',
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }, 
      body: JSON.stringify({
        user: { name: 'Theresa', 
          password: '123', 
          role: 'adopter', 
          description: 'I absolutely love pups!', 
          pic: 'https://avatars2.githubusercontent.com/u/25600007?...' 
        }} )
    };

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve(mockSignUpData)
    }));
  });

  it('should be called with correct params', async () => {
    await fetchSignUp(
      mockUser.name, 
      mockUser.password, 
      mockUser.role, 
      mockUser.description, 
      mockUser.pic);

    expect(window.fetch).toHaveBeenCalledWith(url, mockOptionsObj);
  });
});

describe('fetchDeletePet', () => {
  let user_id;
  let url;
  let mockOptions;
  let id;

  beforeEach(() => {
    user_id = 1;
    id = 1;
    url = `https://pet-picker-api.herokuapp.com/api/v1/users/${user_id}/connections?pet_id=${id}`;
    mockOptions = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    };
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      status: 200,
      json: () => Promise.resolve({
        status: 'success'
      })
    }));

    it('should delete a pet with correct params', async () => {
      await fetchDeletePet(user_id, id);

      expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
    });

    it('should return the correct data', async () => {
      const expected = {
        status: 'success'
      };
      const result = await fetchDeletePet(user_id, id);

      expect(result).toEqual(expected);
    });
  });
});

