export default function Sugestao(props) {
  const {imagem_usuario, alt_usuario, nome_usuario, razao_usuario} = props;  
  return (
        <div className="sugestao">
            <div className="usuario">
              <img src={imagem_usuario} alt={alt_usuario}/>
              <div className="texto">
                <div className="nome">{nome_usuario}</div>
                <div className="razao">{razao_usuario}</div>
              </div>
            </div>

            <div className="seguir">Seguir</div>
          </div>
    )
}