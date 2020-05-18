
<!DOCTYPE html>
<html lang="fa">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1" >

    <link rel="stylesheet" href="pro_6.css" type="text/css">
    <script src="pro-6.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>



    <title>NeginSite</title>
</head>
<body data-spy="scroll" data-target=".navbar" data-offset="50">

<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <img src="logo.jpg" alt="logo" style="width:30px; height: auto;margin-top: 10px">
            <a class="navbar-brand" href="#">NeginSite</a>
        </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li><a href="#section1">خانه</a></li>
                    <li><a href="#section2">خدمات سایت</a></li>
                    <li><a href="#section3">اسلایدر</a></li>
                    <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#">گالری <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                            <li><a href="#section41">عکس</a></li>
                            <li><a href="#section42">ویدئو</a></li>
                        </ul>
                    </li>
                    <li><a href="#section5">تماس با ما</a></li>
                    <li><a href="#section7"> ماشین حساب و تقویم</a></li>
                    <li><a href="#section9">سرگرمی</a></li>
                </ul>
            </div>
        <ul class="nav navbar-nav navbar-right">
            <li><a data-toggle="modal" data-target="#loginModal"><span class="glyphicon glyphicon-log-in"></span> login</a></li>
            <li><a data-toggle="modal" data-target="#signupModal"><span class="glyphicon glyphicon-user"></span> signup</a></li>
        </ul>
        </div>
    </div>
</nav>

<div id="loginModal" class="modal fade" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"> &times;</button>
                <h4>Login</h4>
            </div>
            <div class="modal-body">
                <form class="form-inline">
                    <div class="form-group">
                        <label class="sr-only" for="email">Email</label><input type="text" class="form-control input-sm" placeholder="Email" id="email" name="email">
                    </div>
                    <div class="form-group">

                        <label class="sr-only" for="password">Password</label>
                        <input type="password" class="form-control input-sm" placeholder="Password" id="password" name="password"></div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-info btn-xs">Sign in</button>
                    <button type="button" class="btn btn-default btn-xs" data-dismiss="modal">Cancel</button>

                </form>
            </div>
            <!--
                        <div class="modal-footer">
                            <div style="padding:10px"></div>
                        </div>
            -->
        </div>
    </div>
</div>

<div id="signupModal" class="modal fade" role="dialog">

    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal"> &times;</button>
                <h4>signup</h4>
            </div>
            <div class="modal-body">
                <form class="form-inline">
                    <div class="form-group">
                        <label class="sr-only" for="name">Name</label><input type="text" class="form-control input-sm" placeholder="Name" id="name" name="name">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="email">Email</label><input type="text" class="form-control input-sm" placeholder="Email" id="mail" name="email">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="username">Username</label><input type="text" class="form-control input-sm" placeholder="Username" id="username" name="username">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="password">Password</label>
                        <input type="password" class="form-control input-sm" placeholder="Password" id="passsword" name="password"></div>
                    <div class="checkbox">
                        <label>
                            <input type="checkbox"> Remember me
                        </label>
                    </div>
                    <button type="submit" class="btn btn-info btn-xs">Sign up</button>
                    <button type="button" class="btn btn-default btn-xs" data-dismiss="modal">Cancel</button>

                </form>
            </div>
            <!--
                        <div class="modal-footer">
                            <div style="padding:10px"></div>
                        </div>
            -->
        </div>
    </div>
</div>

<div id="section1" class="container-fluid">
    <div class="parallax"></div>
    <div style="height:1000px;font-size:36px">
    </div>
</div>

<div id="section2" class="container-fluid">
    <h1>خدمات سایت</h1>

    <div class="container">

            <div class="col-sm-6 col-lg-3">
                <div class="panel "><img src="pay.png"></div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="panel "><img src="terms.png"></div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="panel"><img src="online_store.jpg"></div>
            </div>
            <div class="col-sm-6 col-lg-3">
                <div class="panel "><img src="blog_icon.png"></div>
            </div>
    </div>
</div>

