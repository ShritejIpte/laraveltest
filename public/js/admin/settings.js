
    $.ajaxSetup({ headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') } });
      $("#pbtn-loader").hide();
      $("#btn-loader").hide();
    var tableHeight="";
    var parameters_list_table="";

      var packaged = 0; //Initial field counter
      function resizeData() {
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            var sidebarBrandHeight = $(".sidebar-brand ").innerHeight();
            var sidebarHeaderHeight = $(".sidebar-header ").innerHeight();
            var calc = winHeight - (sidebarBrandHeight + sidebarHeaderHeight);
            $(".sidebar-menu ").height(calc);

            //Content Holder 
            var pageHeadingHeight = $(".page-heading ").innerHeight();
            var footerHeight = $("footer ").innerHeight();
            var contentCalc = winHeight - footerHeight - 51;
            $(".content-holder ").innerHeight(contentCalc);
            var cardBodyHeight = contentCalc - 30;
            $(".card-body ").innerHeight(cardBodyHeight);
            //Setting Tabs Scroll setting
            var navTabsHeight = $(".nav-tabs ").innerHeight();
            // var btnPanelsHeight = $(".btn-panels ").innerHeight();
           var inputHolderHeight = cardBodyHeight - (navTabsHeight + 30);
            $(".input-holder ").innerHeight(inputHolderHeight);
            var tableCalc = cardBodyHeight - 72;
             tableHeight = tableCalc - 41 - 41 - 36 - 30;
            // setTimeout(function() {
            //     $('#example').DataTable({
            //         "scrollY": tableHeight + "px",
            //         // "scrollY": 344,
            //         "scrollX": true,
            //         "paging": true,
            //         "bFilter": true,
            //         "bInfo": true,
            //         "scrollCollapse": true
            //     });
            // }, 2000);

            if (winWidth > 1024) {
                $(".page-wrapper ").addClass("toggled ");
            } else {
                $(".page-wrapper ").removeClass("toggled ");
            }


        }

        resizeData();
        $(window).resize(function() {
            resizeData();
        })

        //  $("#addPackage").prepend(`<div id="preloader"><img  src="${loader_url}" ><p>Loading...please wait</p></div>`);
        // $("#preloader").remove();
  $(document).ready(function() {
         $('[data-toggle="tooltip"]').tooltip();   
            /************** Assessment type *************/
            var assessment = 0; //Initial field counter
            var assessment_maxField = 10; //Input fields increment limitation
            //Once add button is clicked
            $('.add-assessment-btn').click(function() {
                //Check maximum number of input fields
                if (assessment < assessment_maxField) {
                    assessment++; //Increment field counter
                    var assessment_fieldHTML = '';
                    assessment_fieldHTML += '<div class="row ">';
                    assessment_fieldHTML += '<div class="col-lg-4 col-md-6 col-sm-6 ">';
                    assessment_fieldHTML += '<div class="form-group custom-dropdown ">';
                    assessment_fieldHTML += '<label class="col-form-label ">ADD ASSESSMENT</label>';
                    assessment_fieldHTML += '<input type="text " name="add_assessment " class="form-control " placeholder="Text here " />';
                    assessment_fieldHTML += '</div>';
                    assessment_fieldHTML += '</div>';
                    assessment_fieldHTML += '<div class="col-xs-4 col-sm-4 col-md-4 ">';
                    assessment_fieldHTML += '<div class="form-group ">';
                    assessment_fieldHTML += '<label class="col-form-label ">Add assessment type</label>';
                    assessment_fieldHTML += '<input type="text " name="assessment_type[0][] " class="form-control " placeholder="Text here " />';
                    assessment_fieldHTML += '</div>';
                    assessment_fieldHTML += '</div>';
                    assessment_fieldHTML += '<div class="col-xs-1 col-sm-1 col-md-1 ">';
                    assessment_fieldHTML += '<div class="form-group ">';
                    assessment_fieldHTML += '<label class="col-form-label ">&nbsp;</label><br>';
                    assessment_fieldHTML += '<a href="javascript:void(0); " class="assessment_remove_button btn btn-danger btn-sm ">Remove</a>';
                    assessment_fieldHTML += '</div>';
                    assessment_fieldHTML += '</div>';
                    $('.assessment_type_wrapper').append(assessment_fieldHTML); //Add field html
                }
            });
            //Once remove button is clicked
            $('.assessment_type_wrapper').on('click', '.assessment_remove_button', function() {
                $(this).closest('div.row').remove(); //Remove field html
                assessment--; //Decrement field counter
            });


            /************** Parameters *************/
            var parameters = 0; //Initial field counter
            var parameters_maxField = 10; //Input fields increment limitation
            //Once add button is clicked
            $('.add-parameters-btn').click(function() {
                //Check maximum number of input fields
                if (parameters < parameters_maxField) {
                    parameters++; //Increment field counter
                    var parameters_fieldHTML = '';
                    parameters_fieldHTML += '<div class="row ">';
                    parameters_fieldHTML += '<div class="col-lg-4 col-md-6 col-sm-6 ">';
                    parameters_fieldHTML += '<div class="form-group custom-dropdown ">';
                    parameters_fieldHTML += '<label class="col-form-label ">Add Parameters</label>';
                    parameters_fieldHTML += '<input type="email " name="add_parameters " class="form-control " placeholder="Type here ">';
                    parameters_fieldHTML += '</div>';
                    parameters_fieldHTML += '</div>';
                    parameters_fieldHTML += '<div class="col-xs-4 col-sm-4 col-md-4 ">';
                    parameters_fieldHTML += '<div class="form-group ">';
                    parameters_fieldHTML += '<label class="col-form-label ">Add value/input</label>';
                    parameters_fieldHTML += '<input type="text " name="add_value_input[0][] " class="form-control " placeholder="Text here " />';
                    parameters_fieldHTML += '</div>';
                    parameters_fieldHTML += '</div>';
                    parameters_fieldHTML += '<div class="col-xs-1 col-sm-1 col-md-1 ">';
                    parameters_fieldHTML += '<div class="form-group ">';
                    parameters_fieldHTML += '<label class="col-form-label ">&nbsp;</label><br>';
                    parameters_fieldHTML += '<a href="javascript:void(0); " class="parameters_remove_button btn btn-danger btn-sm ">Remove</a>';
                    parameters_fieldHTML += '</div>';
                    parameters_fieldHTML += '</div>';
                    $('.parameters_wrapper').append(parameters_fieldHTML); //Add field html
                }
            });
            //Once remove button is clicked
            $('.parameters_wrapper').on('click', '.parameters_remove_button', function() {
                $(this).closest('div.row').remove(); //Remove field html
                parameters--; //Decrement field counter
            });

            /************** Benchmark Data *************/
            var benchmark = 0; //Initial field counter
            var benchmark_maxField = 10; //Input fields increment limitation
            //Once add button is clicked
            $('.add-benchmark-data-btn').click(function() {
                //Check maximum number of input fields
                if (benchmark < benchmark_maxField) {
                    benchmark++; //Increment field counter
                    var benchmark_fieldHTML = '';
                    benchmark_fieldHTML += '<div class="row ">';
                    benchmark_fieldHTML += '<div class="col-lg-4 col-md-6 col-sm-6 ">';
                    benchmark_fieldHTML += '<div class="form-group custom-dropdown ">';
                    benchmark_fieldHTML += '<label class="col-form-label ">Add Benchmark data</label>';
                    benchmark_fieldHTML += '<input type="file " class="form-control p-0 ">';
                    benchmark_fieldHTML += '</div>';
                    benchmark_fieldHTML += '</div>';
                    benchmark_fieldHTML += '<div class="col-xs-1 col-sm-1 col-md-1 ">';
                    benchmark_fieldHTML += '<div class="form-group ">';
                    benchmark_fieldHTML += '<label class="col-form-label ">&nbsp;</label><br>';
                    benchmark_fieldHTML += '<a href="javascript:void(0); " class="benchmark_remove_button btn btn-danger btn-sm ">Remove</a>';
                    benchmark_fieldHTML += '</div>';
                    benchmark_fieldHTML += '</div>';
                    $('.benchmark_wrapper').append(benchmark_fieldHTML); //Add field html
                }
            });

            //Once remove button is clicked
            $('.benchmark_wrapper').on('click', '.benchmark_remove_button', function() {
                $(this).closest('div.row').remove(); //Remove field html
                benchmark--; //Decrement field counter
            });


            /************** Subscription Plans *************/
            // var packaged = 0; //Initial field counter
            var packaged_maxField = 4; //Input fields increment limitation
            //Once add button is clicked
            $('.add-package-btn').click(function(e) {
                //Check maximum number of input fields
                if (packaged < packaged_maxField) {
                    packaged++; //Increment field counter
                    var package_fieldHTML = '';
                    package_fieldHTML += '<div class="row new_package">';
                    package_fieldHTML += '<div class="col-sm-8">';
                    package_fieldHTML += '<div class="form-group custom-dropdown ">';
                    package_fieldHTML += '<label class="col-form-label ">Features ' + packaged + '</label>';
                    package_fieldHTML += `<input type="text" name="package_features[${packaged}]" class="form-control test" placeholder="Type here ">`;
                    package_fieldHTML += '</div>';
                    package_fieldHTML += '</div>';
                    package_fieldHTML += '<div class="col-sm-4">';
                    package_fieldHTML += '<div class="form-group ">';
                    package_fieldHTML += '<label class="col-form-label ">&nbsp;</label><br>';
                    package_fieldHTML += '<a href="javascript:void(0); " class="package_remove_button btn btn-danger btn-sm ">Remove</a>';
                    package_fieldHTML += '</div>';
                    package_fieldHTML += '</div>';
                    $('.package_wrapper').append(package_fieldHTML); //Add field html
                     $('.test').each(function () {
                        $(this).rules("add", {
                                required: true,
                                 messages: {
                                            required: "Please enter features",
                                        }
                            });
                        });
                  e.preventDefault();
                }
            });
            //Once remove button is clicked
            $('.package_wrapper').on('click', '.package_remove_button', function() {
                $(this).closest('div.row').remove(); //Remove field html
                packaged--; //Decrement field counter
            });

        $(".btn-package").hide();
        $(".sub_plan").on("click",function(){
            $(".btn-package").show();
        });
        $(".no_sub_plan").on("click",function(){
            $(".btn-package").hide();
        });
        $("#show_benchmark").on("click",function(){
            console.log("show_benchmark");
        });
       

   $("#myForm").validate({
            rules: {
                    package_name:{required:true,maxlength:20},
                    package_price:{required:true,maxlength:6,number:true},                    
                    no_assesment:{required:true,maxlength:3,number:true},                    
                    "package_features[]":"required"
                },
            messages:{
                    "package_features[]":"Please enter features",
                    "package_name":{
                        required:"Please enter package name"
                    },
                    "package_price":{
                        required:"Please enter package price",
                        number:"Please enter price in numbers"                    
                    },
                    "no_assesment":{
                        required:"Please enter no of assesment",
                        number:"Please enter no of assesment in numbers"
                    }
                },                
            submitHandler: function(form){                     
                $.ajax({
                    url: $(form).attr("action"), 
                    type: 'POST',
                    data: $(form).serialize(),
                    dataType: 'JSON',
                    beforeSend: function(){ 
                        $("#save_package").html('<i class="fa fa-spinner fa-spin"></i> Loading ');                       
                        $('#save_package').prop('disabled',true); 
                    },
                }).then(function(response){
                    console.log(response);
                    $("#save_package").html('Save');                       
                    $('#save_package').prop('disabled',false); 
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
                        setTimeout(() => {location.reload();}, 200);
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
    });



    function active_plan(is_active,sub_id){
        console.log(is_active,sub_id);

        $.ajax({
            url: APP_URL+'/admin/plan_active_deactive', 
            type: 'POST',
            data:{"sub_id":sub_id,"plan_status":is_active},
            dataType: 'JSON',
        //  beforeSend: function(){                      
            
        // $("#save_package").hide();
        // $("#btn-loader").show();
        // },
        }).then(function(response){
            console.log(response);
            //   $("#save_package").show();
            // $("#btn-loader").hide();
            // $("#preloader").remove();
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

        $('#addPackage').on('hidden.bs.modal', function () {
             $('#addPackage form')[0].reset();
        });
      
/******************** To Stay at Current Tab even after reload********************************/        
    $(document).ready(function(){
        $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
            localStorage.setItem('activeTab', $(e.target).attr('href'));
        });
        var activeTab = localStorage.getItem('activeTab');
        if(activeTab){
            if(activeTab=="#subscription_plans"){
                $(".btn-package").show();
            }
            $('#settingTabs a[href="' + activeTab + '"]').tab('show');
        }
    });

/************************************** Benchmark Excel ***************************************************/

    $('#upload_benchmark_report').validate({
          rules: {
            "excel-file": {required: true,extension: "xlsx|xls|xlsm" }
                      
        },
        messages: {
            "excel-file": {
                required: "Required file with .xlsx, .xlsm, .xls extenstions only.",
            extension: "Please upload valid file formats .xlsx, .xlsm, .xls only."
            }
        }
    });
    $('#upload_benchmark_report').submit(function(evt) {
        evt.preventDefault();
        // //CHECK FORM IS VALID OR NOT
        if (!$("#upload_benchmark_report").valid()) {

            return false;
        }      
           
            var formData = new FormData(this);
            $.ajax({
                type: 'POST',
                url: APP_URL + "/import-excel",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                beforeSend: function(){ 
                        $("#upload_file").html('<i class="fa fa-spinner fa-spin"></i> Uploading ');                       
                        $('#upload_file').prop('disabled',true); 
                    },
                success: function(response) {
                    $("#upload_file").html('<i class="fa fa-spinner fa-spin"></i> Upload');                       
                    $('#upload_file').prop('disabled',false); 
                    console.log(response);
                    if (response.status == 1) {
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
                      setTimeout(() => {location.reload();}, 200);
                    } else {
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
                },
                error: function(data) {
                    if (data.status === 422) {                     

                        $("#upload_benchmark_report span").each(function() {
                            if ($(this).hasClass('error')) { $(this).remove() }
                        });
                        var errors = $.parseJSON(data.responseText);
                        $.each(errors, function(key, value) {
                            if ($.isPlainObject(value)) {
                                $.each(value, function(key, value) {
                                    $("[name=" + key + "]").after(`<span class="error">${value}</span>`);
                                });
                            } else {
                                console.log(key + " " + value);
                            }
                        });
                    } else {

                        toastr["error"]("Something went wrong.!", "My Profile");

                    }
                },
            });
     
    });
/*********************************************************************************************************/

/************************************** Add Parameters ***************************************************/
  $('#add_parameters').on('hidden.bs.modal', function () {
                $('#add_parameters form')[0].reset();
        });
        
 $('#save_parameters').validate({
        rules: {
            parameter_type: {required: true,},
            sub_parameter: {required: true,maxlength:25},           
        },
        messages: {
            parameter_type: {
                required: 'The parameter type is required.',
            },
            sub_parameter: {
                required: 'The parameter is required.',
            }
        }
    });
    $('#save_parameters').submit(function(evt) {
        evt.preventDefault();
        // //CHECK FORM IS VALID OR NOT
        if (!$("#save_parameters").valid()) {
            return false;
        }    
            $.ajax({
                    url: $("#save_parameters").attr("action"), 
                    type: 'POST',
                    data: $("#save_parameters").serialize(),
                    dataType: 'JSON',                     
                    beforeSend: function(){ 
                        $("#save_parameter").html('<i class="fa fa-spinner fa-spin"></i> Loading ');                       
                        $('#save_parameter').prop('disabled', true);                   
                    },                
                    success: function(response) {
                    console.log(response);
                    $("#save_parameter").html('Save');                       
                    $('#save_parameter').prop('disabled', false); 
                    if (response.status == 1) {
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
                      setTimeout(() => {location.reload();}, 200);
                    } else {
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
                },
                error: function(data) {
                    $("#save_parameter").html('Save');                       
                    $('#save_parameter').prop('disabled', false); 
                    if (data.status === 422) {                     

                        $("#upload_benchmark_report span").each(function() {
                            if ($(this).hasClass('error')) { $(this).remove() }
                        });
                        var errors = $.parseJSON(data.responseText);
                        $.each(errors, function(key, value) {
                            if ($.isPlainObject(value)) {
                                $.each(value, function(key, value) {
                                    $("[name=" + key + "]").after(`<span class="error">${value}</span>`);
                                });
                            } else {
                                console.log(key + " " + value);
                            }
                        });
                    } else {
                $.toast({
                        bgColor: 'red',
                        textColor: 'white',
                        heading: 'Error',
                        text: "Something went wrong.!",
                        position: 'top-right',
                        stack: false,
                        icon: 'warning', 
                        loader:false
                    });
                        
                    }
                },
            });
     
    });
/*********************************************************************************************************/

     $(".nav-item").on("click",function(){
            get_current_tab();
     });
 $(".upload_bechmark").hide();
 $(".add_parameters").hide();
 $.fn.dataTable.ext.errMode = 'throw';
    function get_current_tab(){
    	$('a[data-toggle="tab"]').on('show.bs.tab', function(e) {
            var activeTab = $(e.target).attr('href');
             console.log(activeTab);
            switch (activeTab) {
                case "#benchmark_data":
                                        $(".upload_bechmark").show();
                                        get_benchmarck_list();
                                        $(".add_parameters").hide();
                    break;        
                case "#parameters":
                                    $(".add_parameters").show();
                                    get_parameter_list();
                                    $(".upload_bechmark").hide();
                    break;        
                case "#assessment_type":
                                    $(".upload_bechmark").hide();
                                    $(".add_parameters").hide();
                    break;        
                case "#subscription_plans":
                                    $(".upload_bechmark").hide();
                                    $(".add_parameters").hide();
                    break;        
                default:
                    break;
            }      
	    });
    }
           
 get_current_tab();

    function get_benchmarck_list(){
    //   setTimeout(()=>{
      $('#BenchmarckTable').DataTable({
            destroy: true,
            "scrollY": tableHeight + "px",
            "scrollX": true,
            "paging": true,
            "bFilter": true,
            "bInfo": true,
            "scrollCollapse": true,
            // "columnDefs": [{ "width": "200px", "targets": 20 }],
            //   "fixedColumns": {
            //             rightColumns: 1
            //         },
            
            "order": [[ 0, "desc" ]],
            processing: true,
            serverSide: true,
            // ajax: "{{route('admin.getBenchmarkReport')}}",
            ajax: APP_URL + "/admin/getBenchmarkReport",
            columns: [
                    { data: 'bench_id' },
                    { data: 'company_name' },
                    { data: 'website' },
                    { data: 'group' },
                    { data: 'sub_group' },
                    { data: 'city' },
                    { data: 'state' },
                    { data: 'country' },
                    { data: 'employees' },
                    { data: 'product_users' },
                    { data: 'total_revenue' },
                    { data: 'services_revenue' },
                    { data: 'net_income' },
                    { data: 'total_cost_of_revenue' },
                    { data: 'total_operating_expenses' },
                    { data: 'cost_of_services_revenue' },
                    { data: 'sales_marketing' },
                    { data: 'research_development' },
                    { data: 'general_administrative' },
                    { data: 'shareholders_equity' },
                    { data: 'actions' }
                ]
            });
  
      
      }

      function get_parameter_list(){
        $('#parameters_data').DataTable({
            destroy: true,
            "scrollY": tableHeight + "px",
            // "scrollY": 344,
            "scrollX": true,
            "paging": true,
            "bFilter": true,
            "bInfo": true,
            "scrollCollapse": true,
                "order": [[ 0, "desc" ]],
            //     "columnDefs": [
            // { "width": "200px", "targets": 20 }
            // ],
            processing: true,
            serverSide: true,
            // ajax: "{{route('admin.getParametersData')}}",
             ajax: APP_URL +"/admin/getParametersData",
            columns: [
                    { data: 'sub_para_id' },
                    { data: 'parameter_type' },
                    { data: 'parameter' },
                    // { data: 'value' },           
                    { data: 'actions' }
                ]
        });
      }


function edit_paramter(a){
alert(a);

}

       $(".close_plan_data").on("click",function(){
       $('.new_package').remove(); //Remove field html
         packaged =0; //Decrement field counter
         $(".error").html(" ");
      });
       $(".close_para_data").on("click",function(){
           $('#parameter_type-error').html(" ");
           $('#sub_parameter-error').html(" ");
        //  $(".error").html(" ");
      });