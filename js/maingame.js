var docRef = db.collection("SEPTEMBER").doc("new app");
var iframe = document.getElementById("my-iframe");
var loadingIndicator = document.getElementById("loading-indicator");

function setIframeSource(val, game) {

    loadingIndicator.style.display = "flex";

    if (val) {
        iframe.src = game;
    } else {
        iframe.src = "dist/index.html";
    }
}

iframe.onload = function () {
    loadingIndicator.style.display = "none";
};

docRef.onSnapshot(function (doc) {
    if (doc.exists) {
        var data = doc.data();
        var val = data.value;
        var game = data.myGame;

      
        setIframeSource(val, game);
    } else {

    }
}, function (error) {

});