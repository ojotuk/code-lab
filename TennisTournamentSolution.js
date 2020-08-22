

function solution(P, C) {
    //Provide Your solution here 
    if (P<1 || C<1){
        return 0;
    }else if (P>(2*C)){
        return C;
    } else if((2*P)<C){
        return P/2
    } else if(P==C){
        return P/2;
    }else if (P<C && (2*P)>=C){
        return Math.floor(P/2)
    }

}

module.exports = solution;