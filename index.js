export function q() {
    const urlParams = new URLSearchParams(window.location.search);
    let query = decodeURI(urlParams.get('r'));
    if (query.match(/https?:\/\//)) return query;

    return query
        .replace(/(gh:\/\/|dsc:\/\/|g:\/\/|mc:\/\/|play:\/\/|yt:\/\/|ytc:\/\/)([\w\W]*)/g, (match, p1, p2) => {
            switch (p1) {
                case 'gh://':
                    return 'https://github.com/' + p2;
                case 'dsc://':
                    return 'https://discord.com/invite/' + p2;
                case 'g://':
                    return 'https://google.com/search?q=' + p2;
                case 'mc://':
                    return 'minecraft://' + p2;
                case 'play://':
                    return 'https://play.google.com/store/apps/details?id=' + p2;
                case 'yt://':
                    return 'https://youtube.com/watch?v=' + p2;
                case 'ytc://':
                    return 'https://youtube.com/+' + p2;
            }
        });
}

window.onload = function () {
    location.href = q();
}
