const menuButtons = document.querySelectorAll(".content_center");
const titleDiv = document.getElementById("titleDiv");

menuButtons.forEach(function(menuButton) {
  menuButton.addEventListener("mouseover", function() {
    menuButton.style.cursor = "pointer";
  });
  menuButton.addEventListener("click", function(event) {
    titleDiv.textContent = event.target.textContent;
  });
});

function showAndroid() { 
  var androidView = document.getElementById("android_view"); // 操作したい要素を取得
  var webView = document.getElementById("web_content");
  var resumeView = document.getElementById("resume_content");
  if (androidView.style.display == "none") { // 現在の透明度が1の場合は透明度を下げる
    androidView.style.display = "block";
    webView.style.display = "none";
    resumeView.style.display = "none";
  }
}

function showWeb() {
  var androidView = document.getElementById("android_view"); // 操作したい要素を取得
  var webView = document.getElementById("web_content");
  var resumeView = document.getElementById("resume_content");
  if (webView.style.display == "none") { // 現在の透明度が1の場合は透明度を下げる
    androidView.style.display = "none";
    webView.style.display = "block";
    resumeView.style.display = "none";
  }
}

function showResume() {
  var androidView = document.getElementById("android_view"); // 操作したい要素を取得
  var webView = document.getElementById("web_content");
  var resumeView = document.getElementById("resume_content");
  if (resumeView.style.display == "none") { // 現在の透明度が1の場合は透明度を下げる
    androidView.style.display = "none";
    webView.style.display = "none";
    resumeView.style.display = "block";
  }
}
