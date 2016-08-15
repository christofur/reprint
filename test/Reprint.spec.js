import expect from 'expect';
import 'babel-polyfill'
import { Reprint } from '../src';

describe('Reprint', () => {

    //Produce a single value

    it('should produce a single string', () => {

        const model = {
            'colour': 'yellow'
        };

        const reprint = new Reprint(model).get();
        const copy = reprint.next().value;

        expect(typeof copy.colour).toBe('string');

    });

    it('should produce a single number', () => {

        const model = {
            'age': 30
        };

        const reprint = new Reprint(model).get();
        const copy = reprint.next().value;

        expect(typeof copy.age).toBe('number');

    });

    it('should produce a single boolean', () => {

        const model = {
            'active': true
        };

        const reprint = new Reprint(model).get();
        const copy = reprint.next().value;

        expect(typeof copy.active).toBe('boolean');

    });


    //Produce an object with a mixture of values

    it('should produce an object with two levels', () => {

        const model = {
            'name': 'David',
            'address': {
                'street': '123 London Road',
                'zip': 90210
            }
        };

        const reprint = new Reprint(model).get();
        const copy = reprint.next().value;

        expect(typeof copy.name).toBe('string');
        expect(typeof copy.address).toBe('object');
        expect(typeof copy.address.street).toBe('string');
        expect(typeof copy.address.zip).toBe('number');

    });


    it('should produce an object with three levels', () => {

        const model = {
            'name': 'David',
            'selling': {
                'product': 'Super Nintendo Entertainment System',
                'condition': {
                    'age': '25 years',
                    'broken': false
                }
            }
        };

        const reprint = new Reprint(model).get();
        const copy = reprint.next().value;

        expect(typeof copy.name).toBe('string');
        expect(typeof copy.selling).toBe('object');
        expect(typeof copy.selling.product).toBe('string');
        expect(typeof copy.selling.condition).toBe('object');
        expect(typeof copy.selling.condition.age).toBe('string');
        expect(typeof copy.selling.condition.broken).toBe('boolean');

    });


});
