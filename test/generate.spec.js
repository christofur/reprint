import expect from 'expect';
import generate from '../src/generate';

describe('generate', () => {

    // Boolean

    it('returns a boolean if given a boolean false', () => {
        expect(typeof(generate(false))).toBe('boolean');
    });

    it('returns a boolean if given a boolean true', () => {
        expect(typeof(generate(true))).toBe('boolean');
    });

    it('doesnt convert string types to boolean', () => {
        expect(typeof(generate('true'))).toNotBe('boolean');
    });


    // String

    it('returns a string if given a string', () => {
        expect(typeof(generate('Hello World!'))).toBe('string');
    });

    it('doesnt convert number types to string', () => {
        expect(typeof(generate('42'))).toBe('string');
    });


    // Number

    it('returns a number if given a number', () => {
        expect(typeof(generate(42))).toBe('number');
    });

    it('doesnt convert number types to boolean', () => {
        expect(typeof(generate(0))).toBe('number');
    });

    it('doesnt convert string types to number', () => {
        expect(typeof(generate('42'))).toNotBe('number');
    });

});

