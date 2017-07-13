/**
 * Created by Yasin Radi on 2017-07-05.
 */

const TEMPLATE = `<div class="form-group col-md-12">
                    <label for="element"  class="fieldTitle">Element:</label>
                    <input id="element" class="form-control" value="#" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="title"  class="fieldTitle">Title:</label>
                    <input id="title" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="placement" class="fieldTitle">Placement:</label>
                    <input id="placement" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="container" class="fieldTitle">Container:</label>
                    <input id="container" class="form-control" value="body" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="path"  class="fieldTitle">Path:</label>
                    <input id="path" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="host" class="fieldTitle">Host:</label>
                    <input id="host" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="host" class="fieldTitle">Host:</label>
                    <input id="host" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="animation" class="fieldTitle">Animation:</label>
                    <input id="animation" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="backdrop" class="fieldTitle">Backdrop:</label>
                    <input id="backdrop" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="backdropContainer" class="fieldTitle">BackdropContainer:</label>
                    <input id="backdropContainer" class="form-control" value="body" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="backdropPadding" class="fieldTitle">BackdropPadding:</label>
                    <input id="backdropPadding" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="reflex" class="fieldTitle">Reflex:</label>
                    <input id="reflex" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="orphan" class="fieldTitle">Orphan:</label>
                    <input id="orphan" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="duration" class="fieldTitle">Duration:</label>
                    <input id="duration" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12">
                    <label for="content" class="fieldTitle">Content:</label>
                    <textarea id="content" class="form-control"  cols="100" rows="12"></textarea>
                  </div>
                  <div class="form-group col-md-12">
                    <label for="template" class="fieldTitle">Template:</label>
                    <textarea id="template" class="form-control"  cols="100" rows="12"><div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3><div class='popover-content'></div><div class='popover-navigation'><button class='btn btn-default' data-role='prev'>« Prev</button><label data-role='separator'>|</label><button class='btn btn-default' data-role='next'>Next »</button></div><button class='btn btn-default' data-role='end'>End tour</button></div></textarea>
                  </div>
                  <div class="form-group col-md-12">
                    <hr>
                  </div>`;

class Step_Template {
    constructor() {}

    static getStepTemplate() {
        return TEMPLATE;
    }
}

module.exports = Step_Template;