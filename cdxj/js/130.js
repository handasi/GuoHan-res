/**
 * @classDescription Marquee
 * @DOM
 *  	<div id="marquee">
 *  		<ul>
 *   			<li></li>
 *   			<li></li>
 *  		</ul>
 *  	</div>
 * @CSS
 *  	#marquee {overflow:hidden;width:200px;height:50px;}
 * @Usage
 *  	$("#marquee").kxbdMarquee(options);
 * @options
 *		isEqual:true,		true,false
 *  		loop:0,
 *		direction:"left",	"left","right","up","down"
 *		scrollAmount:1,
 *		scrollDelay:20
 */
!function(a){a.fn.kxbdMarquee=function(b){var c=a.extend({},a.fn.kxbdMarquee.defaults,b);return this.each(function(){function l(){var b,a="left"==c.direction||"right"==c.direction?"scrollLeft":"scrollTop";return c.loop>0&&(k+=c.scrollAmount,k>i*c.loop)?(d[a]=0,clearInterval(m)):("left"==c.direction||"up"==c.direction?(b=d[a]+c.scrollAmount,b>=i&&(b-=i),d[a]=b):(b=d[a]-c.scrollAmount,0>=b&&(b+=i),d[a]=b),void 0)}var k,m,b=a(this),d=b.get(0),e=b.width(),f=b.height(),g=b.children(),h=g.children(),i=0,j="left"==c.direction||"right"==c.direction?1:0;g.css(j?"width":"height",1e4),c.isEqual?i=h[j?"outerWidth":"outerHeight"]()*h.length:h.each(function(){i+=a(this)[j?"outerWidth":"outerHeight"]()}),(j?e:f)>i||(g.append(h.clone()).css(j?"width":"height",2*i),k=0,m=setInterval(l,c.scrollDelay),b.hover(function(){clearInterval(m)},function(){clearInterval(m),m=setInterval(l,c.scrollDelay)}))})},a.fn.kxbdMarquee.defaults={isEqual:!0,loop:0,direction:"left",scrollAmount:1,scrollDelay:20},a.fn.kxbdMarquee.setDefaults=function(b){a.extend(a.fn.kxbdMarquee.defaults,b)}}(jQuery);