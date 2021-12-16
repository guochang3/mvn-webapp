function debug(msg,area)
{
    var log = document.getElementById(area);
    if(!log)
    {
        log = document.createElement("div");
        log.id = area;
        log.innerHTML = "<h1>Debug log!</h1>";
        document.body.append(log);
    }
    var pre = document.createElement("pre");
    var text = document.createTextNode(msg);
    pre.appendChild(text);
    log.appendChild(pre);
}
window.onload = function()
{
    debug("msg","debuglog");
};