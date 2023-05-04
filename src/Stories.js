import Story from "./Story"

export default function Stories() {
    return (
        <div class="stories">
          <Story imagem_story="assets/img/9gag.svg" alt_story="9gag" usuario_story="9gag"/>
          <Story imagem_story="assets/img/meowed.svg" alt_story="meowed" usuario_story="meowed"/>
          <Story imagem_story="assets/img/barked.svg" alt_story="barked" usuario_story="barked"/>
          <Story imagem_story="assets/img/nathanwpylestrangeplanet.svg" alt_story="nathanwpylestrangeplanet" usuario_story="nathanwpylestrangeplanet"/>
          <Story imagem_story="assets/img/wawawicomics.svg" alt_story="wawawicomics" usuario_story="wawawicomics"/>
          <Story imagem_story="assets/img/filomoderna.svg" alt_story="filomoderna" usuario_story="filomoderna"/>
          <Story imagem_story="assets/img/memeriagourmet.svg" alt_story="memeriagourmet" usuario_story="memeriagourmet"/>
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

    )
}