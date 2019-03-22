window.addEventListener("load", program1_code,false);
function program1_code()    {
    var ctx=canvas_example.getContext("2d");
    var w=canvas_example.width;
    var h=canvas_example.height;
    console.log(w)


    var M1=[7,3,5,1,2,9,4,8,6];
    var M2=[9,8,7,6,5,4,3,2,1];


    // function sort_stupid(M) {
    //     var i=0;
    //     while(i<M.length-1){
    //         if(M[i]>M[i+1]){
    //             var temp=M[i];
    //             M[i]=M[i+1];
    //             M[i+1]=temp;
    //             if (i>0) i--;
    //         }   else{
    //             i++;
    //         }
    //     }
    // }


    function sort_gnom(M) {
        var i=0;
        var b=0;
        while(i<M.length-1){
            if(M[i]>M[i+1]){
                var temp=M[i];
                M[i]=M[i+1];
                M[i+1]=temp;
                if (i>0) {
                    i--;
                }
            }   else{
                i=b+1;
                b=i;
            }
        }
    }




    sort_gnom(M2);
    console.log(M2);











}