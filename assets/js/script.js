// Création d'une variable rectangleSize se basant sur la hauteur de la div portant l'id rectangle
var rectangleSize = $('#rectangle').height();
// Vérification de la valeur initiale de rectangleSize
console.log(rectangleSize);
// Fonction pour augmenter la taille de la div rectangle
$('#increaseSize').click(function(){
  //Si la valeur de rectangleSize est supérieure ou égale à 100, alors on la réduit à 10, sinon on l'augmente de 10
  if (rectangleSize > 150) {
    $('#rectangle').css('height',rectangleSize = 10);
  } else {
    $('#rectangle').css('height',rectangleSize += 10);
  }
  // Vérification de la valeur de rectangleSize après activation
  console.log(rectangleSize);
});

// Fonction qui change la couleur de fond de la div #rectangle en vert
$('#changeToGreen').click(function(){
  $('#rectangle').removeClass('rainbow');
  $('#rectangle').css('background-color','green');
});

// Fonction qui remet la div #rectangle à sa couleur d'origine
$('#changeToVanilla').click(function(){
  $('#rectangle').removeClass('rainbow');
  $('#rectangle').css('background-color','rgba(255, 100, 10)');
});

// Fonction qui cache la div #rectangle
$('#hide').click(function(){
  $('#rectangle').hide();
});

// Fonction qui affiche la div #rectangle
$('#show').click(function(){
  $('#rectangle').show();
});

// Fonction qui change le background-color de la div #rectangle en effet arc-en-ciel
$('#rainbow').click(function(){
  $('#rectangle').addClass('rainbow');
});
