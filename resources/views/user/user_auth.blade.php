<link href="{{asset('css/bootstrap.min.css')}}" rel="stylesheet">
<!------ Include the above in your HEAD tag ---------->
<style>
body {
  margin: 0;
  padding: 0;
  background-color: #17a2b8;
  height: 100vh;
}
#login .container #login-row #login-column #login-box {
  margin-top: 120px;
  max-width: 600px;
  min-height: 320px;
  border: 1px solid #9C9C9C;
  background-color: #EAEAEA;
}
#login .container #login-row #login-column #login-box #login-form {
  padding: 20px;
}
#login .container #login-row #login-column #login-box #login-form #register-link {
  margin-top: -85px;
}
</style>
<body>
    <div id="login">
        <h3 class="text-center text-white pt-5">Shopcart </h3>
        <div class="container">
            <div id="login-row" class="row justify-content-center align-items-center">
                <div id="login-column" class="col-md-6">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                            <h3 class="text-center text-info">Login</h3>
                            <div class="form-group">
                                <label for="username" class="text-info">Username:</label><br>
                                <input type="text" name="username" id="username" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password:</label><br>
                                <input type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span></span> <span></span></label><br>
                                <input type="submit" name="submit" class="btn btn-info btn-md" value="submit">
                            </div>
                            <div id="register-link" class="text-right">
                                <a href="#" class="text-info">Register here</a>
                            </div>
                        </form>

                          <form id="register-form" class="form" action="" method="post" style="display:none">
                            <h3 class="text-center text-info">User Register</h3>
                            <div class="form-group">
                                <label for="fullname" class="text-info">Full Name :</label><br>
                                <input type="text" name="fullname" id="fullname" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="email" class="text-info">Email :</label><br>
                                <input type="text" name="email" id="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Mobile :</label><br>
                                <input type="password" name="password" id="Mobile" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="text-info">Password :</label><br>
                                <input type="text" name="password" id="password" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="remember-me" class="text-info"><span></span> <span></span></label><br>
                                <button class="btn btn-primary inline-block btn-login" id="login_btn">Register</button>
                            </div>
                            <div id="login-link" class="text-right">
                                <a href="#" class="text-info">Login here</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

  <script >
        var APP_URL = {!! json_encode(url('/')) !!};           
    </script>    
    <script src="{{URL::asset('js/jquery.min.js')}}"></script>
    <script src="{{URL::asset('js/jquery.validate.min.js')}}"></script>
    <script src="{{URL::asset('js/bootstrap.min.js')}} "></script> 
    {{-- <script src="{{URL::asset('js/admin/login.js')}} "></script> --}}
<script>
$(document).on("click","#register-link",function () {
    $("#register-form").show();
    $("#login-form").hide();
//    alert("hi"); 
});
$(document).on("click","#login-link",function () {
    $("#register-form").hide();
    $("#login-form").show();
//    alert("hi"); 
});
</script>
<script>

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
                    console.log(response);
                                 
                    if(response.status==1){
              
                    setTimeout(() => {
                        window.location.href =APP_URL+"/Dashboard";
                    }, 200);
                        $("#login_btn").html('Login');                       
                        $('#login_btn').prop('disabled',false);
                    }else{
                 alert("TEST");
                    }
                    
                });
        
                 }
            });


  $("#register-form").validate({
                rules: {
                    fullname:{required:true,email:true},
                    email:{required:true,email:true},
                    mobile:{required:true,email:true},
                    password:{required:true,maxlength:12},
                },
                messages:{
                    fullname:{required:"Required full name"},
                    email:{required:"Required Email Address",email:"Please enter valid email address"},
                    mobile:{required:"Required Mobile"},
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
                    console.log(response);
                                 
                    if(response.status==1){
              
                    setTimeout(() => {
                        window.location.href =APP_URL+"/Dashboard";
                    }, 200);
                        $("#login_btn").html('Login');                       
                        $('#login_btn').prop('disabled',false);
                    }else{
                 alert("TEST");
                    }
                    
                });
        
                 }
            });



</script>
