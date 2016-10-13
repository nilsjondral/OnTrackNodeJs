var chatRoomController = (function() {
    var controller = chatRoomController || {};
    var socket;
    var username = '';

    function getParameterByName(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    function enableEnter() {
        $('#newMessage').keyup(function(e){
            if(e.keyCode == 13)
            {
                controller.sendMessage();
            }
        });
    }

    function initSocketIO() {
        username = getParameterByName('username');
        socket = io(window.location.origin);

        socket.on('connection', function() { 
            controller.connection(true);
            socket.emit('joined', {user: username});
        });

        socket.on('disconnect', function() { 
            controller.connection(false)
        });

        socket.on('message', controller.receivedMessage);
    }

    function sendMessage(user, message) {
        socket.emit('sendMessage', {user: user, message: message});
    }

    function appendMessage(user, message) {
        $('#messages').append($('<li>').text(user + ': ' + message));
    }

    function swagbot(message) {
        $.ajax({
            url: '/swagbot'
        }).done(function(data) {
            console.log(data);
            if (data.response) {
                sendMessage('swagbot', data.response); 
            }
        });
        sendMessage(username, message); 
    }

    controller.init = function () {
        enableEnter();
        initSocketIO();
    };

    controller.sendMessage = function() {
        var message = $('#newMessage').val();

        if (message.toLowerCase().startsWith("swagbot ")) {
            console.log('swagbot: ' + message);
            swagbot(message);
        } else {
            console.log('sendMessage: ' + message);
            socket.emit('sendMessage', {user: username, message: message});
        }
        $('#newMessage').val('');
    };

    controller.receivedMessage = function(msg) {
        console.log('receivedMessage ' + msg);
        appendMessage(msg.user, msg.message);
    };

    controller.connection = function(active) {
        if (active) {
            $('#messageButton').removeAttr("disabled");
        } else {
            $('#messageButton').attr("disabled", true);
        }
    };

    $(controller.init());

    return controller;
})();


