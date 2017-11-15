  // $( function() {
  //   $( "#datepicker" ).datepicker();
  // } );

  	var old=document.getElementById("old")
  	var form=document.getElementById("form")
    var d = new Date();
    var n = d.getFullYear();
    var yash;

	$('#datepicker').datepicker({
	    inline: true,
	    onSelect: function(dateText, inst) { 
	        var date = $(this).datepicker('getDate'),            
	            year =  date.getFullYear();
	            yash=n-year;
	    }
	});
	form.addEventListener("submit",submit);
	function submit(event){
		if(yash!=old.value){
			alert("Təvəllüd ilə yaş eyni deyil");
			event.preventDefault();
		}
		else{
			alert("Təşəkkür edirik!!!");
			return true;
	        }
		}
	
