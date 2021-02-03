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
    function Toggle() { 
        var temp = document.getElementById("typepass"); 
        if (temp.type === "password") { 
            temp.type = "text"; 
        } 
        else { 
            temp.type = "password"; 
        } 
    } 
       
    localStorage.clear();    
   $("#login_form").validate({
                rules: {
                    email_id:{required:true,email:true},
                    password:{required:true,maxlength:12},
                },
                messages:{
                    email_id:{required:"Required Email Address",email:"Please enter valid email address"},
                    password:{required:"Required Password"},
                },
                submitHandler: function(form){ 
                $.ajax({
                    url: $(form).attr("action"),
                    type: 'POST',
                    data: $(form).serialize(),
                    dataType: 'JSON',
                    beforeSend: function(){ 
                        $("#login_btn").html('<i class="fa fa-spinner fa-spin"></i> Loading ');                       
                        $('#login_btn').prop('disabled', true);                   
                    },
                }).then(function(response){                   
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
                    setTimeout(() => {
                        window.location.href =APP_URL+"/Dashboard";
                    }, 200);
                        $("#login_btn").html('Login');                       
                        $('#login_btn').prop('disabled',false);
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