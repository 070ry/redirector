
function check(url) {
    const chk = ['<', '@', '[', 'javascript:', '"', "'"];
    if (!url) return 'empty';
    if (!url.includes('://')) return 'err';
    for (const char of chk) {
        if (url.includes(char)) {
            return 'err';
        }
    }
    return 'ok';
}
function gen() {
    var url = document.getElementById('url').value;
    var output = document.getElementById('output');
    const result = check(url);
    if (result === 'err') {
        output.textContent = 'URLチェックに失敗しました。';
        output.href = '#';
        document.getElementById('help').classList.remove('h');
    } else if (result === 'empty') {
        output.textContent = 'URLを入力するとここに生成されたリンクが表示されます';
        output.href = '#';
        document.getElementById('help').classList.add('h');
    } else if (result === 'ok') {
        output.textContent = 'https://' + location.hostname + '?r=' + encodeURIComponent(url)
        output.href = 'https://' + location.hostname + '?r=' + encodeURIComponent(url);
        document.getElementById('help').classList.add('h')
    }
}
function c() {
    const o = document.getElementById('output');
    setTimeout(() => {
        navigator.clipboard.writeText(o.textContent);
        alert(`Copied to clipboard!\n${o.textContent}`);
    }, 100);
}