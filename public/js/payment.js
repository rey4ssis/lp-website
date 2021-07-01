$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('#back-to-modal, .btn-close').on('click', function() {
        $('#address-modal-body').show();
        $('#address-modal-footer').show();
        $('#new-payment-address-form').hide();
    });

    $('#new-payment-address-link').on('click', function() {

        $('#address-modal-body').hide();
        $('#address-modal-footer').hide();
        $('#new-payment-address-form').show();
        
    });
});

$(document).ready(function(){

    var DIRPAGE="http://"+document.location.hostname+"/lapechincha"+"/";

    $('#state').on('change',function(){
        var stateID = $(this).val();

        $.ajax({
            url: DIRPAGE+'account/ajaxCall/',
            method: 'post',
            dataType: 'html',
            data: {'state_id':stateID},
            success: function(dados){
                $('#city').html(dados);
            }
        });
    });
});


function cardOption(card){
    if(card.getElementsByClassName("edittype")[0].hidden){
        card.getElementsByClassName("number")[0].hidden = true;
        card.getElementsByClassName("data")[0].hidden = true;
        card.getElementsByClassName("edittype")[0].hidden = false;
    }else{
        card.getElementsByClassName("number")[0].hidden = false;
        card.getElementsByClassName("data")[0].hidden = false;
        card.getElementsByClassName("edittype")[0].hidden = true; 
    }
}

$('#card-holder').on('input', function() {
    $('#back-card').hide();
    $('#front-card').show();
    $('#model-name').html($('#card-holder').val());
  });

$('#card-expiration').on('input', function() {
    $('#back-card').hide();
    $('#front-card').show();
    var data = $('#card-expiration').val();
    data = data.substr(5,2) + '/' + data.substr(2,2);
    
    $('#model-date').html(data);
});

$('#card-number').on('input', function() {
    $('#back-card').hide();
    $('#front-card').show();
    var data = $('#card-number').val();
    if(data.length <= 3)
        $('#num-3').html(data);
    else if(data.length <= 6)
        $('#num-6').html(data.substr(3,5));
    else if(data.length <= 9)
        $('#num-9').html(data.substr(6,8));
    else if(data.length <= 12)
        $('#num-12').html(data.substr(9,11));
});

$('#card-cvv').on('input', function() {

    $('#front-card').hide();
    $('#back-card').show();
    $('#model-cvv').html($('#card-cvv').val());
    
});