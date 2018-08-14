<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">

	<title>Fun Chat Apps</title>

	<link rel="stylesheet" href="stylesheet/style.css" type="text/css">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css" type="text/css">



	<!--[if lt IE 9]>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
	<![endif]-->

	
</head>

<body>
	<div id="top-bar">
		<h1>Fun Chat Apps</h1>
		<p>A nodeJS based Chatting apps using express and socket.io</p>
	</div>
	<header>
		<div class="login">
					<form action="#">
						<input type="text" placeholder="Enter your Name">
						<button type="submit">Join</button>
					</form>
				</div>
	</header>
	<div class="container chat-area hidden">
		<aside>
			<div class="online-user messages-box">
				<h2>Friend Online</h2>
				<ul class="user-list"></ul>
			</div>
		</aside>
		<main>
			<div class="chat-box">
				<div class="chat-logs messages-box">

				</div>

				<div class="chat-form messages-box">
					<form action="#">
						<input type="text" placeholder="enter your messages">
						<button type="submit">Send</button>
					</form>
				</div>

			</div>
		</main>
	</div>

<script src="/socket.io/socket.io.js"></script>
<script src="assets/script/modernizr.min.js"></script>
<script src="assets/script/jquery.min.js"></script>
<script src="assets/script/prefixfree.min.js"></script>
<script src="script/script.js"></script>

</body>
</html>
