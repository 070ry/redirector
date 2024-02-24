export function q() {
    const check = ['<', '@', '[', '"', "'"];
    const urlParams = new URLSearchParams(window.location.search);
    let query = decodeURI(urlParams.get('r'));
    if (query.match(/https?:\/\//)) return query;

    for (const char of check) {
        if (query.includes(char)) {
            return query
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
    } return null;
}

window.onload = function () {
    location.href = decodeURI(q());
}