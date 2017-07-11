'use strict';

const {Menu, dialog} = require('electron').remote;
const File_Handler = require('./file_handler');
const fc   = require('./form_creator');
const val  = require('./validator');
const fh   = new File_Handler();
const fs   = require('fs');
const path = require('path');
const url  = require('url');
let is_file_open = false;
let is_file_new  = false;

/**
 * Menu building using main menu template.
 * @type {Electron.Menu}
 */
const menu = Menu.buildFromTemplate([
    {
        label: 'File',
        submenu: [
            {
                label: 'New file',
                click: () => {
                    if(!is_file_open && !is_file_new) {
                        fh.newFile();
                        is_file_new = is_file_open = true;
                    }
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Open file...',
                click: () => {
                    if(!is_file_open) {
                        if(!is_file_new) {
                            dialog.showOpenDialog((file) => {
                                if(typeof file !== 'undefined') {
                                    document.getElementById('title').innerHTML = 'Editing Screen';
                                    fh.openFile(file[0]);
                                    fc.addStepButton();
                                    is_file_open = true;
                                }
                            });
                        } else {
                            alert('Current file must be closed first!');
                        }
                    } else {
                        alert(`There's an open file already!`);
                    }
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Save',
                click: () => {
                    if(is_file_open && is_file_new) {
                        if(val.validate(is_file_new)) {
                            dialog.showSaveDialog((file) => {
                                if(typeof file !== 'undefined') {
                                    fh.save(true, file);
                                    is_file_new = false;
                                }
                            });
                        }
                    } else if(is_file_open && !is_file_new) {
                        if(val.validate(is_file_new)) {
                            if(confirm('Do you want to save the changes? File data will be overwritten.')) {
                                fh.save(false);
                            }
                        }
                    }
                }
            },
            {
                type: 'separator'
            },
            {
                label: 'Close file',
                accelerator: 'CmdOrCtrl+R',
                click (item, focusedWindow) {
                    if (focusedWindow) focusedWindow.reload()
                }
            },
            {
                label: 'Exit',
                role: 'close'
            }
        ]
    },
    {
        label: 'Edit',
        submenu: [
            {
                role: 'undo'
            },
            {
                role: 'redo'
            },
            {
                type: 'separator'
            },
            {
                role: 'cut'
            },
            {
                role: 'copy'
            },
            {
                role: 'paste'
            },
            {
                role: 'pasteandmatchstyle'
            },
            {
                role: 'delete'
            },
            {
                role: 'selectall'
            }
        ]
    },
    {
        label: 'View',
        submenu: [
            {
                label: 'Toggle Developer Tools',
                accelerator: process.platform === 'darwin' ? 'Alt+Command+I' : 'Ctrl+Shift+I',
                click (item, focusedWindow) {
                    if (focusedWindow) focusedWindow.webContents.toggleDevTools()
                }
            },
            {
                type: 'separator'
            },
            {
                role: 'resetzoom'
            },
            {
                role: 'zoomin'
            },
            {
                role: 'zoomout'
            },
            {
                type: 'separator'
            },
            {
                role: 'togglefullscreen'
            }
        ]
    }
]);

/**
 * Template setting into the main menu.
 */
Menu.setApplicationMenu(menu);

class Main_Menu {
    contructor(){}
}

module.exports = Main_Menu;
