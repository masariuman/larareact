@extends('layouts.app')

@section('content')
<div class="container">
    <div id="root"></div>
    <hr>
    <h2>Following</h2>

    @foreach($following as $user)
        <a href="{{route('users',$user)}}">{{$user->username}}
    @endforeach
</div>
@endsection
