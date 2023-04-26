import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import Footer from './components/Footer';

function App() {

  const posicoes = [
    {
      nome:'Top-Laner'
    },
    {
      nome: 'JG'
    },
    {
      nome: 'MID-Laner'
    },
    {
      nome: 'Atirador'
    },
    {
      nome: 'Suporte'
    }
  ]

  const times = [
    {
      nome:'Challenger',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Grão-Mestre',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Mestre',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Diamante',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Platina',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Ouro',
      corPrimaria: '#FFD93D',
      corSecundaria: '#FFFBAC'
    },
    {
      nome: 'Prata',
      corPrimaria: '#A6D0DD',
      corSecundaria: '#ECF2FF'
    },
    {
      nome: 'Bronze',
      corPrimaria: '#9E6F21',
      corSecundaria: '#F6E6C2'
    },
    {
      nome: 'Ferro',
      corPrimaria: '#453C67',
      corSecundaria: '#FAF7F0'
    }
  ]

  const [jogadores, setJogadores] = useState([])

  const aoNovoJogadorAdicioando = (jogador) => {
    setJogadores([...jogadores, jogador])
  }
  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(rank => rank.nome)} 
      posicoes={posicoes.map(posicao => posicao.nome)}
      aoJogadorCadastrado={jogador => aoNovoJogadorAdicioando(jogador)}
      
      />

      {times.map(rank => <Time 
      key={rank.nome} 
      nome={rank.nome} 
      corPrimaria={rank.corPrimaria} 
      corSecundaria={rank.corSecundaria}
      jogadores={jogadores.filter(jogador => jogador.rank == rank.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
