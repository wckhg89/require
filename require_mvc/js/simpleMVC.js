require(
	// 로드할 모듈 배열
	['./modules/Math.require.module.js'],

	// 모듈이 로드된 후에 호출되는 콜백 함수
	function(simpleMath){

		// 로드된 모듈은 파라미터로 전달된다.
		console.log(simpleMath.add(1, 2));

	}


);