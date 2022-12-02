import React, { useState } from 'react';
import styled from 'styled-components';

export interface AbGrupoOpcoes {
    id: number;
    titulo: string;
    corpo: string;
    rodape: string;
}

export interface AbGrupoOpcoesProps {
    opcoes: AbGrupoOpcoes[];
    valorPadrao?: AbGrupoOpcoes | null;
    onChange?: (opcao: AbGrupoOpcoes)=> void;
}

const SectionEstilizada = styled.section<{selecionado: boolean}>`
    width: 194px;
    height: 88px;
    background: ${ props => props.selecionado ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' : '#FFFFFF'};
    border: 1px solid;
    border-color: ${borda => borda.selecionado ? '#002F52' : '#EB9B00'};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    margin: 10px;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    cursor: pointer;
    header {        
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
        color: ${fonte => fonte.selecionado ? '#FFF': '#EB9B00'};
        
    }
    strong {
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: center;
        color: ${fonte => fonte.selecionado ? '#FFF': '#EB9B00'};


    }
    footer {
        font-family: Poppins;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: center;
        color: ${fonte => fonte.selecionado ? '#FFF': 'rgba(0, 0, 0, 0.54)'};


    }

`

export const AbGrupoOpcoes = ({opcoes, onChange, valorPadrao} : AbGrupoOpcoesProps) =>  {
    const [selecao, setSelecao] = useState <AbGrupoOpcoes | null>(valorPadrao ?? null)
    const aoSelecionar = (opcao: AbGrupoOpcoes): void => {
        setSelecao(opcao);
        if (onChange){
            onChange(opcao)
        }
    }

    return (
        <>
            {opcoes.map(opcao => 
                <SectionEstilizada onClick={() => aoSelecionar(opcao)} key={opcao.id} selecionado = { selecao?.id ===  opcao.id}>
                    <header>
                        {opcao.titulo}
                    </header>
                    <div>
                        <strong>{opcao.corpo}</strong> 
                    </div>
                    <footer>
                        {opcao.rodape}
                    </footer>
                </SectionEstilizada>    
            )}         
        </>
    )
}