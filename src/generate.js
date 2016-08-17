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
        return Number.isInteger(model) ?
            (Math.floor(Math.random() * model) + 1) :
            (Math.random() * model)
    }

    function generateString(model) {

        const words = model.split(' ').map(word => {

            if(!Number.isNaN(Number.parseInt(word))) {
                return generateNumber(parseInt(word));
            }
            else{
                const newWord = randomstring.generate({
                    length: word.length,
                    charset: 'alphabetic',
                    capitalization: 'lowercase'
                });

                return newWord.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
            }
        });

        return words.join(' ');

    }

}
