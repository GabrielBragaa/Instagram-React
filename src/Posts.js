import { Post } from "./Post"

export default function Posts() {
    return (
        <div class="posts">
            <Post imagem_usuario="assets/img/meowed.svg" alt_usuario="meowed" nome_usuario="meowed"
                imagem_conteudo="assets/img/gato-telefone.svg" alt_conteudo="gato_telefone"
                imagem_curtidas="assets/img/respondeai.svg" alt_curtidas="respondeai" nome_curtidas="respondeai" numero_curtidas="101.523" />

            <Post imagem_usuario="assets/img/barked.svg" alt_usuario="barked" nome_usuario="barked"
                imagem_conteudo="assets/img/dog.svg" alt_conteudo="dog"
                imagem_curtidas="assets/img/adorable_animals.svg" alt_curtidas="adorable_animals" nome_curtidas="adorable_animals" numero_curtidas="99.154" />

            <Post imagem_usuario="assets/img/meowed.svg" alt_usuario="meowed" nome_usuario="meowed"
                imagem_conteudo="assets/img/gato-telefone.svg" alt_conteudo="gato-telefone"
                imagem_curtidas="assets/img/respondeai.svg" alt_curtidas="respondeai" nome_curtidas="respondeai" numero_curtidas="101.523" />
        </div>
    )
}