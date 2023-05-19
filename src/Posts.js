import { Post } from "./Post"
import userMeowed from './assets/img/meowed.svg';
import gatoTelefone from './assets/img/gato-telefone.svg'
import respondeAi from './assets/img/respondeai.svg';
import userBarked from './assets/img/barked.svg';
import dog from './assets/img/dog.svg';
import adorableAnimals from './assets/img/adorable_animals.svg';

export default function Posts() {
    const posts = 
    [{img_user: userMeowed, alt_user: "meowed", nome_user: "meowed", 
     img_post: gatoTelefone, img_like: respondeAi, alt_like: "respondeai", nome_like: "respondeai", n_like: 101.523},
     {img_user: userBarked, alt_user: "barked", nome_user: "barked", 
     img_post: dog, img_like: adorableAnimals, alt_like: "adorable_animals", nome_like: "adorable_animals", n_like: 99.154},
     {img_user: userMeowed, alt_user: "meowed", nome_user: "meowed", 
     img_post: gatoTelefone, img_like: respondeAi, alt_like: "respondeai", nome_like: "respondeai", n_like: 11.322}]

    return (
        <div className="posts">
            {posts.map((post, i) => <Post key={i} imagem_usuario={post.img_user} alt_usuario={post.alt_user} nome_usuario={post.nome_user}
                imagem_conteudo={post.img_post}
                imagem_curtidas={post.img_like} alt_curtidas={post.alt_like} nome_curtidas={post.nome_like} n_curtidas={post.n_like} />)}

        </div>
    )
}