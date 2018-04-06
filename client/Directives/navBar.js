myApp.directive('navBar', function () {
    return {
        template: '' +
        '<a href="#/" class="btn btn-default" style="margin:10px 10px 10px 130px;border-radius:15px"><img src="../images/h1.jpg" height="75" width="75" /></a>'
    }
})

myApp.directive('enterKeyDown', function () {
    
    return {
        restrict: 'A',
        link: function ($scope, selem, attrs) {
            selem.bind('keydown', function (e) {
                var code = e.keyCode || e.which;
                if (code === 13) {
                    e.preventDefault();
                    var pageElems = document.querySelectorAll('input, select, textarea'),
                        elem = e.srcElement || e.target,
                        focusNext = false,
                        len = pageElems.length;
                    for (var i = 0; i < len; i++) {
                        var pe = pageElems[i];
                        if (focusNext) {
                            if (pe.style.display !== 'none') {
                                angular.element(pe).focus();
                                break;
                            }
                        } else if (pe === elem) {
                            focusNext = true;
                        }
                    }
                }
            });
        }
    }
})