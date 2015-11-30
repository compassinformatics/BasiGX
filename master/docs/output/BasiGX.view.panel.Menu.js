Ext.data.JsonP.BasiGX_view_panel_Menu({"tagname":"class","name":"BasiGX.view.panel.Menu","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Menu.js","href":"Menu.html#BasiGX-view-panel-Menu"}],"aliases":{"widget":["basigx-panel-menu"]},"alternateClassNames":[],"extends":"Ext.panel.Panel","mixins":[],"requires":["Ext.app.ViewModel","Ext.layout.container.Accordion"],"uses":[],"members":[{"name":"activeItem","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-activeItem","meta":{"private":true}},{"name":"collapsible","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-collapsible","meta":{"private":true}},{"name":"defaultListenerScope","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-defaultListenerScope","meta":{"private":true}},{"name":"defaults","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-defaults","meta":{"private":true}},{"name":"headerPosition","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-headerPosition","meta":{"private":true}},{"name":"hideCollapseTool","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-hideCollapseTool","meta":{"private":true}},{"name":"items","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-items","meta":{"private":true}},{"name":"layout","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-layout","meta":{"private":true}},{"name":"listeners","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-listeners","meta":{"private":true}},{"name":"titleAlign","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-titleAlign","meta":{"private":true}},{"name":"titleCollapse","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-titleCollapse","meta":{"private":true}},{"name":"viewModel","tagname":"property","owner":"BasiGX.view.panel.Menu","id":"property-viewModel","meta":{"private":true}},{"name":"setTitleAccordingToCollapsedState","tagname":"method","owner":"BasiGX.view.panel.Menu","id":"method-setTitleAccordingToCollapsedState","meta":{"private":true}}],"code_type":"ext_define","id":"class-BasiGX.view.panel.Menu","short_doc":"Menu Panel\n\nUsed to show a menu containing different panels of your choice, e.g. ...","component":false,"superclasses":["Ext.panel.Panel"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.panel.Panel<div class='subclass '><strong>BasiGX.view.panel.Menu</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.app.ViewModel</div><div class='dependency'>Ext.layout.container.Accordion</div><h4>Files</h4><div class='dependency'><a href='source/Menu.html#BasiGX-view-panel-Menu' target='_blank'>Menu.js</a></div></pre><div class='doc-contents'><p>Menu Panel</p>\n\n<p>Used to show a menu containing different panels of your choice, e.g.\nthe print form panel</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activeItem' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-activeItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-activeItem' class='name expandable'>activeItem</a> : Number<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='property-collapsible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-collapsible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-collapsible' class='name expandable'>collapsible</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-defaultListenerScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-defaultListenerScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-defaultListenerScope' class='name expandable'>defaultListenerScope</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-defaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-defaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-defaults' class='name expandable'>defaults</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{hideCollapseTool: true, titleCollapse: true}</code></p></div></div></div><div id='property-headerPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-headerPosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-headerPosition' class='name expandable'>headerPosition</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'bottom'</code></p></div></div></div><div id='property-hideCollapseTool' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-hideCollapseTool' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-hideCollapseTool' class='name expandable'>hideCollapseTool</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-items' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-items' class='name expandable'>items</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-layout' class='name expandable'>layout</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: 'accordion', titleCollapse: false, animate: true}</code></p></div></div></div><div id='property-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-listeners' class='name expandable'>listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{collapse: 'setTitleAccordingToCollapsedState', expand: 'setTitleAccordingToCollapsedState', afterrender: 'setTitleAccordingToCollapsedState'}</code></p></div></div></div><div id='property-titleAlign' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-titleAlign' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-titleAlign' class='name expandable'>titleAlign</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'center'</code></p></div></div></div><div id='property-titleCollapse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-titleCollapse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-titleCollapse' class='name expandable'>titleCollapse</a> : Boolean<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-viewModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-property-viewModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-property-viewModel' class='name expandable'>viewModel</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: {closedMenuTitle: 'Menu schließen', openedMenuTitle: 'Menu anzeigen'}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-setTitleAccordingToCollapsedState' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.view.panel.Menu'>BasiGX.view.panel.Menu</span><br/><a href='source/Menu.html#BasiGX-view-panel-Menu-method-setTitleAccordingToCollapsedState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.view.panel.Menu-method-setTitleAccordingToCollapsedState' class='name expandable'>setTitleAccordingToCollapsedState</a>( <span class='pre'>menu</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>menu</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","meta":{}});