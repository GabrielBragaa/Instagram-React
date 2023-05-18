import { Post } from "./Post"


export default function Posts() {
    const posts = 
    [{img_user: "assets/img/meowed.svg", alt_user: "meowed", nome_user: "gato_telefone", 
     img_post: "assets/img/gato-telefone.svg", img_like: "assets/img/respondeai.svg", alt_like: "respondeai", nome_like: "respondeai", n_like: 101.523},
     {img_user: "assets/img/barked.svg", alt_user: "barked", nome_user: "barked", 
     img_post: "assets/img/dog.svg", img_like: "assets/img/adorable_animals.svg", alt_like: "adorable_animals", nome_like: "adorable_animals", n_like: 99.154},
     {img_user: "assets/img/meowed.svg", alt_user: "meowed", nome_user: "gato_telefone", 
     img_post: "assets/img/gato-telefone.svg", img_like: "assets/img/respondeai.svg", alt_like: "respondeai", nome_like: "respondeai", n_like: 101.523}]
    
     const [{img_user, alt_user, nome_user, img_post, img_like, alt_like, nome_like, n_like}] = posts;

    return (
        <div className="posts">
            {posts.map((post, i) => <Post key={i} imagem_usuario={img_user} alt_usuario={alt_user} nome_usuario={nome_user}
                imagem_conteudo={img_post}
                imagem_curtidas={img_like} alt_curtidas={alt_like} nome_curtidas={nome_like} numero_curtidas={n_like} />)}

        </div>
    )
}