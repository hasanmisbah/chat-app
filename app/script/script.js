let socket = io();
let user = 'user';
let text;

$(function() {

    //login area
    $('chat-area').addClass('hidden');

    $('.login form').on('submit', function(e) {
        e.preventDefault();

        user = $(this).find('input').val();

        if (user) {
            socket.emit('has connected', user);
            sessionStorage.setItem('user', user);

            $('.chat-area').removeClass('hidden');
            $('header').addClass('hidden');
            $(this).find('input').val('');
        }
    });



    $('.chat-form form').on('submit', function(e) {
        e.preventDefault();

        text = $(this).find('input').val();
        socket.emit('messages', text)

        text = $(this).find('input').val('');
    });

    socket.on('has connected', function(data) {
        $('.user-list').html('');
        updateUsers(data.userlist);
        $('.chat-logs').append(welcome(data.username, 'has joined'));
    });


    socket.on('has disconnected', function(data) {
        $('.user-list').html('');
        updateUsers(data.userlist);
        $('.chat-logs').append(welcome(data.username, 'has disconnected'));
    });

    socket.on('messages', function(messages, name) {
        $('.chat-logs').append(sendMessages(className(name, user), messages));
        console.log(messages, name);
    });


});


let welcome = function(username, messages) {
    let joining = '<div class="chat welcome">';
    let sms = '<p class="chat-messages">' + username + ' ' + messages + '</p>';
    let welcome = joining + sms + '</div>';
    let final = welcome;

    return final;
}

let sendMessages = function(className, text) {
    text = text;
    let chat = '<div class="chat ' + className + '">';
    let userImage = '<div class="user-photo"><i class="fa fa-user fa-2x"></i></div>';
    let messages = '<p class="chat-messages">' + text + '</p>';
    let chatMessages = chat + userImage + messages + '</div>';
    return chatMessages;
}

let updateUsers = function(list) {
    for (let i = 0; i < list.length; i++) {
        $('.user-list').append('<li>' + list[i] + '</li>');
    }
}

let className = function(className, expected) {
    if (className == expected) {
        return 'me';
    } else {
        return 'friend';
    }
}