	 	   jQuery("#AvailtheoffersNow").click(function(){
		    if (!jQuery("#main-popup").valid())
			{
			   return false;
			}
            var sname=jQuery('#POPUPName').val()
			var smobile=jQuery('#POPUPMobile').val()
			var semail='No Email.'
			var sUrl=''
			sUrl='https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/Leads'
			jQuery("#pageloader").fadeIn();
            jQuery.ajax({
                url: sUrl,
                method: 'POST',
                data: {

                    name: sname ,
                    mobile: smobile,
                    email: semail,
					date:'',
					projectName:'NiralaTrio'

                },
                success: function (data) {
				      jQuery("#pageloader").fadeOut();
					 jQuery('#main-pop').modal('hide');
					 gtag_report_conversion('https://www.niralatrio.com');
					 window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');					    
                },
                error: function () {
				   jQuery("#pageloader").fadeOut();				   
				 jQuery('#main-pop').modal('hide');
				 gtag_report_conversion('https://www.niralatrio.com');
				 window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                }

            });
			return false;
	      });
		  
		  
		  jQuery("#PricingQuerySubmit").click(function(){
			if (!jQuery("#price-popup").valid())
			{
			   return false;
			}
            var sname=jQuery('#PriceName').val()
			var smobile=jQuery('#PriceMobile').val()
			var semail='No Email.'
			jQuery("#pageloader").fadeIn();
            jQuery.ajax({
                url: 'https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/Leads',
                method: 'POST',
                data: {

                    name: sname ,
                    mobile: smobile,
                    email: semail,
					date:'',
					projectName:'NiralaTrio'

                },
                success: function () {
				      jQuery("#pageloader").fadeOut();
                      jQuery('#price-model').modal('hide');
					  gtag_report_conversion('https://www.niralatrio.com');
                      window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                },
                error: function () {
				   jQuery("#pageloader").fadeOut();
                   jQuery('#price-model').modal('hide');
				   gtag_report_conversion('https://www.niralatrio.com');
                   window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                }

            });
			return false;
	      });
		  
		  
		  jQuery("#interestedCustomer").click(function(){
		    if (!jQuery("#float-form").valid())
			{
			   return false;
			}
            var sname=jQuery('#interestedName').val()
			var smobile=jQuery('#interestedMobile').val()
			var semail=jQuery('#interestedEmail').val()
			jQuery("#pageloader").fadeIn();
            jQuery.ajax({
                url: 'https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/Leads',
                method: 'POST',
                data: {

                    name: sname ,
                    mobile: smobile,
                    email: semail,
					date:'',
					projectName:'NiralaTrio'

                },
                success: function () {
				      jQuery("#pageloader").fadeOut();
                      jQuery('#interested-model').modal('hide');
					  gtag_report_conversion('https://www.niralatrio.com');
                      window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                },
                error: function () {
				   jQuery("#pageloader").fadeOut();
                   jQuery('#interested-model').modal('hide');
				   gtag_report_conversion('https://www.niralatrio.com');
                   window.alert('Thank you for showing interest in the project. Soon we will call you for exciting offers');
                }

            });
			return false;
	      });
		  
		  
		 jQuery('#sendMessage').click(function(){
		    if (!jQuery("#contact-form").valid())
			{
			   return false;
			}
            var scontactName=jQuery('#fnameContactUs').val() + ' ' + jQuery('#lnameContactUs').val()
			var scontactPhone=jQuery('#mobileContactUs').val()
			var scontactEmail=jQuery('#emailContactUs').val()
			var scontactMessage=jQuery('#messageContactUs').val()
			jQuery("#pageloader").fadeIn();
            jQuery.ajax({
                url: 'https://tgroz9ryhi.execute-api.ap-south-1.amazonaws.com/Prod/api/ContactData',
                method: 'POST',
                data: {
					name: scontactName,
                    mobile: scontactPhone,
                    email: scontactEmail,
                    message: scontactMessage,
                    projectName:'NiralaTrio'
                },
                success: function () {
                      jQuery("#pageloader").fadeOut();
                      window.alert('Thank you for contacting us. Soon we will reply to your query');
					  jQuery('#fnameContactUs').val('');
					  jQuery('#lnameContactUs').val('');
					  jQuery('#mobileContactUs').val('');
					  jQuery('#emailContactUs').val('');
					  jQuery('#messageContactUs').val('');
                },
                error: function () {
                   jQuery("#pageloader").fadeOut();
                   window.alert('Thank you for contacting us. Soon we will reply to your query');
                }

            });
	      });
	 
	 
function ReadMoreLess() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}