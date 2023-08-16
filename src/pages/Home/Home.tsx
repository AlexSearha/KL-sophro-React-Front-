import FooterMobile from '../../components/Footer/Footer';
import HeaderMobile from '../../components/Header/Header';
import treeImage from '../../assets/arbre2w.webp';
import katiaPhoto from '../../assets/katia-plage-redux2-e1679909092745.webp';
import diplome from '../../assets/logoblancSUPDESOPHRO-e1664629093876.png';

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
        <div className="introducing__partone">
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
        <div className="introducing__parttwo">
          <div className="introducing__parttwo__diplome">
            <img src={diplome} alt="sup de sophro" />
            <h4>Diplomée</h4>
            <p>Diplômée de l&apos;école SUPÉRIEURE DE SOPHROLOGIE - 2021</p>
          </div>
          <div className="introducing__parttwo__intro-text-suite">
            <p>
              J&apos;ai donc choisi de me former en sophrologie à l&apos;école
              Sup de sophrologie. Une fois mon diplôme obtenu, j&apos;ai eu
              envie de commencer à aider autour de moi les gens en souffrance en
              leur apportant des outils pour se sentir mieux dans leurs corps et
              dans leur tête.
              <br />
              <br />
              Le travail d’un sophrologue c&apos;est de montré à la personne qui
              vient nous consulter, qu&apos;il possède en lui déjà toutes les
              ressources pour aller mieux et que nous ne sommes qu’une boussole
              pour lui indiquer la direction et pour développer cette capacité à
              ramener le calme en soi, le bien-être et l&apos;harmonie.
            </p>
          </div>
        </div>
      </section>
      <FooterMobile />
    </>
  );
}

export default Home;
