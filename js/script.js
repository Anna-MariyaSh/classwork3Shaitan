let nomber = 10;
let user = confirm("Хочешь ли ты сыграть в игру");
if(user===true) {
  let userNomber = +prompt("Укажы число");
  if(!isNaN(userNomber)&&(userNomber===nomber)) {
    alert("Вы выиграли");
  } else if (!isNaN(userNomber)&&(userNomber!==nomber)){
    alert("Не правильное чисто");
  } else if (isNaN(userNomber)) {
    alert("Это не число");
  }
} else {
  alert("А зря");
}
