/**
 * Created by Yasin Radi on 2017-06-29.
 */
'use strict';

const fs = require('fs');
const fc = require('./form_creator');
let file_abs_path = '';
let file_content  = {};
let step_num = 0;

class File_Handler {

    /**
     *  Constructor.
     */
    constructor() {}

    /**
     *  Retrieves a file's data given its path.
     *  @param file_path {String}
     */
    openFile(file_path) {
        let self = File_Handler;
        fs.readFile(file_path, 'utf-8', (err, data) => {
            if(err) {
              console.log(err);
            }
            try {

                /**
                 * New page styling.
                 */
                fc.reStyle('Editing Screen');

                /**
                 * File absolute path setting.
                 */
                file_abs_path = file_path;

                /**
                 * File name field creation.
                 */
                fc.createFileNameField(self.getFileName(file_path));

                /**
                 * File data parsing.
                 */
                let tour = JSON.parse(data);

                /**
                 * Create description field and append it to the page.
                 */
                fc.createDescField(tour._description);

                /**
                 * Step number tracking.
                 */
                step_num = tour.steps.length;

                /**
                 * Form content generation using tour steps.
                 */
                tour.steps.forEach((s, v) => {
                    fc.createStep(v);
                    Object.keys(s).map((k) => {
                        let node = {};
                        if(s[k].length > 20) {
                            node = fc.createFormElement('textarea', k, s[k]);
                        } else {
                            node = fc.createFormElement('input', k, s[k]);
                        }
                        fc.createGroupContainer(`step_${v}`, k, node);
                    });
                    fc.addStepButton();
                });
                fc.createSeparators();
            } catch (ex) {
                console.log(`Wrong file format [${ex}]`);
            }
        });
    }

    /**
     *  Creates a new file form.
     */
    newFile() {
        fc.createNewFile();
    }

    /**
     * Step number getter.
     * @returns {number}
     */
    static getStepNum() {
        return fc.getStepNum();
    }

    /**
     * Saves the file content into a new file overwriting the open one.
     */
    save(is_new_file, path) {
        let self = File_Handler;
        let json_content = JSON.stringify(self.createSavingObject(self));
        if(is_new_file) {
            let name = self.getFileName(path);
            console.log(name);
            if(name.includes('.')) {
                name = name.substr(0, name.lastIndexOf('.'));
            }
            console.log(name);
            path = path.replace(self.getFileName(path), `${name}.tour`);
            console.log(path);
        } else {
            path = file_abs_path;
        }
        fs.writeFile(path, json_content, (err) => {
            if(err) {
                alert(`There was an error saving the changes [${err}]`);
            }
            alert('Changes saved successfully.');
        });
    }

    /**
     * Adds a step to the file.
     */
    static newStep() {
        fc.createNextStep();
    }

    /**
     * Creates an object containing the current form data.
     * @returns {Object}
     */
    static createSavingObject(self) {
        return self.stepsObject(self.descriptionObject(file_content));
    }

    /**
     * Creates the description part of the saving object.
     * @param obj {Object}
     * @returns {Object}
     */
    static descriptionObject(obj) {
        obj._description = document.getElementById('desc').value;
        return obj;
    }

    /**
     * Generates the object structure for the step array saving all the new data.
     * @param obj {Object}
     * @returns {Object}
     */
    static stepsObject(obj) {
        let self = File_Handler;
        obj.steps = [];
        let steps = document.querySelectorAll('div.form-group.step-div');
        steps.forEach((s, v) => {
            obj.steps.push({});
            s.querySelectorAll('input').forEach((i) => {
                obj.steps[v][i.id] = i.value;
            });
            s.querySelectorAll('textarea').forEach((t) => {
                obj.steps[v][t.id] = self.removeNewLines(t.value);
            });
        });
        return obj;
    }

    /**
     *  Given a file path return the file name using a regexp.
     *  @param path {String}
     *  @return name {String}
     */
    static getFileName(path) {
        return path.replace(/^.*(\\|\/|\:)/, '');
    }

    /**
     * Handles new lines removing for all OS'.
     * @param str {String}
     * @returns {String}
     */
    static removeNewLines(str) {
        return str.replace(/\r?\n|\r/g, '');
    }
}

module.exports = File_Handler;