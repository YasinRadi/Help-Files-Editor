/**
 * Created by Yasin Radi on 2017-07-11.
 */
const fh   = require('./File_Handler');
const form = document.getElementById('elementList');
const EMPTY_MSG = `Element | Title | Content | Template fields must not be empty.`;
const SEL_MSG   = `Element field must start with '#' or '.'`;
const NO_CHNG   = `Nothing to save yet!`;

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
            let inputs = s.querySelectorAll('input');
            const area = s.querySelectorAll('textarea');
            inputs = Array.prototype.filter.call(inputs, (el) => {
                return el.id === 'element'
                    || el.id === 'title'
                    || el.id === 'content'
                    || el.id === 'template';
            });
            inputs.push.apply(inputs, area);
            steps_check.push(inputs.every((el) => {
                 return el.value !== '';
            }));
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
            sels.push(s.querySelectorAll(`#element`)[0]);
        });
        return Array.prototype.every.call(sels, (s) => {
            let id = s.value[0];
            return id === `#` || id === `.`;
        });
    }
}

module.exports = Validator;