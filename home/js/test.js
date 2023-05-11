var element = document.getElementById("jsnap");  

var num = 0;  

function susumu() {
  
  
    if(num+1 < element.children.length) {
      
    var child = element.children[num+1];  
    child.scrollIntoView(  
    {
      
    behavior:"smooth",  
    block:"nearest",  
    inline:"nearest",  
      
    }
      
    );  
      
    num++;  
    }
      
      
    else {
      
    return;  
    }
      
    }

    function modoru() {
  
        if(num-1 >= 0) {
          
        var child = element.children[num-1];  
          
        child.scrollIntoView(  
        {
          
        behavior:"smooth",  
        block:"nearest",  
        inline:"nearest",  
          
          
        }
          
        );  
          
        num--;  
        }
          
          
        else {
          
        return;  
        }
          
        }