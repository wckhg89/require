define(function(){
	function render(parameters){

		var appDiv = document.getElementById('app');
		var users = parameters.users;

		var html = '<ul>';

		for(var i = 0 ; i < users.length ; i++){

			html += '<li>' + users[i].name + '</li>';

		}

		html += '</ul>'

		appDiv.innerHTML = html;

	}

	return {

		render: render
	};



});