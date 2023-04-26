import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [lane, setLane] = useState('')
    const [imagem, setImagem] = useState('')
    const [rank, setRank] = useState('')

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            lane,
            imagem,
            rank
        })
        setNome('')
        setLane('')
        setImagem('')
        setRank('')
    }


    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do jogador.</h2>
                <CampoTexto 
                obrigatorio={true} 
                label="Nome" 
                placeholder="Digite o seu nick de usuario" 
                valor={nome}
                aoAlterado={valor => setNome(valor)}
                />
                <ListaSuspensa
                obrigatorio={true} 
                label="Lane" 
                placeholder="Digite a sua Lane no LoL"
                itens={props.posicoes}
                valor={lane}
                aoAlterado={valor => setLane(valor)}
                />
                <CampoTexto 
                label="Imagem (Só funciona com links .jpg, png)" 
                placeholder="Digite o endereço de imagem" 
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                obrigatorio={true} 
                label="Rank" 
                placeholder="Informe o seu rank no LoL" 
                itens={props.times}
                valor={rank}
                aoAlterado={valor => setRank(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario