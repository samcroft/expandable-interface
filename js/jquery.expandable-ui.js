(function($){
	$.fn.expandableui = function() {
		var originLeft;
		var originTop;
		var open;
		
		var el = this;
		
		function setup() {
			el.find('article').each(function(){
				var articleCoords = $(this).position();
				$(this)
					.css({'top':articleCoords.top+'px', 'left':articleCoords.left+'px'})
					.addClass('stick');
			});
			el.find('.stick').each(function(){
				$(this).css('position', 'absolute');
			});
		}
		
		el.find('article').click(function(){
			if (!open) {
				open = true;
				var newWidth = $(window).width()-40;
				var newHeight = $(window).height()-40;
			
				var origin = $(this).position();
				originTop = origin.top;
				originLeft = origin.left;
			
				$(this)
					.addClass('transition')
					.addClass('open')
					.css({'width':newWidth+'px', 'height':newHeight+'px', 'left':'0', 'top': '0', 'z-index':20});
			} else {
				open = false;
				$('section').find('.open').css({'width':'250px', 'height':'150px', 'left':originLeft+'px', 'top':originTop+'px', 'z-index':10});

				setTimeout(function(){
					$('section').find('.open').removeClass('open').removeClass('transition');
				}, 500);
			}
			return false;
		});
		
		$(window).resize(function(){
			el.find('.open').removeClass('open').removeClass('transition');
			open = false;

			el.find('.stick').removeClass('stick').removeAttr('style');
			setTimeout(function(){
				setup();
			}, 500);
		});
		
		setup();
	}
	
})(jQuery);