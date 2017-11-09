let http = require("http");
let url = [process.argv[2],process.argv[3],process.argv[4]];
let strAll = [];
let cn = 0;

for(let i=0;i<3;i++){  
        http.get(url[i],function(resp){
            let str = '';
            resp.setEncoding('utf8');
            resp.on('data',function(data){
               str += data;
            });
            resp.on('error',function(err){
                console.log(err);
            });
            resp.on('end',function(){
            strAll[i] = str;
            cn++;
            if(cn >= 3){
                for(let j=0;j<3;j++){
                    console.log(strAll[j]); 
                }

            }
                
            });
        })
    
}