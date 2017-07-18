;(function($,win){
	$.fn.dragSort=function(options){
		//取消火狐下的拖拽默认行为
		document.body.ondrop = function (event) {
		    event.preventDefault();
		    event.stopPropagation();
		}
		var defaults={
			dragEnd:function(){},
			$parent:$(this),
            column:5,
            space:20,
            animateTime:500
		}
		var sourceEle=null;
		var setting=$.extend({}, defaults, options);
		function init(){
			addEvent();
			initPosition();
		}

		function initPosition(){
			setting.$parent.children().each(function(i){
				var my=$(this);
				var col=Math.floor(i/setting.column);
				var row=i%setting.column;
				var sp=setting.space;
				my.attr('id','item_'+i);
			    my.css({
			    	top:col*(my.height()+sp),
			    	left:row*(my.width()+sp)
			    })		 
			});
		}

		function addEvent(){
			setting.$parent.children().each(function(){
				var item=$(this);
				item.attr('draggable',true);
				item.css('cursor','move');
				item.on('dragstart',function(e){
					sourceEle=e.target;
					$(sourceEle).addClass('placehodler');
					//解决jquery找不到e.dataTransfer问题
					e.dataTransfer = e.originalEvent.dataTransfer;
					//解决火狐下无法拖动问题 必须要设置setdata即使是无用
					e.dataTransfer.setData("数据的MIME（非空字符串）","数据");		
				})
				item.on('dragover',function(ev){
					     ev.preventDefault();
				})
				item.on('drop',function(e){
					var target=$(e.target);
					var source=$(sourceEle);
					var sourceTop=source.css('top');
					var sourceLeft=source.css('left');
					var targetTop=target.css('top');
					var targetLeft=target.css('left');
					source.removeClass('placehodler');
					target.animate({
						top:sourceTop,
						left:sourceLeft
					},setting.animateTime)
					source.animate({
						top:targetTop,
						left:targetLeft
					},setting.animateTime)
					
					if(target.attr('id')!=target.attr('id')){
						setting.dragEnd(source,target)
					}
				})
				item.on('dragend',function(e){
					$(this).removeClass('placehodler')
				})
			})
		}
		init();
	}
})(jQuery,window)