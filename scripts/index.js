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
        console.log(list);

        //Categoy lists
        // const emptyList = {};
        const volWassenList = list.filter(cards => cards.category == "volwassenen");
        const familieList = list.filter(cards => cards.category == "familie");
        //Genre 
        const theaterList = list.filter(cards => cards['genre-v2'] == 'theater');
        const dansList = list.filter(cards => cards['genre-v2'] == 'dans');
        const muziekList = list.filter(cards => cards['genre-v2'] == 'muziektheater');
        const multiList = list.filter(cards => cards['genre-v2'] == 'multidisciplinair');
        const liteList = list.filter(cards => cards['genre-v2'] == 'literatuur');
        const comedyList = list.filter(cards => cards['genre-v2'] == 'comedy');
        const figurenList = list.filter(cards => cards['genre-v2'] == 'figurentheater');
        const operaList = list.filter(cards => cards['genre-v2'] == 'opera');
        const concertList = list.filter(cards => cards['genre-v2'] == 'concert');
        const circusList = list.filter(cards => cards['genre-v2'] == 'circus');

        //initial state - all objects 
        const mamalList = [
            volWassenList,
            familieList,
            theaterList,
            dansList,
            muziekList,
            multiList,
            liteList,
            comedyList,
            figurenList,
            operaList,
            concertList,
            circusList
        ];
        // const mamaReady = mamalList.map(element => element);
        // console.log('mamalList');
        // console.log(mamalList);
        // createCards(circusList);



        $('#btnVolwassenen').on("click", function () {
            console.log(volWassenList);
            $('#content').empty();
            createCards(volWassenList);
        });
        $('#btnFamilie').on("click", function () {
            console.log(familieList);
            $('#content').empty();
            createCards(familieList);
        });
        $('#btnTheater').on("click", function () {
            console.log(theaterList);
            $('#content').empty();
            createCards(theaterList);
        });
        $('#btnDans').on("click", function () {
            console.log(dansList);
            $('#content').empty();
            createCards(dansList);
        });
        $('#btnMuziekThe').on("click", function () {
            console.log(muziekList);
            $('#content').empty();
            createCards(muziekList);
        });
        $('#btnMulti').on("click", function () {
            console.log(multiList);
            $('#content').empty();
            createCards(multiList);
        });
        $('#btnLiteratuur').on("click", function () {
            console.log(liteList);
            $('#content').empty();
            createCards(liteList);
        });
        $('#btnComedy').on("click", function () {
            console.log(comedyList);
            $('#content').empty();
            createCards(comedyList);
        });
        $('#btnFiguren').on("click", function () {
            console.log(figurenList);
            $('#content').empty();
            createCards(figurenList);
        });
        $('#btnOpera').on("click", function () {
            console.log(operaList);
            $('#content').empty();
            createCards(operaList);
        });
        $('#btnConcert').on("click", function () {
            console.log(concertList);
            $('#content').empty();
            createCards(concertList);
        });
        $('#btnCircus').on("click", function () {
            console.log(circusList);
            $('#content').empty();
            createCards(circusList);
        });
    }






    let createCards = cards => {
        return cards.map(card => {
            // Card
            let div = $(`<div class = 'card text-white bg-dark mb-3' style='float:rig'>`);
            let img = card.thumbnail.url;
            let thumbnail = $(`<img class='toSeasons rounded mx-auto d-block 'src='${img}' >`);
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