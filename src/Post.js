import { useState } from "react"

export function Post(props) {
  let {imagem_usuario, alt_usuario, nome_usuario, imagem_conteudo, imagem_curtidas, alt_curtidas, nome_curtidas, n_curtidas} = props; 
  let [salvo, setSalvo] = useState('bookmark-outline');  
  let [like, setLike] = useState('heart-outline');
  let [curtidas, setCurtidas] = useState(n_curtidas);
  let [classe, setClasse] = useState('preto');
  
  return (
        <div class="post" data-test="post">
            <div class="topo">
              <div class="usuario">
                <img src={imagem_usuario} alt={alt_usuario}/>
                {nome_usuario}
              </div>
              <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div class="conteudo">
              <img src={imagem_conteudo} onDoubleClick={function () {
                if (like === "heart-outline") {
                  like = 'heart';
                  setLike(like);
                  curtidas = curtidas + 1;
                  setCurtidas(curtidas)
                  classe = 'vermelho';
                  setClasse(classe);
                }
              }} data-test="post-image"/>
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
                <img src={imagem_curtidas} alt={alt_curtidas}/>
                <div class="texto">
                  Curtido por <strong>{nome_curtidas}</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}