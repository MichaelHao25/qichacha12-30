  			var id = null;
  			$('.downloadapp').click(function() {
  			  // $(this).animate({
  			  // 	opacity: 0,},
  			  // 	1000, function() {
  			  // 		$('.bottomSuspend').css('margin-left', 0);
  			  // });
  			  clearInterval(id);
  			  $(this).addClass('active');
  			  id = waitTime(1000, '.bottomSuspend')
  			});
  			$('.closeSuspend').click(function() {
  			  // $('.bottomSuspend').animate({
  			  // 	'margin-left': '-100%',},
  			  // 	1000, function() {
  			  // 		$('.downloadapp').css('opacity', 1);
  			  // });
  			  clearInterval(id);
  			  $('.bottomSuspend').removeClass('active');
  			  id = waitTime(1000, '.downloadapp')

  			});

  			function waitTime(time, obj) {
  			  var id = setTimeout(function() {
  			    $(obj).toggleClass('active');
  			  }, time)
  			  return id;
  			}
