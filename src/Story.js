export default function Story(props) {
  const {imagem_story, alt_story, usuario_story} = props;
  
  return (
        <div className="story">
            <div className="imagem">
              <img src={imagem_story} alt={alt_story}/>
            </div>
            <div className="usuario">{usuario_story}</div>
          </div>
    )
}