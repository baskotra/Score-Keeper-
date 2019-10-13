var p1 = document.getElementById("playerOne")
var p2 = document.querySelector("#playerTwo")
var reset = document.querySelector("#reset")
var p1score = document.querySelector("#firstScore")
var p2score = document.querySelector("#secondScore")
var limit = document.querySelector("#playLimit")
var numInput = document.querySelector("#input")
var score1=0
var score2=0
var isGameOver = false
var winningScore = 5

p1.addEventListener("click", function(){
	if(!isGameOver){
		score1++
		p1score.textContent = score1
		if(score1==winningScore){
			p1score.classList.add('winner') 		//Adding CSS class
			isGameOver = true
		}
	}
})

p2.addEventListener("click", function(){
	if(!isGameOver){
		score2++
		p2score.textContent = score2
		if(score2==winningScore){
			p2score.classList.add('winner')
			isGameOver = true
		}
	}
})

reset.addEventListener("click", function(){
	if(score1 == winningScore){
		p1score.classList.remove('winner')
	}
	if(score2 == winningScore){
		p2score.classList.remove('winner')
	}
	score1 = 0
	score2 = 0
	p1score.textContent = score1
	p2score.textContent = score2
	winningScore = 5 				//Default Score is 5
	limit.textContent = winningScore
	isGameOver = false

})

numInput.addEventListener("change", function(){
	limit.textContent = numInput.value
	winningScore = numInput.value
	if(numInput.value<0){
		alert("Dont Decrease the value!")
		limit.textContent = 5 			//Default
		winningScore = 5
	}
})





