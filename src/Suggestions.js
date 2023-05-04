import Sugestao from "./Suggestion"

export default function Sugestoes() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao imagem_usuario="assets/img/bad.vibes.memes.svg" alt_usuario="bad.vibes.memes.svg"
                nome_usuario="bad.vibes.memes" razao_usuario="Segue você" />

            <Sugestao imagem_usuario="assets/img/chibirdart.svg" alt_usuario="razoesparaacreditar"
                nome_usuario="chibirdart" razao_usuario="Segue você" />

            <Sugestao imagem_usuario="assets/img/razoesparaacreditar.svg" alt_usuario="chibirdart"
                nome_usuario="razoesparaacreditar" razao_usuario="Novo no Instagram" />

            <Sugestao imagem_usuario="assets/img/adorable_animals.svg" alt_usuario="adorable_animals"
                nome_usuario="adorable_animals" razao_usuario="Segue você" />

            <Sugestao imagem_usuario="assets/img/smallcutecats.svg" alt_usuario="smallcutecats"
                nome_usuario="smallcutecats" razao_usuario="Segue você" />
        </div>

    )
}