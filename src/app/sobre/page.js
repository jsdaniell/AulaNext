"use client"

import { useState } from "react"

export default function Sobre() {

    const [meusNomes, setMeusNomes] = useState(["juliana", "jubileu", "jorge", "natanael"])

    const [meuCampoDeTexto, setMeuCampoDeTexto] = useState("")

    return <div className="flex flex-col gap-8 justify-center items-center min-h-screen bg-white text-black">
         <input value={meuCampoDeTexto} onChange={(e) => {
            setMeuCampoDeTexto(e.target.value)
         }} className="text-center" placeholder="Coloque um nome" />
         <button onClick={() => {
            const novaLista = [...meusNomes, meuCampoDeTexto]

            setMeusNomes(novaLista)
            setMeuCampoDeTexto("")
         }} className="bg-indigo-500 p-2 rounded text-white">
            Registrar
         </button>
        <ul>
            {meusNomes.map((nome, idx) => {
                return <li onClick={() => {
                   const novaLista = 
                    meusNomes.filter((cadaItem, idxFilter) => idxFilter !== idx)

                    setMeusNomes(novaLista)
                }} key={idx}>{nome}</li>
            })}
        </ul>
    </div>
}