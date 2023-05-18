import User from "./User"
import Sugestoes from "./Suggestions"

export default function Sidebar() {
    return (
    <div className="sidebar">
        <User imagem_usuario="assets/img/catanacomics.svg" alt_usuario="imagem de perfil" nome_usuario="catanacomics"/>
        <Sugestoes/>
        <div className="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
          Hashtags • Idioma
        </div>

        <div className="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}