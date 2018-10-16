/*jshint esversion: 6 */
/* jshint node: true */  
var about = "My name is <strong>Ahmed Yousef</strong>. I'm an Egyptian citizen. At mean time i'm living in turkey for my bachelor studies. I'm a computer engineering student at <strong>Gazi University</strong>. <br> <table><tr><td><strong>Date of birth:</strong></td><td>27/3/1997</td></tr><tr><td><strong>Marital status:</strong></td><td>Single</td></tr><tr><td><strong>Nationality:</strong></td><td>Egyptian</td></tr><tr><td><strong>Languages:</strong></td><td><strong>Arabic: </strong>Mother tongue.</td></tr><tr><td><strong></strong></td><td><strong>English: </strong>Very Good (spoken, written and listening).</td></tr><tr><td></td><td><strong>French: </strong>Good.</td></tr><tr><td></td><td><strong>Turkish: </strong>Good.</td></tr></table>";
        var edu ="<table><tr><td><strong>2015-2016</strong></td><td>Faculty of  Computers And Information  | Banha University.(Grade : Excellent)</td></tr><tr><td><strong>2016-2017</strong></td><td>Faculty of  Computers And Information  | Banha University.(Grade: Excellent)</td></tr><tr><td><strong>2017-2018</strong></td><td>Turkish Language Course | Gazi TÖMER. (Grade: BA)</td></tr><tr><td><strong>2018-Now</strong></td><td>Faculty Of Computer Engineering | Gazi University.</td></tr></table>";
        var course="<table><tr><td><strong>2011</strong></td><td>Html | Online Course.</td></tr><tr><td><strong>2013</strong></td><td>Android Developing | Online Course.</td></tr><tr><td><strong>2015</strong></td><td>C++ | Online Course.</td></tr><tr><td><strong>2016</strong></td><td>C++ | Faculty of Computers And Informatics | Benha University.</td></tr><tr><td><strong>2016</strong></td><td>C# OOB | Online Course.</td></tr><tr><td><strong>2016</strong></td><td>Database Management (mysql and java) | Faculty of Computers And Informatics | Benha University.</td></tr><tr><td><strong>2016</strong></td><td>Data Structures | Faculty of Computers And Informatics | Benha University.</td></tr><tr><td><strong>2017</strong></td><td>Xamarin.android | Online Course</td></tr><tr><td><strong>2017</strong></td><td>Java OOB | Faculty of Computers And Informatics | Benha University.</td></tr><tr><tr><td><strong>2017</strong></td><td>File Structures| Faculty of Computers And Informatics | Benha University.</td></tr><tr><td><strong>2018</strong></td><td>User Experience | Coursera</td></tr><tr><td><strong>2018</strong></td><td>Android Development | Online Course</td></tr></table>";
        var projects= "<table><tr><td><strong>2016</strong></td><td>Travel Agency System | Java & mysql.(<a href='https://www.youtube.com/watch?v=zgHp2Onv_8E' target='_blank'>Preview</a>)</td></tr><tr><td><strong>2017</strong></td><td>Cashier Pos system | Java & mysql.</td></tr><tr><td><strong>2017</strong></td><td>Restaurant Pos System | Java & mysql.(<a href='https://www.youtube.com/watch?v=bqiwTP03Zko&feature=youtu.be' target='_blank'>Preview</a>)</td></tr><tr><td><strong>2018</strong></td><td>GUINEEXAMS android app</td></tr></table>"
        var contact ="<table><tr><td><strong>Email:</strong></td><td><a href='mailto:ahmedmmy97@gmail.com' target='_blank'>ahmedmmy97@gmail.com</a></td></tr><tr><td><strong>Address: </strong></td><td>Gazi Üniversitesi Mühendislik Mimarlık Fakültesi Bilgisayar Mühendisliği. </a></td></tr></table><div id='map'></div>"
        
     var aboutFunction = function(){
         document.getElementById("p1").innerHTML = about
     };
     var eduFunction =function(){
         document.getElementById("p1").innerHTML = edu;
           
     };
     var crsFunction =function(){
         document.getElementById("p1").innerHTML = course;
           
     };
     var projFunction =function(){
         document.getElementById("p1").innerHTML = projects;
           
     };
      var conFunction =function(){
         document.getElementById("p1").innerHTML = contact;
           initMap();
     };
var cvFunction = function(){
     document.getElementById("p1").innerHTML = '<iframe id="frame" src="cv.html" width="100%" height="500" frameborder="0">'
}
function initMap() {
  // The location of Uluru
    var label = "Gazi̇ Üni̇versi̇tesi̇ Mühendislik Fakültesi";
  var uni = {lat: 39.9313785, lng: 32.845961};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 17, center: uni});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uni, map: map, title:label});
   
}

  $(function(){
    $('.additional-menu > li').click(function(){
        $('.additional-menu > li').removeClass('active');
        $(this).addClass('active');
    });
});
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-127377011-1');

