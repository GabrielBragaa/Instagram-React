import { useState } from "react"

export function Post(props) {
  let [salvo, setSalvo] = useState('bookmark-outline');  
  let [like, setLike] = useState('heart-outline');
  let [curtidas, setCurtidas] = useState(Number(props.numero_curtidas));
  let [classe, setClasse] = useState('preto');

  return (
        <div class="post" data-test="post">
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
              <img src={props.imagem_conteudo} alt={props.alt_conteudo} onDoubleClick={function () {
                if (like === "heart-outline") {
                  like = 'heart';
                  setLike(like);
                  curtidas = curtidas + 0.001;
                  setCurtidas(curtidas)
                  classe = 'vermelho';
                  setClasse(classe);
                }
              }} data-test="post-image"/>
              <ion-icon name="heart" class="coracao "></ion-icon>
            </div>

            <div class="fundo">
              <div class="acoes">
                <div>
                  <ion-icon name={like} onClick={function () {
                    if (like === "heart-outline") {
                      like = 'heart';
                      setLike(like);
                      curtidas = curtidas + 0.001;
                      setCurtidas(curtidas);
                      classe = 'vermelho';
                      setClasse(classe);
                    } else {
                      like = 'heart-outline';
                      setLike(like);
                      curtidas = curtidas - 0.001;
                      setCurtidas(curtidas);
                      classe = 'preto';
                      setClasse(classe);
                    }
                  }} class={classe} data-test="like-post"></ion-icon>
                  <ion-icon name="chatbubble-outline"></ion-icon>
                  <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                  <ion-icon name={salvo} onClick={function () {
                    if (salvo === "bookmark-outline") {
                      salvo = "bookmark";
                      setSalvo(salvo);
                    } else {
                      salvo = "bookmark-outline";
                      setSalvo(salvo);
                    }
                  }} data-test="save-post"></ion-icon>
                </div>
              </div>

              <div class="curtidas">
                <img src={props.imagem_curtidas} alt={props.alt_curtidas}/>
                <div class="texto">
                  Curtido por <strong>{props.nome_curtidas}</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}