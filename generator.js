
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


        output.textContent = 'https://' + location.hostname + '?r=' + encodeURIComponent(replace(url))
        output.href = 'https://' + location.hostname + '?r=' + encodeURIComponent(replace(url));
        document.getElementById('help').classList.add('h');
    }
}
function replace(query) {
    return query
        .split(' ')
        .join('+')
        .replace(/(gh:\/\/|dsc:\/\/|g:\/\/|mc:\/\/|play:\/\/|yt:\/\/|ytc:\/\/)([\w\W]*)/g, (match, p1, p2) => {
            let encodedP2 = encodeURIComponent(p2);
            switch (p1) {
                case 'gh://':
                    return 'https://github.com/' + encodedP2;
                case 'dsc://':
                    return 'https://discord.com/invite/' + encodedP2;
                case 'g://':
                    return 'https://google.com/search?q=' + encodedP2;
                case 'mc://':
                    return 'minecraft://' + encodedP2;
                case 'play://':
                    return 'https://play.google.com/store/apps/details?id=' + encodedP2;
                case 'yt://':
                    return 'https://youtube.com/watch?v=' + encodedP2;
                case 'ytc://':
                    return 'https://youtube.com/+' + encodedP2;
            }
        })
}
function c() {
    const o = document.getElementById('output');
    setTimeout(() => {
        navigator.clipboard.writeText(o.textContent);
        alert(`Copied to clipboard!\n${o.textContent}`);
    }, 100);
}