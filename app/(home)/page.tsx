import Link from 'next/link';
import { logoHTML, logoCSS } from './logos';

type FeatureItem = {
  title: string;
  svg: React.FC;
  linkYoutube?: string;
  linkDoc?: string;
  description: string;
};

const featureList: FeatureItem[] = [
  {
    title: "HTML",
    svg: logoHTML,
    linkYoutube: "https://www.youtube.com/watch?v=QwMlgfMK6fQ&list=PLJubkp8BnTJt-pKYkVNLt72n1hKmYmkFw",
    linkDoc: "/docs/category/html",
    description: "Toda página debe tener una estructura HTML, empieza por aquí.",
  },
  {
    title: "CSS",
    svg: logoCSS,
    linkYoutube: "https://www.youtube.com/watch?v=I_RG3bNjTfQ&list=PLJubkp8BnTJt1u6z_voRiYtwskmP0VVzw",
    linkDoc: "/docs/category/css",
    description: "Los estilos son importantes para que tu página se vea bien, aprende a usar CSS.",
  },
  {
    title: "Javascript",
    svg: logoHTML,
    linkYoutube: "https://www.youtube.com/watch?v=3oSeQb94Ga4&list=PLJubkp8BnTJsDgWXWcS1Z0VDV7rAOqbU4",
    description: "Aprende a dar funcionalidad e interactividad a tu página web con Javascript.",
  },
  {
    title: "Tailwind",
    svg: logoHTML,
    linkYoutube: "https://www.youtube.com/watch?v=gvdvuGSksDU&list=PLJubkp8BnTJu9khizC7ywblms1YzdLO3g",
    description: "Framework de CSS que te ayudará a darle estilos a tu página web de manera más rápida.",
  },
  {
    title: "React",
    svg: logoHTML,
    linkYoutube: "https://www.youtube.com/watch?v=Ed9OM9uQTAA&list=PLJubkp8BnTJshwFKJGgAiQy2HrkTeYT1a",
    linkDoc: "/docs/category/react",
    description: "La librería más usada en desarollo web. Aprende a crear aplicaciones web con React.",
  },
  {
    title: "Phaser",
    svg: logoHTML,
    // link: "https://www.youtube.com/CodingTube",
    linkDoc: "/docs/category/phaser",
    description: "Framework Open Source de JavaScript para crear videojuegos HTML5.",
  },
  {
    title: "Dart",
    svg: logoHTML,
    linkYoutube: "https://www.youtube.com/watch?v=ymTczP7hDCE&list=PLJubkp8BnTJsinoOsYfDucgvTbo4Xb_ti",
    linkDoc: "/docs/category/dart",
    description: "Dart es el lenguaje de programación que se utiliza para crear aplicaciones móviles con Flutter.",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <p className="text-fd-muted-foreground mt-10">
        Bienvenidos a la documentación oficial de CodingTube{' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>.
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[960px] mx-auto my-8'>
        {
          featureList.map(({ title, svg: Svg, description }) => (
            <div key={title} data-card="true" className="block rounded-xl border bg-fd-card p-4 text-fd-card-foreground transition-colors @max-lg:col-span-full">
            
              <div className='flex items-center gap-2'>
                <div className="not-prose mb-2 rounded-lg bg-fd-muted p-1.5 text-fd-muted-foreground size-12 object-cover flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                  <Svg />
                </div>
                <h3 className="not-prose mb-1 text-sm font-medium">{title}</h3>
                
              </div>
              
              <div className="text-sm text-fd-muted-foreground prose-no-margin empty:hidden mb-3"><p>{description}</p>
              </div>
              <div className='flex justify-center gap-2'>
                <button className='shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground cursor-pointer'>Videos</button>
                  <button className='shadow-md rounded-lg border bg-fd-muted p-1.5 text-fd-muted-foreground cursor-pointer'>Docs</button>
              </div>
            </div>
          ))
        }
      </div>
    </main>
  );
}
