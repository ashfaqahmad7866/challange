
    $(function(){                        //will run this function when whole document will be loaded
        $("p").on("click",function(){    //click function on paragraph attribute
          $(this).hide("slow");                 //will hide paragraph when clicking on it
        // $(this).html("my name is ashfaq ahmad");    //will replace the internal html with string
        });

    $("#head").on("click ",function(){      //id selector
            $("#head").toggle("slow").html("GOOD LUCK   🙂 ");
           
        });
        $(".hello").on("click",function(){      //class selector
            $(".hello").html(  "BYE BYE 😆  :");
           
        })
        $("#head").on("dblclick",function(){
          $(this).animate({
            width:"200px",
            height:"300px"
          });
        });
        $("#head").on("mouseover",function(){
        $(this).css({
            "background-color":"red"
        })
        
        });
        $("p.dollar").on("mouseout",function(){
         $(this).animate({
          width:'500px',
          height:"200px"
         });
        });
        $(":button").on("click",function(){    //select all inputs with type button
        $(this).css({
         "background-color":"red",
         "color":"blue" 
        });
        });
        $(":button").on("mouseover",function(){    //select all inputs with type button
            $(this).css({
             "background-color":"green",
             "color":"white" 
            });
            });
            $(":button").on("mouseout",function(){    //select all inputs with type button
                $(this).css({
                 "background-color":"pink",
                 "color":"red" 
                });
                });
                $("ul li:first").on("mouseover",function(){     //select first li of ul
                    $(this).html("Don't desturb me");
                })
  
$("#mup").on("mousedown",function(){       //works when key is pressed
$(this).html("hello every one");

});
$("#input").on("focus",function(){         //works when click on input fied
$(this).css({
"background-color":"blue"
});
});
$("#input").on("blur",function(){         //works when focus comes out from input field
    $(this).css({
    "background-color":"yellow"
    });
    });


    $(".all").on({                     //apply effect on multiple jquery events or methods
        mouseenter:function(){
           $(this).css({
            "background-color":"yellow"
           })
        },
        mouseleave:function(){
            $(this).css({

                "background-color":"red" 
            })
            
        }
    });
    $("#binde").on("click",function(){
  $(this).slideUp("slow");
    });
    $(".hell").on("click",function(){
     $(this).fadeIn("slow");
    });
    $("#aee").on("click",function(){
        $(this).fadeIn("slow").css({
            "width":"800px",
            "height":"300px"
        });
       });
       $(".vic").on("click",function(){
        $(".vic").slideToggle("slow").hide("slow");
       });
       $(".los").on("click",function(){
        $(".vic").delay("slow");
    });

    $(".obj").on({
      click:function(){
        $(this).animate({
         width:"100px",
         height: "100px"
        })
      }
      
    });
    $("#foo").on("click",function(){
alert("hello");
    });
    $(".blur").on("mouseenter",function(){
    $(this).slideToggle("slow").css({
        "background-color":"green"
    });
$("#opt").on("change",function()
{
    document.getElementById("give").innerHTML="YOU SELECTED: "+document.getElementById("opt").value;
})
    });
    $("#key").on("keydown",function(){
        $(this).css({"background-color":"yellow"})
    });
    $("#key").on("keyup",function(){
        $(this).css({"background-color":"green"})
    }); 
    $("#mousedown").on("mousedown",function(){
   $(this).text("You clicked").show("slow").slideUp("slow");
    });
    // $("img").on("load",function(responseTxt, statusTxt, xhr){
    //     if(statusTxt == "success")
    //     alert("External content loaded successfully!");
    //   if(statusTxt == "error")
    //     alert("Error: " + xhr.status + ": " + xhr.statusText);
    
    // });
    $("#bef").on("click",function(){
     $("#before").before("<h1>Start of paragraph</h1>");
    });

});      
    
