require(
	[],
	function(user){
		var users = [
			new user('moris'),
			new user('one-together'),
			new user('MSFL')
		];

		for(var i = 0, len = users.length ; i <len ; i ++){
			console.log(users[i].name);
		}

		localStorage.users = JSON.stringify(users);

	}
);