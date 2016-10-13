var indexController = indexController || {};

indexController.enterChatroom = function() {
    var username = $('#username').val();
    window.location.href=('./chatroom?username=' + username); 
}
