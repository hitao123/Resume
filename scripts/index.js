	$(document).ready(function(){
            $('#fullpage').fullpage({
            	//导航
            	menu: '#menu',
		        lockAnchors: false,
		        anchors:['首页', '项目经验','擅长技术','教育经历','热爱前端'],
		        navigation: true,
		        navigationPosition: 'left',
		        showActiveTooltip: true,
		         //设计
		        controlArrows: true,
		        verticalCentered: false,
		        resize : false,
		        paddingTop: '2em',
		        paddingBottom: '10px',
		        fixedElements: '#header, .footer',
		        
		        //事件
		        onLeave: function(index, nextIndex, direction){
		        	switch(index){
		        		case 1: 
	                        move(".h2").x(1200).end();
		        	        move(".section .intro-img").duration(1000).rotate(180).end(function(){
		        	        	move(".section .intro-img").scale(0.5).end();
		        	        });
		        	        move(".section1 .pl").x(-1200).end();
		        	        move(".section1 .pr").x(1200).end();
		        		break;
		        		case 2: 
			        		move(".section2 .p-experience").duration(1000).y(1200).end();  
		        	        move(".section2 .h2").rotate(-180).y(1200).end(function(){
	                        	move(".h2").scale(1).end();
		        	        });    		
		        		break;
		        		case 3:
			        		move(".section3 .h2").set('opacity',0.5).x(1200).end(function(){
	                        	move(".h2").scale(0.8).end();
		        	        });
		        		 break;
		        		case 4: 
			        		move(".section4 .h2").x(-1200).end(function(){
	                        	move(".h2").scale(1).set('opacity',1).end();
		        	        });
		        	        move(".graduation").x(-1200).end(function(){
	                        	move(".graduation").scale(0.9).set('opacity',0.8).end();
		        	        });
		        	        move(".major").x(1200).end(function(){
	                        	move(".major").scale(0.9).set('opacity',0.8).end();
		        	        });
	        	        case 5: 
			        		move(".section5 .h2").x(-1200).end(function(){
	                        	move(".h2").scale(1).set('opacity',1).end();
		        	        });
		        	        move(".graduation").x(-1200).end(function(){
	                        	move(".graduation").scale(0.9).set('opacity',0.8).end();
		        	        });
		        	        move(".major").x(1200).end(function(){
	                        	move(".major").scale(0.9).set('opacity',0.8).end();
		        	        });
	        		    break;
		        		default: break;
		        	}
		        	
		        	
		        },
		        afterLoad: function(anchorLink, index){
		        	switch(index){
		        		case 1: 
							move(".section1 .h2").x(0).end(function(){
	                        	move(".h2").scale(0.8).end();
		        	        });
		        	        move(".section .intro-img").duration(500).rotate(0).end(function(){
		        	        	move(".section .intro-img").scale(1).end();
		        	        });
                            move(".section1 .pl").x(0).end();
                            move(".section1 .pr").x(0).end();
		        		break;
		        		case 2: 
			        		move(".section2 .h2").rotate(0).end(function(){
	                        	move(".h2").scale(1).end();
		        	        });  
		        	        move(".section2 .p-experience").y(0).end();      		
		        		break;
		        		case 3:
			        		move(".section3 .h2").set('opacity',1).x(0).end(function(){
	                        	move(".h2").scale(1).end();
		        	        });
		        		 break;
		        		case 4: 
			        		move(".section4 .h2").x(0).end(function(){
	                        	move(".h2").scale(1).set('opacity',0.8).end();
		        	        });
		        	        move(".graduation").x(0).end(function(){
	                        	move(".graduation").scale(1).set('opacity',1).end();
		        	        });
		        	        move(".major").x(0).end(function(){
	                        	move(".major").scale(1).set('opacity',1).end();
		        	        });
		        		 break;
		        		case 5: 
			        		move(".section5 .h2").x(0).end(function(){
	                        	move(".h2").scale(1).set('opacity',0.8).end();
		        	        });
		        	        move(".graduation").x(0).end(function(){
	                        	move(".graduation").scale(1).set('opacity',1).end();
		        	        });
		        	        move(".major").x(0).end(function(){
	                        	move(".major").scale(1).set('opacity',1).end();
		        	        });
		        		 break;
		        		default: break;
		        	}
		        	
		        	
		        },
		        afterRender: function(){
			        		
		        	
		        },
		        afterResize: function(){},
		        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
		            });
		});