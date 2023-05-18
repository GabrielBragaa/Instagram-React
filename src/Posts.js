import { Post } from "./Post"

export default function Posts() {
    const posts = 
    [{img_user: "assets/img/meowed.svg", alt_user: "meowed", nome_user: "gato_telefone", 
     img_post: "assets/img/gato-telefone.svg", img_like: "assets/img/respondeai.svg", alt_like: "respondeai", nome_like: "respondeai", n_like: 101.523},
     {img_user: "assets/img/barked.svg", alt_user: "barked", nome_user: "barked", 
     img_post: "assets/img/dog.svg", img_like: "assets/img/adorable_animals.svg", alt_like: "adorable_animals", nome_like: "adorable_animals", n_like: 99.154},
     {img_user: "assets/img/meowed.svg", alt_user: "meowed", nome_user: "gato_telefone", 
     img_post: "assets/img/gato-telefone.svg", img_like: "assets/img/respondeai.svg", alt_like: "respondeai", nome_like: "respondeai", n_like: 101.523}]
    
    return (
        <div class="posts">
            {posts.map(post => <Post imagem_usuario={post.img_user} alt_usuario={post.alt_user} nome_usuario={post.nome_user}
                imagem_conteudo={post.img_post}
                imagem_curtidas={post.img_like} alt_curtidas={post.alt_like} nome_curtidas={post.nome_like} numero_curtidas={post.n_like} />)}

        </div>
    )
}