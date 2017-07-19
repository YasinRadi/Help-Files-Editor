/**
 * Created by Yasin Radi <yasin.ben.hamman@gmail.com>
 */
'use strict';

const {Menu, dialog} = require('electron').remote;
const fh   = require('./file_handler');
const val  = require('./validator');
const fs   = require('fs');
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
                accelerator: 'CmdOrCtrl+N',
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
                accelerator: 'CmdOrCtrl+O',
                click: () => {
                    if(!is_file_open) {
                        if(!is_file_new) {
                            dialog.showOpenDialog((file) => {
                                if(typeof file !== 'undefined') {
                                    if(val.checkExtension(file[0])) {
                                        fh.openFile(file[0]);
                                        is_file_open = true;
                                    } else {
                                        alert(`File must be '.tour' type.`);
                                    }
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
                accelerator: 'CmdOrCtrl+S',
                click: () => {
                    if(is_file_open && is_file_new) {
                        if(val.validate()) {
                            dialog.showSaveDialog((file) => {
                                if(typeof file !== 'undefined') {
                                    fh.save(true, file);
                                    is_file_new = false;
                                }
                            });
                        }
                    } else if(is_file_open && !is_file_new) {
                        if(val.validate()) {
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

class Main_Menu {}

module.exports = Main_Menu;
