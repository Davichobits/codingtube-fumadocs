import Link from 'next/link';
import { logoHTML, logoCSS, logoJavascript, logoTalwind, logoReact, logoDart, logoTypescript } from './logos';
import { FeatureItem } from '@/types/types';
import { TechCard } from '@/components/tech-card';

const featureList: FeatureItem[] = [
  {
    title: "HTML",
    svg: logoHTML,
    linkYoutube: "https://www.youtube.com/watch?v=QwMlgfMK6fQ&list=PLJubkp8BnTJt-pKYkVNLt72n1hKmYmkFw",
    linkDoc: "/docs/HTML",
    description: "Toda página debe tener una estructura HTML, empieza por aquí.",
  },
  {
    title: "CSS",
    svg: logoCSS,
    linkYoutube: "https://www.youtube.com/watch?v=I_RG3bNjTfQ&list=PLJubkp8BnTJt1u6z_voRiYtwskmP0VVzw",
    // linkDoc: "/docs/category/css",
    description: "Los estilos son importantes para que tu página se vea bien, aprende a usar CSS.",
  },
  {
    title: "Javascript",
    svg: logoJavascript,
    linkYoutube: "https://www.youtube.com/watch?v=3oSeQb94Ga4&list=PLJubkp8BnTJsDgWXWcS1Z0VDV7rAOqbU4",
    description: "Aprende a dar funcionalidad e interactividad a tu página web con Javascript.",
  },
  {
    title: "Tailwind",
    svg: logoTalwind,
    linkYoutube: "https://www.youtube.com/watch?v=gvdvuGSksDU&list=PLJubkp8BnTJu9khizC7ywblms1YzdLO3g",
    description: "Framework de CSS que te ayudará a darle estilos a tu página web de manera más rápida.",
  },
  {
    title: "React",
    svg: logoReact,
    linkYoutube: "https://www.youtube.com/watch?v=Ed9OM9uQTAA&list=PLJubkp8BnTJshwFKJGgAiQy2HrkTeYT1a",
    linkDoc: "/docs/react",
    description: "La librería más usada en desarollo web. Aprende a crear aplicaciones web con React.",
  },
  // {
  //   title: "Phaser",
  //   svg: logoHTML,
  //   // linkYoutube: "https://www.youtube.com/CodingTube",
  //   linkDoc: "/docs/category/phaser",
  //   description: "Framework Open Source de JavaScript para crear videojuegos HTML5.",
  // },
  {
    title: "Dart",
    svg: logoDart,
    linkYoutube: "https://www.youtube.com/watch?v=ymTczP7hDCE&list=PLJubkp8BnTJsinoOsYfDucgvTbo4Xb_ti",
    // linkDoc: "/docs/category/dart",
    description: "Dart es el lenguaje de programación que se utiliza para crear aplicaciones móviles con Flutter.",
  },
  {
    title: "Typescript",
    svg: logoTypescript,
    linkYoutube: "https://www.youtube.com/watch?v=uoK4HbnMQvQ&list=PLJubkp8BnTJsNDsF6ub7L-h7hnNE-Ij20",
    linkDoc: "/docs/typescript",
    description: "Superset de Javascript que le añade tipado estático.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <p className="text-fd-muted-foreground mt-10">
        Bienvenidos a la documentación oficial de {' '}
        <Link
          href="https://www.youtube.com/CodingTube/"
          className="text-fd-foreground font-semibold underline"
          target='_blank'
        >
          CodingTube
        </Link>.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[960px] mx-auto my-8 px-2'>
        {
          featureList.map((feature) => (
            <TechCard key={feature.title} {...feature}  />
          ))
        }
      </div>
      <p className="text-fd-muted-foreground my-10">
        Sitio creado con ❤️ por {' '}
        <Link
          href="https://davidruizdeveloper.com/"
          className="text-fd-foreground font-semibold underline"
          target='_blank'
        >
          David Ruiz
        </Link>. 
        El código está disponible en {' '}
        <Link
          href="https://github.com/Davichobits/codingtube-fumadocs"
          className="text-fd-foreground font-semibold underline"
          target='_blank'
        >
          Github
        </Link>.
      </p>
    </main>
  );
}
