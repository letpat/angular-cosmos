(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "* {\n  font-family: Arial; }\n\nh2 {\n  color: #444;\n  font-weight: lighter; }\n\nbody {\n  margin: 2em; }\n\nbody,\ninput[text],\nbutton {\n  color: #888; }\n\nbutton {\n  font-size: 14px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\n\nbutton:hover {\n    background-color: #cfd8dc; }\n\nbutton.delete-button {\n    float: right;\n    background-color: gray !important;\n    background-color: #d83b01 !important;\n    color: white;\n    padding: 4px;\n    position: relative;\n    font-size: 12px; }\n\ndiv {\n  margin: .1em; }\n\n.selected {\n  background-color: #cfd8dc !important;\n  background-color: #0078d7 !important;\n  color: white; }\n\n.heroes {\n  float: left;\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0; }\n\n.heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #eee;\n    margin: .5em;\n    padding: .5em;\n    height: 3.0em;\n    border-radius: 4px;\n    width: 17em; }\n\n.heroes li:hover {\n      color: #607d8b;\n      color: #0078d7;\n      background-color: #ddd;\n      left: .1em; }\n\n.heroes li.selected:hover {\n      /*background-color: #BBD8DC !important;*/\n      color: white; }\n\n.heroes .text {\n    position: relative;\n    top: -3px; }\n\n.heroes .saying {\n    margin: 5px 0; }\n\n.heroes .name {\n    font-weight: bold; }\n\n.heroes .badge {\n    /* display: inline-block; */\n    float: left;\n    font-size: small;\n    color: white;\n    padding: 0.7em 0.7em 0 0.5em;\n    background-color: #607d8b;\n    background-color: #0078d7;\n    background-color: #86b7dd;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 3.0em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n    width: 1.2em; }\n\n.header-bar {\n  background-color: #0078d7;\n  height: 4px;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\nlabel {\n  display: inline-block;\n  width: 4em;\n  margin: .5em 0;\n  color: #888; }\n\nlabel.value {\n    margin-left: 10px;\n    font-size: 14px; }\n\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em; }\n\ninput::-webkit-input-placeholder {\n    color: lightgray;\n    font-weight: normal;\n    font-size: 12px;\n    letter-spacing: 3px; }\n\ninput::-ms-input-placeholder {\n    color: lightgray;\n    font-weight: normal;\n    font-size: 12px;\n    letter-spacing: 3px; }\n\ninput::placeholder {\n    color: lightgray;\n    font-weight: normal;\n    font-size: 12px;\n    letter-spacing: 3px; }\n\n.editarea {\n  float: left; }\n\n.editarea input {\n    margin: 4px;\n    height: 20px;\n    color: #0078d7; }\n\n.editarea button {\n    margin: 8px; }\n\n.editarea .editfields {\n    margin-left: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGxldGFpXFxzb3VyY2VcXHJlcG9zXFxhbmd1bGFyLWNvc21vc2RiL3NyY1xcc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxtQkFBa0IsRUFDckI7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gscUJBQW9CLEVBQ3ZCOztBQUVEO0VBQ0ksWUFBVyxFQUNkOztBQUVEOzs7RUFHSSxZQUFXLEVBRWQ7O0FBRUQ7RUFDSSxnQkFBZTtFQUNmLG1CQUFrQjtFQUNsQix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLGtCQUFpQjtFQUNqQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixhQUFZLEVBZWY7O0FBdkJEO0lBV1EsMEJBQXlCLEVBQzVCOztBQVpMO0lBZVEsYUFBWTtJQUNaLGtDQUFpQztJQUNqQyxxQ0FBNEM7SUFDNUMsYUFBWTtJQUNaLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxhQUFZLEVBQ2Y7O0FBRUQ7RUFDSSxxQ0FBb0M7RUFDcEMscUNBQTZDO0VBQzdDLGFBQVksRUFDZjs7QUFFRDtFQUNJLFlBQVc7RUFDWCxrQkFBaUI7RUFDakIsc0JBQXFCO0VBQ3JCLFdBQVUsRUF5RGI7O0FBN0REO0lBT1EsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsUUFBTztJQUNQLHVCQUFzQjtJQUN0QixhQUFZO0lBQ1osY0FBYTtJQUNiLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsWUFBVyxFQWFkOztBQTVCTDtNQWtCWSxlQUFjO01BQ2QsZUFBdUI7TUFDdkIsdUJBQXNCO01BQ3RCLFdBQVUsRUFDYjs7QUF0QlQ7TUF5QlkseUNBQXlDO01BQ3pDLGFBQVksRUFDZjs7QUEzQlQ7SUErQlEsbUJBQWtCO0lBQ2xCLFVBQVMsRUFDWjs7QUFqQ0w7SUFvQ1EsY0FBYSxFQUNoQjs7QUFyQ0w7SUF3Q1Esa0JBQWlCLEVBQ3BCOztBQXpDTDtJQTRDUSw0QkFBNEI7SUFDNUIsWUFBVztJQUNYLGlCQUFnQjtJQUNoQixhQUFZO0lBQ1osNkJBQTRCO0lBQzVCLDBCQUF5QjtJQUN6QiwwQkFBa0M7SUFDbEMsMEJBQW9DO0lBQ3BDLGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFVBQVM7SUFDVCxjQUFhO0lBQ2IsbUJBQWtCO0lBQ2xCLDJCQUEwQjtJQUMxQixhQUFZLEVBQ2Y7O0FBR0w7RUFDSSwwQkFBa0M7RUFDbEMsWUFBVztFQUNYLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDdEI7O0FBRUQ7RUFDSSxzQkFBcUI7RUFDckIsV0FBVTtFQUNWLGVBQWM7RUFDZCxZQUFXLEVBTWQ7O0FBVkQ7SUFPUSxrQkFBaUI7SUFDakIsZ0JBQWUsRUFDbEI7O0FBR0w7RUFDSSxZQUFXO0VBQ1gsZUFBYztFQUNkLG1CQUFrQixFQVFyQjs7QUFYRDtJQU1RLGlCQUFnQjtJQUNoQixvQkFBbUI7SUFDbkIsZ0JBQWU7SUFDZixvQkFBbUIsRUFDdEI7O0FBVkw7SUFNUSxpQkFBZ0I7SUFDaEIsb0JBQW1CO0lBQ25CLGdCQUFlO0lBQ2Ysb0JBQW1CLEVBQ3RCOztBQVZMO0lBTVEsaUJBQWdCO0lBQ2hCLG9CQUFtQjtJQUNuQixnQkFBZTtJQUNmLG9CQUFtQixFQUN0Qjs7QUFHTDtFQUNJLFlBQVcsRUFlZDs7QUFoQkQ7SUFJUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLGVBQXVCLEVBQzFCOztBQVBMO0lBVVEsWUFBVyxFQUNkOztBQVhMO0lBY1Esa0JBQWlCLEVBQ3BCIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKiB7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xufVxuXG5oMiB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbmJvZHkge1xuICAgIG1hcmdpbjogMmVtO1xufVxuXG5ib2R5LFxuaW5wdXRbdGV4dF0sXG5idXR0b24ge1xuICAgIGNvbG9yOiAjODg4O1xuICAgIC8vIGZvbnQtZmFtaWx5OiBDYW1icmlhLCBHZW9yZ2lhO1xufVxuXG5idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LWZhbWlseTogQXJpYWw7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjdXJzb3I6IGhhbmQ7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbiAgICB9XG5cbiAgICAmLmRlbGV0ZS1idXR0b24ge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXkgIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxNiwgNTksIDEpICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5cbmRpdiB7XG4gICAgbWFyZ2luOiAuMWVtO1xufVxuXG4uc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGMgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTIwLCAyMTUpICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uaGVyb2VzIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcblxuICAgIGxpIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgIG1hcmdpbjogLjVlbTtcbiAgICAgICAgcGFkZGluZzogLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjBlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICB3aWR0aDogMTdlbTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjA3ZDhiO1xuICAgICAgICAgICAgY29sb3I6IHJnYigwLCAxMjAsIDIxNSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xuICAgICAgICAgICAgbGVmdDogLjFlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuc2VsZWN0ZWQ6aG92ZXIge1xuICAgICAgICAgICAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7Ki9cbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0zcHg7XG4gICAgfVxuXG4gICAgLnNheWluZyB7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICAuYmFkZ2Uge1xuICAgICAgICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDAuN2VtIDAuN2VtIDAgMC41ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MDdkOGI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxMjAsIDIxNSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDE4MywgMjIxKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICB0b3A6IC00cHg7XG4gICAgICAgIGhlaWdodDogMy4wZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjhlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgMCA0cHg7XG4gICAgICAgIHdpZHRoOiAxLjJlbTtcbiAgICB9XG59XG5cbi5oZWFkZXItYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMTIwLCAyMTUpO1xuICAgIGhlaWdodDogNHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxubGFiZWwge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogNGVtO1xuICAgIG1hcmdpbjogLjVlbSAwO1xuICAgIGNvbG9yOiAjODg4O1xuXG4gICAgJi52YWx1ZSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG5pbnB1dCB7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZy1sZWZ0OiAuNGVtO1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgfVxufVxuXG4uZWRpdGFyZWEge1xuICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgaW5wdXQge1xuICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBjb2xvcjogcmdiKDAsIDEyMCwgMjE1KTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW46IDhweDtcbiAgICB9XG5cbiAgICAuZWRpdGZpZWxkcyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgIH1cbn0iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\letai\source\repos\angular-cosmosdb\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map