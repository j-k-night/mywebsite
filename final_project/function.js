var foot = document.getElementsByClassName('foot');
var checkers = '<p><a href="http://validator.w3.org" target="_blank"><img src="http://www.w3.org/Icons/valid-xhtml10" alt="HTML Checker" height="41" width="88" /></a><a href="http://jigsaw.w3.org/css-validator" target="_blank"><img style="border:0;width:88px;height:41px" src="http://jigsaw.w3.org/css-validator/images/vcss-blue" alt="CSS Checker" /></a></p>';
foot[0].innerHTML = Date() + checkers;
