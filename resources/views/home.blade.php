<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">


        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">

        <style>
            html, body {
                background: linear-gradient(342deg, rgba(175,230,24,1) 0%, rgba(123,187,119,1) 53%);
                color: #636b6f;
                font-weight: 200;
                height: 100vh;
                margin: 0;
                positon: relative;
            }

         .card {
                width: 430px;
                background-color: #fff;
                height: 450px;
                border-radius: 30px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
         }

         .card-header {
                color: #33EBFF;
                font-weight: bold;
                font-size: 25px;
                text-align: center;
                margin-top: 8px;
         }

         .card-body {
                padding: 20px;
                text-align: center;
                color: #F2C969;
         }

         .image {
                width: 350px;
                margin-left: auto;
                margin-right: auto;
                height: 250px;
                object-fit: contain;
            }

        input {
             border-radius: 20px;
             height: 30px;
             border: 1px solid skyblue;
             width: 200px;
             transition: 0.9s;
             margin-top: 5px;
             margin-bottom: 10px;
         }

         input:focus {
              width: 250px;
              border: 1px solid skyblue;
         }
        .btn {
                background-color: #F2C969;
                width: 110px;
                margin: 30px;
                color: #33EBFF;
                height: 50px;
                font-weight: bold;
                font-size: 20px;
                border-radius:10px;
                transition: 0.6s;
                border: none;
         }

        .btn:hover {
                color: #33EBFF;
                transform: translate(0, -3px);
        }

        .login{
          margin-top: 10px;
        }
        </style>
    </head>
    <body>
        <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                 </a>
                 <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
        <div class="card">
            <div class="card-body">
                <img class="image" alt=".../" src="https://newlanguageapp.s3.ap-northeast-1.amazonaws.com/S__34840579.jpg"/>
                @if (Route::has('login'))
                    <div class="top-right links">
                        @auth
                            <a href="{{ url('/display') }}">Let's get started!</a>
                        @else
                            <a class="btn" role="button" href="{{ route('login') }}">Login</a>

                            @if (Route::has('register'))
                            <a class="btn" role="button"  href="{{ route('register') }}">Register</a>
                            @endif
                        @endauth
                    </div>
                 @endif
            </div>
        </div>
    </body>
</html>
