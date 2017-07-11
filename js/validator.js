/**
 * Created by Yasin Radi on 2017-07-11.
 */
const fh   = require('./File_Handler');
const form = document.getElementById('elementList');
const em   = `Element | Title | Content | Template fields must not be empty.`;

class Validator {

    constructor() {}

    static requiredFieldsNotBlank(is_new_file) {
        const steps = form.querySelectorAll('div');
        const steps_check = [];
        if(is_new_file) {
            const file_name = document.getElementById(`fileNameInput`).value;
            steps_check.push(file_name !== '');
        }
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

    static changesExist() {
        return fh.getStepNum() > 0;
    }

    static emptyMessage(is_file_new) {
        return is_file_new ? `File name | ${em}` : em;
    }

    static checkSelector() {
        const steps = form.querySelectorAll('div');
        steps.every((s) => {
            let id = s.getElementById(`element`).value[0];
            return id === `#` || id === `.`;
        });
    }
}

module.exports = Validator;