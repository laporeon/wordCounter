$('#textarea').on('keyup', function(){
    const characters = $(this).val().length;
    const words = $(this).val().split(' ').length;

    const charactersCount = $('#characters').text(characters);
    const wordsCount = $('#words').text(words);

    // reset count 
    $('input[type="reset"]').on('click', function(){
        charactersCount.text('');
        wordsCount.text('');
    })
});