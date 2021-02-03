    function resizeData() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
    }
    resizeData();
    $(window).resize(function() {
        resizeData();
    })
    $(".register-input").hide();
    $(".forgot-password-input").hide();

    $(".btn-login").click(function() {
        $(".login-input").show('slow');
        $(".register-input").hide('slow');
        $(".forgot-password-input").hide('slow');
    });
    $(".btn-register").click(function() {
        $(".register-input").show('slow');
        $(".login-input").hide('slow');
        $(".forgot-password-input").hide('slow');
    });
    $(".btn-forgot-password").click(function() {
        $(".forgot-password-input").show('slow');
        $(".login-input").hide('slow');
        $(".register-input").hide('slow');
    });
    // Change the type of input to password or text 
    // function Toggle() { 
    //     var temp = document.getElementById("typepass"); 
    //     if (temp.type === "password") { 
    //         temp.type = "text"; 
    //     } 
    //     else { 
    //         temp.type = "password"; 
    //     } 
    // } 
       
    // localStorage.clear();    
   $("#reset_user_pass_form").validate({
                rules: {
                    password:{required:true,minlength:6,maxlength:10},
                    con_password:{required:true,minlength:6,maxlength:10},
                },
                messages:{
                    password:{required:"Required New Password"},
                    con_password:{required:"Required Confirm Password"},
                },
                submitHandler: function(form){ 
                $.ajax({
                    url:APP_URL+'/user/reset_user_pass',
                    type: 'POST',
                    data: $(form).serialize(),
                    dataType: 'JSON',
                    beforeSend: function(){ 
                        $("#reset_btn").html('<i class="fa fa-spinner fa-spin"></i> Loading ');                       
                        $('#reset_btn').prop('disabled', true);                   
                    },
                }).then(function(response){    
                    // console.log(response);
                    // return false;               
                    if(response.status==1){
                    $.toast({
                                bgColor: '#28A745',
                                textColor: 'white',
                                heading: 'Success',
                                text: response.message,
                                position: 'top-right',
                                stack: false,
                                icon: 'success', 
                                loader:false
                            });
                    // setTimeout(() => {
                    //     window.location.href =APP_URL+"/Dashboard";
                    // }, 200);
                        $("#reset_btn").html('Save');                       
                        $('#reset_btn').prop('disabled',false);
                        $("#reset_user_pass_form")[0].reset();
                    }else{
                    $.toast({
                                bgColor: 'red',
                                textColor: 'white',
                                heading: 'Error',
                                text: response.message,
                                position: 'top-right',
                                stack: false,
                                icon: 'warning', 
                                loader:false
                            });
                    }
                    
                });
        
                 }
            });