<div id="section3" class="container-fluid">

    <div class="container">
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner">

                <div class="item active">
                    <img src="hand5.jpg" alt="Los Angeles" style="width:100%;">
                    <div class="carousel-caption">
                        <h1 id="item1">خوش آمدید</h1>
                        <h2><p>هرآنچه در تجارت خود کم دارید با ما در میان بگذارید</p></h2>
                    </div>
                </div>

                <div class="item">
                    <img src="hand4.jpg" alt="Chicago" style="width:100%;">
                    <div class="carousel-caption">
                        <h1 id="item3">نگین سایت</h1>
                        <h2><p>سایتی برای خرید و فروش صنایع دستی</p></h2>
                    </div>
                </div>

                <div class="item">
                    <img src="hand%203.jpg" alt="New York" style="width:100%;">
                    <div class="carousel-caption">
                        <h1 id="item2">بهترین محصولات</h1>
                        <h2><p>بهترین تولید کنندگان صنایع دستی را اینجا بیابید</p></h2>
                        </div>
                        </div>
            </div>

            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>



</div>

<div id="section41" class="container-fluid">
    <h1>عکس</h1>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-sm-6">
                <div class="thumbnail img-responsive">
                    <a href="#" title="Image 1"><img src="mina.jpg" class="rounded-circle"width="200" height="200"> </a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6">
                <div class="thumbnail img-responsive">
                    <a href="#" title="Image 1"><img src="bote.png"class="rounded-circle"width="200" height="200"></a>
                </div>
            </div>
            <div class="col-lg-4 col-sm-6 ">
                <div class="thumbnail">
                    <a href="#" title="Image 1"><img src="mandala.png"class="rounded-circle"width="200" height="200"></a>
                </div>
            </div>
        </div>
    </div>
    <div id="modal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">X</button>
                </div>
                <div class="modal-body">
                </div>
            </div>
        </div>
    </div>
</div>

<div id="section42" class="container-fluid">
    <h1>ویدئو</h1>
    <div id="4320039094">
        <script type="text/JavaScript" src="https://www.aparat.com/embed/XgxCU?data[rnddiv]=4320039094&data[responsive]=yes"></script>
    </div>
</div>


<div id="section5" class="container-fluid">
    <h1>تماس با ما</h1>
    <div class="container">
        <div class="innerwrap">
            <section class="section2 clearfix">
                <div class="col2 column1 first">
                    <script src='https://maps.googleapis.com/maps/api/js?v=3.exp'></script>
                    <div class="sec2map" style='overflow:hidden;height:550px;width:100%;'><div id='gmap_canvas' style='height:100%;width:100%;'></div>
                        <div><small><a href="http://embedgooglemaps.com">   embed google maps </a></small></div>
                        <div><small><a href="http://freedirectorysubmissionsites.com/">free web directories</a></small></div>
                        <style>#gmap_canvas img{max-width:none!important;background:none!important}</style>
                    </div>
                    <script type='text/javascript'>function init_map(){var myOptions = {zoom:14,center:new google.maps.LatLng(35.692997228,51.335998656),mapTypeId: google.maps.MapTypeId.ROADMAP};map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);marker = new google.maps.Marker({map: map,position: new google.maps.LatLng(35.692997228,51.335998656)});infowindow = new google.maps.InfoWindow({content:'<strong>My Location</strong><br>Azadi Tower<br>'});google.maps.event.addListener(marker, 'click', function(){infowindow.open(map,marker);});infowindow.open(map,marker);}google.maps.event.addDomListener(window, 'load', init_map);</script>
                </div>
                <div class="col2 column2 last">
                    <div class="sec2innercont">
                        <div class="sec2addr">
                            <p>کرمان - خیابان هزارو یک شب - ساختمان مرکزی نگین سایت</p>
                            <p><span class="collig">تلفن :</span> 0345126598</p>
                            <p><span class="collig">ایمیل :</span> neginsite@gmail.com</p>
                            <p><span class="collig">فاکس :</span> 03415264895</p>
                        </div>
                    </div>
                    <div class="sec2contactform">
                        <form action="">
                            <div class="clearfix">
                                <input class="col2 first" type="text" placeholder="نام">
                                <input class="col2 last" type="text" placeholder="نام خانوادگی">
                            </div>
                            <div class="clearfix">
                                <input  class="col2 first" type="Email" placeholder="ایمیل">
                                <input class="col2 last" type="text" placeholder="شماره تماس">
                            </div>
                            <div class="clearfix">
                                <textarea name="textarea" id="" cols="30" rows="7">پیامتان را اینجا بنویسید...</textarea>
                            </div>
                            <div class="clearfix"><input type="submit" value="ارسال"></div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    </div>
</div>


<div id="section6" class="container-fluid">
    <div class="parallax2"></div>
    <div style="height:500px;;font-size:36px">
    </div>
