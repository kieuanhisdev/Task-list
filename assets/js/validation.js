$().ready(function() {
	$("#addTask").validate({
		rules: {
            "text": {
                required:true,
				maxlength:100
            }
        },
        messages: {
            "text": {
				required: "Bắt buộc nhập text",
				maxlength: "Hãy nhập tối đa 100 ký tự"
			},
        }
	});
	
});



