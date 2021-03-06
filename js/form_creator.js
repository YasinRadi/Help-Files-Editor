/**
 * Created by Yasin Radi <yasin.ben.hamman@gmail.com>
 */
'use strict';

const st   = require('./step_template');
const form = document.getElementById('elementList');
const IMG  = '../public/img/';
const DSC  = 'Description';
const FNM  = 'File name';

class Form_Creator {
    constructor() {}

    /**
     * File name field setting.
     * @param name {String}
     */
    static createFileNameField(name) {
        const file_name = document.getElementById('fileName');
        file_name.innerHTML = `${FNM}: ${name}`;
        file_name.className = 'nameTitle';
    }

    /**
     * Creates the description field.
     * @param content {String}
     */
    static createDescField(content) {
        const desc_field = document.getElementById('descField');
        desc_field.textContent = `${DSC}:`;
        desc_field.className = 'form-group';
        const desc = document.createElement('input');
        desc.setAttribute('id', 'desc');
        desc.className = 'form-control';
        desc.setAttribute('value', content);
        desc_field.appendChild(desc);
    }

    /**
     * Capitalizes a given string.
     * @param str {String}
     * @returns {string}
     */
    static capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     * Creates a new step.
     * @param id {int}
     * @param divTmpl {String}
     */
    static createStep(id, divTmpl = 'undefined') {
        const self = Form_Creator;
        let step_name = self.createStepSpan(id);
        step_name.appendChild(self.removeStepButton(id));
        form.appendChild(step_name);
        form.appendChild(self.createStepDiv(id, divTmpl));
        self.applyRemoveListener();
        self.addStepButton();
    }

    /**
     * Creates a div for a step.
     * @param id {int}
     * @param tmpl {String}
     */
    static createStepDiv(id, tmpl = 'undefined') {
        let step_div = document.createElement('div');
        step_div.innerHTML = tmpl !== 'undefined' ? tmpl : '';
        step_div.id = `step_${id}`;
        step_div.className = 'form-group step-div';
        return step_div;
    }

    /**
     * Creates a span element for a step title.
     * @param id {int}
     * @returns {Element|Electron.WebviewTag}
     */
    static createStepSpan(id) {
        let step_span = document.createElement('span');
        step_span.textContent = `Step ${id + 1}:`;
        step_span.setAttribute('id', `stepTitle_${id}`);
        step_span.className = 'stepTitle';
        return step_span;
    }

    /**
     * Style changing when opening file.
     */
    static reStyle(text) {
        document.querySelector('div.container.init').classList.remove('init');
        document.getElementById('title').innerHTML = text;
    }

    /**
     * Creates a separator for each step div and appends them.
     */
    static createSeparators() {
        const step_divs = form.querySelectorAll('div.form-group.step-div');
        step_divs.forEach((s) => {
            let inner_div = document.createElement('div');
            inner_div.className = 'form-group col-md-12';
            inner_div.appendChild(document.createElement('hr'));
            s.appendChild(inner_div);
        });
    }

    /**
     * Creates a div container for each form elements group.
     * @param id {String}
     * @param name {String}
     * @param inp {Electron.WebviewTag|Element}
     */
    static createGroupContainer(id, name, inp) {
        const self = Form_Creator;
        let div = document.createElement('div');
        div.className = 'form-group col-md-12 has-feedback';
        div.appendChild(self.createFieldHeader(name));
        div.appendChild(inp);
        document.getElementById(id).appendChild(div);
    }

    /**
     *  Creates a form field header and adds it to the form.
     *  @param name {String}
     *  @returns {Electron.WebviewTag|Element}
     */
    static createFieldHeader(name) {
        const self = Form_Creator;
        let field = document.createElement('label');
        field.textContent = `${self.capitalize(name)}:`;
        field.setAttribute('for', name);
        field.className = 'control-label';
        return field;
    }

    /**
     *  Creates a form element and adds it to the form.
     *  @param type {String}
     *  @param name {String}
     *  @param content {String}
     *  @returns {Electron.WebviewTag|Element}
     */
    static createFormElement(type, name, content) {
        let node = document.createElement(type);
        node.setAttribute('id', name);
        node.className = 'form-control';
        if(type === 'textarea') {
            node.setAttribute('cols', 100);
            node.setAttribute('rows', 12);
            node.innerHTML = content;
        } else {
            node.setAttribute('value', content);
        }
        return node;
    }

    /**
     * Adds the next step to the form.
     */
    static createNextStep() {
        const self = Form_Creator;
        let last_step = form.querySelectorAll('.step-div')[document.querySelectorAll('.step-div').length - 1];
        let last_step_id = typeof last_step !== 'undefined' ? last_step.getAttribute('id') : `step_-1`;
        let next_step_id = parseInt(last_step_id.split('_')[1]) + 1;
        self.createStep(next_step_id, st.getStepTemplate());
    }

    /**
     * Adds a plus button to the screen.
     */
    static addStepButton() {
        const self = Form_Creator;
        const addBtn = document.getElementById('addBtn');
        if(addBtn !== null) {
           form.removeChild(addBtn);
        }
        let btn = document.createElement('input');
        btn.setAttribute('id', 'addBtn');
        btn.className = 'addBtn';
        btn.setAttribute('src', `${IMG}add_sign.jpg`);
        btn.setAttribute('type', 'image');
        btn.setAttribute('title', 'Add step');
        btn.onclick = self.createNextStep;
        form.appendChild(btn);
    }

    /**
     * Creates the remove step button.
     * @param id {int}
     * @returns {Electron.WebviewTag|Element}
     */
    static removeStepButton(id) {
        let btn = document.createElement('input');
        btn.setAttribute('id', `removeBtn_${id}`);
        btn.className = 'removeBtn';
        btn.setAttribute('src', `${IMG}cross_sign.png`);
        btn.setAttribute('type', 'image');
        btn.setAttribute('title', 'Remove step');
        return btn;
    }

    /**
     * Removes a step div using the remove button clicked id.
     */
    static removeStepDiv() {
        const step_id = this.id.split('_')[1];
        form.removeChild(document.getElementById(`stepTitle_${step_id}`));
        form.removeChild(document.getElementById(`step_${step_id}`));
    }

    /**
     * Applies the event listener to the remove step button.
     */
    static applyRemoveListener() {
        const self = Form_Creator;
        let remove_btns = form.querySelectorAll('.removeBtn');
        if(remove_btns.length > 0) {
            let last_remove_btn = remove_btns[remove_btns.length - 1];
            last_remove_btn.onclick = self.removeStepDiv;
        }
    }

    /**
     * Gets the total number of current steps.
     * @returns {int}
     */
    static getStepNum() {
        return form.querySelectorAll('div.step-div').length;
    }

    /**
     * Creates a new file creation screen.
     */
    static createNewFile() {
        const self = Form_Creator;
        self.reStyle('New File Creation');
        self.createDescField('');
        self.addStepButton();
    }
}

module.exports = Form_Creator;