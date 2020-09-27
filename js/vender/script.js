 jQuery('.tab2').click(function(){
        $('#tab2').css('display','block');
     $('#tab1').css('display','none');
     $('#tab3').css('display','none');
    });
    
 jQuery('.tab3').click(function(){
        $('#tab3').css('display','block');
     $('#tab2').css('display','none');
     $('#tab1').css('display','none');
    });

jQuery('.tab1').click(function(){
        $('#tab1').css('display','block');
     $('#tab3').css('display','none');
    $('#tab2').css('display','none');
    });
 jQuery('li').click(function(){
        $(this).addClass("active");    
    });