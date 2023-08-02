/* const score = {
		wins: 0,
		losses: 0,
		ties: 0
		};
		 
		console.log(localStorage.getItem('name'));*/
		
		const score = JSON.parse(localStorage.getItem('score')) ||{
		wins: 0,
		losses: 0,
		ties: 0
		};
	
		updataScoreElement ();
		
		let isAutoPlaying = false;
		let intervalId;
			
		function  autoPlay(){
		
			if(!isAutoPlaying){
				intervalId = setInterval (
			
			function(){
				const PlayerMouve = pickComputerMouve();
				playGame(PlayerMouve);
			}
			,1000);
			document.querySelector('.js-autoPlay-button')
				.innerHTML = 'Stop Playing'
			isAutoPlaying = true;
			
			}else{
				clearInterval(intervalId); // to stop interval
				isAutoPlaying = true;
				document.querySelector('.js-autoPlay-button')
					.innerHTML = 'Auto Play';
			}
		}
				/* if we dont playing we need to start
				// save return value from setInterval into intervalId
				intervalID = setInterval(function(){
				// setInterval returns number. 
				//to stop we use function clearInterval(ID)
				const PlayerMouve = pickComputerMouve();
				//PlayerMouve is random automatic mouve
				//becouse of that = pickComputerMouve - random-mouve				
				//cpu play whit themsef
				platGame(PlayerMouve);
				we need to provide PlayerMouve
			*/
		const rockButtonElement = document.querySelector('.js-rock-button');
		rockButtonElement.addEventListener('click',()=>{
			playGame('rock');
		});
		const paperButtonElement = document.querySelector('.js-paper-button')
		paperButtonElement.addEventListener('click',()=>{
			playGame('paper');
		});
		const scissorsButtonElement = document.querySelector('.js-scissors-button');
		scissorsButtonElement.addEventListener('click',()=>{
			playGame('scissors');
		});
		const resetButtonElement = document.querySelector('.js-reset-button');
		resetButtonElement.addEventListener('click',()=>{
			
		showResetConfirmation ();
		
		});
		const autoPlayButtonElement = document.querySelector('.js-autoPlay-button');
		autoPlayButtonElement.addEventListener('click',()=>{
			 autoPlay();
		});
		document.body.addEventListener('keydown',(event)=>{
			
			if(event.key === 'r'){
				playGame('rock');
			}else if(event.key ==='p'){
				playGame('paper');
				
			}else if(event.key === 's'){
				playGame('scissors');
			}else if(event.key === 'a'){
				autoPlay();
			}else if(event.key === 'Backspace'){
				showResetConfirmation ();
			}
			else if(event.key === 'y'){
				resetScore();
			}
			else if(event.key === 'n'){
				hideResetConfirmation();
			}
		});
		
		document.querySelector('.js-reset-button')
			.addEventListener('click',()=>{
				showResetConfirmation ();
			})
		
		
		// Function for showing the confirmation message.
		
		function showResetConfirmation (){
			
		document.querySelector('.js-reset-confirmation')
			.innerHTML = 
				
				`Are you shure you want to reset the score?
				<button class="js-reset-confirm-yes">Yes</button>
				<button class="js-reset-confirm-no">No</button>
				`;	
				
				// You could use onclick="..." in the HTML above,
				// but it's recommended to use .addEventListener()
				
				const resetYes = document.querySelector('.js-reset-confirm-yes');
				resetYes.addEventListener('click',()=>{
				resetScore();
				hideResetConfirmation();
				});
				
				document.querySelector('.js-reset-confirm-no')
					.addEventListener('click',()=>{
						hideResetConfirmation();
					});
		}
			// A helper function (it helps us reuse the
			// code for hiding the confirmation message).
			
			function hideResetConfirmation(){
				document.querySelector('.js-reset-confirmation')
					.innerHTML = '';
				
			}	
		
		 function playGame (PlayerMouve){ 
		 
			const computerMouve = pickComputerMouve(); 
			
			let result = '';
			
				if(PlayerMouve ==='scissors'){
				
					if(computerMouve==='rock'){
					result ='You lose.';
					}
					else if (computerMouve==='paper'){
					result ='You win.';
					}
					else if(computerMouve==='scissors'){
					result ='Tie.';
					}
						}else if (PlayerMouve === 'paper'){
						
							if(computerMouve==='rock'){
							result ='You win.';
							}
							else if (computerMouve==='paper'){
							result ='Tie.';
							}
							else if(computerMouve==='scissors'){
							result ='You lose.';
							}
						}else if (PlayerMouve === 'rock'){
					
							if(computerMouve === 'rock'){
							result = 'Tie.';
							}
							else if(computerMouve=== 'paper'){
							result = 'You lose.';
							}
							else if (computerMouve === 'scissors'){
							result = 'You win.';
							}									
						}

				if (result === 'You win.'){
				score.wins = score.wins + 1;
				}else if (result === 'You lose.'){
				score.losses = score.losses + 1;
				}else if (result === 'Tie.'){
				score.ties = score.ties + 1;
				}
				
				//localStorage.setItem('name','value');
				
				localStorage.setItem('score',JSON.stringify(score));
			
			updataScoreElement ();
			
			document.querySelector ('.js-result')
				.innerHTML = `Result is: ${result}`
			document.querySelector('.js-moves')
				.innerHTML = `
					You
					<img src="images/${PlayerMouve}-emoji.png" class="move-icon">
					<img src="images/${computerMouve}-emoji.png" class="move-icon">
					Computer`
				
			
		/*alert(`You picked ${PlayerMouve}. Computer picked ${computerMouve}. ${result}
		Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/
				}
		
		function updataScoreElement (){
		document.querySelector('.js-score')
			.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
		
		}
		
		function pickComputerMouve (){
		
			let computerMouve = ''; 

			const randomNumber = Math.random();

				if (randomNumber >= 0 && randomNumber <= 1 / 3){
				 computerMouve ='rock';
				}
				else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3){
				 computerMouve ='paper';
				}
				else if (randomNumber >= 2 / 3 && randomNumber <= 1){
				 computerMouve ='scissors';
				}
			return computerMouve;
			}
		function resetScore(){
		score.wins = 0;
		score.losses = 0;
		score.ties = 0;
		localStorage.removeItem('score');
		updataScoreElement ();
		}

				
		