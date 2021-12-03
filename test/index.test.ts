import fn from '../src';
import assert from 'assert';

describe('package', () => {
    it('should return "hello world"', () => {
        const actual = fn();
        const expected = 'hello world';

        assert(expected === actual);
    });
});
