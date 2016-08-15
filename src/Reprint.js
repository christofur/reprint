import generate from './generate'

class Reprint {
    constructor(model) {

        if(typeof model !== 'object'){
            this.model = JSON.parse(model);
        }
        else{
            this.model = model;
        }
    }

    *get() {

        let value = Object.assign({}, this.model);

        // eslint-disable-next-line no-constant-condition
        while(true) {
            yield this.populate(value);
        }

    }

    populate(value) {

        for(let prop in value) {

            if (typeof value[prop] == 'object') {
                this.populate(value[prop]);
            }
            else{
                value[prop] = generate(value[prop]);
            }
        }

        return value;
    }
}

export default Reprint;
