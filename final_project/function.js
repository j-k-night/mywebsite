var foot = document.getElementsByClassName('foot');
var checkers = '<p><a href="http://validator.w3.org" target="_blank"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="HTML Checker" class = "checker_image"/></a><a href="http://jigsaw.w3.org/css-validator" target="_blank"><img src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="CSS Checker"  class = "checker_image"/></a></p>';
foot[0].innerHTML = Date() + checkers;
