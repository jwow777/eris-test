(this["webpackJsonperis-test"]=this["webpackJsonperis-test"]||[]).push([[0],{190:function(e,t,n){},191:function(e,t,n){"use strict";n.r(t);var o=n(4),l=n.n(o),a=n(48),i=n.n(a),r=(n(92),n(93),n(24)),c=n(25),s=n(27),d=n(26),u=n(8),g=(n(87),n(2)),h=(l.a.Component,n(19)),y=(n(190),function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(r.a)(this,n),(o=t.call(this,e)).state={editorState:u.EditorState.createEmpty()},o.focus=function(){return o.refs.editor.focus()},o.onChange=function(e){return o.setState({editorState:e})},o.handleKeyCommand=o._handleKeyCommand.bind(Object(h.a)(o)),o.mapKeyToEditorCommand=o._mapKeyToEditorCommand.bind(Object(h.a)(o)),o.toggleBlockType=o._toggleBlockType.bind(Object(h.a)(o)),o.toggleInlineStyle=o._toggleInlineStyle.bind(Object(h.a)(o)),o}return Object(c.a)(n,[{key:"_handleKeyCommand",value:function(e,t){var n=u.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(e){if(9!==e.keyCode)return Object(u.getDefaultKeyBinding)(e);var t=u.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)}},{key:"_toggleBlockType",value:function(e){this.onChange(u.RichUtils.toggleBlockType(this.state.editorState,e))}},{key:"_toggleInlineStyle",value:function(e){this.onChange(u.RichUtils.toggleInlineStyle(this.state.editorState,e))}},{key:"render",value:function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{className:"RichEditor-controls",children:[Object(g.jsx)(f,{editorState:e,onToggle:this.toggleBlockType}),Object(g.jsx)(O,{editorState:e,onToggle:this.toggleInlineStyle})]}),Object(g.jsx)("div",{className:t,onClick:this.focus,children:Object(g.jsx)(u.Editor,{blockStyleFn:m,customStyleMap:b,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,placeholder:"Tell a story...",ref:"editor",spellCheck:!0})})]})}}]),n}(l.a.Component)),b={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function m(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var j=function(e){Object(s.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(r.a)(this,n),(e=t.call(this)).onToggle=function(t){t.preventDefault(),e.props.onToggle(e.props.style)},e}return Object(c.a)(n,[{key:"render",value:function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),Object(g.jsx)("span",{className:e,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(l.a.Component),p=[{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],f=function(e){var t=e.editorState,n=t.getSelection(),o=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return Object(g.jsx)(g.Fragment,{children:p.map((function(t){return Object(g.jsx)(j,{active:t.style===o,label:t.label,onToggle:e.onToggle,style:t.style},t.label)}))})},C=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],O=function(e){var t=e.editorState.getCurrentInlineStyle();return Object(g.jsx)(g.Fragment,{children:C.map((function(n){return Object(g.jsx)(j,{active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style},n.label)}))})},k=y;var v=function(){return Object(g.jsx)(k,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,192)).then((function(t){var n=t.getCLS,o=t.getFID,l=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),o(e),l(e),a(e),i(e)}))};i.a.render(Object(g.jsx)(l.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),S()},92:function(e,t,n){},93:function(e,t,n){}},[[191,1,2]]]);
//# sourceMappingURL=main.9d1bb3e3.chunk.js.map