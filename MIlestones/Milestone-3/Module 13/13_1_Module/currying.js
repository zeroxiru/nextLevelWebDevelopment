function currying1(a) { 
    return function currying2(b){ 
        return function currying3(c){
            return a + b + c;
        }
    }
}
console.log(currying1(1) (2) (3));