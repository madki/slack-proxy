function FindProxyForURL(url, host)
{
    var httpProxy = 'PROXY 127.0.0.1:8123';
    var noProxy = 'DIRECT';
    var default_ = noProxy;

    // Host matches that use the HTTP proxy.
    var httpProxyMatches = [
        '*.slack.com*'
    ];
    // Check all host patterns and network masks.
    for (var i = 0; i < httpProxyMatches.length; i++) {
    if (shExpMatch(host, httpProxyMatches[i])) {
        alert('HTTP ' + httpProxy + ' match for host: ' + host + '; url: ' + url);
        return httpProxy;
    }
    alert('DEFAULT ' + default_ + ' for host: ' + host + '; url: ' + url);
    return default_;
}