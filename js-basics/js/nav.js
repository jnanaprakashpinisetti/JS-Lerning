
leftNav = () => {
  document.write('<div class="col-sm-1 sidenav left-side">\
  <p><a href="#">Link</a></p>\
  <p><a href="#">Link</a></p>\
  <p><a href="#">Link</a></p>\
  <p><a href="#">Link</a></p>\
</div>')
}

mainNav = () => {
  document.write('  <nav class="navbar navbar-inverse">\
  <div class="container-fluid">\
    <div class="navbar-header">\
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
      </button>\
      <a class="navbar-brand" href="#">Jnana Praksh</a>\
    </div>\
    <div class="collapse navbar-collapse" id="myNavbar">\
      <ul class="nav navbar-nav">\
        <li class="active"><a href="#">Home</a></li>\
        <li><a href="#">About</a></li>\
        <li><a href="#">Projects</a></li>\
        <li><a href="#">Contact</a></li>\
      </ul>\
      <ul class="nav navbar-nav navbar-right">\
        <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>\
      </ul>\
    </div>\
  </div>\
</nav>')
}


bottomfooter = () => {
  document.write('  <footer class="container-fluid text-center">\
  <p>Footer Text</p>\
</footer>')
}

cmnHeader = () => {
  document.write('  <meta charset="utf-8">\
  <meta name="viewport" content="width=device-width, initial-scale=1">\
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">\
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>\
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>\
  <link rel="stylesheet" href="css/index.css">\
  <link rel="stylesheet" href="css/global.css"></link>')
}