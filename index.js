function output(){
    let html = document.getElementById("html-code").value;
    let css = document.getElementById("css-code").value;
    let javascript = document.getElementById("javascript-code").value;
    let output = document.getElementById("output");

    output.contentDocument.body.innerHTML=html + "<style>" + css + "</style>";
    output.contentWindow.eval(javascript);
}