export function Post(props) {
    return (
        <div class="post">
            <div class="topo">
              <div class="usuario">
                <img src={props.imagem_usuario} alt={props.alt_usuario}/>
                {props.nome_usuario}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={props.imagem_conteudo} alt={props.alt_conteudo}/>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name="heart-outline"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name="bookmark-outline"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imagem_curtidas} alt={props.alt_curtidas}/>
                <div class="texto">
                  Curtido por <strong>{props.nome_curtidas}</strong> e <strong>outras {props.numero_curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}