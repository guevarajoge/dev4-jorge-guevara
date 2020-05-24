$(function () {
    $.ajax({

        url: "./entries.json",
        method: 'GET',
        dataType: 'json',
    }).done(function (data) {
        console.log(data);

        fetchingData(data); //
    }).fail(function (err1, err2) {
        //Print the error logs
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });


    function fetchingData(data) {
        $('#content').empty();
        const list = data.items;
        // console.log(list);
        const initialList = createCards(list); // Initial state 
        //Categoy lists
        const emptyList = {};
        const volWassenList = list.filter(cards => cards.category == "volwassenen");
        const familieList = list.filter(cards => cards.category == "familie");
        //Genre 
        const heaterList = list.filter(cards => cards['genre-v2'] == 'theater');
        const dansList = list.filter(cards => cards['genre-v2'] == 'dans');
        const muziekList = list.filter(cards => cards['genre-v2'] == 'muziektheater');
        const multiList = list.filter(cards => cards['genre-v2'] == 'multidisciplinair');
        const liteList = list.filter(cards => cards['genre-v2'] == 'literatuur');
        const comedyList = list.filter(cards => cards['genre-v2'] == 'comedy');
        const figurenList = list.filter(cards => cards['genre-v2'] == 'figurentheater');
        const operaList = list.filter(cards => cards['genre-v2'] == 'opera');
        const concertList = list.filter(cards => cards['genre-v2'] == 'concert');
        const circusList = list.filter(cards => cards['genre-v2'] == 'circus');
        // console.log(concertList);



        $('#btnConcert').on("click", function () {
            console.log('fired');
            $('#content').empty();
            createCards(concertList);
        });

    }






    let createCards = cards => {
        return cards.map(card => {
            // Card
            let div = $(`<div class = 'card text-white bg-dark mb-3' style='float:rig'>`);
            let img = card['link-to-video'].metadata.thumbnail_url;
            let thumbnail = $('<img class=\'toSeasons rounded mx-auto d-block\' src=' + img + ' >');
            let genre = $('<p>').text(card['genre-v2']);
            let name = $('<p>').text(card.name);
            let excerpt = $('<p>').text(card.excerpt);
            let recordedAt = $('<p>').text(card["recorded-at"]);
            let videoLength = $('<p>').text(card['video-length']);

            div.append(thumbnail).append(genre).append(name).append(excerpt).append(recordedAt).append(videoLength);
            $('#content').append(div);

        });
    };

});