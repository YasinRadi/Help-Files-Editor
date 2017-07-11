/**
 * Created by Yasin Radi on 2017-07-05.
 */

const TEMPLATE = `<span class="fieldTitle">Element:</span>
                    <input id="element" value="#" size="30" />
                    <span class="fieldTitle">Title:</span>
                    <input id="title" value="" size="30" />
                    <span class="fieldTitle">Placement:</span>
                    <input id="placement" value="" size="30" />
                    <span class="fieldTitle">Container:</span>
                    <input id="container" value="body" size="30" />
                    <span class="fieldTitle">Path:</span>
                    <input id="path" value="" size="30" />
                    <span class="fieldTitle">Host:</span>
                    <input id="host" value="" size="30" />
                    <span class="fieldTitle">Animation:</span>
                    <input id="animation" value="" size="30" />
                    <span class="fieldTitle">Backdrop:</span>
                    <input id="backdrop" value="false" size="30" />
                    <span class="fieldTitle">BackdropContainer:</span>
                    <input id="backdropContainer" value="body" size="30" />
                    <span class="fieldTitle">BackdropPadding:</span>
                    <input id="backdropPadding" value="false" size="30" />
                    <span class="fieldTitle">Redirect:</span>
                    <input id="redirect" value="true" size="30" />
                    <span class="fieldTitle">Reflex:</span>
                    <input id="reflex" value="false" size="30" />
                    <span class="fieldTitle">Orphan:</span>
                    <input id="orphan" value="false" size="30" />
                    <span class="fieldTitle">Duration:</span>
                    <input id="duration" value="false" size="30" />
                    <span class="fieldTitle">Content:</span>
                    <textarea id="content"  cols="100" rows="12"></textarea>
                    <span class="fieldTitle">Template:</span>
                    <textarea id="template"  cols="100" rows="12"><div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default' data-role='prev'>« Prev</button><span data-role='separator'>|</span><button class='btn btn-default' data-role='next'>Next »</button></div><button class='btn btn-default' data-role='end'>End tour</button></div></textarea>
                    <hr>`;

class Step_Template {
    constructor() {}

    static getStepTemplate() {
        return TEMPLATE;
    }
}

module.exports = Step_Template;