function Tab (node){
  this.tabTag = $(node).find('h1').text();
  this.text = $(node).find('p').text();
  this.init();
  this.bind();

}

Tab.prototype = {
    constructor: Tab,
    init: function(){
    		var html1 = `<li>${this.tabTag}</li>`;
    		var html2 = `<p>${this.text}</p>`;
    		$('ul').append($(html1));
    		$('.text').append($(html2));
    		if($('ul>li').length==1){
    			$('ul>li').addClass('active')
    		}
    		if($('.text>p').length==1){
    			$('.text>p').addClass('active')
    		}
    },
    bind: function(){
    	$('ul>li').on('click',function(){
    		var index = $(this).index();
    		$(this).addClass('active').siblings().removeClass('active');
    		$('.text p').eq(index).addClass('active').siblings().removeClass('active')

    	})
    	}

    
}

var tab1 = new Tab(document.querySelectorAll('.tab-container')[0]);
var tab2 = new Tab(document.querySelectorAll('.tab-container')[1]);
var tab3 = new Tab(document.querySelectorAll('.tab-container')[2]);
var tab4 = new Tab(document.querySelectorAll('.tab-container')[3]);

// tab1.init();
// tab1.bind();
// tab2.init();
// tab2.bind();
