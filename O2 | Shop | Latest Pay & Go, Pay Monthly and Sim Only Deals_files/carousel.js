(function($,document,undefined) {

  $.fn.carousel = function(opts) {
    var options = {
      'displayTime': 5000,
      'transitionTime': 300,
      'autoStart': true,
      'startIndex': 1,
      'swipeThreshold': 100
    };
    
    return this.each(function() {
      var $list = $(this),
          $listParent = $list.parent(),
          listWidth = $listParent.outerWidth(),
          listItemWidth,
          $listItems,
          itemCount,
          listCount,
          index,
          $wrapper,
          $controllerbar,
          $currentSlide,
          $pips,
          swipeElX = 0,
          swipeStartX = 0,
          swipeStartY = 0,
          swipeDistX = 0,
          swipeDistY = 0,
          swipeDirection = null,
          autoScroller,
          firing = true,

      
        setPips = function(index){
          if($pips.size() > 0){
            $pips.removeClass('active').removeClass('timer');
            $controllerbar.find('.piptimer').remove();
            $pips.eq(index).addClass('active');
            if(options.autoStart) {
              $controllerbar.find('.active').addClass('timer');
              $controllerbar.find('.active').append('<span class="piptimer"></span>');
              $controllerbar.find('.piptimer').animate({'width': '100%'},options.displayTime-250,'linear'); //illusion animation finishes
            }
          }
        },

        pipsClick = function(){
          var pipsPos = $controllerbar.find('.pip').index(this) + 1;
          animateSlide(pipsPos);
        },
      
        animateCallback = function(){
          if(index > listCount) {

              $list.css({'left':'-'+listWidth+'px'});
            

            
            index = 1;
          }else if(index < 1) {


              $list.css({'left':'-'+listCount*listWidth+'px'});
            

            
            index = listCount;
          }
          setPips(index-1);
          swipeDistX = 0;
          firing = true;
        },

        clearAutoScroller = function() {
          clearInterval(autoScroller);
          options.autoStart = false;
        },
      
        animateSlide = function(pipsPos){
          var speed = 1;
          if(pipsPos) {
            speed = Math.abs(pipsPos - index);
            index = pipsPos;
            clearAutoScroller();
          }
          $list.stop();
        

            $list.animate({'left': '-'+index*listWidth+'px'},options.transitionTime * speed,'linear', animateCallback);
          
        },
      
        moveSlide = function(direction){
          (direction === 'backwards') ? index-- : index++;
          animateSlide();
        },
      
        slideController = function(){
          if (firing) {
            firing = false;
            var $controller = $(this),
                timerPeriod = 200;
                
            setTimeout(function() {
              $controller.removeClass('js-highlight');
            }, timerPeriod);
                
            $controller.addClass('js-highlight');              
            clearAutoScroller();
            ($controller.hasClass('ctrl-next')) ? moveSlide('forwards') : moveSlide('backwards');
          }
        }, 
        
        getTouch = function(e){
          var touch = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
          return({'x': touch.pageX, 'y': touch.pageY});
        },
        
        setSwipeCoords = function(e) {
          if(firing) {
            swipeStartX = getTouch(e).x;
            swipeStartY = getTouch(e).y;
            
            
              swipeElX = parseInt($list.css('left'),10);
            
          }
        },
        
        swipeMove = function(e) {
          if(firing) {
            var startX = getTouch(e).x,
                startY = getTouch(e).y,
                touchStartBuffer = 5;
            
            swipeDistX = startX - swipeStartX;
            swipeDistY = startY - swipeStartY;
            
            if((Math.abs(swipeDistX) > touchStartBuffer || Math.abs(swipeDistY) > touchStartBuffer) && Math.abs(swipeDistX) > Math.abs(swipeDistY)){
              e.preventDefault();
              
              
                $list.css('left',(swipeDistX+swipeElX)+'px');
              
              swipeDirection = swipeDistX>0 ? 'backwards' : 'forwards';  
            }
          }
        },
        
        swipeEnd = function(e) {
          e.preventDefault();
          if (swipeDistX===0){
            window.location=$list.find('li').eq(index).data('src');
          }else{
            if(Math.abs(swipeDistX)>options.swipeThreshold && firing){

              firing=false;
              moveSlide(swipeDirection); 
              clearAutoScroller();
            }else{
              animateSlide();
            }
          }
          
          
        },
        
        buildMarkup = function(){
          $list.wrap('<div class="carousel-wrapper"><div class="carousel-window"></div></div>');      
          $wrapper = $list.closest('.carousel-wrapper'); 
          $wrapper.append('<div class="carousel-controller"></div>');
          $controllerbar = $wrapper.find('.carousel-controller');
          $controllerbar.append('<div class="ctrl ctrl-prev"></div>');
          $controllerbar.append('<div class="ctrl ctrl-next"></div>');
          for(var i=0, length=$listItems.length; i < length; i++){
            $controllerbar.append('<span class="pip-wrap"><span id="'+$listItems[i].id+'-thumb" class="pip slide'+(i+1)+'"><b>'+$($listItems[i]).attr('data-thumb-title')+'</b></span></span>');
            
            if(window.Modernizr && window.Modernizr.touch){
              $list.find('li').eq(i).attr('data-src' , $list.find('li').eq(i).find('a').attr('href'));
             // $list.find('li').eq(i).find('.grid-inner').unwrap(); REMOVED TO FIX WIERD IOS ISSUE
            }
          }

          $pips = $wrapper.find('.pip');
          
          topAndTail();
        },
        
        setInitialSlide = function(){
          index = options.startIndex;
          $currentSlide = $listItems.index(options.startIndex);

            $list.css({'left': '-'+options.startIndex*listWidth+'px'});
          
          
          setPips(options.startIndex-1);
        },
        
        topAndTail = function(){
          var timer;
          var firstItem = $list.find('li:first');
          var lastItem = $list.find('li:last');
          var $tail = firstItem.clone();
          $tail.attr('id', '');
          $tail.appendTo($list);
          var $top = lastItem.clone();
          $top.attr('id', '');
          $top.prependTo($list);
          $(window).on('resize.carousel.o2', function() {
            clearTimeout(timer);
            timer = setTimeout(function() {
              $tail.css({'background-image': firstItem.css('background-image')});
              $top.css({'background-image': lastItem.css('background-image')}); 
            }, 100); //debounce
          }).resize();
        },
        
        setSizes = function(){
          
          $listItems = $list.children('li');
          itemCount = $listItems.length;
          $list.css('width',itemCount*listWidth+'px');
          $listItems.css('width',listWidth+'px');
          listItemWidth = parseInt($($listItems.find('.grid-inner').first()).width(),10);
          $($controllerbar).css({
            'width':listItemWidth+'px',
            'marginLeft':-listItemWidth/2+'px'
          });
        },
        
        reCalcSizes = function(){
          listWidth = $listParent.outerWidth();
          setSizes();
          

            $list.css({'left': '-'+index*listWidth+'px'});
          

        },
        
        addEventListeners = function(){
          var timer;
          $(window).on('resize.carousel.o2', function() {
            clearTimeout(timer);
            timer = setTimeout(reCalcSizes,100); //debounce
          });
          $controllerbar.find('.ctrl').on('click.carousel.o2', slideController);
          $controllerbar.find('.pip').on('click.carousel.o2', pipsClick);
          if(window.Modernizr && window.Modernizr.touch){
            $list.on('touchstart.carousel.o2', setSwipeCoords);
            $list.find('li').on('touchmove.carousel.o2', swipeMove);
            $list.on('touchend.carousel.o2', swipeEnd);
          }
        };
      
      if ( opts ) { 
        $.extend( options, opts );
      }
      
      index = options.startIndex;
      
      $listItems = $list.children('li');
      listCount = $listItems.length;
      
      if($listItems.size() > 1){
        buildMarkup();
        setSizes();
        setInitialSlide();
        addEventListeners();  
        if(options.autoStart === true) {
          autoScroller = setInterval(moveSlide, options.displayTime);
        }
        setTimeout(reCalcSizes, 25);  //recalc for remove scrollbar width - edge case
      }
      
      
      
    });
  };
  
})(jQuery, document);