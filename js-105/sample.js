
   document.getElementById("demo").innerText="Welcome to js session";

//     let sum=x+y;
//     document.getElementById("demo").innerText=x;
//     document.getElementById("demo").innerText=y;
//    document.getElementById("demo").innerText="sum="+sum+"\n"+(x-y)+"\n"+(x*y);
 
    //  if(x>y)
    //  {
    //      document.getElementById("demo").innerText="X is bigger than y";
    //  }
    //  else{
    //      document.getElementById("demo").innerText="X is Smaller than y";
    //  }
    let x;
    x=prompt("enter x value:");
    let num=parseInt(x);

      if(x>0)
     {
         document.getElementById("demo").innerText=num+ "is positive";
     }
     else if(x<0)
     {
         document.getElementById("demo").innerText=num+ "is negative";
     }
     else
     {
        document.getElementById("demo").innerText=num+ "is zero";
     }
 