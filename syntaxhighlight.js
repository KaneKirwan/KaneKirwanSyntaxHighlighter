function syntaxhighlight() {
    var a = document.getElementsByClassName("syntaxhighlight");
    for (var i = 0; i < a.length; i++) {
        var data = a[i].innerHTML;
        data = data.replace(/"(.*?)"/g, '<span class="code-string">&quot;$1&quot;</span>');
        data = data.replace(/'(.*?)'/g, '<span class="code-string">&apos;$1&apos;</span>');
        data = data.replace(/&lt;(.*?)&gt;/g, '<span class="code-element">&lt;$1&gt;</span>');
        data = data.replace(/\/\* (.*?) \*\//g, '<span class="code-comment">/* $1 */</span>');
        a[i].innerHTML = data;
    }
}
window.addEventListener("load", syntaxhighlight);