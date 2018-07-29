var clock, minute;


(function($) {
	
	$(function() {
						
		$(window).resize(function() {
			_resizeSidebar();
		});
		
		function _resizeSidebar() {
			$sidebar.parent().attr('style', false);
				
			
				$sidebar.width($sidebar.parent().width());
			
		}
	});
	
}(jQuery));
