Ext.data.JsonP.BasiGX_view_button_MergeSelection({"tagname":"class","name":"BasiGX.view.button.MergeSelection","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"MergeSelection.js","href":"MergeSelection.html#BasiGX-view-button-MergeSelection"}],"aliases":{"widget":["basigx-button-mergeselection"]},"alternateClassNames":[],"extends":"Ext.button.Button","mixins":[],"requires":["BasiGX.util.Animate","BasiGX.view.form.CoordinateTransform","BasiGX.view.window.MergeWindow","Ext.app.ViewModel","Ext.window.Window"],"uses":[],"members":[{"name":"handler","tagname":"cfg","owner":"BasiGX.view.button.MergeSelection","id":"cfg-handler","meta":{"private":true}},{"name":"bind","tagname":"property","owner":"BasiGX.view.button.MergeSelection","id":"property-bind","meta":{}},{"name":"config","tagname":"property","owner":"BasiGX.view.button.MergeSelection","id":"property-config","meta":{}},{"name":"sourceLayer","tagname":"property","owner":"BasiGX.view.button.MergeSelection","id":"property-sourceLayer","meta":{}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.button.MergeSelection","id":"property-viewModel","meta":{}},{"name":"getHandler","tagname":"method","owner":"BasiGX.view.button.MergeSelection","id":"method-getHandler","meta":{}},{"name":"setHandler","tagname":"method","owner":"BasiGX.view.button.MergeSelection","id":"method-setHandler","meta":{}}],"code_type":"ext_define","id":"class-BasiGX.view.button.MergeSelection","component":false,"superclasses":["Ext.button.Button"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.button.Button<div class='subclass '><strong>BasiGX.view.button.MergeSelection</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/BasiGX.util.Animate' rel='BasiGX.util.Animate' class='docClass'>BasiGX.util.Animate</a></div><div class='dependency'><a href='#!/api/BasiGX.view.form.CoordinateTransform' rel='BasiGX.view.form.CoordinateTransform' class='docClass'>BasiGX.view.form.CoordinateTransform</a></div><div class='dependency'><a href='#!/api/BasiGX.view.window.MergeWindow' rel='BasiGX.view.window.MergeWindow' class='docClass'>BasiGX.view.window.MergeWindow</a></div><div class='dependency'>Ext.app.ViewModel</div><div class='dependency'>Ext.window.Window</div><h4>Files</h4><div class='dependency'><a href='source/MergeSelection.html#BasiGX-view-button-MergeSelection' target='_blank'>MergeSelection.js</a></div></pre><div class='doc-contents'><p>Merge selected features button</p>\n\n<p>Merge selected features into the currently selected layer.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-handler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.MergeSelection'>BasiGX.view.button.MergeSelection</span><br/><a href='source/MergeSelection.html#BasiGX-view-button-MergeSelection-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.MergeSelection-cfg-handler' class='name expandable'>handler</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bind' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.MergeSelection'>BasiGX.view.button.MergeSelection</span><br/><a href='source/MergeSelection.html#BasiGX-view-button-MergeSelection-property-bind' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.MergeSelection-property-bind' class='name expandable'>bind</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{text: &#39;{text}&#39;, tooltip: &#39;{tooltip}&#39;}</code></p></div></div></div><div id='property-config' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.MergeSelection'>BasiGX.view.button.MergeSelection</span><br/><a href='source/MergeSelection.html#BasiGX-view-button-MergeSelection-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.MergeSelection-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='property-sourceLayer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.MergeSelection'>BasiGX.view.button.MergeSelection</span><br/><a href='source/MergeSelection.html#BasiGX-view-button-MergeSelection-property-sourceLayer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.MergeSelection-property-sourceLayer' class='name expandable'>sourceLayer</a> : ol.layer.Vector<span class=\"signature\"></span></div><div class='description'><div class='short'><p>The source layer name.</p>\n</div><div class='long'><p>The source layer name.</p>\n</div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.MergeSelection'>BasiGX.view.button.MergeSelection</span><br/><a href='source/MergeSelection.html#BasiGX-view-button-MergeSelection-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.MergeSelection-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {tooltip: &#39;Selektierte Features in diesen Layer übernehmen&#39;, text: &#39;Features übernehmen&#39;}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getHandler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.MergeSelection'>BasiGX.view.button.MergeSelection</span><br/><a href='source/MergeSelection.html#BasiGX-view-button-MergeSelection-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.MergeSelection-method-getHandler' class='name expandable'>getHandler</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of handler. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/BasiGX.view.button.MergeSelection-cfg-handler\" rel=\"BasiGX.view.button.MergeSelection-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.button.MergeSelection'>BasiGX.view.button.MergeSelection</span><br/><a href='source/MergeSelection.html#BasiGX-view-button-MergeSelection-cfg-handler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.button.MergeSelection-method-setHandler' class='name expandable'>setHandler</a>( <span class='pre'>handler</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of handler. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/BasiGX.view.button.MergeSelection-cfg-handler\" rel=\"BasiGX.view.button.MergeSelection-cfg-handler\" class=\"docClass\">handler</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});