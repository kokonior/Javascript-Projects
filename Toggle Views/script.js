$('#toggle').click(function(){
    $('div').toggleClass('margin-90');

    $('body').toggleClass('bg-black');
    $('#text').toggleClass('text-white');

    $('#toggle').css('background-color', 'white');

});