/*jshint esversion: 6 */
/* jshint node: true */  
var about = "My name is <strong>Ahmed Yousef</strong>. I'm an Egyptian citizen. At mean time i'm living in turkey for my bachelor studies. I'm a computer engineering student at <strong>Gazi University</strong>. <br> <table><tr><td><strong>Date of birth:</strong></td><td>27/3/1997</td></tr><tr><td><strong>Marital status:</strong></td><td>Single</td></tr><tr><td><strong>Nationality:</strong></td><td>Egyptian</td></tr><tr><td><strong>Languages:</strong></td><td><strong>Arabic: </strong>Mother tongue.</td></tr><tr><td><strong></strong></td><td><strong>English: </strong>Very Good (spoken, written and listening).</td></tr><tr><td></td><td><strong>French: </strong>Good.</td></tr><tr><td></td><td><strong>Turkish: </strong>Good.</td></tr></table>";
        var edu ="<table><tr><td><strong>2015-2016</strong></td><td>Faculty of  Computers And Information  | Banha University.(Grade : Excellent)</td></tr><tr><td><strong>2016-2017</strong></td><td>Faculty of  Computers And Information  | Banha University.(Grade: Excellent)</td></tr><tr><td><strong>2017-2018</strong></td><td>Turkish Language Course | Gazi TÖMER. (Grade: BA)</td></tr><tr><td><strong>2018-Now</strong></td><td>Faculty Of Computer Engineering | Gazi University.</td></tr></table>";
        var course="<table><tr><td><strong>2011</strong></td><td>Html | Online Course.</td></tr><tr><td><strong>2013</strong></td><td>Android Developing | Online Course.</td></tr><tr><td><strong>2015</strong></td><td>C++ | Online Course.</td></tr><tr><td><strong>2016</strong></td><td>C++ | Faculty of Computers And Informatics | Benha University.</td></tr><tr><td><strong>2016</strong></td><td>C# OOB | Online Course.</td></tr><tr><td><strong>2016</strong></td><td>Database Management (mysql and java) | Faculty of Computers And Informatics | Benha University.</td></tr><tr><td><strong>2016</strong></td><td>Data Structures | Faculty of Computers And Informatics | Benha University.</td></tr><tr><td><strong>2017</strong></td><td>Xamarin.android | Online Course</td></tr><tr><td><strong>2017</strong></td><td>Java OOB | Faculty of Computers And Informatics | Benha University.</td></tr><tr><tr><td><strong>2017</strong></td><td>File Structures| Faculty of Computers And Informatics | Benha University.</td></tr><tr><td><strong>2018</strong></td><td>User Experience | Coursera</td></tr><tr><td><strong>2018</strong></td><td>Android Development | Online Course</td></tr></table>";
        var projects= "<table><tr><td><strong>2016</strong></td><td>Travel Agency System | Java & mysql.(<a href='https://www.youtube.com/watch?v=zgHp2Onv_8E' target='_blank'>Preview</a>)</td></tr><tr><td><strong>2017</strong></td><td>Cashier Pos system | Java & mysql.</td></tr><tr><td><strong>2017</strong></td><td>Restaurant Pos System | Java & mysql.(<a href='https://www.youtube.com/watch?v=bqiwTP03Zko&feature=youtu.be' target='_blank'>Preview</a>)</td></tr><tr><td><strong>2018</strong></td><td>GUINEEXAMS android app</td></tr></table>"
        var contact ="<table><tr><td><strong>Mobile: </strong></td><td>+201098497779 | +905050808772</td></tr><tr><td><strong>Email:</strong></td><td><a href='mailto:ahmedmmy97@gmail.com' target='_blank'>ahmedmmy97@gmail.com</a></td></tr><tr><td><strong>Address: </strong></td><td><a href='https://goo.gl/maps/drCs24hDj6B2' target='_blank'>Akif Emre Yüksek Öğrenim Erkek Öğrenci Yurdu (Çamlıtepe Mahallesi, Çolak Sk. No:8, 06590 Çankaya/Ankara)</a></td></tr></table>"
     var aboutFunction = function(){
         document.getElementById("p1").innerHTML = about;
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
           
     };
  $(function(){
    $('.additional-menu > li').click(function(){
        $('.additional-menu > li').removeClass('active');
        $(this).addClass('active');
    });
});
