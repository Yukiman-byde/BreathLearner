<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Breath Learner</title>

    <!-- Scripts -->

    <!-- Fonts -->

    <!-- Styles -->
    <style>
        html, body {
                background: linear-gradient(236deg, rgba(175,230,24,1) 0%, rgba(123,187,119,1) 53%);
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
     <div id="app">
        <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                    Learning Japanese
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                            <li class="nav-item dropdown">
                                <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                    {{ Auth::user()->name }} <span class="caret"></span>
                                </a>

                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>
                                </div>
                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>
    <div id="app">
        <main class="py-4">
            @yield('content')
        </main>
</body>
</html>
