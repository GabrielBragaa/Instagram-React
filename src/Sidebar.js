import User from "./User"
import Sugestoes from "./Suggestions"

export default function Sidebar() {
    return (
    <div class="sidebar">
        <User imagem_usuario="assets/img/catanacomics.svg" alt_usuario="imagem de perfil" nome_usuario="catanacomics"/>
        <Sugestoes/>
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}