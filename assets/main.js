var cell= []
for(i=0; i < 180; i++){ 
    document.getElementById('c'+i).value = Math.round(Math.random())
    cell[i] = document.getElementById('c'+i).value
    if(document.getElementById('c'+i).value == 0){
        document.getElementById('c'+i).style.backgroundColor = "black"
    }
    else{
        document.getElementById('c'+i).style.backgroundColor = "yellow"
    } 
    console.log(cell[i]) 
}

    // function handleClick(){
    //     for(i=0; i <= 10;i++){
    //     if(document.getElementById('c'+i).value == 0){
    //         document.getElementById('c'+i).style.backgroundColor = "black"
    //     }
    //     else{
    //         document.getElementById('c'+i).style.backgroundColor = "yellow"
    //     }
    // }
    // }
    console.log('game condt start here')
    var a = 1
    function myLoop () {           
        setTimeout(function () { 
            //cond   
            for(i=0; i< 180;i++){
                 
                if(cell[i]== 1 ){
                    if(cell[i + 1]==1 && cell[i + 10]){
                        cell[i] = 1
                    }
                    else if(cell[i - 1] == 1 && cell[i + 1]== 1){
                        cell[i] = 1
                    }
                    else if(cell[i - 1] == 1 && cell[i+ 10]){
                        cell[i] = 1
                    }
                    else if(cell[i + 1] == 1 && cell [i + 10]){
                        cell[i] = 1
                    }
                    else if(cell[i - 1] == 1 && cell[i + 10] == 10){
                        cell[i] = 1
                    }
                    else if(cell[i - 10]== 1 && cell[i + 1]==1){
                        cell[i] = 1
                    }
                    else if(cell[i + 10]== 1 && cell[i + 1]==1){
                        cell[i] = 1
                    }
                    else if(cell[i - 10]== 1 && cell[i + 10]==1){
                        cell[i] = 1
                    }
                    else if(cell[i - 10]== 1 && cell[i - 1]==1){
                        cell[i] = 1
                    }
                    else if(cell[i + 10]== 1 && cell[i - 1]==1){
                        cell[i] = 1
                    }
                    else if(cell[i - 1]== 1 && cell[i + 1]==1){
                        cell[i] = 1
                    }
                    else if(cell[i - 10]== 1 && cell[i - 1]==1){
                        cell[i] = 1
                    }
                    else if(cell[i + 10]== 1 && cell[i - 1]==1){
                        cell[i] = 1
                    }
                    else{
                        cell[i] = 0
                    }
                }
                else if(cell[i]== 0){
                    if(cell[i - 1] == 1 && cell[i + 1] == 1 && cell[i + 10] == 1){
                        cell[i] == 1
                    }
                    else if(cell[ i - 10] == 1 && cell[i - 1] == 1 && cell[i + 1] == 1 ){
                        cell[i] = 1
                    }
                    else if(cell[i - 10] ==1 && cell[i + 10] ==1 && cell[i-1]==1){
                        cell[i] = 1
                    }
                    else if(cell[i - 10] ==1 && cell[i + 10] ==1 && cell[i + 1]==1){
                        cell[i] = 1
                    }
                    else{
                        cell[i] = 0
                    }
                }
                document.getElementById('c'+i).value = cell[i] 
                if(document.getElementById('c'+i).value == 0){
                    document.getElementById('c'+i).style.backgroundColor = "black"
                }
                else{
                    document.getElementById('c'+i).style.backgroundColor = "yellow"
                } 
            } //cond
            console.log('hi')
           a++;                    
           if (a < 10) {            
              myLoop();             
           }                        
        }, 2000)
     }
     
     myLoop();




// for(i=0; i< 110;i++){ 
//     if(cell[i]== 1 ){
//         if(cell[i + 1]==1 && cell[i + 10]){
//             cell[i] = 1
//         }
//         else if(cell[i - 1] == 1 && cell[i + 1]== 1){
//             cell[i] = 1
//         }
//         else if(cell[i - 1] == 1 && cell[i+ 10]){
//             cell[i] = 1
//         }
//         else if(cell[i + 1] == 1 && cell [i + 10]){
//             cell[i] = 1
//         }
//         else if(cell[i - 1] == 1 && cell[i + 10] == 10){
//             cell[i] = 1
//         }
//         else if(cell[i - 10]== 1 && cell[i + 1]==1){
//             cell[i] = 1
//         }
//         else if(cell[i + 10]== 1 && cell[i + 1]==1){
//             cell[i] = 1
//         }
//         else if(cell[i - 10]== 1 && cell[i + 10]==1){
//             cell[i] = 1
//         }
//         else if(cell[i - 10]== 1 && cell[i - 1]==1){
//             cell[i] = 1
//         }
//         else if(cell[i + 10]== 1 && cell[i - 1]==1){
//             cell[i] = 1
//         }
//         else if(cell[i - 1]== 1 && cell[i + 1]==1){
//             cell[i] = 1
//         }
//         else if(cell[i - 10]== 1 && cell[i - 1]==1){
//             cell[i] = 1
//         }
//         else if(cell[i + 10]== 1 && cell[i - 1]==1){
//             cell[i] = 1
//         }
//         else{
//             cell[i] = 0
//         }
//     }
//     if(document.getElementById('c'+i).value == 0){
//         document.getElementById('c'+i).style.backgroundColor = "black"
//     }
//     else{
//         document.getElementById('c'+i).style.backgroundColor = "yellow"
//     } 
// }


