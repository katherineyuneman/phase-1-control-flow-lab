function scuberGreetingForFeet(feet) {
  if (feet > 2500) {
    let message = "No can do.";
    console.log(message);
    return message;
  } else if (feet > 2000) {
    let message = "I will gladly take your thirty bucks.";
    console.log(message);
    return message;
  } else if (feet <= 400) {
    let message = "This one is on me!";
    console.log(message);
    return message;
  } else message = "I will gladly take your fifteen bucks."
  console.log(message);
  return message;

}
scuberGreetingForFeet(2600);
/*
const message = city = 'NYC' ? 'Ok, sounds good.' : 'No go.';
return message;


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
*/