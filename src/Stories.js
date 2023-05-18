import Story from "./Story"

export default function Stories() {
  const imgs = [
    {imagem: "assets/img/9gag.svg", alt: "9gag", user: "9gag"},
    {imagem: "assets/img/meowed.svg", alt: "meowed", user: "meowed"},
    {imagem: "assets/img/barked.svg", alt: "barked", user: "barked"},
    {imagem: "assets/img/nathanwpylestrangeplanet.svg", alt:"nathanwpylestrangeplanet", user: "nathanwpylestrangeplanet"},
    {imagem: "assets/img/wawawicomics.svg", alt: "wawawicomics", user: "wawawicomics"},
    {imagem: "assets/img/filomoderna.svg", alt: "filomoderna", user: "filomoderna"},
    {imagem: "assets/img/memeriagourmet.svg", alt: "memeriagourmet", user: "memeriagourmet"}]  
  
  const [{imagem, alt, user}] = imgs;  
  return (
        <div class="stories">
          {imgs.map(() => <Story key={alt} imagem_story={imagem} alt_story={alt} usuario_story={user}/>)}
          <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

    )
}