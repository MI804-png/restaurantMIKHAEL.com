var btn1 =document.getElementById("btn1");
var btn2 =document.getElementById("btn2");
var btn3 =document.getElementById("btn3");
var myNav = document.getElementById("nav");
var post=document.getElementById('post');
var icon=document.getElementById('icon');
var abanoub=document.getElementById('abanoub');
var about=document.getElementById('about');
var ingredients=document.getElementById('ingredients');
var home =document.getElementById('home');
window.onscroll = function () {
    "use strict";
    if (document.body.scrollTop >= 280) {
        myNav.classList.add("scroll");
    } else {
        myNav.classList.remove("scroll");
    }
};
home.onclick=function(){
  prompt( "Welcome Home, Sir");
}
ingredients.onclick=function(){
  window.scrollTo(300, 1500);
}
btn1.onclick=function(){
    window.scrollTo(300, 3900);

}
about.onclick=function(){
  window.scrollTo(300, 4500);
}

btn2.onclick=function(){
   // window.scrollTo(0,document.body.scrollHeight);
  // window.location.hash = "jump_to_this_location";
  window.scrollTo(300, 2300);
}
btn3.onclick=function(){
    window.scroll({top: 0, left: 0});

}
post.onclick=function(){
    document.getElementById("input1").innerHTML = "$textarea";
    
}

post.onclick=function() {
    let text;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person != null || person != "") {
      text =prompt( "Hello " + person + "! How are you today?");
      prompt(text);
    } else {
      text =prompt( "User cancelled the prompt.");
    }
    document.getElementById("demo").innerHTML = text;
  }

abanoub.onclick=function(){
  var title = document.getElementById('text');
  var titleHeading = title.firstChild;
  console.log (text.value);
}
// JS (script.js)
// function setup() {
// 	chatbot.loadFiles(['bot.rive']);
// }
// ​
// window.onload = setup;
 var x = document.getElementById('1');
 var y = document.getElementById('2');
 var z = document.getElementById('3');
 var c = document.getElementById('4');
 var v = document.getElementById('5');

 x.onmouseover=function(){
   //this.style.background-position, '0px -38px';
   this.style.color = 'gold';
 
 x.onmouseleave=function(){
  //$("#container3").css('background-position', '0px -38px');
  this.style.color = 'black';

x.onclick=function(){
this.style.color = 'red';  this.style.backgroundPosition= 0+'px' ,-138 + 'px' ;
  x.onmouseleave=function(){
    this.style.color = 'red';
    x.onclick=function(){
      this.style.color = 'black';
      x.onmouseleave=function(){
        this.style.color = 'black';
      }
    }
  }
 }}};

y.onmouseover=function(){
  //this.style.background-position, '0px -38px';
  this.style.color = 'gold';

y.onmouseleave=function(){
 //$("#container3").css('background-position', '0px -38px');
 this.style.color = 'black';

y.onclick=function(){
this.style.color = 'red';  this.style.backgroundPosition= 0+'px' ,-138 + 'px' ;
y.onmouseleave=function(){
  this.style.color = 'red';
  y.onclick=function(){
    this.style.color = 'black';
    y.onmouseleave=function(){
      this.style.color = 'black';
    }
  }
}
}}};

z.onmouseover=function(){
  //this.style.background-position, '0px -38px';
  this.style.color = 'gold';

z.onmouseleave=function(){
 //$("#container3").css('background-position', '0px -38px');
 this.style.color = 'black';

z.onclick=function(){
this.style.color = 'red';  this.style.backgroundPosition= 0+'px' ,-138 + 'px' ;
z.onmouseleave=function(){
  this.style.color = 'red';
  z.onclick=function(){
    this.style.color = 'black';
    z.onmouseleave=function(){
      this.style.color = 'black';
    }
  }
}

}}};


c.onmouseover=function(){
  //this.style.background-position, '0px -38px';
  this.style.color = 'gold';

c.onmouseleave=function(){
 //$("#container3").css('background-position', '0px -38px');
 this.style.color = 'black';

c.onclick=function(){
this.style.color = 'red';  this.style.backgroundPosition= 0+'px' ,-138 + 'px' ;
c.onmouseleave=function(){
  this.style.color = 'red';
  c.onclick=function(){
    this.style.color = 'black';
    c.onmouseleave=function(){
      this.style.color = 'black';
    }
  }
}
}}};

v.onmouseover=function(){
  //this.style.background-position, '0px -38px';
  this.style.color = 'gold';

v.onmouseleave=function(){
 //$("#container3").css('background-position', '0px -38px');
 this.style.color = 'black';

v.onclick=function(){
this.style.color = 'red';  this.style.backgroundPosition= 0+'px' ,-138 + 'px' ;
v.onmouseleave=function(){
  this.style.color = 'red';
  v.onclick=function(){
    this.style.color = 'black';
    v.onmouseleave=function(){
      this.style.color = 'black';
    }
  }
}
}}};

v.onmouseenter=function(){
  c.style.color='yellow';
  x.style.color='yellow';
  y.style.color='yellow';
  z.style.color='yellow';
  
};
v.onmouseleave=function(){
  c.style.color='black';
  x.style.color='black';
  y.style.color='black';
  z.style.color='black';
};
// $("#2").mouseover(function(){
//   $("#container").css('background-position', '0px -76px');
// });
// $("#3").mouseover(function(){
//   $("#container").css('background-position', '0px -114px');
// });
// $("#4").mouseover(function(){
//   $("#container").css('background-position', '0px -152px');
// });
// $("#5").mouseover(function(){
//   $("#container").css('background-position', '0px -190px');
// });

// $(".star").mouseout(function(){
//   $("#container").css('background-position', '0px 0px');
// });

