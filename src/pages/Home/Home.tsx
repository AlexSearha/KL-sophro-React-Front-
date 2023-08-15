import FooterMobile from '../../components/Footer/Footer';
import HeaderMobile from '../../components/Header/Header';
import treeImage from '../../assets/arbre2w.webp';
import katiaPhoto from '../../assets/katia-plage-redux2-e1679909092745.webp';

import './style.scss';

function Home() {
  return (
    <>
      <HeaderMobile />
      <section className="banner">
        <img className="banner__image" src={treeImage} alt="Chêne" />
        <h1>Culivez votre bien-être</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          expedita?
        </p>
      </section>

      <section className="introducing">
        <div className="introducing__div">
          <img
            className="introducing__div__photo"
            src={katiaPhoto}
            alt="Katia Lemaire sur la plage"
          />
          <h5>Qui suis-je ?</h5>
          <h2>Katia Lemaire</h2>
          <p>
            Intéressée depuis toujours par le développement personnel, j’ai
            toujours eu la conviction qu’une de mes missions était d’aider les
            autres. Les chemins étant vastes et nombreux dans le domaine du
            bien-être, j’ai choisi après avoir exploré quelques pistes de me
            tourner vers la méditation. Je l’ai pratiqué pendant des années et
            la pratique encore aujourd’hui quotidiennement. J’ai créé ma chaine
            pour proposer à tous des méditations guidées afin de retrouver un
            minimum de sérénité.
            <br />
            <br />
            Lorsque j’ai ressenti le besoin de devenir thérapeute, je me suis
            intéressée à la sophrologie car elle était pour moi une méthode qui
            combinais ce que j’aime apporter aux autres : la détente
            émotionnelle et donc corporelle. Pour moi tout est lié de façon
            intrinsèque. Quand ont se sent angoissé, triste, inquiet, le corps
            nous envoi des signaux. Inversement quand le corps souffre, le
            mental s’en ressens.
          </p>
        </div>
      </section>
      <FooterMobile />
    </>
  );
}

export default Home;
