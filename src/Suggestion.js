export default function Sugestao(props) {
    return (
        <div class="sugestao">
            <div class="usuario">
              <img src={props.imagem-usuario} alt={props.alt-usuario}/>
              <div class="texto">
                <div class="nome">{props.nome-usuario}</div>
                <div class="razao">{props.razao-usuario}</div>
              </div>
            </div>

            <div class="seguir">Seguir</div>
          </div>
    )
}