import { useState } from "react"


export function Post(props) {
  let {imagem_usuario, alt_usuario, nome_usuario, imagem_conteudo, imagem_curtidas, alt_curtidas, nome_curtidas, n_curtidas} = props; 
  let [salvo, setSalvo] = useState('bookmark-outline');  
  let [like, setLike] = useState('heart-outline');
  let [curtidas, setCurtidas] = useState(n_curtidas);
  let [classNamee, setclassNamee] = useState('preto');
  
  return (
        <div className="post" data-test="post">
            <div className="topo">
              <div className="usuario">
                <img src={imagem_usuario} alt={alt_usuario}/>
                {nome_usuario}
              </div>
              <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
              </div>
            </div>

            <div className="conteudo">
              <img src={imagem_conteudo} onDoubleClick={function () {
                if (like === "heart-outline") {
                  like = 'heart';
                  setLike(like);
                  curtidas = curtidas + 1;
                  setCurtidas(curtidas)
                  classNamee = 'vermelho';
                  setclassNamee(classNamee);
                }
              }} data-test="post-image"/>
            </div>

            <div className="fundo">
              <div className="acoes">
                <div>
                  <ion-icon name={like} onClick={function () {
                    if (like === "heart-outline") {
                      like = 'heart';
                      setLike(like);
                      curtidas = curtidas + 0.001;
                      setCurtidas(curtidas);
                      classNamee = 'vermelho';
                      setclassNamee(classNamee);
                    } else {
                      like = 'heart-outline';
                      setLike(like);
                      curtidas = curtidas - 0.001;
                      setCurtidas(curtidas);
                      classNamee = 'preto';
                      setclassNamee(classNamee);
                    }
                  }} className={classNamee} data-test="like-post"></ion-icon>
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

              <div className="curtidas">
                <img src={imagem_curtidas} alt={alt_curtidas}/>
                <div className="texto">
                  Curtido por <strong>{nome_curtidas}</strong> e <strong data-test="likes-number">outras {curtidas} pessoas</strong>
                </div>
              </div>
            </div>
          </div>
    )
}