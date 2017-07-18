/**
 * Created by Yasin Radi on 2017-07-11.
 */
const fh   = require('./File_Handler');
const form = document.getElementById('elementList');
const EMPTY_MSG = `Title | Content | Template fields must not be empty.`;
const SEL_MSG   = `Element field must start with '#' or '.'`;
const NO_CHNG   = `Nothing to save yet!`;
const ORPH_MSG  = `An orphan step cannot have element!`;
const ELM_MSG   = `Element cannot be empty in non orphan steps!`;
let MSG = '';

class Validator {

    /**
     * Constructor.
     */
    constructor() {}

    /**
     * Validates the form.
     * @returns {boolean}
     */
    static validate() {
        const self = Validator;
        if(!self.changesExist()) {
            alert(NO_CHNG);
            return false;
        }
        if(!self.requiredFieldsNotBlank()) {
            alert(EMPTY_MSG);
            return false;
        }
        if(!self.checkElementsOrphanity()) {
            alert(MSG);
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
                if((input.id === 'title' || input.id === 'content' || input.id === 'template') && input.value === '')
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
     * Checks if the inputted selector is a valid one.
     * @returns {boolean}
     */
    static checkElementsOrphanity() {
        const self = Validator;
        const divs = form.querySelectorAll('div.form-group.step-div');
        for(let i = 0; i < divs.length; i++) {
            let res = self.checkOrphan(divs[i]);
            if(res !== true) {
                MSG = res;
                return false;
            }
        }

        return true;
    }

    /**
     * Checks if the file has the right extension.
     * @param path {String}
     * @returns {boolean}
     */
    static checkExtension(path) {
        return fh.getFileName(path).split('.')[1] === 'tour';
    }

    /**
     * Checks whether the element selector has the right syntax or not.
     * @param element {Element}
     * @returns {String|boolean}
     */
    static checkSelector(element) {
        const g = element.parentNode;
        if(element.value[0] === '#' || element.value[0] === '.') {
            g.classList.remove('has-error');
            return true;
        } else {
            g.classList.add('has-error');
            return SEL_MSG;
        }
    }

    /**
     * Checks if orphan is active and its combination with element.
     * @param step_div {Element}
     * @returns {String|boolean}
     */
    static checkOrphan(step_div) {
        const self = Validator;
        const element = step_div.querySelector('#element');
        const orphan  = step_div.querySelector('#orphan');
        const eg      = element.parentNode;
        const og      = orphan.parentNode;
        if(orphan.value === 'true') {
            if(element.value !== '') {
                eg.classList.add('has-error');
                og.classList.add('has-error');
                return ORPH_MSG;
            }
        } else {
            if(element.value === '') {
                eg.classList.add('has-error');
                return ELM_MSG;
            } else {
                return self.checkSelector(element);
            }
        }

        og.classList.remove('has-error');
        return true;
    }
}

module.exports = Validator;