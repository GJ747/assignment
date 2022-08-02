const request = require('request');


function getGoogleHomePage(finalCallBack){

    request('http://www.google.com', function (error, response, body) {

        console.error('error:', error); // Print the error if one occurred
        finalCallBack(error);
        console.log('statusCode:', response && response.statusCode); 
        console.log('body:', body); // Print the HTML for the Google homepage.
        finalCallBack(null,body);
        
    });
    };

function promsiify(fun){
    return function(){
        return new Promise((reslove,reject)=>{
            try{
                fun(reslove)
            } catch(error){
                reject(error)
            }
        });
    }
}

const promsiified = promsiify(getGoogleHomePage)

promsiified().then(res=>console.log('RESULT==>',res))


