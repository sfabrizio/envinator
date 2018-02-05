const indexFile = require('../lib/main');

describe('main', () => {
    it('should return a function', () => {
        expect(typeof indexFile).toBe('function');
    });
});