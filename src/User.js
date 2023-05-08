import { useState } from "react"

export default function User(props) {
  let [nome, setNome] = useState('Usuário');  
  let [img, setImg] = useState('');
  return (
        <div class="usuario">
          <img src={img} alt={props.alt_usuario} onClick={function () {
            img = prompt('Digite o link da imagem de perfil')
            if (img !== undefined && img !== null && img !== '') {
                  setImg(img)
                };
          }} data-test="profile-image"/>
          <div class="texto">
            <span>
              <strong data-test="name">{nome}</strong>
              <ion-icon name="pencil" onClick={function () {
                nome = prompt('Qual o nome de usuário?');
                if (nome !== undefined && nome !== null && nome !== '') {
                  setNome(nome)
                };
              }} data-test="edit-name"></ion-icon>
            </span>
          </div>
        </div>
    )
}