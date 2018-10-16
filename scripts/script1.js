/*jshint esversion: 6 */
/* jshint node: true */  
 var prog="<table><tr><td><strong>2011</strong></td><td>Html</td></tr></td></tr><tr><td><strong>2015</strong></td><td>C++</td></tr><tr><td><strong>2016</strong></td><td>C#</td></tr><tr><td><strong>2016</strong></td><td>SQL</td></tr><tr><td><strong>2016</strong></td><td>Java</td></tr><tr><td><strong>2018</strong></td><td>JavaScript</td></tr><tr><td><strong>2019</strong></td><td>Swift</td></tr><tr><tr><td><strong>2019</strong></td><td>Python</td></tr><tr><td><strong>2020</strong></td><td>PHP</td></tr></table>";
var projects= "<table><tr><td><strong>2016</strong></td><td>Travel Agency System | Java & mysql.(<a href='https://www.youtube.com/watch?v=zgHp2Onv_8E' target='_blank'>Preview</a>)</td></tr><tr><td><strong>2017</strong></td><td>Cashier Pos system | Java & mysql.</td></tr><tr><td><strong>2017</strong></td><td>Restaurant Pos System | Java & mysql.(<a href='https://www.youtube.com/watch?v=bqiwTP03Zko&feature=youtu.be' target='_blank'>Preview</a>)</td></tr><tr><td><strong>2018</strong></td><td>GUINEEXAMS android app</td></tr><tr><td><strong>2020</strong></td><td>Home automation system</td></tr><tr><td><strong>2022</strong></td><td>Android controlled robot</td></tr></table> ";
var conf= "<table><tr><td><strong>2018</strong></td><td>Firebase Summit</td></tr><tr><td><strong>2018</strong></td><td>Pacific Northwest Google Summit</td></tr><tr><td><strong>2019</strong></td><td>Chrome Dev Summit</td></tr><tr><td><strong>2020</strong></td><td>Google I/O</td></tr><tr><td><strong>2022</strong></td><td>IBM Interconnect</td></tr></table>";
var cert= "<table><tr><td><strong>2018</strong></td><td>CCA-Certificate-Java Level 1</td></tr><tr><td><strong>2019</strong></td><td>CCA-Certificate-Java Level 2</td></tr><tr><td><strong>2020</strong></td><td>Android Nanodegree Certificate</td></tr></table>";
var work= "<table><tr><td>Desktop Application Developer | Freelancer.</td></tr><tr><td>Android Developer |Freelancer</td></tr><tr><td>Android Developer</td></tr></table>"
var patent="<table><tr><td><strong>Project Aim: </strong></td></tr><tr><td>Home automation system using a simple Android app, which you can use to control electrical appliances with clicks or voice commands. Commands are sent via Bluetooth to Arduino Uno. So you need not get up to switch on or switch off the device while watching a movie or doing some work.</td></tr></table>"
var article ="<table><tr><td></td><td>Kumar, Shiu, and Seong Ro Lee. 'Android based smart home system with control via Bluetooth and internet connectivity.' Consumer Electronics (ISCE 2014), The 18th IEEE International Symposium on. IEEE, 2024.</td></tr><tr><td></td><td><a href='https://ieeexplore.ieee.org/abstract/document/6884302/' target='_blank'>Contents</a></td></tr></table>"

$(document).ready(
    function() {
        $('#p1').html(prog);
    }
);
var progFunction =function(){
         document.getElementById("p1").innerHTML = prog;
           
     };
 var projFunction =function(){
         document.getElementById("p1").innerHTML = projects;
           
     };
 var confFunction =function(){
         document.getElementById("p1").innerHTML = conf;
           
     };
 var certFunction =function(){
         document.getElementById("p1").innerHTML = cert;
           
     };
 var workFunction =function(){
         document.getElementById("p1").innerHTML = work;
           
     };
var patentFunction=function(){
    document.getElementById("p1").innerHTML=patent;
}
var articleFunction=function(){
    document.getElementById("p1").innerHTML=article;
}
  $(function(){
    $('.additional-menu > li').click(function(){
        $('.additional-menu > li').removeClass('active');
        $(this).addClass('active');
    });
});

