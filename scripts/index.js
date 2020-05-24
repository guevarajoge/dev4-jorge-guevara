// "use strict";
$(function () {


    $.ajax({
        url: "./entries.json",
        method: 'GET',
        dataType: 'json',
    }).done(function (data) {
        console.log(data);
        fetchingData(data); //
    }).fail(function (err1, err2) {
        //Print the error logs - ERROR 
        console.log('Fail'); // error Testing
        console.log(err1);
        console.log(err2);
    });


    // function erase (allCards) {
    //     let clickToErase = $('.content').append(`<h3  style= 'text-decoration: underline' >FILTERS WISSEN</h3 >`);
    //     clickToErase.click(function () {
    //         createInitialCards(allCards);
    //     });
    // }

    function fetchingData(data) {
        const list = data.items;
        // console.log(list);
        const erase = () => createInitialCards(list); // erase filter - back to initial state
        //Categoy lists
        const emptyList = {};
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
        const mamaList = [
            volWassenList, //0
            familieList, //1
            theaterList, //2
            dansList, //3
            muziekList, //4
            multiList, //5
            liteList, //6
            comedyList, //7
            figurenList, //8
            operaList, //9
            concertList, //10
            circusList //11
        ];
        // const mamaListSpread = {
        //     ...mamalList,
        //     calories:200
        // };

        console.log('mamaList');
        console.log(mamaList[11]);
        // const mamaReady = mamalList.map(element => element);

        createCards(list); // initial state 

        $('#btnVolwassenen').click(function () {
            console.log(volWassenList);
            $('.content').empty();
            $(this).toggleClass('Highlight');
            createCards(volWassenList);
        });
        $('#btnFamilie').on("click", function () {
            console.log(familieList);
            $('.content').empty();
            $(this).toggleClass('Highlight');
            createCards(familieList);

        });
        $('#btnTheater').on("click", function () {
            console.log(theaterList);
            $('.content').empty();
            createCards(theaterList);
            $(this).toggleClass('Highlight');
        });
        $('#btnDans').on("click", function () {
            console.log(dansList);
            $('.content').empty();
            createCards(dansList);
            $(this).toggleClass('Highlight');
        });
        $('#btnMuziekThe').on("click", function () {
            console.log(muziekList);
            $('.content').empty();
            createCards(muziekList);
            $(this).toggleClass('Highlight');
        });
        $('#btnMulti').on("click", function () {
            console.log(multiList);
            $('.content').empty();
            createCards(multiList);
            $(this).toggleClass('Highlight');
        });
        $('#btnLiteratuur').on("click", function () {
            console.log(liteList);
            $('.content').empty();
            createCards(liteList);
            $(this).toggleClass('Highlight');
        });
        $('#btnComedy').on("click", function () {
            console.log(comedyList);
            $('.content').empty();
            createCards(comedyList);
            $(this).toggleClass('Highlight');
        });
        $('#btnFiguren').on("click", function () {
            console.log(figurenList);
            $('.content').empty();
            createCards(figurenList);
            $(this).toggleClass('Highlight');
        });
        $('#btnOpera').on("click", function () {
            console.log(operaList);
            $('.content').empty();
            createCards(operaList);
            $(this).toggleClass('Highlight');
        });
        $('#btnConcert').on("click", function () {
            console.log(concertList);
            $('.content').empty();
            createCards(concertList);
            $(this).toggleClass('Highlight');
        });
        $('#btnCircus').on("click", function () {
            console.log(circusList);
            $('.content').empty();
            createCards(circusList);
            $(this).toggleClass('Highlight');
        });
        
    }






    const createCards = cards => {
        return cards.map(card => {
            // Card
            let div = $(`<div class = 'card text-white bg-dark mb-3'>`);
            let img = card.thumbnail.url;
            let thumbnail = $(`<img class='toSeasons rounded mx-auto d-block 'src='${img}' >`);
            let genre = $('<p>').text(card['genre-v2']);
            let name = $('<p>').text(card.name);
            let excerpt = $('<p>').text(card.excerpt);
            let recordedAt = $('<p>').text(card["recorded-at"]);
            let videoLength = $('<p>').text(card['video-length']);

            div.append(thumbnail).append(genre).append(name).append(excerpt).append(recordedAt).append(videoLength);
            $('.content').append(div);
        });
    };




    const createInitialCards = cards => {
        return cards.map(card => {
            // Card
            let div = $(`<div class = 'card text-white bg-dark mb-3'>`);
            let img = card.thumbnail.url;
            let thumbnail = $(`<img class='toSeasons rounded mx-auto d-block 'src='${img}' >`);
            let genre = $('<p>').text(card['genre-v2']);
            let name = $('<p>').text(card.name);
            let excerpt = $('<p>').text(card.excerpt);
            let recordedAt = $('<p>').text(card["recorded-at"]);
            let videoLength = $('<p>').text(card['video-length']);

            div.append(thumbnail).append(genre).append(name).append(excerpt).append(recordedAt).append(videoLength);
            $('.content').append(div);
        });
    };

});