//.Fonctionnalité 1 : click footer,incrementation du clic
let nbc = 0
let foot = document.getElementsByTagName("footer")[0]
foot.addEventListener("click", function(){ 
nbc += 1;
alert(`click ${nbc}`)

})

//Fonctionnalité 2 

let hamburger = document.getElementById("navbarHeader")
let ham = document.querySelectorAll(".navbar-toggler")[0]
ham.addEventListener("click",function(){

	hamburger.classList.toggle("collapse") 
})

//Fonctionnalité 3 : changement de couleur de texte

let card1 = document.getElementsByClassName("card-text")[0]

let edit = document.getElementsByClassName("btn btn-outline-secondary")[0]
edit.addEventListener("click",function(){
	card1.style.color = "red"
})

//Fonctionnalité 4: green black
let card2 = document.getElementsByClassName("card-text")[1]

let edit1 = document.getElementsByClassName("btn btn-outline-secondary")[1]
edit1.addEventListener("click",function(){
	if (card2.style.color == "green"){
		card2.style.color = "black"

	}
	else{card2.style.color = 'green'}

})

//Fonctionnalité 5:desactiver bootstrap

let ratsy = document.getElementsByTagName("header")[0]
let bot = document.getElementsByTagName("link")[0]
ratsy.addEventListener("dblclick",function(){
	if (bot.disabled === false){
bot.disabled=true;
}
else {bot.disabled =false;
}})

// Fonctionnalité 6 : Changement de taille de texte et image

let card = document.getElementsByClassName("card")
for (var i = 0; i < card.length; i++) {
let manala = document.getElementsByClassName("card-text")[i]
let mandalo = document.getElementsByClassName("btn btn-success")[i]
let img = document.getElementsByClassName("card-img-top")[i]
mandalo.addEventListener("click",function(){
	manala.classList.toggle("collapse")
	if (img.style.width == "20%"){
		img.style.width = "100%"
	}
	else{img.style.width = "20%"}
})
}

//Fonctionnalité 7: Deplacement des cartes, la dernière du bas gauche vers la première du haut droite
let btngris = document.getElementsByClassName("btn btn-secondary")[0]
let parent = document.getElementsByClassName("row")[1]
let enfant = document.getElementsByClassName("col-md-4")
btngris.addEventListener("click",function(){
parent.insertBefore(enfant[enfant.length-1],enfant[0])	// alefany any @ voalohany ilay carte farany rehefa m'click anle bout gris
})

// Fonctionnalité 8 : Deplacement des à l'inverse

let btnblue = document.getElementsByClassName("btn btn-primary")[0]
btnblue.addEventListener("click",function(){
	parent.appendChild(enfant[0])// alefany any amin'ny place farany amle carte le carte voalohany rehefa m'click anle bouton bleu
	btnblue.href = "#"
})


//Fonctionnalité 9: changement à partir du clavier

let selection = document.getElementsByTagName("strong")[0]
let corp = document.body

selection.addEventListener("click",function(){
	document.addEventListener("keypress",function(touche){
		if(touche.which == 97){ // on appui sur a du clavier et le <body> du page devient 4 colonne à gauche
		corp.classList.add("col-4")// manampy class col-4 ao am <body> @ alalan'ny .add
		}
		else if (touche.which == 121){// appuyer sur y du clavier et le <body> du page devient 4 colonne au milieu
		corp.classList.add("col-4","offset-md-4")
		}
		else if (touche.which == 112){// appuyer sur p du clavier et le <body> du page devient 4 colonne à droite
		corp.classList.add("col-4","offset-md-8")
		}
		else if(touche.which == 98){// appuyer sur b du clavier et le <body> du page devient normal
		corp.setAttribute("class","")
		}
		})
})