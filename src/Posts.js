import { Post } from "./Post"

export default function Posts() {
    return (
        <div class="posts">
            <Post imagem-usuario="public/assets/img/meowed.svg" alt-usuario="meowed" nome-usuario="meowed"
                imagem-conteudo="public/assets/img/gato-telefone.svg" alt-conteudo="gato-telefone"
                imagem-curtidas="public/assets/img/respondeai.svg" alt-curtidas="respondeai" nome-curtidas="respondeai" numero-curtidas="101.523" />

            <Post imagem-usuario="public/assets/img/barked.svg" alt-usuario="barked" nome-usuario="barked"
                imagem-conteudo="public/assets/img/dog.svg" alt-conteudo="dog"
                imagem-curtidas="public/assets/img/adorable_animals.svg" alt-curtidas="adorable_animals" nome-curtidas="adorable_animals" numero-curtidas="99.159" />

            <Post imagem-usuario="public/assets/img/meowed.svg" alt-usuario="meowed" nome-usuario="meowed"
                imagem-conteudo="public/assets/img/gato-telefone.svg" alt-conteudo="gato-telefone"
                imagem-curtidas="public/assets/img/respondeai.svg" alt-curtidas="respondeai" nome-curtidas="respondeai" numero-curtidas="101.523" />
        </div>
    )
}