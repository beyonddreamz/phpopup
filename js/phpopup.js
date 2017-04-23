(function ( $ ) {
	
	$('head').append('<style type="text/css">body{font:normal 14pt Arial, Helvetica, sans-serif;background:#fff;color:#000}.overlay {position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.8);}a.closePop {position: absolute;right: 0;top: -18px;color: #ffffff;text-decoration: none;font-size: 15px;}</style>');
	
	function popupCenter() {
		$('.popup').css({
			"max-width": "600px",
			"width": "100%",
			"margin": "0 auto",
			"background": "#ffffff",
			"padding": "10px",
			"position": "relative",
			"top": ((($(window).height() - $('.popup').outerHeight()) / 2) + $('.overlay').scrollTop() + "px"),
			"left": ((($(window).width() - $('.popup').outerWidth()) / 2) + $('.overlay').scrollLeft() + "px")
		});
	}
 
    $.fn.phPopup = function( options ) {
 
        /*// This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            color: "#556b2f",
            backgroundColor: "white"
        }, options );
 
        // Greenify the collection based on the settings variable.
        return this.css({
            color: settings.color,
            backgroundColor: settings.backgroundColor
        });*/
		
		this.click(
			function(){
				if ( $(this).attr("datapopup") ) {
					console.log ("datapopup is Present");
					$("body").append("<div class='overlay'><div class='popup'><a href='javascript:void(0)' class='closePop'>X</a>Appended text</div></div>");	
				}else {
					console.log ("datapopup is Not-present");
				}
				
				popupCenter();
				
				$(".closePop").click(function(){
					$(".overlay").remove();
				});
				
				$(".overlay").click(function(){
					$(this).remove();
				});
				
				$(".popup").click(function(){
					return false;
				});
			}
		);
    };
 
}( jQuery ));