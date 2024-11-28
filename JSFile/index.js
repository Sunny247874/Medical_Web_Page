$(' .bnr-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:true,
    autoplay:true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    autoHeight:true,
    navText : [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>'
     ],
    responsive:{

      0:{

        items:1
      },
      400:{

        items:1
      },
      500:{

        items:1
      },
      768:{

        items:1
      },
      992:{

        items:1
      }
     }
  })


  window.addEventListener('scroll',reveal);

  function reveal(){
    var reveals=document.querySelectorAll('.reveal');

    for(var i=0;i<reveals.length;i++){
      var windowheight=window.innerHeight;
      var revealtop=reveals[i].getBoundingClientRect().top;
      var revealpoint=150;


      if(revealtop<windowheight-revealpoint){
        reveals[i].classList.add('active');
      }else{
        reveals[i].classList.remove('active');
      }
      
    }
  }





  

  $(' .bottom-slide').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    autoplay:false,
    center: true,
    autoplayTimeout: 3000,
    smartSpeed: 1000,
    autoHeight:true,
    navText : [
      '<i class="fa-solid fa-arrow-left"></i>',
      '<i class="fa-solid fa-arrow-right"></i>'
     ],
     responsive: {
      0:{
          items:1
      },
      400:{

        items:1
      },
      500:{

        items:1
      },
      768:{

        items:2
      },
      992:{

        items:2
      }
     }
  })



  let valueDisplays =document.querySelectorAll(".num");

  let interval=4000;

  valueDisplays.forEach((valueDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valueDisplay.getAttribute("data-val"));
    let duration =Math.floor(interval/endValue);
    let counter=setInterval(function(){

      startValue+=1;
      valueDisplay.textContent=startValue;

      if(startValue==endValue){
        clearInterval(counter);
      }
    },duration );
  })

