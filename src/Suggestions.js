import Sugestao from "./Suggestion"
import bvm from './assets/img/bad.vibes.memes.svg'
import chibi from "./assets/img/chibirdart.svg"
import razoes from "./assets/img/razoesparaacreditar.svg"
import adorable from "./assets/img/adorable_animals.svg"
import cutecats from "./assets/img/smallcutecats.svg"

export default function Sugestoes() {
    const sugestoes = 
    [{imagem: bvm, alt: "bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
     {imagem: chibi, alt: "razoesparaacreditar", nome: "chibirdart", razao: "Segue você"},
     {imagem: razoes, alt: "chibirdart", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
     {imagem: adorable, alt: "adorable_animals", nome: "adorable_animals", razao: "Segue você"},
     {imagem: cutecats, alt: "smallcutecats", nome: "smallcutecats", razao: "Segue você"}]

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sug, i) => <Sugestao key={i} imagem_usuario={sug.imagem} alt_usuario={sug.alt}
                nome_usuario={sug.nome} razao_usuario={sug.razao} />)}
        </div>

    )
}