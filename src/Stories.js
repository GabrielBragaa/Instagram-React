export default function Stories(props) {
    return (
        <div class="stories">
          <div class="story">
            <div class="imagem">
              <img src={props.imagem} alt={props.alt}/>
            </div>
            <div class="usuario">{props.usuario}</div>
          </div>
          
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

    )
}