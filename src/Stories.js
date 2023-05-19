import Story from "./Story"
import gag from './assets/img/9gag.svg'
import meowed from "./assets/img/meowed.svg"
import barked from "./assets/img/barked.svg"
import nathan from "./assets/img/nathanwpylestrangeplanet.svg"
import wawa from "./assets/img/wawawicomics.svg"
import filo from "./assets/img/filomoderna.svg"
import memeria from "./assets/img/memeriagourmet.svg"

export default function Stories() {
  const imgs = [
    {imagem: gag, alt: "9gag", user: "9gag"},
    {imagem: meowed, alt: "meowed", user: "meowed"},
    {imagem: barked, alt: "barked", user: "barked"},
    {imagem: nathan, alt:"nathanwpylestrangeplanet", user: "nathanwpylestrangeplanet"},
    {imagem: wawa, alt: "wawawicomics", user: "wawawicomics"},
    {imagem: filo, alt: "filomoderna", user: "filomoderna"},
    {imagem: memeria, alt: "memeriagourmet", user: "memeriagourmet"}]  
  
  const [{imagem, alt, user}] = imgs;  
  return (
        <div className="stories">
          {imgs.map((story, i) => <Story key={i} imagem_story={story.imagem} alt_story={story.alt} usuario_story={story.user}/>)}
          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>

    )
}