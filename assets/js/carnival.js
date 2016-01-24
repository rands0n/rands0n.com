(function(win) {
    'use strict';

    var Carnival = {};

    Carnival.init = function(options) {
        var xmlhttp, self = this;

        Carnival.setOptions(options);

        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            var node;

            if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                node = document.createElement('div');
                node.innerHTML = xmlhttp.responseText;
                document.body.appendChild(node);

                return Carnival.replaceScriptsRecurse(node);
            }
        };

        xmlhttp.open('GET', 'https://carnivalapp.io/sites/464/embed?t=' + Math.random(), true);

        return xmlhttp.send();
    };

    Carnival.setOptions = function(options) {
        var defaults, property, _results;
        win.CarnivalOptions = options || {};
        defaults = {
            enabled: true,
            article_author: '',
            article_selector: '.post-content',
            block_selector: ':scope > p, :scope > pre',
            onNewComment: function(comment) {}
        };

        _results = [];

        for (property in defaults) {
            if (!(property in CarnivalOptions)) {
                _results.push(CarnivalOptions[property] = defaults[property]);
            } else {
                _results.push(void 0);
            }
        }

        return _results;
    };

    Carnival.replaceScriptsRecurse = function(node) {
        var child, script, _i, _len, _ref;

        if (Carnival.isScriptNode(node)) {
            script = document.createElement('script');
            script.src = node.src;
            node.parentNode.replaceChild(script, node);
        } else {
            _ref = node.childNodes;

            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
                child = _ref[_i];
                Carnival.replaceScriptsRecurse(child);
            }
        }

        return node;
    }

    Carnival.isScriptNode = function(node) {
        return node.getAttribute && node.tagName === 'SCRIPT';
    }

    window.Carnival = Carnival;
})(window);