function getGrade(val){
     if(val>=0 && val<=32) return "fail";
     if(val>=33 && val<=59) return "D";
     if(val>=60 && val<=69) return "C";
     if(val>=70 && val<=79) return "B";
     if(val>= 80 && val<= 89) return "A";
     if(val>= 90 && val<= 100) return "A+";
     return "invalid input";
}
console.log(getGrade(400))