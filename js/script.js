(function(window, document) {
    'use strict';

    var post_content = document.querySelector('.post-content');
    var titles = post_content.querySelectorAll('h2');

    var lis = "";

    [].forEach.call(titles, function(ele) {
        lis += '<li><a href="#' + ele.id + '">' + ele.textContent + '</a></li>';
    });

    document.addEventListener('DOMContentLoaded', function() {
        if (titles.length > 0) {
            document.querySelector('.cards ul').innerHTML = lis;
        } else {
            document.querySelector('.cards').innerHTML = '';
        }
    });
})(window, document);
