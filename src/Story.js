export default function Story(props) {
  const {imagem_story, alt_story, usuario_story} = props;
  
  return (
        <div class="story">
            <div class="imagem">
              <img src={imagem_story} alt={alt_story}/>
            </div>
            <div class="usuario">{usuario_story}</div>
          </div>
    )
}