function scuberGreetingForFeet(feet) {
  if (feet > 2500) {
    let message = "No can do.";
    return message;
  } else if (feet > 2000) {
    let message = "I will gladly take your thirty bucks.";
    return message;
  } else if (feet <= 400) {
    let message = "This one is on me!";
    return message;
  } else message = "I will gladly take your fifteen bucks."
}
scuberGreetingForFeet(2600);

function ternaryCheckCity(city){
const message = city = 'NYC' ? 'Ok, sounds good.' : 'No go.';
return message;
}
ternaryCheckCity('NYC');


let tiptype;
function switchOnCharmFromTip(tiptype){
  switch (tiptype) {
    case 'generous':
        let message = "Thank you so much.";
        return message;
    case 'not as generous':
        message = "Thank you.";
        return message;
    default:
        return message="Bye.";
}};
switchOnCharmFromTip('generous')