function truncate(str, length) {
    if(str.length > length){
        let modifyStr = str.slice(0,length-1) + '...'
        return modifyStr;
    }else return str;
}

console.log(truncate("Hello my friend",5))
console.log(truncate("Hello my friend",8))