<head>

    <meta charset="utf-8">
    <title>Learn</title>
    <base href="/">

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    <link rel="stylesheet" type="text/css" href="{{ asset('font-awesome/css/font-awesome.min.css') }}" />
    </head>
    <body>

      <div class="form-wrap">  
          <div class="container">
            <div class="row justify-content-center">
              <div class="form-content col-sm-4 mt-4">
                
                <h3 class="text-center my-4">RESET PASSWORD</h3>
                
                <div class="col-sm-12">
                  <form id="reset-password" name="reset-password" method="POST">
                      {{ csrf_field() }}
                      <input type="hidden" name="reset_token" value="{{ $token }}">
                    <div class="form-group">
                      <input type="password" class="form-control form-control-sm" placeholder="Password" name="password" required>
                      <small id="validation-password" class="text-danger error"></small>                    
                    </div> 
                    <div class="form-group">
                      <input type="password" class="form-control form-control-sm" placeholder="Confirm password" name="password_confirmation" required>
                    </div>
                    <div class="form-group mt-4">
                      <center class="mb-4">
                        <small id="validation-message" class="text-danger error"></small>                    
                      </center>
                      <button id="btn-change-password" type="submit" class="btn btn-primary btn-flat">Change password</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        

    <script type="text/javascript" src="{{ asset('app/scripts.js') }}"></script>
    <script type="text/javascript" src="{{ asset('app/polyfills.js') }}"></script>
    <script type="text/javascript" src="{{ asset('app/styles.js') }}"></script>
    <script type="text/javascript" src="{{ asset('app/vendor.js') }}"></script>
    <script type="text/javascript" src="{{ asset('app/main.js') }}"></script>
    <script type="text/javascript" src="{{ asset('app/runtime.js') }}"></script>
    <script type="text/javascript">
      $("#btn-change-password").click(function (e) {
        e.preventDefault();

        var form = $(this).closest('form');
        console.log(form.serializeArray());
        
        $.post('/api/reset-password', form.serializeArray())
            .done(function (response) {
                console.log(response);
                window.location.href="/";
            })
            .fail(function (err) {
                var error = $.parseJSON(err.responseText);
                form.find('.error').empty();
                console.log(error);
                if(error.errors){
                form.find('#validation-password').html(error.errors.password);
                }
                else{
                  form.find('#validation-message').html(error.message);
                }
            });
      });
    </script>
</body>