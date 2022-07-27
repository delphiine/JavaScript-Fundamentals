const {candies, searchCandies} = require('./searchCandies');

describe('Candies search', () => {
    it('Candies is full array of candies',()=>{
      expect(candies.length).toBe(13)
    });

    it('returns a list of candies starting with Ma and with prices less than £10', () => {
      expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers'])
    });
});
