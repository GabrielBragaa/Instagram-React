export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
              <img src={props.imagem_usuario} alt={props.alt_usuario}/>
              <div class="texto">
                <div class="nome">{props.nome_usuario}</div>
                <div class="razao">{props.razao_usuario}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
    )
}