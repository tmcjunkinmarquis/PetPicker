import * as actions from './';


describe('Actions', () => {
  describe('toggleLoggedIn', () => {
    it('has a type of TOGGLE_LOGGEDIN', () => {
      const actual = actions.toggleLoggedIn();

      expect(actual).toEqual({
        type: 'TOGGLE_LOGGEDIN',
      });
    });
  });

  describe('storeUser', () => {
    it('has a type of STORE_USER', () => {
      const userObj = {};

      const actual = actions.storeUser(userObj);

      expect(actual).toEqual({
        type: 'STORE_USER',
        userObj
      });
    });
  });

  describe('storeMatches', () => {
    it('has a type of STORE_MATCHES', () => {
      const matchesArray = [];

      const actual = actions.storeMatches(matchesArray);

      expect(actual).toEqual({
        type: 'STORE_MATCHES',
        matchesArray
      });
    });
  });

  describe('petsArray', () => {
    it('has a type of PETS_ARRAY', () => {
      const petsArray = [];

      const actual = actions.petsArray(petsArray);

      expect(actual).toEqual({
        type: 'PETS_ARRAY',
        petsArray
      });
    });
  });

  describe('updatePets', () => {
    it('has a type of UPDATE_PETS', () => {
      const actual = actions.updatePets();

      expect(actual).toEqual({
        type: 'UPDATE_PETS',
      });
    });
  });

  describe('resetStore', () => {
    it('has a type of RESET_STORE', () => {
      const actual = actions.resetStore();

      expect(actual).toEqual({
        type: 'RESET_STORE',
      });
    });
  });
});