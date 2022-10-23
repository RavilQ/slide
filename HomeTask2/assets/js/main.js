let big = document.querySelector(".big");
let little = document.querySelector(".little");
let images = document.querySelectorAll("img");
let left = document.getElementById("left");
let right = document.getElementById("right");
let both = document.getElementsByClassName("almalar");
let bigimage = document.getElementById("bgimage");
let hdden = document.getElementsByClassName("hidden");
let sum = 0;
let omek;
let index = 0;

    
    

    
    


    let helpp;
    
    let myinterval = setInterval(inik,3000);
    
   
    function inik() {
        
       
          for (let index = 0; index <images.length; index++) {
            
                images[index].style.border="none";
            }
            if (sum==10) {
              sum=0;
            }
            sum++;
            
            bigimage.src = images[sum].src;
           
            if (images[sum]=bigimage) {
                images[sum].style.border="2px solid white";
            }
            if (sum==1) {
              sum=11;
            }
            if (sum==11) {
              
              images[1].style="display:inline-block"
              images[2].style="display:inline-block"
              images[3].style="display:inline-block"
              images[4].style="display:inline-block"
              images[10].style="display:none"
              images[9].style="display:none"
              images[8].style="display:none"
              images[7].style="display:none"
              images[1].style.border="2px solid white";
              index=0;
              sum=1;
            }
            if (sum>=7) {

              if (index < hdden.length) {
                images[index+1].style="display:none"
                images[index+7].style="display:inline-block"
                images[index+7].style.border="2px solid white";
                index++;
            }
        
          
               
             



            //   if (sum==images.length-1) {
            //     images[1].style="display:inline-block"
            //     images[2].style="display:inline-block"
            //     images[3].style="display:inline-block"
            //     images[4].style="display:inline-block"
            //     images[10].style="display:none"
            //     images[9].style="display:none"
            //     images[8].style="display:none"
            //     images[7].style="display:none"
            //     images[1].style.border="2px solid white";
            //     index=0;
            //     sum=0;
            // }
            // else{
            //   images[index+1].style="display:none"
            //   images[index+7].style="display:inline-block"
              
            //   index++;
            // }
        
            
                
                    
               
              
            }
        
    }




for (const item of images) {
    item.addEventListener("click", () => {

    clearInterval(myinterval);
    clearTimeout(helpp);
    helpp= setTimeout(() => {
        myinterval = setInterval(inik,3000);
    }, 5000);
   
        
          
            

        
        
    for (let index = 0; index <images.length; index++) {
        
        images[index].style.border="none";
    }
    bigimage.src = item.src;
    if (item!=bigimage) {
        item.style.border="2px solid white";
    }
    omek = item.src;

    for (let index = 0; index < images.length; index++) {
      if (images[index].src == omek && images[index] != bigimage) {
        
        sum = index;
      }
    }
  });
}

for (const arrow of both) {
  arrow.addEventListener("click", (e) => {
    if (e.target.id == "right") {

         clearInterval(myinterval);
         clearTimeout(helpp);
         helpp = setTimeout(() => {
         myinterval = setInterval(inik,3000);
         }, 5000);
        

      sum = sum + 1;

      for (let index = 0; index <images.length; index++) {
        
        images[index].style.border="none";
    }

      for (const image of images) {
        if (bigimage != image) {
          bigimage.src = images[sum].src;
          images[sum].style.border="2px solid white";
        }

        if (sum == images.length) {
            
          sum = 1;
        }
      }

      if (index==hdden.length) {
        images[1].style="display:inline-block"
        images[2].style="display:inline-block"
        images[3].style="display:inline-block"
        images[4].style="display:inline-block"
        images[10].style="display:none"
        images[9].style="display:none"
        images[8].style="display:none"
        images[7].style="display:none"
        images[1].style.border="2px solid white";
        index=0;
    }

      if (sum>=7) {
        if (index < hdden.length) {
            images[index+1].style="display:none"
            images[index+7].style="display:inline-block"
            images[index+7].style.border="2px solid white";
            index++;
        }
      }
      
   
    
    }

    if (e.target.id == "left") {

         clearInterval(myinterval);
         clearTimeout(helpp);
         helpp = setTimeout(() => {
         myinterval = setInterval(inik,3000);
         }, 5000);
     

      if (sum > 0) {
        sum = sum - 1;
      } 
      
     

      for (let index = 0; index <images.length; index++) {
        
        images[index].style.border="none";
    }
     
    
      console.log(sum);
      for (const image of images) {
        if (bigimage != image) {
            
           if (sum==0) {
            sum=images.length-1;
           }
           
            bigimage.src = images[sum].src;
            images[sum].style.border="2px solid white";
            
         
         
        }

        // if (sum == 0) {
        //   sum = images.length-1;
        // }
      }
      

      
     
      if (sum<=4) {
        
      
        if (index==1) {
            images[index].style="display:inline-block"
            images[images.length-4].style="display:none"
            images[index].style.border="2px solid white";
            index--;
           
        }
        if (index==2) {
            images[index].style="display:inline-block"
            images[images.length-3].style="display:none"
            images[index].style.border="2px solid white";
            index--;
            
        }
        if (index==3) {
            images[index].style="display:inline-block"
            images[images.length-2].style="display:none"
            images[index].style.border="2px solid white";
            index--;
            
        }
         
        if (index==4) {
            images[index].style="display:inline-block"
            images[images.length-1].style="display:none"
            images[index].style.border="2px solid white";
            index--;
            
        }
       
      }
      if (sum==images.length-1) {
        sum=images.length-1;
        images[1].style="display:none"
        images[7].style="display:inline-block"
       
        images[2].style="display:none"
        images[8].style="display:inline-block"
       
        images[3].style="display:none"
        images[9].style="display:inline-block"
        
        images[4].style="display:none"
        images[10].style="display:inline-block"
        images[10].style.border="2px solid white";
        index=4;
      }
   
    }
  });
}






//ALinmayan cehdler//////////////////////////////

// right.addEventListener("click", e=>{

// })

// left.addEventListener("click",()=>{

// })

// let img = document.createElement("img");

// left.addEventListener("click", () => {
//   for (let index = 0; index <1; index++) {
//     images[index].remove();

//     img.src = images[index+1].src;

//     big.append(img);
//   }
// });

// let danger = document.getElementsByClassName("images");

// left.addEventListener("click", () => {
//   little.append(big.firstChild);
//   big.append(danger[0]);
// });

// right.addEventListener("click", () => {

//     little.append(big.firstChild);

//     big.append(danger[4]);
// });
