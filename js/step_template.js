/**
 * Created by Yasin Radi on 2017-07-05.
 */

const TEMPLATE = `<div class="form-group col-md-12 has-feedback">
                    <label for="element"  class="control-label">Element:</label>
                    <input id="element" class="form-control" value="#" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="title"  class="control-label">Title:</label>
                    <input id="title" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="placement" class="control-label">Placement:</label>
                    <input id="placement" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="container" class="control-label">Container:</label>
                    <input id="container" class="form-control" value="body" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="path"  class="control-label">Path:</label>
                    <input id="path" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="host" class="control-label">Host:</label>
                    <input id="host" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="host" class="control-label">Host:</label>
                    <input id="host" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="animation" class="control-label">Animation:</label>
                    <input id="animation" class="form-control" value="" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="backdrop" class="control-label">Backdrop:</label>
                    <input id="backdrop" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="backdropContainer" class="control-label">BackdropContainer:</label>
                    <input id="backdropContainer" class="form-control" value="body" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="backdropPadding" class="control-label">BackdropPadding:</label>
                    <input id="backdropPadding" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="reflex" class="control-label">Reflex:</label>
                    <input id="reflex" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="orphan" class="control-label">Orphan:</label>
                    <input id="orphan" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="duration" class="control-label">Duration:</label>
                    <input id="duration" class="form-control" value="false" size="30" />
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="content" class="control-label">Content:</label>
                    <textarea id="content" class="form-control"  cols="100" rows="12"></textarea>
                  </div>
                  <div class="form-group col-md-12 has-feedback">
                    <label for="template" class="control-label">Template:</label>
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