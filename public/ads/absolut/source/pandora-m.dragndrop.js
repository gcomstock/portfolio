// Pandora Mobile Drag and Drop
// last updated: 1/4/12

//this listens for all touchstart events, so use it sparingly. it works in this case because were using different jquery listeners for user input. used to fix android long press.
document.addEventListener('touchstart', function(event) {
    event.preventDefault();
}, false);



	//for each draggable, get width/height, divide them by scale factor, apply new sizes. this will prevent pixelation when scaling
	function applyNewSize() {
		
		$(".draggable").each(function(){
			var localWidth = $(this).find('img').width();
			var newLocalWidth = localWidth/scaleFactor
			var localHeight = $(this).find('img').height();
			var newLocalHeight = localHeight/scaleFactor
			
			$(this).find('img').width(newLocalWidth).height(newLocalHeight);
			
			//set new values to containing div. set visibility only after new sizes have been applied
			$(this).width(newLocalWidth).height(newLocalHeight).css('visibility','visible');
		});
		
		var dropzoneWidth = $("#dropzone").width();
		var dropzoneHeight = $("#dropzone").height();
		
		$("#dropzone_activate").width(dropzoneWidth).height(dropzoneHeight);
		$("#dropzone_over").width(dropzoneWidth).height(dropzoneHeight);
	}
	

	$(document).ready(function(){

		if (testMode == "on") {
			$("div").css("border","1px dotted green");
			$("div").css("margin","-1px");
		}

		//initialize draggable, but set to false until hover events to help prevent multiple drags
		$(".draggable").draggable({ revert: "invalid" , containment: "#stage"});


		$("#dropzone").droppable({
			over: function(event, ui) {
				$("#dropzone_over").fadeIn(dropzoneFadeSpeed);
			},
			out: function(event, ui) {
				$("#dropzone_over").fadeOut(dropzoneFadeSpeed);
			},
			drop: function( event, ui ) {
				$(ui.draggable).fadeOut(700);
				$("#dropzone_over").fadeOut(dropzoneFadeSpeed);
				
				var whatDropped = ui.draggable.attr('id')

				if (whatDropped == "drag1") {
					if (testMode == "on") {
						alert("Station " + drag1Station + " launched!");
					}
					PandoraApp.createStationFromStationId(drag1Station);
				}

				if (whatDropped == "drag2") {
					if (testMode == "on") {
						alert("Station " + drag2Station + " launched!");
					}
					PandoraApp.createStationFromStationId(drag2Station);
				}

				if (whatDropped == "drag3") {
					if (testMode == "on") {
						alert("Station " + drag3Station + " launched!");
					}
					PandoraApp.createStationFromStationId(drag3Station);
				}
				PandoraApp.closeLandingPage();
			}
		});

		tapDownLock = 0
		activeLock = 0

		$(".draggable").mousedown(function(){

			//user can mousedown multiple times, but only the first one should become active until a successful mouseup
			if (tapDownLock == 0) {
				tapDownLock = 1
				
				//there must be only one active draggable element for mouseup to work properly
				if (activeLock == 0) {
					activeLock = 1
					$(this).addClass("active");
				}

				oldWidth = $(this).find('img').width();
				oldHeight = $(this).find('img').height();
				var newWidth = oldWidth * scaleFactor
				var newHeight = oldHeight * scaleFactor
				var ctrWidth = (newWidth - oldWidth)/2
				var ctrHeight = (newHeight - oldHeight)/2

				$(this).find('img').stop().animate({
					width: newWidth,
					height: newHeight,
					marginTop: -ctrHeight,
					marginLeft: -ctrWidth,
				}, growSpeed, function() {
					$("#dropzone_activate").fadeIn(dropzoneFadeSpeed);
				});
			}

		});


		$("html").mouseup(function(e){
				
				//look for the draggable element with the active class and only resize that. this way, all .draggable can be different shapes and sizes
				$(".active").find('img').stop().animate({
					width: oldWidth,
					height: oldHeight,
					marginTop: 0,
					marginLeft: 0,
				}, shrinkSpeed, function() {
					$("#dropzone_activate").fadeOut(dropzoneFadeSpeed);
					$(".active").removeClass("active");
					activeLock = 0
					tapDownLock = 0
				});
		});


	});