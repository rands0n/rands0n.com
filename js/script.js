(function(window, document) {
    'use strict';

    var post_content = document.querySelector('.post-content');
    var titles = post_content.querySelectorAll('h2');

    var lis = "";

    [].forEach.call(titles, function(ele) {
        lis += '<li><a href="#' + ele.id + '">' + ele.textContent + '</a></li>';
    });

    document.addEventListener('DOMContentLoaded', function() {
        document.querySelector('.cards ul').innerHTML = lis;
    });
})(window, document);
