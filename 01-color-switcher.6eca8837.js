!function(){var t={startBTN:document.querySelector("[data-start]"),stopBTN:document.querySelector("[data-stop]"),backGround:document.querySelector("body")};t.startBTN.addEventListener("click",(function(){a=setInterval((function(){var a="#".concat(Math.floor(16777215*Math.random()).toString(16));t.backGround.style.backgroundColor="".concat(a)}),1e3),t.startBTN.disabled=!0})),t.stopBTN.addEventListener("click",(function(){clearInterval(a),t.startBTN.disabled=!1}));var a=null}();
//# sourceMappingURL=01-color-switcher.6eca8837.js.map
