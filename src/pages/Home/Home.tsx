import { useEffect, useState } from 'react';
// MUI
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import AirOutlinedIcon from '@mui/icons-material/AirOutlined';
import { Button, Divider } from '@mui/material';
import WeekendOutlinedIcon from '@mui/icons-material/WeekendOutlined';
// React Component
import FooterMobile from '../../components/Footer/Footer';
import HeaderMobile from '../../components/Header/Header';
import PriceCard from './PriceCard/PriceCard';
import FloatingButtonUp from '../../components/FloatingButtonUp/FloatingButtonUp';
// STORE
import useUser from '../../store/store';
// API
import regenerateAccessToken from '../../utils/utilsFunctions';
// images
import treeImage from '../../assets/arbre2w.webp';
import katiaPhoto from '../../assets/katia-plage-redux2-e1679909092745.webp';
import diplome from '../../assets/logoblancSUPDESOPHRO-e1664629093876.png';
import brainPic from '../../assets/brain2.webp';
import plantsPic from '../../assets/plantes-600x362.webp';
import famillyPic from '../../assets/famille2.webp';
import manPic from '../../assets/businessman.webp';
import talkAfterTherapy from '../../assets/talkaftertherapy.webp';
import adulteWoman from '../../assets/adulte_faceless-e1669810596397.webp';
import studentPic from '../../assets/Etudiant-e1669810949103.webp';
import childPic from '../../assets/teen-e1669811659157.webp';
// CSS
import './style.scss';

