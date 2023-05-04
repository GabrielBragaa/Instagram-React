import { Post } from "./Post"

export default function Posts() {
    return (
        <div class="posts">
          <Post imagem-usuario="public/assets/img/meowed.svg" alt-usuario="meowed" nome-usuario="meowed" 
          imagem-conteudo="public/assets/img/gato-telefone.svg" alt-conteudo="gato-telefone"
          imagem-curtidas="public/assets/img/respondeai.svg" alt-curtidas="respondeai" nome-curtidas="respondeai" numero-curtidas="101.523"/>
        </div>
    )
}