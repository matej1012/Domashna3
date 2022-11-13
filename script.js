var imgObj1 = null;

      var imgObj2 = null;

            var imgObj1 = document.getElementById('hh');

      var imgObj2 = document.getElementById('tt');

            var animate ;

      var hare = 0;

      var tortoise = 0;

      var finish_line = 80;

      var count = 0;

      var setting = null;

            

            function init(){

         imgObj1 = document.getElementById('hh');

         imgObj2 = document.getElementById('tt');

               imgObj1.style.position= 'absolute'; 

               imgObj1.style.left = '0px'; 

               imgObj2.style.position= 'absolute'; 

               imgObj2.style.left = '0px'; 

         hare = 0;

         tortoise = 0;

         finish_line = 80;

         count = 0;

            }

          

       function start1(){

        setTimeout(function(){document.getElementById('p1').innerHTML="Get set";},500);

        setTimeout(function(){document.getElementById('p1').innerHTML="GO!";},1000);

        gogo();

            }

      

      function gogo(){

        setting = setInterval(function(){ position();}, 1000);

      

      }

      

    function position()

         {   

       if ( tortoise != finish_line && hare != finish_line ){

       move_hare();

             move_tortoise();

             print();

           }

       

       count += 1;

        

       if (hare >= finish_line || tortoise >= finish_line ){

         if ( tortoise >= hare )

        document.getElementById('p1').innerHTML="Tortoise wins." + " (" + count + " seconds )";

             else

        document.getElementById('p1').innerHTML="Hare wins. " + " (" + count + " seconds )";

       clearInterval(setting);

      }

    } 

      

     

     function print()

     {

     for ( var i = 1; i <= finish_line; i++ )

         {  

            if ( i == tortoise && i == hare ){

       imgObj1.style.left = 10*i + 'px';

       imgObj2.style.left = 10*i + 'px';}

             else if ( i == hare )

             imgObj1.style.left = 10*i + 'px';

              else if ( i == tortoise )

             imgObj2.style.left = 10*i + 'px';

             else {}

         } 

     }

     

     function move_hare()

     {

      var mv;

      mv = Math.floor((Math.random()*10)+1);

      if ( mv == 1 || mv == 2 )

        hare = hare;

      else if ( mv == 3 || mv == 4 )

        hare = hare + 9; 

      else if (mv == 5)

        hare = hare - 12;

      else if ( mv >= 6 && mv <= 8 )

        hare = hare + 1;

      else

        hare = hare - 2;  

        

      if ( hare < 1 )

      hare = 1;

      else if ( hare > finish_line )

      hare = finish_line;

    }

    

    function move_tortoise()

     {

      var mv;

      mv = Math.floor((Math.random()*10)+1);

      if ( mv >=1 && mv <= 5 )

        tortoise = tortoise + 3;

      else if ( mv == 6 || mv == 7 )

        tortoise = tortoise - 6;

      else

        tortoise = tortoise + 1;

      

      if ( tortoise < 1 )

      tortoise = 1;

      else if ( tortoise > finish_line )

      tortoise = finish_line;

         } 

      

            function stop(){

               clearInterval(setting);

         init();

         setTimeout(function(){document.getElementById('p1').innerHTML="Click the buttons below to handle animation";},500);

            }

            

            window.onload =init;