</div>


<div id="section7" class="container-fluid">
    <h1>ماشین حساب و تقویم</h1>

    <div class="container">
        <div class="row">
            <div class="col-sm-6 first-column">
                <!-- Begin Horuph.com Currency code -->
                <script src="http://jalalicalendar.horuph.com/frame/?color0=FAFAFA&color1=1D7BAB&color2=ABE0FF&color3=CFEFFF&color4=990E99&color5=FF0000&color6=000000&color7=FFFFFF&color8=E3E3E3" type="text/javascript" language="javascript"></script>
                <!-- End Horuph.com Currency code -->
                <script type="text/javascript" src="http://1abzar.ir/abzar/tools/ruznama/?mod=2"></script><div style="display:none"><h3><a href="http://www.1abzar.com/abzar/ruznama.php">&#1578;&#1602;&#1608;&#1740;&#1605; &#1588;&#1605;&#1587;&#1740;</a></h3></div>
                <!-- Calendar by www.1abzar.com --->


            </div>


            <div class="col-sm-6 second-column">
                <!--
TERMS OF USE
BY USING THE CODE, YOU AGREE:
1. THAT THE MATERIALS ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND
2. NOT TO CHANGE ANY OF THE JAVASCRIPT CODE, INCLUDING THE LICENSE TEXT
3. NOT TO REMOVE THE LINE OF TEXT "powered by calculator.net"
4. THAT THE COPYRIGHT BELONGS TO calculator.net
5. NOT TO REMOVE THE TERMS OF USE
-->
                <!--BEGIN OF SCIENTIFIC CALCULATOR CODE-->
                <script>
                    /*****************************************
                     (C) https://www.calculator.net all right reserved.
                     *****************************************/
                    function gObj(obj) {var theObj;if(document.all){if(typeof obj=="string"){return document.all(obj);}else{return obj.style;}}if(document.getElementById){if(typeof obj=="string"){return document.getElementById(obj);}else{return obj.style;}}return null;}function trimAll(sString){while (sString.substring(0,1) == ' '){sString = sString.substring(1, sString.length);}while (sString.substring(sString.length-1, sString.length) == ' '){sString = sString.substring(0,sString.length-1);} return sString;} function showDebugInfo(){}function r(A){if(A=="10x"||A=="log"||A=="ex"||A=="ln"||A=="sin"||A=="asin"||A=="cos"||A=="acos"||A=="tan"||A=="atan"||A=="e"||A=="pi"||A=="n!"||A=="x2"||A=="1/x"||A=="swap"||A=="x3"||A=="3x"||A=="RND"||A=="M-"||A=="qc"||A=="MC"||A=="MR"||A=="MS"||A=="M+"||A=="sqrt"||A=="pc"){func(A)}else{if(A==1||A==2||A==3||A==4||A==5||A==6||A==7||A==8||A==9||A==0){numInput(A)}else{if(A=="pow"||A=="apow"||A=="+"||A=="-"||A=="*"||A=="/"){opt(A)}else{if(A=="("){popen()}else{if(A==")"){pclose()}else{if(A=="EXP"){exp()}else{if(A=="."){if(entered){value=0;digits=1}entered=false;if((decimal==0)&&(value==0)&&(digits==0)){digits=1}if(decimal==0){decimal=1}refresh()}else{if(A=="+/-"){if(exponent){Hj=-Hj}else{value=-value}refresh()}else{if(A=="C"){level=0;exponent=false;value=0;enter();refresh()}else{if(A=="="){enter();while(level>0){evalx()}refresh()}}}}}}}}}}}var totalDigits=12;var pareSize=12;var degreeRadians="degree";var value=0;var memory=0;var level=0;var entered=true;var decimal=0;var fixed=0;var exponent=false;var digits=0;var showValue="0";var isShowValue=true;function stackItem(){this.value=0;this.op=""}function array(A){this[0]=0;for(i=0;i<A;++i){this[i]=0;this[i]=new stackItem()}this.gG=A}uI=new array(pareSize);function push(B,C,A){if(level==pareSize){return false}for(i=level;i>0;--i){uI[i].value=uI[i-1].value;uI[i].op=uI[i-1].op;uI[i].vg=uI[i-1].vg}uI[0].value=B;uI[0].op=C;uI[0].vg=A;++level;return true}function pop(){if(level==0){return false}for(i=0;i<level;++i){uI[i].value=uI[i+1].value;uI[i].op=uI[i+1].op;uI[i].vg=uI[i+1].vg}--level;return true}function format(I){if(typeof (cc)!="undefined"){return };var E=""+I;if(E.indexOf("N")>=0||(I==2*I&&I==1+I)){return"Error "}var G=E.indexOf("e");if(G>=0){var A=E.substring(G+1,E.length);if(G>11){G=11}E=E.substring(0,G);if(E.indexOf(".")<0){E+="."}else{j=E.length-1;while(j>=0&&E.charAt(j)=="0"){--j}E=E.substring(0,j+1)}E+=" "+A}else{var J=false;if(I<0){I=-I;J=true}var C=Math.floor(I);var K=I-C;var D=totalDigits-(""+C).length-1;if(!entered&&fixed>0){D=fixed}var F=" 1000000000000000000".substring(1,D+2)+"";if((F=="")||(F==" ")){F=1}else{F=parseInt(F)}var B=Math.floor(K*F+0.5);C=Math.floor(Math.floor(I*F+0.5)/F);if(J){E="-"+C}else{E=""+C}var H="00000000000000"+B;H=H.substring(H.length-D,H.length);G=H.length-1;if(entered||fixed==0){while(G>=0&&H.charAt(G)=="0"){--G}H=H.substring(0,G+1)}if(G>=0){E+="."+H}}return E}function refresh(){var A=format(value);if(exponent){if(Hj<0){A+=" "+Hj}else{A+=" +"+Hj}}if(A.indexOf(".")<0&&A!="Error "){if(entered||decimal>0){A+="."}else{A+=" "}}if(""==(""+A)){document.getElementById("sciOutPut").innerHTML=" "}else{document.getElementById("sciOutPut").innerHTML=A}}function evalx(){if(level==0){return false}op=uI[0].op;Qk=uI[0].value;if(op=="+"){value=parseFloat(Qk)+value}else{if(op=="-"){value=Qk-value}else{if(op=="*"){value=Qk*value}else{if(op=="/"){value=Qk/value}else{if(op=="pow"){value=Math.pow(Qk,value)}else{if(op=="apow"){value=Math.pow(Qk,1/value)}}}}}}pop();if(op=="("){return false}return true}function popen(){enter();if(!push(0,"(",0)){value="NAN"}refresh()}function pclose(){enter();while(evalx()){}refresh()}function opt(A){enter();if(A=="+"||A=="-"){vg=1}else{if(A=="*"||A=="/"){vg=2}else{if(A=="pow"||A=="apow"){vg=3}}}if(level>0&&vg<=uI[0].vg){evalx()}if(!push(value,A,vg)){value="NAN"}refresh()}function enter(){if(exponent){value=value*Math.exp(Hj*Math.LN10)}entered=true;exponent=false;decimal=0;fixed=0}function numInput(A){if(entered){value=0;digits=0;entered=false}if(A==0&&digits==0){refresh();return }if(exponent){if(Hj<0){A=-A}if(digits<3){Hj=Hj*10+A;++digits;refresh()}return }if(value<0){A=-A}if(digits<totalDigits-1){++digits;if(decimal>0){decimal=decimal*10;value=value+(A/decimal);++fixed}else{value=value*10+A}}refresh()}function exp(){if(entered||exponent){return }exponent=true;Hj=0;digits=0;decimal=0;refresh()}function func(D){enter();if(D=="1/x"){value=1/value}if(D=="pc"){value=value/100}if(D=="qc"){value=value/1000}else{if(D=="swap"){var B=value;value=uI[0].value;uI[0].value=B}else{if(D=="n!"){if(value<0||value>200||value!=Math.round(value)){value="NAN"}else{var E=1;var A;for(A=1;A<=value;++A){E*=A}value=E}}else{if(D=="MR"){value=memory}else{if(D=="M+"){memory+=value}else{if(D=="MS"){memory=value}else{if(D=="MC"){memory=0}else{if(D=="M-"){memory-=value}else{if(D=="asin"){if(degreeRadians=="degree"){value=Math.asin(value)*180/Math.PI}else{value=Math.asin(value)}}else{if(D=="acos"){if(degreeRadians=="degree"){value=Math.acos(value)*180/Math.PI}else{value=Math.acos(value)}}else{if(D=="atan"){if(degreeRadians=="degree"){value=Math.atan(value)*180/Math.PI}else{value=Math.atan(value)}}else{if(D=="e^x"){value=Math.exp(value*Math.LN10)}else{if(D=="2^x"){value=Math.exp(value*Math.LN2)}else{if(D=="e^x"){value=Math.exp(value)}else{if(D=="x^2"){value=value*value}else{if(D=="e"){value=Math.E}else{if(D=="ex"){value=Math.pow(Math.E,value)}else{if(D=="10x"){value=Math.pow(10,value)}else{if(D=="x3"){value=value*value*value}else{if(D=="3x"){value=Math.pow(value,1/3)}else{if(D=="x2"){value=value*value}else{if(D=="sin"){if(degreeRadians=="degree"){value=Math.sin(value/180*Math.PI)}else{value=Math.sin(value)}}else{if(D=="cos"){if(degreeRadians=="degree"){var C=(value%360);if(C<0){C=C+360}if(C==90){value=0}else{if(C==270){value=0}else{value=Math.cos(value/180*Math.PI)}}}else{var C=(value*180/Math.PI)%360;if(C<0){C=C+360}if((Math.abs(C-90)<1e-10)||(Math.abs(C-270)<1e-10)){value=0}else{value=Math.cos(value)}}}else{if(D=="tan"){if(degreeRadians=="degree"){value=Math.tan(value/180*Math.PI)}else{value=Math.tan(value)}}else{if(D=="log"){value=Math.log(value)/Math.LN10}else{if(D=="log2"){value=Math.log(value)/Math.LN2}else{if(D=="ln"){value=Math.log(value)}else{if(D=="sqrt"){value=Math.sqrt(value)}else{if(D=="pi"){value=Math.PI}else{if(D=="RND"){value=Math.random()}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}refresh()};
                </script>
                <style>
                    #sciout{padding:5px;border-top:1px solid #262626;border-left:1px solid #262626;border-right:2px outset #262626;border-bottom:2px outset #262626;background: #eeeeee;font-family:arial,helvetica,sans-serif;}#sciOutPut{font-size:18px;padding:3px;margin:2px;cursor:text;text-align:right;background-color:#B8C6A3;border:1px solid #87996b;border-radius: 3px;color:#000;}.scifunc{display: inline-block;display: table-cell;vertical-align: middle;text-align:center;width:50px;height:25px;margin:1px;border:1px solid #262626;border-radius: 3px;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:bold;color:#185290;background-color:#C8D8E8;}.scifunc:active {background-color:#013f7d;color:#ffffff;}.scinm{display: inline-block;display: table-cell;vertical-align: middle;padding: 5px 0px;text-align:center;width:50px;height:30px;margin:1px;border:1px solid #262626;border-radius: 3px;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:bold;color:#FFF;background-color:#262626;}.scinm:active {background-color:#aaaaaa;color:#000000;}.sciop{display: inline-block;display: table-cell;vertical-align: middle;padding: 5px 0px;text-align:center;width:50px;height:30px;margin:1px;border:1px solid #262626;border-radius: 3px;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:bold;color:#262626;background-color:#ccc;}.sciop:active {background-color:#000000;color:#ffffff;}.scird{display: inline-block;display: table-cell;vertical-align: middle;text-align:center;height:30px;margin:1px;border:1px solid #eeeeee;border-radius: 3px;font-family:arial,helvetica,sans-serif;font-size:13px;color:#262626;}.scieq{display: inline-block;display: table-cell;vertical-align: middle;padding: 5px 0px;text-align:center;width:50px;height:30px;margin:1px;border:1px solid #262626;border-radius: 3px;font-family:arial,helvetica,sans-serif;font-size:16px;font-weight:bold;color:#F00;background-color:#DCADB0;}.scieq:active {background-color:#ff0000;color:#ffffff;}#calfootnote {font-family:arial,helvetica,sans-serif;font-size:12px;text-align:right;}
                </style>
                <table><tr><td id="sciout"><div><div id="sciOutPut">0</div></div><div style="padding-top:3px;width:100%"><div><span onclick="r('sin')" class="scifunc">sin</span><span onclick="r('cos')" class="scifunc">cos</span><span onclick="r('tan')" class="scifunc">tan</span><span class="scird"><label for="scirdsettingd"><input id="scirdsettingd" type="radio" name="scirdsetting" value="deg" onClick="degreeRadians='degree';" checked>Deg</label><label for="scirdsettingr"><input id="scirdsettingr" type="radio" name="scirdsetting" value="rad" onClick="degreeRadians='radians';">Rad</label></span></div><div><span onclick="r('asin')" class="scifunc">sin<sup>-1</sup></span><span onclick="r('acos')" class="scifunc">cos<sup>-1</sup></span><span onclick="r('atan')" class="scifunc">tan<sup>-1</sup></span><span onclick="r('pi')" class="scifunc">&#960;</span><span onclick="r('e')" class="scifunc">e</span></div><div><span onclick="r('pow')" class="scifunc">x<sup>y</sup></span><span onclick="r('x3')" class="scifunc">x<sup>3</sup></span><span onclick="r('x2')" class="scifunc">x<sup>2</sup></span><span onclick="r('ex')" class="scifunc">e<sup>x</sup></span><span onclick="r('10x')" class="scifunc">10<sup>x</sup></span></div><div><span onclick="r('apow')" class="scifunc"><sup>y</sup>&#8730;x</span><span onclick="r('3x')" class="scifunc"><sup>3</sup>&#8730;x</span><span onclick="r('sqrt')" class="scifunc">&#8730;x</span><span onclick="r('ln')" class="scifunc">ln</span><span onclick="r('log')" class="scifunc">log</span></div><div><span onclick="r('(')" class="scifunc">(</span><span onclick="r(')')" class="scifunc">)</span><span onclick="r('1/x')" class="scifunc">1/x</span><span onclick="r('pc')" class="scifunc">%</span><span onclick="r('n!')" class="scifunc">n!</span></div></div><div style="padding-top:3px;"><div><span onclick="r(7)" class="scinm">7</span><span onclick="r(8)" class="scinm">8</span><span onclick="r(9)" class="scinm">9</span><span onclick="r('+')" class="sciop">+</span><span onclick="r('MS')" class="sciop">MS</span></div><div><span onclick="r(4)" class="scinm">4</span><span onclick="r(5)" class="scinm">5</span><span onclick="r(6)" class="scinm">6</span><span onclick="r('-')" class="sciop">&ndash;</span><span onclick="r('M+')" class="sciop">M+</span></div><div><span onclick="r(1)" class="scinm">1</span><span onclick="r(2)" class="scinm">2</span><span onclick="r(3)" class="scinm">3</span><span onclick="r('*')" class="sciop">&#215;</span><span onclick="r('M-')" class="sciop">M-</span></div><div><span onclick="r(0)" class="scinm">0</span><span onclick="r('.')" class="scinm">.</span><span onclick="r('EXP')" class="sciop">EXP</span><span onclick="r('/')" class="sciop">&#247;</span><span onclick="r('MR')" class="sciop">MR</span></div><div><span onclick="r('+/-')" class="sciop">&#177;</span><span onclick="r('RND')" class="sciop">RND</span><span onclick="r('C')" class="scieq">C</span><span onclick="r('=')" class="scieq">=</span><span onclick="r('MC')" class="sciop">MC</span></div></div></td></tr><tr><td id="calfootnote">powered by <a href="https://www.calculator.net" rel="nofollow">calculator.net</a></td></tr></table>
                <!--END OF SCIENTIFIC CALCULATOR CODE-->

            </div>
        </div>
        <div class="row">

        </div>
    </div>


</div>


<div id="section8" class="container-fluid">
    <div class="parallax3"></div>
    <div style="height:500px;;font-size:36px">
    </div>

</div>

<div id="section9" class="container-fluid">
    <div class="container">

        <div class="row">
            <div class="col-sm-6 first-column">
                <!-- weather by www.toolsfa.com -->
                <script type="text/javascript" src="https://www.toolsfa.com/tools/weather/render?city=kerman&text_color=FFA820&bg_color=F0F0F2&border=1&border_color=EFEFEF"></script><div style="display:none"><h2><a href="https://www.toolsfa.com/tools/weather">ابزار نمایش وضعیت آب و هوا</a></h2></div>
                <!-- weather by www.toolsfa.com -->


            </div>
            <div class="col-sm-6 second-column">
                <iframe src="https://fritz.chessbase.com" style="width:600px;height:400px"></iframe>

            </div>
        </div>
    </div>

</div>



<div class="footer">
    Copyright 2019 &copy; <a href="http://neginsite.ir/" target="_blank">
    <a href="http://neginsite.ir/" class="btn btn-info" role="button">neginsite</a>
    <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
</a>
</div>
</body>
</html>
