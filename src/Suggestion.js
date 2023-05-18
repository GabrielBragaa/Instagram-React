export default function Sugestao(props) {
  const {imagem_usuario, alt_usuario, nome_usuario, razao_usuario} = props;  
  return (
        <div class="sugestao">
            <div class="usuario">
              <img src={imagem_usuario} alt={alt_usuario}/>
              <div class="texto">
                <div class="nome">{nome_usuario}</div>
                <div class="razao">{razao_usuario}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
    )
}