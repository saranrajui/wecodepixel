$( function() {
// Add background image
console.log('demo js callaing')
	//$.backstretch('images/road2.jpg');
	var endDate = "December 31, 2017 15:03:25";
	$('.countdown.simple').countdown({ date: endDate });
	$('.countdown.styled').countdown({
	  date: endDate,
	  render: function(data) {
		$(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>DAYS</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>HOURS</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>MINUTES</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>SECONDS</span></div>");
	  }
	});
	$('.countdown.callback').countdown({
	  date: +(new Date) + 10000,
	  render: function(data) {
		$(this.el).text(this.leadingZeros(data.sec, 2) + " sec");
	  },
	  onEnd: function() {
		$(this.el).addClass('ended');
	  }
	}).on("click", function() {
		console.log('countdown callback')
	  $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
	});
	$('#clock').countdown('2020/10/10', function(event) {
		var $this = $(this).html(event.strftime(''
		  + '<span>%w</span> weeks '
		  + '<span>%d</span> days '
		  + '<span>%H</span> hr '
		  + '<span>%M</span> min '
		  + '<span>%S</span> sec'));
	  });
});
