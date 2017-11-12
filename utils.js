var utils = (function () {
    //=>toArray:converts the class array to an array
    var toArray = function (classAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(classAry);
        } catch (e) {
            for (var i = 0; i < classAry.length; i++) {
                ary[ary.length] = classAry[i];
            }
        }
        return ary;
    };

    //=>toJSON:converts a JSON formatted string to a JSON object
    var toJSON = function (str) {
        return 'JSON' in window ? JSON.parse(str) : eval('(' + str + ')');
    };

    //=>getCss:gets a value of a style attribute of the current element
    var getCss = function (curEle, attr) {
        var value = null,
            reg = null;
        if (window.getComputedStyle) {
            value = window.getComputedStyle(curEle, null)[attr];
        } else {
            if (attr === 'opacity') {
                value = curEle.currentStyle['filter'];
                reg = /^alpha\(opacity=(.+)\)$/i;
                value = reg.test(value) ? reg.exec(value)[1] / 100 : 1;
            } else {
                value = curEle.currentStyle[attr];
            }
        }
        reg = /^-?\d+(\.\d+)?(px|pt|rem|em)?$/i;
        reg.test(value) ? value = parseFloat(value) : null;
        return value;
    };

    //=>setCss:sets a value for a style property of the current element
    var setCss = function (curEle, attr, value) {
        if (attr === 'opacity') {
            curEle['style']['opacity'] = value;
            curEle['style']['filter'] = 'alpha(opacity=' + value * 100 + ')';
            return;
        }
        !isNaN(value) && !/^(zIndex|zoom|lineHeight|fontWeight)$/i.test(attr) ? value += 'px' : null;
        curEle['style'][attr] = value;
    };

    //=>setGroupCss:setting style attribute values to current elements in batches
    var setGroupCss = function (curEle, options) {
        if (Object.prototype.toString.call(options) !== '[object Object]') return;
        for (var attr in options) {
            if (options.hasOwnProperty(attr)) {
                setCss(curEle, attr, options[attr]);
            }
        }
    };

    //=>css:integrated method of setting styles, obtaining styles and setting styles in batches
    var css = function () {
        var len = arguments.length,
            type = Object.prototype.toString.call(arguments[1]),
            fn = getCss;
        len >= 3 ? fn = setCss : (len === 2 && type === '[object Object]' ? fn = setGroupCss : null);
        return fn.apply(this, arguments);
    };

    //=>offset:gets the offset of the current element distance BODY, including left offset and top offset
    var offset = function (curEle) {
        var l = curEle.offsetLeft,
            t = curEle.offsetTop,
            p = curEle.offsetParent;
        while (p.tagName !== 'BODY') {
            if (!/MSIE 8/i.test(navigator.userAgent)) {
                l += p.clientLeft;
                t += p.clientTop;
            }
            l += p.offsetLeft;
            t += p.offsetTop;
            p = p.offsetParent;
        }
        return {top: t, left: l};
    };

    //=>winBox:the operation has the JS box model property about the browser and handles the compatibility
    var winBox = function (attr, value) {
        if (typeof value !== 'undefined') {
            document.documentElement[attr] = value;
            document.body[attr] = value;
            return;
        }
        return document.documentElement[attr] || document.body[attr];
    };
    var children = function (curEle, tagName) {
        var result = [],
            childList = curEle.childNodes;
        for (var i = 0; i < childList.length; i++) {
            var item = childList[i];
            if (item.nodeType === 1) {
                if (typeof tagName !== 'undefined') {
                    if (item.tagName.toLowerCase() === tagName.toLowerCase()) {
                        result.push(item);
                    }
                    continue;
                }
                result.push(item);
            }
        }
        return result;
    }
    var queryElementsByClassName = function queryElementsByClassName(strClass,context) {
        if (arguments.length === 0) return [];
        context=context||document;
        var nodeList = utils.toArray(context.getElementsByTagName('*'));
        strClass = strClass.replace(/^ +| +$/g, '').split(/ +/);
        for (var i = 0; i < strClass.length; i++) {
            var reg = new RegExp('(^| +)' + strClass[i] + '( +|$)');
            for (var k = 0; k < nodeList.length; k++) {
                if (!reg.test(nodeList[k].className)) {
                    nodeList.splice(k, 1);
                    k--;
                }
            }
        }
        return nodeList;
    };

    return {
        toArray: toArray,
        toJSON: toJSON,
        css: css,
        offset: offset,
        winBox: winBox,
        children:children,
        queryElementsByClassName:queryElementsByClassName
    }
})();