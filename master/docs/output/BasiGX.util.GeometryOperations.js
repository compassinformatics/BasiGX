Ext.data.JsonP.BasiGX_util_GeometryOperations({"tagname":"class","name":"BasiGX.util.GeometryOperations","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"GeometryOperations.js","href":"GeometryOperations.html#BasiGX-util-GeometryOperations"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.Base","mixins":[],"requires":[],"uses":[],"members":[{"name":"computeCircleRadius","tagname":"method","owner":"BasiGX.util.GeometryOperations","id":"static-method-computeCircleRadius","meta":{"static":true}},{"name":"translateCircleToPolygon","tagname":"method","owner":"BasiGX.util.GeometryOperations","id":"static-method-translateCircleToPolygon","meta":{"static":true}}],"code_type":"ext_define","id":"class-BasiGX.util.GeometryOperations","component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>BasiGX.util.GeometryOperations</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/GeometryOperations.html#BasiGX-util-GeometryOperations' target='_blank'>GeometryOperations.js</a></div></pre><div class='doc-contents'><p>Utility class containing static methods for geometry operations.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-computeCircleRadius' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.GeometryOperations'>BasiGX.util.GeometryOperations</span><br/><a href='source/GeometryOperations.html#BasiGX-util-GeometryOperations-static-method-computeCircleRadius' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.GeometryOperations-static-method-computeCircleRadius' class='name expandable'>computeCircleRadius</a>( <span class='pre'>start, end</span> ) : Number<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Computes circle feature radius depending on given center and the\nsecond coordinate as distance from the circle center...</div><div class='long'><p>Computes circle feature radius depending on given center and the\nsecond coordinate as distance from the circle center to the vertices.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>start</span> : ol.Coordinate<div class='sub-desc'><p>The start coordinates as array (lat/lon\n    or x/y).</p>\n</div></li><li><span class='pre'>end</span> : ol.Coordinate<div class='sub-desc'><p>The end coordinates as array (lat/lon or\n    x/y).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The radius of a circle with center at <code>start</code> going\n    through <code>end</code>.</p>\n</div></li></ul></div></div></div><div id='static-method-translateCircleToPolygon' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='BasiGX.util.GeometryOperations'>BasiGX.util.GeometryOperations</span><br/><a href='source/GeometryOperations.html#BasiGX-util-GeometryOperations-static-method-translateCircleToPolygon' target='_blank' class='view-source'>view source</a></div><a href='#!/api/BasiGX.util.GeometryOperations-static-method-translateCircleToPolygon' class='name expandable'>translateCircleToPolygon</a>( <span class='pre'>features</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>The circle geometries are not supported by the WKT format, so it\ncan't be used for modify iterations. ...</div><div class='long'><p>The circle geometries are not supported by the WKT format, so it\ncan't be used for modify iterations.</p>\n\n<p>Since OpenLayers still doesn't support it\n(s. also https://github.com/openlayers/ol3/issues/3777) we need to\ntransform the drawn circle to the approximate regular polygon with\ngiven circle geometry.</p>\n\n<p>The passed collection is modified in place.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>features</span> : ol.Collection<div class='sub-desc'><p>The collection of features to\n    transform to features with a <code>ol.geom.Polygon</code> geometry. This\n    collection is modified in place.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});