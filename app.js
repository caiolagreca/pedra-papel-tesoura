const jogar = () => {
  let pontosJogador = 0;
  let pontosComputador = 0;

  const iniciarJogo = () => {
      let botaoVamosJogar = document.querySelector('.intro button');
      let telaIntro = document.querySelector('.intro');
      let telaPartida = document.querySelector('.partida');
      botaoVamosJogar.addEventListener('click', () => {
          telaIntro.classList.add('desaparece');
          telaPartida.classList.add('aparece');
      });
  };

  const jogarPartida = () => {
      const opcoesBotoes = document.querySelectorAll('.opcoes button');
      const maoJogador = document.querySelector('.mao__jogador');
      const maoComputador = document.querySelector('.mao__computador');  

			const maos = document.querySelectorAll('.maos img');

			maos.forEach(mao => {
				mao.addEventListener('animationend', function () {
					this.style.animation = "";
				});
			});

			const opcoesComputador = ['pedra', 'papel', 'tesoura'];

			opcoesBotoes.forEach((opcao) => {
				opcao.addEventListener('click', function () {
					const numeroComputador = Math.floor(Math.random()*3);
					const escolhaComputador = opcoesComputador[numeroComputador];

					setTimeout(()=>{
						compararEscolhas(this.textContent, escolhaComputador);

						maoJogador.src =`assets/${this.textContent}.png`;
						maoComputador.src =`assets/${escolhaComputador}.png`;
					}, 1000);
					
					maoJogador.style.animation = 'mexeMaoJogador 1s ease';
					maoComputador.style.animation = 'mexeMaoComputador 1s ease';
				});
			});
  };

	const atualizarPlacar = () => {
		const placarJogador = document.querySelector('.placar__jogador p');
		const placarComputador = document.querySelector('.placar__computador p');

		placarJogador.textContent = pontosJogador;
		placarComputador.textContent = pontosComputador;
	}

	const compararEscolhas = (escolhaJogador, escolhaComputador) => {
		const vencedor = document.querySelector('.vencedor');

		if (escolhaJogador === escolhaComputador) {
			vencedor.textContent = 'Deu Empate!';
			return;
		}

		if (escolhaJogador == 'pedra'){
			if (escolhaComputador == 'papel'){
				vencedor.textContent = 'O PC venceu!';
				pontosComputador++;
				atualizarPlacar();
				return;
			} else{
				vencedor.textContent = 'O Jogador venceu!';
				pontosJogador++;
				atualizarPlacar();
				return;
			};
		};

		if (escolhaJogador == 'papel'){
			if (escolhaComputador == 'tesoura'){
				vencedor.textContent = 'O PC venceu!';
				pontosComputador++;
				atualizarPlacar();
				return;
			} else{
				vencedor.textContent = 'O Jogador venceu!';
				pontosJogador++;
				atualizarPlacar();
				return;
			};
		};

		if (escolhaJogador == 'tesoura'){
			if (escolhaComputador == 'pedra'){
				vencedor.textContent = 'O PC venceu!';
				pontosComputador++;
				atualizarPlacar();
				return;
			} else{
				vencedor.textContent = 'O Jogador venceu!';
				pontosJogador++;
				atualizarPlacar();
				return;
			};
		};
	};
  
  iniciarJogo();
	jogarPartida();
};

jogar();