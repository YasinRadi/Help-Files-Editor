/**
 * Created by Yasin Radi on 2017-07-05.
 */

const TEMPLATE = `<span class="fieldTitle">Element:</span>
                    <input name="element" value="#" size="30" />
                    <span class="fieldTitle">Title:</span>
                    <input name="title" value="" size="30" />
                    <span class="fieldTitle">Placement:</span>
                    <input name="placement" value="" size="30" />
                    <span class="fieldTitle">Container:</span>
                    <input name="container" value="body" size="30" />
                    <span class="fieldTitle">Path:</span>
                    <input name="path" value="" size="30" />
                    <span class="fieldTitle">Host:</span>
                    <input name="host" value="" size="30" />
                    <span class="fieldTitle">Animation:</span>
                    <input name="animation" value="" size="30" />
                    <span class="fieldTitle">Backdrop:</span>
                    <input name="backdrop" value="false" size="30" />
                    <span class="fieldTitle">BackdropContainer:</span>
                    <input name="backdropContainer" value="body" size="30" />
                    <span class="fieldTitle">BackdropPadding:</span>
                    <input name="backdropPadding" value="false" size="30" />
                    <span class="fieldTitle">Redirect:</span>
                    <input name="redirect" value="true" size="30" />
                    <span class="fieldTitle">Reflex:</span>
                    <input name="reflex" value="false" size="30" />
                    <span class="fieldTitle">Orphan:</span>
                    <input name="orphan" value="false" size="30" />
                    <span class="fieldTitle">Duration:</span>
                    <input name="duration" value="false" size="30" />
                    <span class="fieldTitle">Content:</span>
                    <textarea name="content"  cols="100" rows="12"></textarea>
                    <span class="fieldTitle">Template:</span>
                    <textarea name="template"  cols="100" rows="12"><div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default' data-role='prev'>« Prev</button><span data-role='separator'>|</span><button class='btn btn-default' data-role='next'>Next »</button></div><button class='btn btn-default' data-role='end'>End tour</button></div></textarea>
                    <hr>`;

class Step_Template {
    constructor() {}

    static getStepTemplate() {
        return TEMPLATE;
    }
}

module.exports = Step_Template;