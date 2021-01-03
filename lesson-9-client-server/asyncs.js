function happensLater() {
    setTimeout(function () {
        console.log('This is the first thing we called');
    }, 100);

    console.log('This is the second thing we called');
}

function getLyricsFor() {
    const url = 'https://private-anon-b9ae7669be-lyricsovh.apiary-proxy.com/v1/green%20day/basket%20case';
    window.fetch(url).then(function (response) {
        return response.json();
    }).then(function (data) {
        console.log(data);
    });

    console.log('Now we will get the lyrics for "When I come around"');
}