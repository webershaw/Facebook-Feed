$(document).ready(function(){

	// hiding loader
	$(".spinner").hide();
	// end

	var facebookToken = "EAACEdEose0cBAAO7mLBgfWb7Qiz5n8FUnGipEogitkNQqq9jmGUZCGvH1m2t9R3JpOm8tKSZAiFftm2gyPLWoseWa2Nu7lCTfqKZC8tZAMTKifIrPsZChVa9VsEbbVhD8ru2VnKN3PH1NfZARZB9YKxrkcmFfXJG9QyfKHHZAUqZC8ZBALUsdAR4H4zBBHgogjyZC5taVoqfmLVfgZDZD";
	
	// get request
	$.ajax({
		type: "GET",
		url: "https://graph.facebook.com/v2.10/me?fields=name,feed&access_token="+facebookToken,
		success: function(response){
			$.each(response.feed.data, function(i, val){

				// posts containing both message and story objects
				if(val.message != null && val.story != null){			
				$(".row").append('<div class="col-md-6 col-md-offset-3" id="card"><p id="name">'+response.name+'</p><p> <span id="time">'+val.created_time+'</span><i class="fa fa-cog" aria-hidden="true"></i></p><p id="story">'+val.story+'</p><p id="message">'+val.message+'</p><p id = footer><i class="fa fa-thumbs-o-up" aria-hidden="true"> Like</i><i class="fa fa-comment-o" aria-hidden="true">  Share</i><i class="fa fa-share" aria-hidden="true">  Comment</i></p></div>');
				}
				//end

				// posts containing only story
				else if(val.story != null){
				$(".row").append('<div class="col-md-6 col-md-offset-3" id="card"><p id="name">'+response.name+'</p><p> <span id="time">'+val.created_time+'</span><i class="fa fa-cog" aria-hidden="true"></i></p><p id="story">'+val.story+'</p><p id = footer><i class="fa fa-thumbs-o-up" aria-hidden="true"> Like</i><i class="fa fa-comment-o" aria-hidden="true">  Share</i><i class="fa fa-share" aria-hidden="true">  Comment</i></p></div>');
				}
				// end
				
				// posts containing only message
				else if(val.message != null){
				$(".row").append('<div class="col-md-6 col-md-offset-3" id="card"><p id="name">'+response.name+'</p><p> <span id="time">'+val.created_time+'</span><i class="fa fa-cog" aria-hidden="true"></i></p><p id="message">'+val.message+'</p><p id = footer><i class="fa fa-thumbs-o-up" aria-hidden="true"> Like</i><i class="fa fa-comment-o" aria-hidden="true">  Share</i><i class="fa fa-share" aria-hidden="true">  Comment</i></p></div>');
				} 
				// end
			});
			
		},
		error: function(response){
            	alert("Error validating access token: Session has expired");
            },

		beforeSend : function(){
            $(".spinner").show();
        },

        complete : function(){
           $(".spinner").hide();
        }
	});
	// get request end
});	