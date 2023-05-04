import User from "./User"
import Sugestoes from "./Suggestions"

export default function Sidebar() {
    return (
    <div class="sidebar">
        <User imagem-usuario="public/assets/img/catanacomics.svg" alt-usuario="imagem de perfil" nome-usuario="catanacomics"/>
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