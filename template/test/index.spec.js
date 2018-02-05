const indexFile = require('../index');

describe('index', () => {
    it('should return a function', () => {
        expect(typeof indexFile).toBe('function');
    });
});
