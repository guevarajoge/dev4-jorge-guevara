//testing modules
// import {Car} from './modules/carClass.js'; 
// import {sayHi} from './modules/fUnction.js';
// import literal from './modules/oBject.js';
// import aRra from './modules/aRray.js';



// import config from '../config.js'; // json exported as module 
// console.log('test the state of the repo');

// let items = config.items;
// items.forEach(e=>console.log(`genre: ${e.genre} & category: ${e.category}`));

// // });
// console.log(config.items);

//transversing the folder hierarchy for the url seams to be with ./ == up one level  instead of ../ 
$(function () {
    $.ajax({

        url: "./entries.json",
        method: 'GET',
        dataType: 'json',
    }).done(function (data) {
        console.log(data);
        callLater(data);
    }).fail(function (err1, err2) {
        //Print the error logs
        console.log('Fail');
        console.log(err1);
        console.log(err2);
    });


    function callLater(data) {
        $('#content').empty();
        const list = data.items;
        console.log(list);



        list.map(card => {

            // Card
            let div = $(`<div class = ' card text-white bg-dark mb-3' >`); 

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


    }



});