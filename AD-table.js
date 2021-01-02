
 $(document).ready(function(){
           
          
        
    $("#addmovie").click(function(){
        let movieinput = document.getElementById("MovieName").value ;
        let ratinginput = Number( document.getElementById("Rating").value);
        if(movieinput == ""){
            alert("Add a Movie Name with ratings");
  
 }
else if ( ratinginput < 0  ){
            alert ("Please Select Postive Value in Rating");
           
         } else{

            }
             
             


             $('#MovieName').val('');
             $('#Rating').val('0');

        });


       

    
});

    $('.table tbody').on('click','.btn',function(){
        var currow = $(this).closest('tr')
        currow.remove();
        
    });







      