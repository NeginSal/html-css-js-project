// When the user scrolls down 7520px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 7520|| document.documentElement.scrollTop > 7520) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*gallery*/
$('.thumbnail').click(function(){
    $('.modal-body').empty();
    $($(this).parents('div').html()).appendTo('.modal-body');
    $('#modal').modal({show:true});
});

$('#modal').on('show.bs.modal', function () {
    $('.col-6,.row .thumbnail').addClass('blur');
})

$('#modal').on('hide.bs.modal', function () {
    $('.col-6,.row .thumbnail').removeClass('blur');
})


