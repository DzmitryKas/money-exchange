// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
nH = Math.floor (currency / 50);   
nQ = Math.floor ((currency - (50 * nH )) / 25);
nD = Math.floor ((currency - (50 * nH + 25 * nQ )) / 10);
nN = Math.floor ((currency - (50 * nH + 25 * nQ + 10 * nD )) / 5);
nP = Math.floor ((currency - (50 * nH + 25 * nQ + 10 * nD + 5 * nN )) / 1);

 let Exchanger = {   
 H : nH,  
 Q : nQ,
 D : nD,
 N : nN,
 P : nP,     
};

let ExchangerError = {
  error : "You are rich, my friend! We don't have so much coins for exchange"
}
if (Exchanger.H < 1 ) {
  delete Exchanger.H ;}

if (Exchanger.Q < 1 ) {
  delete Exchanger.Q ;}

if (Exchanger.D < 1 ) {
  delete Exchanger.D ;}

if (Exchanger.N < 1 ) {
  delete Exchanger.N ;}

if (Exchanger.P < 1 ) {
  delete Exchanger.P ;}


if (currency > 9999) {
return (ExchangerError);
}  
else { return (Exchanger) ; 
  
}
}

