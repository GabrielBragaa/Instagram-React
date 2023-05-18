import Sugestao from "./Suggestion"

export default function Sugestoes() {
    const sugestoes = 
    [{imagem: "assets/img/bad.vibes.memes.svg", alt: "bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você"},
     {imagem: "assets/img/chibirdart.svg", alt: "razoesparaacreditar", nome: "chibirdart", razao: "Segue você"},
     {imagem: "assets/img/razoesparaacreditar.svg", alt: "chibirdart", nome: "razoesparaacreditar", razao: "Novo no Instagram"},
     {imagem: "assets/img/adorable_animals.svg", alt: "adorable_animals", nome: "adorable_animals", razao: "Segue você"},
     {imagem: "assets/img/smallcutecats.svg", alt: "smallcutecats", nome: "smallcutecats", razao: "Segue você"}]
    
    const [{imagem, alt, nome, razao}] = sugestoes;
    

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestoes.map((sugestao, i) => <Sugestao key={i} imagem_usuario={imagem} alt_usuario={alt}
                nome_usuario={nome} razao_usuario={razao} />)}
        </div>

    )
}