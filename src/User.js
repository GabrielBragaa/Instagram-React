export default function User(props) {
    return (
        <div class="usuario">
          <img src={props.imagem_usuario} alt={props.alt_usuario}/>
          <div class="texto">
            <span>
              <strong>{props.nome_usuario}</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}