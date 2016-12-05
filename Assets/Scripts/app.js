$(document).ready(function() {
   $('.cover').css('display','none'); 
});

//Utility Functions
function itemSelector() {
        for(var i = 1; i<=3; i++) {
        $('#item-'+i).click(function() {
            var item = $(this).data('item');
            itemReplacer(item);
        });
    }
}

function itemReplacer(n) {
    var publicIcon = '<i class="fa fa fa-globe fa-1g fa-fw" aria-hidden="true" ></i>';
    var friendsIcon = '<i class="fa fa-users fa-1g fa-fw" aria-hidden="true"></i>';
    var onlyMeIcon = '<i class="fa fa-lock fa-1g fa-fw" aria-hidden="true"></i>';
    
    if(n==1) {
        $('.view-text').html("Public");
        $('.view-icon').html(publicIcon);
        $('.dropdown-menu').css('display','none');
    }
    if(n==2) {
        $('.view-text').html("Friends");
        $('.view-icon').html(friendsIcon);
        $('.dropdown-menu').css('display','none');
    }
    if(n==3) {
        $('.view-text').html("Only Me");
        $('.view-icon').html(onlyMeIcon);
        $('.dropdown-menu').css('display','none');
    }
    
}

function coverReset() {
    $('.cover').click(function() {
        $('.cover').css('display','none'); 
        $('.dropdown-menu').css('display','none');
    });
}

function iconReset() {
    
}

//Dropdown Selector
$('.view').click(function() {
    $('.dropdown-menu').css('display','block');
    $('.cover').css('background-color','rgba(0,0,0,0.3)');
    $('.cover').css('display','block');
    $('.post').css('position','fixed');
    $('.post').css('left',261);
    itemSelector();
    coverReset();
});

//Nav Bar Click Events
$('.friend-request-icon').click(function() {
    $(this).removeClass('active');
    $(this).addClass('active');
});

$('.messages-icon').click(function() {
    $(this).removeClass('active');
    $(this).addClass('active');
});

$('.notifications-icon').click(function() {
    $(this).removeClass('active');
    $(this).addClass('active');
});

$('.lock-icon').click(function() {
    $(this).removeClass('active');
    $(this).addClass('active');
});

$('.dropdown-icon').click(function() {
    $(this).removeClass('active');
    $(this).addClass('active');
});