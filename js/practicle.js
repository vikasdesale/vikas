


// Particle ground javasript

/*
document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('home'), {
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
*/

/*"use strict"*/

// Particle ground jquery
$(document).ready(function() {
  $('#home').particleground({
    dotColor: '#5cbdaa',
    lineColor: '#5cbdaa'
  });
  $('.hero-content').css({
    'margin-top': -($('.hero-content').height() / 3)
  });
});




var skills = {
    HTML: 5,
    CSS: 5,
    HTML5: 4,
    CSS3: 4,
    JSON: 4,
    XML : 5,
    'Bootstrap Framework': 4, 
    SCSS: 3,
    JQuery :3,
    Javascript : 4,
    AngularJS : 3,
    MySQL: 4,
    Java : 4,
    'MVC Pattern' : 4,
    'Object Orientated Programming': 4
  
    
}

var skills = {
    HTML: 5,
    CSS: 5,
    HTML5: 4,
    CSS3: 4,
    JSON: 4,
    XML : 5,
    'Bootstrap Framework': 4, 
    SCSS: 3,
    JQuery :3,
    Javascript : 4,
    AngularJS : 3,
    MySQL: 4,
    C: 4,
    'C++': 3,
    Java : 4,
    Python: 3,
    'Batch Programming': 3,
    'Bash scripting': 3,
    'Web Development': 3,
    'Object Orientated Programming': 4,
    'Data Structures': 3,
    Algorithms: 2,
    'MVC Pattern' : 4,
    Android: 4,
    Kotlin: 2,
    Github: 4,
    Git: 4,
    Perforce: 2,
    Linux: 4,
    Windows: 4,
    'Virtualization & Hypervisors': 4,
    'Test Planning': 4,
    'Manual Testing': 5,
    'Test Case': 4,
    'Defect Logging': 4,
    'Defect Identification': 4,
    'Test Preparation': 5,
    'Regression Testing': 4,
    'System Testing': 4,
    'Functional Testing':4,
    'Test Cases':4,
    'Testing':4,
    'Agile Methodologies':4
  
    
}
var languages = {
    MARATHI: 5, 
    AHIRANI: 5,
    ENGLISH: 4,
    HINDI: 4,
}
var create_skill_row = function(key,value) {
   const span='<li><span class="skills_title">'+key+'</span>';
        const fullStar = '<i class="fa fa-star checked"></i>'.repeat(Math.floor(value));
        const noStar = '<i class="fa fa-star"></i>'.repeat(Math.floor(5-value));
        const spanend='</li>';
     return `${span}${fullStar}${noStar}${spanend}`;
}


$(document).ready(function() { 
 var i=0;
   $.each(skills,function(key,value){
        if(i<Object.keys(skills).length/2){
            $("#tech_skills").append(create_skill_row(key,value));
            i++;
    }else{
            $("#tech_skills1").append(create_skill_row(key,value));
        i++;
    }
  });
 i=0;

  $.each(languages,function(key,value){
        if(i<Object.keys(languages).length/2){
            $("#languages_skills").append(create_skill_row(key,value));
            i++;
    }else{
            $("#languages_skills1").append(create_skill_row(key,value));
        i++;
    }

    
  });
  
});



//arrow button to move top

$(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});


// scroll on click effect
$(function () {
  $('#top_menu li a').click(function (event) {
    var targetSection = $(this).attr('href');
    var scrTo = $(targetSection).offset().top;
    $('html, body').animate({
      scrollTop: scrTo
    }, 900)
    event.preventDefault();
  });

})    


$(document).ready(function() {

  $('#my-form').on('submit', function(e) {
    e.preventDefault();
      var form = document.getElementById("my-form");

    var status = document.getElementById("my-form-status");

  //get the name field value
    var name = $('#name').val();
    //get the name field value
    var email = $('#email').val();
    //get the comments
    var comments = $('#message').val();
          
    //pretend we don't need validation
    
    //send to formspree
    $.ajax({
      url:'https://formspree.io/mlewyvzv',
      method:'POST',
      data:{
        name:name,
        _replyto:email,
         from:email,
        message:comments,
        _subject:'My Portfolio Website Feedback',
      },
      dataType:"json",
      success:function() {
        console.log('success'); 
        form.reset();
        status.innerHTML = "Thanks for your message!";
                        $("#formMessage").delay(2000).fadeOut(500); 
      },
        error:function(){
          status.innerHTML = "Oops! There was a problem.";
                                  $("#formMessage").delay(2000).fadeOut(500); 

      }
    });   
    
  });

});

