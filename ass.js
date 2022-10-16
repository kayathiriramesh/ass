var N=userInput[0];
 var arr=userInput[1].split(" ");
 var count=0;
 var max=0;
 var temp;
 var temp1=[];
    for(var i=0;i< N-1;i++)
    {
    for(var j=0;j< N-1;j++) 
    {
     if(arr[i]==arr[j])
         { 
             count=count+1;
             if(max<count)
             { 
                 max=count;
                temp=arr[i];
             } 
             
         }
        
    } 
    if(max==1)
    {
        temp1.push(temp);
    }
    count=0;
    max=0;
    
    }
    
     console.log(temp1[2]);       