function Home() {
  const [scroll, setScroll] = useState<boolean>(false);
  const [isConnected, UpdateIsConnected] = useUser((state) => [
    state.isConnected,
    state.UpdateIsConnected,
  ]);
  // Scroll to the top smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 650) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  useEffect(() => {
    async function test() {
      const isTokenValid = await regenerateAccessToken();
      if (isTokenValid) {
        UpdateIsConnected(true);
        console.log('USER LOGIN');
      } else {
        UpdateIsConnected(false);
        console.log('USER LOGOUT');
      }
    }
    test();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isConnected]);

  return (
    <>
      <FloatingButtonUp scroll={scroll} />
      <HeaderMobile />
      <main className="main">
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
              la pratique encore aujourd’hui quotidiennement. J’ai créé ma
              chaine pour proposer à tous des méditations guidées afin de
              retrouver un minimum de sérénité.
              <br />
              <br />
              Lorsque j’ai ressenti le besoin de devenir thérapeute, je me suis
              intéressée à la sophrologie car elle était pour moi une méthode
              qui combinais ce que j’aime apporter aux autres : la détente
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
                envie de commencer à aider autour de moi les gens en souffrance
                en leur apportant des outils pour se sentir mieux dans leurs
                corps et dans leur tête.
                <br />
                <br />
                Le travail d’un sophrologue c&apos;est de montré à la personne
                qui vient nous consulter, qu&apos;il possède en lui déjà toutes
                les ressources pour aller mieux et que nous ne sommes qu’une
                boussole pour lui indiquer la direction et pour développer cette
                capacité à ramener le calme en soi, le bien-être et
                l&apos;harmonie.
              </p>
            </div>
          </div>
        </section>

        <section className="la-sophrologie">
          <h2>Qu&apos;est ce que la sophrologie ?</h2>
          <div className="la-sophrologie__partone">
            <p>
              La sophrologie est ce qu&apos;on appel une méthode
              psychocorporelle, Ce qui veut dire qu&apos;elle agit à la fois sur
              le corps et sur l&apos;esprit. Cette méthode a été conçu dans les
              années 60 par le neuropsychiatre Alfonso Caycedo. Elle
              s&apos;appuie sur un ensemble de techniques qui permettent
              d&apos;harmoniser nos pensées et nos ressentis.
              <br />
              <br />
              Commencer la sophrologie c’est entamer un chemin vers une quête de
              mieux être. C&apos;est trouver en soit ses propres ressources pour
              installer plus de détente et de paix intérieur face à une
              problématique qui nous est propre. A l&apos;aide d’exercices de
              respiration, de décontraction musculaire et de visualisation, la
              pratique de la sophrologie permet de retrouver un équilibre de vie
              face à des maux physiques ou psychologiques.{' '}
            </p>
            <img src={brainPic} alt="dessin de tete avec un cerveau" />
          </div>
          <div className="la-sophrologie__parttwo">
            <div className="la-sophrologie__parttwo__les-bienfaits">
              <h2>Les bienfaits</h2>
              <p>
                Dans une société ou tout va très vite, ou nous sommes énormément
                sollicités de façon quotidienne et ou le stress est devenu
                omniprésent, ou la performance et la compétition sont monnaie
                courant, il est essentiel de trouver un moyen de retrouver
                l’harmonie.
                <br />
                <br />
                Cette harmonie est possible si nous nous consacrons du temps
                pour nous occuper de nous-même, de notre bien-être physique et
                émotionnel. En cela, la sophrologie constitue une thérapie
                complémentaire à notre médecine traditionnelle. C’est une
                méthode préventive qui nous aide à trouver un état de santé
                optimal pour nous garantir de rester positif et de garder en
                nous les clés qui nous permettent d’affronter les défis du
                quotidien.
              </p>
              <img src={plantsPic} alt="évolution de croissance d'une plante" />
            </div>
            <p>
              Ainsi la sophrologie est un outil de tous les jours pour nous
              apporter du calme, de la sérénité. Elle peut nous aider à
              appréhender nos émotions, à les accueillir avec bienveillance.
              C’est aussi une méthode qui peut nous donner les clés pour amener
              une peur ou un traumatisme vers un ressenti plus positif. La
              sophrologie peut également nous aider à gérer des douleurs
              physiques, en les rendant moins difficiles à supporter au
              quotidien.
              <br />
              <br />
              Les bienfaits de la sophrologie sont en résumé très nombreux, car
              c’est une technique qui peut être utilisée tous les jours pour
              presque toutes les sources d’angoisses ou de souffrances qui nous
              entravent parfois. Il est important de dire que la sophrologie ne
              se substitue en aucun cas à un traitement médical, elle est un
              outil complémentaire pour aider l’être humain à trouver en lui les
              ressources illimités qu’il ne soupçonne pas.{' '}
            </p>
          </div>
          <div className="la-sophrologie__partthree">
            <div>
              <h2>Pour qui ?</h2>
              <p>
                La sophrologie s’adresse à tous ! Dès que nous sommes en âges
                d’exprimer nos ressentis et nos émotions, la sophrologie peut
                nous aider. Technique simple et adaptable, la sophrologie pourra
                aider les adolescents, les adultes et les personnes âgées en
                leur donnant des clés pour gérer ce qui génèrent en elles du
                stress ou de la souffrance dans le quotidien.
              </p>
            </div>
            <img src={famillyPic} alt="dessin d'une famille" />
          </div>
          <div className="la-sophrologie__partfour">
            <div>
              <h2>Pour quoi ?</h2>
              <p>
                Pour s’occuper de son bien être et pour entretenir son potentiel
                intérieur.
                <br />
                <br />
                La sophrologie peut entre autres aider les personnes avec des
                soucis de sommeil, mais aussi les personnes stressées. C’est une
                technique qui pourra apporter aux personnes victimes d’un
                traumatisme ou d’une angoisse/phobie profonde une détente
                certaine face à la situation qui est l’objet du trauma.
                <br />
                <br />
                C’est aussi un outil utile en complément d’un traitement
                médical, pour mieux vivre les effets secondaires, ou pour
                diminuer les souffrances physiques. C’est aussi une méthode
                efficace pour développer son potentiel lors de passage d’un
                examen, d’une prise de parole en public ou bien pour apprendre à
                canaliser son attention ou son énergie pour des performances
                physiques.
                <br />
                <br />
                La sophrologie est une thérapie qui peut aider à gérer de
                multiples problématiques puisque son but est d’apporter de la
                relaxation mais aussi à amener une dimension positive dans des
                problématique souvent douloureuses.
              </p>
            </div>
            <img src={manPic} alt="dessin d'un homme arronsant une plante" />
          </div>
        </section>

        <section className="therapy-organisation">
          <h2>comment se déroule une séance ?</h2>
          <div>
            <h3>-1-</h3>
            <ForumOutlinedIcon style={{ fontSize: '100px', color: 'white' }} />
            <h4>Échanges</h4>
            <p>
              Nous faisons connaissance ou nous faisons un point sur votre
              évolution
            </p>
          </div>
          <div>
            <h3>-2-</h3>
            <AirOutlinedIcon style={{ fontSize: '100px' }} />
            <h4>Exercices de réspiration</h4>
            <p>
              Mouvements doux accompagnés de respirations pour détendre le
              corps.
            </p>
          </div>
          <div>
            <h3>-3-</h3>
            <WeekendOutlinedIcon style={{ fontSize: '100px' }} />
            <h4>Exercices de réspiration</h4>
            <p>
              Instant de détente et lâcher prise, ou vous vous laissez guider
              par ma voix.
            </p>
          </div>
          <div>
            <h3>-4-</h3>
            <img
              style={{ width: '25%' }}
              src={talkAfterTherapy}
              alt="partage des ressentis"
            />
            <h4>Partage des ressentis</h4>
            <p>
              Nous échangeons sur vos ressentis et impressions suite à la
              séance.
            </p>
          </div>
          <Button variant="contained">Le détail complet</Button>
        </section>

        <section className="costs">
          <h2>Mes préstations</h2>
          <div className="costs__prestations">
            <PriceCard
              photo={adulteWoman}
              title="ADULTE"
              description="Séance individuelle et/ou collectif de sophrologie"
              bonusDescription=""
              price={50}
              url="https://www.google.com"
            />
            <PriceCard
              photo={childPic}
              title="ADOLESCENT"
              description="Séance individuelle de sophrologie"
              bonusDescription=""
              price={50}
              url="https://www.seasonsnovel.com"
            />
            <PriceCard
              photo={studentPic}
              title="ÉTUDIANT"
              description="Séance individuelle de sophrologie"
              bonusDescription="*sous présentation d'un justificatif"
              price={50}
              url="https://www.cdiscount.com"
            />
          </div>
          <Button
            sx={{ marginTop: '2.2rem', fontSize: '1.3rem', fontWeight: '700' }}
            variant="contained"
            href="https://www.google.com"
          >
            TOUS MES TARIFS
          </Button>
          <Divider
            sx={{ marginTop: '3rem', width: '50%', textAlign: 'center' }}
          />
        </section>

        <section className="meditations">
          <h2 style={{ textAlign: 'start' }}>Des méditations guidées...</h2>
          {/* <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/videoseries?list=PLKAWlnLNAfJzThPsU_SguI4r6l5MHo_IJ"
            title="YouTube video player"
            // eslint-disable-next-line react/no-unknown-property
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          /> */}
          {/* <div className="yt-logo">
            <img src="" alt="" />
          </div> */}
          <h2 style={{ textAlign: 'end' }}>...créées pour vous.</h2>
        </section>
      </main>
      <FooterMobile />
    </>
  );
}

export default Home;
