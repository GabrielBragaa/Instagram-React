export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
              <img src={props.imagem_story} alt={props.alt_story}/>
            </div>
            <div class="usuario">{props.usuario_story}</div>
          </div>
    )
}