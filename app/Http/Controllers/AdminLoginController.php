<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Admin_logins;
use Validator;
class AdminLoginController extends Controller
{
    public function adminLogin(Request $request)
    {        
      $rules = [
        'email_id'=>'required|email',
        'password'=>'required|min:3|max:12'
      ];
      $validator = Validator::make($request->all(), $rules);
      if ($validator->fails()) {
        // Validation failed       
        return response()->json([
          'data'=> [],
          'validation-msg'=>$validator->messages(),
          "message"=>"Validation Errors.",
          "status"=>0
          ]); 
        
      } else {  
        // Fetch User
        $user = Admin_logins::where('email',$request->email_id)->first();  
        if($user) {
          // Verify the password
          if( password_verify($request->password, $user->password) ) {
            
            $data=[
                "name"=>$user->username,
                "login_id"=>base64_encode($user->login_id),
                "email_id"=>base64_encode($user->email_id)            
            ];
            $request->session()->put('session_data',$data);
              return response()->json([
                'data'=> $data,
                'validation-msg'=>(object)[],
                "message"=>"Login sucess.",
                "status"=>1
                ]);          
  
          } else {
            return response()->json([
              'data'=> [],
              'validation-msg'=>(object)[],
              "message"=>"Invalid password.",
              "status"=>0
              ]);
          }
        } else {
          return response()->json([
            'data'=> [],
            'validation-msg'=>(object)[],
            "message"=>"User Not Found.",
            "status"=>0
            ]);
        }
      }
    }

    public function adminLogout(Request $request){
      // $this->guard()->logout();
      $request->session()->flush();

      $request->session()->regenerate();

      return redirect('/admin-login');
    }

}
