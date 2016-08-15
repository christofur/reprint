import randomstring from 'randomstring';

/**
 * Generates a similar-ish value to that passed in
 */

export default function generate(value) {
    switch(typeof value) {
        case 'boolean':
            return generateBoolean();
        case 'number':
            return generateNumber(value);
        case 'string':
            return generateString(value);
        default:
            return value;
    }

    function generateBoolean() {
        return Math.random() >= 0.5;
    }

    function generateNumber(model) {
        return Math.floor(Math.random() * model) + 1
    }

    function generateString(model) {

        const words = model.split(' ').map(word => {
            if(Number.isInteger(word)) {
                return generateNumber(parseInt(word));
            }
            else{
                return randomstring.generate({
                    length: word.length,
                    charset: word
                });
            }
        });

        return words.join(' ');

    }

}
