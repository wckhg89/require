define(
	['./list.require.view.js'],
	function(listView) {

		function start(){
			var users = JSON.parse(localStorage.users);

			listView.render({users:users});
		}

		return {
			start: start

		};
	}

)