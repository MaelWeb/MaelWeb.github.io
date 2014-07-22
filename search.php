<!DOCTYPE html>
<html lang="en">
<head>
    <title>Search results</title>
    <meta charset="utf-8">
    <link rel="icon" href="images/favicon.ico" type="image/x-icon">
    <link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
    <meta name="description" content="Your description">
    <meta name="keywords" content="Your keywords">
    <meta name="author" content="Your name">
    <link rel="stylesheet" href="css/bootstrap.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/responsive.css" type="text/css" media="screen">
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen">
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="search/search.js"></script>
 	<script type="text/javascript" src="js/superfish.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.js"></script>
	<script>
   jQuery(window).load(function() {
    jQuery('.spinner').animate({'opacity':0},1000,'easeOutCubic',function (){jQuery(this).css('display','none')});
   });
	</script>
<!--[if (gt IE 9)|!(IE)]><!-->
<!--<![endif]-->
<!--[if lt IE 9]>
    <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <link rel="stylesheet" href="css/ie.css" type="text/css" media="screen">
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400' rel='stylesheet' type='text/css'>
  <![endif]-->
</head>

<body>
<div class="spinner"></div>
<!--============================== header =================================-->
 <header>
        <div id="navbar">
            <div class="container clearfix">
                <div class="row">
                    <div class="span12">
                        <div class="navbar navbar_">
                            <div class="container">
                                <h1 class="brand brand_">
                                    <a href="index.html">
                                        <img alt="" src="img/logo.png">
                                    </a>
                                </h1>
                                <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse_">Menu <span class="icon-bar"></span> </a>
                                <div class="nav-collapse nav-collapse_  collapse">
                                    <ul class="nav sf-menu">
                                        <li><a href="index.html">Home</a>
                                        </li>
                                        <li><a href="member.html">Member</a>
                                        </li>
                                        <li><a href="photo.html">Photo</a>
                                        </li>
                                        <li><a href="activity.html">Activity</a>
                                        </li>
                                        <li><a href="other.html">Other</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
<div class="bg-content">

<!--============================== content =================================-->
<section id="content">
  <div class="container">
    <div class="row">
    	<div class="span12">
            <h3>Search result:</h3>
            <div id="search-results"></div>
		</div>
    </div>

</div>
</section>
</div>
<!--============================== footer =================================-->
<footer>
        <div class="container clearfix border-com">
            <ul class="list-social pull-right">
                <li>
                    <a class="icon-1" href="#"></a>
                </li>
                <li>
                    <a class="icon-2" href="#"></a>
                </li>
                <li>
                    <a class="icon-3" href="#"></a>
                </li>
                <li>
                    <a class="icon-4" href="#"></a>
                </li>
            </ul>
            <div class="privacy pull-left">Copyright © 2014 <a href="#">Mael Liang</a> | Designed by Mael Liang
            </div>
        </div>
    </footer>
<script type="text/javascript" src="js/bootstrap.js"></script>
</body>
</html>