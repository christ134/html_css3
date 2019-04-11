function add()
            {
            // console.log("information submitted successfully");
            var w=parseInt(document.getElementById("no1").value);
            
            var x=parseInt(document.getElementById("no2").value);
           var z=w+x;
            console.log(z);
            document.getElementById("result").innerHTML=z;
           
             }
             function substract()
            {
            // console.log("information submitted successfully");
            var w=parseInt(document.getElementById("no1").value);
            
            var x=parseInt(document.getElementById("no2").value);
           var z=w-x;
            console.log(z);
            document.getElementById("result").innerHTML=z;
           
             }function divide()
            {
            // console.log("information submitted successfully");
            var w=parseInt(document.getElementById("no1").value);
            
            var x=parseInt(document.getElementById("no2").value);
           var z=w/x;
            console.log(z);
            document.getElementById("result").innerHTML=z;
           
             }function multiply()
            {
            // console.log("information submitted successfully");
            var w=parseInt(document.getElementById("no1").value);
            
            var x=parseInt(document.getElementById("no2").value);
           var z=w*x;
            console.log(z);
            // alert(z);
            document.getElementById("result").innerHTML="<b>"z"</b>";
           
             }


