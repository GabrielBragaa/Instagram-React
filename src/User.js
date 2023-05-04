export default function User(props) {
    return (
        <div class="usuario">
          <img src={props.imagem-usuario} alt={props.alt-usuario}/>
          <div class="texto">
            <span>
              <strong>{props.nome-usuario}</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </div>
    )
}