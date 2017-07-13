/**
 * Created by Yasin Radi on 2017-07-11.
 */
const fh   = require('./File_Handler');
const form = document.getElementById('elementList');
const EMPTY_MSG = `Element | Title | Content | Template fields must not be empty.`;
const SEL_MSG   = `Element field must start with '#' or '.'`;
const NO_CHNG   = `Nothing to save yet!`;
let error_elements = [];

class Validator {

    /**
     * Constructor.
     */
    constructor() {}

    /**
     *
     * @param is_file_new
     * @returns {boolean}
     */
    static validate(is_file_new) {
        const self = Validator;
        if(!self.changesExist()) {
            alert(NO_CHNG);
            return false;
        }
        if(!self.requiredFieldsNotBlank()) {
            alert(EMPTY_MSG);
            return false;
        }
        if(!self.checkSelector()) {
            alert(self.selectorMessage());
            return false;
        }

        return true;
    }

    /**
     * Checks if the required fields are not blank.
     * @returns {boolean}
     */
    static requiredFieldsNotBlank() {
        const steps = form.querySelectorAll('div.form-group.step-div');
        const steps_check = [];
        steps.forEach((s) => {
            const groups = s.querySelectorAll('div.form-group.col-md-12.has-feedback');
            groups.forEach((g) => {
                let input = g.querySelector('.form-control');
                if((input.id === 'element' || input.id === 'title'
                    || input.id === 'content' || input.id === 'template') && input.value === '')
                {
                    g.classList.add('has-error');
                    steps_check.push(false);
                } else {
                    g.classList.remove('has-error');
                    steps_check.push(true);
                }
            });
        });
        return steps_check.every((chck) => {
            return chck;
        });
    }

    /**
     * Checks if there's steps to be saved.
     * @returns {boolean}
     */
    static changesExist() {
        return fh.getStepNum() > 0;
    }

    /**
     * Wrong selector message.
     * @returns {string}
     */
    static selectorMessage() {
        return SEL_MSG;
    }

    /**
     * Checks if the inputted selector is a valid one.
     * @returns {*}
     */
    static checkSelector() {
        let sels = [];
        form.querySelectorAll('div.form-group.step-div').forEach((s) => {
            const groups = s.querySelectorAll('div.form-group.col-md-12.has-feedback');
            groups.forEach((g) => {
                const element = g.querySelector('.form-control');
                if(element.id === 'element') {
                    if(element.value[0] === '#' || element.value[0] === '.') {
                        g.classList.remove('has-error');
                    } else {
                        g.classList.add('has-error');
                        sels.push(element);
                    }
                }
            });
        });
        return Array.prototype.every.call(sels, (s) => {
            let id = s.value[0];
            return id === `#` || id === `.`;
        });
    }
}

module.exports = Validator;