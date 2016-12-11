//Variables
var likeState;
var likeCount = 0;
var commentState;
var commentCount = 0;
var shareState;
var shareCount = 0;

//On Loading DOM
$(document).ready(function() {
    //Set Cover Property
   $('.cover').css('display','none');
    //Set Like and Comments Count
    $('.like-and-comment-nos').css('display','none');
    //Like State of Posts
    likeState = $('.like-post').data('item');
    if(likeCount>0) {
        $('.like-and-comment-nos').css('display', 'block');
    }
    else {
        $('.like-and-comment-nos').css('display', 'none');
    }
    //Comment State of Posts
    commentState = $('.comment-post').data('item');
    if(commentCount>0) {
        $('.like-and-comment-nos').css('display', 'block');
    }
    else {
        $('.like-and-comment-nos').css('display', 'none');
    }
    showComment(1);
    //SHare State of Posts
    shareState = $('.share-post').data('item');
    if(shareCount>0) {
        $('.like-and-comment-nos').css('display', 'block');
    }
    else {
        $('.like-and-comment-nos').css('display', 'none');
    }
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

/*function checkState(textState,iconState,countState) {
    if($('.like-panel-text').css)
}*/

function showComment(n) {
    if(n == 1) {
        $('.post-comment').css('display','block');
        $('.write-comment-post').css('display','none');
    }
    else {
        $('.post-comment').css('display','block');
        $('.write-comment-post').css('display','block');
        postComment();
    }
}

function postComment() {
    $('.comment-post-button').click(function () {
        var commentPostText = $('.comment-text').val();
        $('.write-comment-class').css('display','none');
        $('.comment-post-text').val(commentPostText);
    });
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

//Like/Comment/Share
$('.like-post').click(function () {
    if (likeState === 1) {
        $('.fa-thumbs-up').css('color', '#7f7f7f');
        $('.like-panel-text').css('color', '#7f7f7f');
        likeState = 0;
        $('.like-post').data('item',likeState);
        if(likeCount>0) {
            likeCount--;
        }
    }
    else {
        $('.fa-thumbs-up').css('color', '#324b81');
        $('.like-panel-text').css('color', '#324b81');
        likeState = 1;
        $('.like-post').data('item',likeState);
        likeCount++;
    }
    if(likeCount>0) {
        $('.like-and-comment-nos').css('display', 'block');
    }
    else {
        $('.like-and-comment-nos').css('display', 'none');
    }
});

$('.comment-post').click(function () {
    if(commentState === 1) {
        $('.fa-comment').css('color','#7f7f7f');
        $('.comment-panel-text').css('color','#7f7f7f');
        commentState = 0;
        $('.comment-post').data('item',commentState);

    }
    else {
        $('.fa-comment').css('color','#324b81');
        $('.comment-panel-text').css('color','#324b81');
        commentState = 1;
        $('.comment-post').data('item',commentState);
        commentCount++;
        showComment(0);
    }
    if(commentCount>0) {
        $('.like-and-comment-nos').css('display', 'block');
    }
    else {
        $('.like-and-comment-nos').css('display', 'none');
    }
});

$('.share-post').click(function () {
    if(shareState === 1) {
        $('.fa-share').css('color','#7f7f7f');
        $('.share-panel-text').css('color','#7f7f7f');
        shareState = 0;
        $('.share-post').data('item',shareState);
    }
    else {
        $('.fa-share').css('color','#324b81');
        $('.share-panel-text').css('color','#324b81');
        shareState = 1;
        $('.share-post').data('item',shareState);
        shareCount++;
    }
    if(shareCount>0) {
        $('.like-and-comment-nos').css('display', 'block');
    }
    else {
        $('.like-and-comment-nos').css('display', 'none');
    }
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