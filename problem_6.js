const array = // array of 1-100 with missing one number //

const findMissing = () =>{
    array.sort()
    for(x=1;x<=array.length;x++){
        if(x!==array[x-1]){
            console.log('missing number is ',x)
            break;
        }
    }

}

findMissing()