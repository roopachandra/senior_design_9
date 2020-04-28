document.addEventListener('DOMContentLoaded', function() {
  var leftButton = document.getElementById('firstbutton');
  leftButton.addEventListener('click', function() {
    chrome.tabs.create({'url':"https://www.nytimes.com/2019/12/05/us/politics/pelosi-impeachment.html"})
  }, false);
}, false);


document.addEventListener('DOMContentLoaded', function() {
  var middleButton = document.getElementById('secondbutton');
  middleButton.addEventListener('click', function() {
    chrome.tabs.create({'url':"https://www.cnbc.com/2019/12/06/impeaching-trump-may-not-accomplish-anything-at-all-for-democrats.html"})
  }, false);
}, false);


document.addEventListener('DOMContentLoaded', function() {
  var rightButton = document.getElementById('thirdbutton');
  rightButton.addEventListener('click', function() {
    chrome.tabs.create({'url':"https://www.foxnews.com/us/pelosi-impeachment-trump-town-hall"})
  }, false);
}, false);