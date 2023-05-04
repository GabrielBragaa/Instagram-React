import Sugestao from "./Suggestion"

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao imagem-usuario="public/assets/img/bad.vibes.memes.svg" alt-usuario="bad.vibes.memes.svg"
                nome-usuario="bad.vibes.memes" razao-usuario="Segue você" />

            <Sugestao imagem-usuario="public/assets/img/chibirdart.svg" alt-usuario="razoesparaacreditar"
                nome-usuario="chibirdart" razao-usuario="Segue você" />

            <Sugestao imagem-usuario="public/assets/img/razoesparaacreditar.svg" alt-usuario="chibirdart"
                nome-usuario="razoesparaacreditar" razao-usuario="Novo no Instagram" />

            <Sugestao imagem-usuario="public/assets/img/adorable_animals.svg" alt-usuario="adorable_animals"
                nome-usuario="adorable_animals" razao-usuario="Segue você" />

            <Sugestao imagem-usuario="public/assets/img/smallcutecats.svg" alt-usuario="smallcutecats"
                nome-usuario="smallcutecats" razao-usuario="Segue você" />
        </div>

    )
}