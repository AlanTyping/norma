import type {
  GalleryImage,
  ProjectCardData,
  ProjectDetailData,
  SiteImage,
  TeamMember,
} from "./types";

const unsplash = "https://images.unsplash.com";

const images = {
  homeHero: {
    src: "/hero.jpg",
    alt: "NØRMA Arquitectura",
    credit: "NØRMA Arquitectura",
    treatment: "hero",
    sizes: "100vw",
  },
  featuredHouse: {
    src: `${unsplash}/photo-1630756405921-7a5c27c32ccc?auto=format&w=1600&q=80&fit=crop`,
    alt: "Wide view of a modern house beside a pool — Moritz Kindler on Unsplash",
    credit: "Moritz Kindler on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 90vw, 100vw",
  },
  staircase: {
    src: `${unsplash}/photo-1696570398524-28566228df48?auto=format&w=1200&q=80&fit=crop`,
    alt: "Minimal concrete interior with a sculptural staircase — Cameron Rolfe on Unsplash",
    credit: "Cameron Rolfe on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 42vw, 100vw",
  },
  studioInterior: {
    src: `${unsplash}/photo-1777073232732-8d66f9405a8d?auto=format&w=1800&q=80&fit=crop`,
    alt: "Light-filled contemporary architecture studio interior — Sam on Unsplash",
    credit: "Sam on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  casaOlivosHero: {
    src: `${unsplash}/photo-1570122696161-cb795b9a2425?auto=format&w=1800&q=80&fit=crop`,
    alt: "Casa Olivos, vivienda contemporánea entre vegetación al anochecer — Toms on Unsplash",
    credit: "Toms on Unsplash",
    treatment: "grayscale",
    sizes: "100vw",
  },
  forestHouse: {
    src: `${unsplash}/photo-1516269702632-fec829d264f2?auto=format&w=1100&q=80&fit=crop`,
    alt: "Casa entre árboles y vegetación densa — Quenten Janssen on Unsplash",
    credit: "Quenten Janssen on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 24vw, 50vw",
  },
  facadeDetail: {
    src: `${unsplash}/photo-1554075098-1f70689a3f51?auto=format&w=900&q=80&fit=crop`,
    alt: "Detalle de escalera y estructura arquitectónica — Mike Tsitas on Unsplash",
    credit: "Mike Tsitas on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 38vw, 100vw",
  },
  bathroom: {
    src: `${unsplash}/photo-1554075098-02e5e15552b4?auto=format&w=1000&q=80&fit=crop`,
    alt: "Baño de hormigón de Casa Olivos con bañera exenta y ventana al jardín — Mike Tsitas on Unsplash",
    credit: "Mike Tsitas on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 45vw, 100vw",
  },
  plans: {
    src: `${unsplash}/photo-1599420186985-5c3d1a038e84?auto=format&w=1200&q=80&fit=crop`,
    alt: "Planos, lápices y papeles sobre un escritorio de madera — Ryan Ancill on Unsplash",
    credit: "Ryan Ancill on Unsplash",
    treatment: "color",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  material: {
    src: `${unsplash}/photo-1538484605253-9594095181f3?auto=format&w=1000&q=80&fit=crop`,
    alt: "Detalle de hormigón visto, madera y luminaria en un interior — Lasse Møller on Unsplash",
    credit: "Lasse Møller on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 50vw, 100vw",
  },
  delta: {
    src: `${unsplash}/photo-1751346874267-ace7c47ba9b5?auto=format&w=1800&q=80&fit=crop`,
    alt: "Casa Delta, moderna casa de madera y vidrio sobre el agua al anochecer — Tony Chen on Unsplash",
    credit: "Tony Chen on Unsplash",
    treatment: "hero",
    sizes: "100vw",
  },
  lucia: {
    src: `${unsplash}/photo-1534528741775-53994a69daeb?auto=format&w=700&q=80&fit=crop`,
    alt: "Retrato en blanco y negro de Lucía Varela, arquitecta socia — Christin Hume on Unsplash",
    credit: "Christin Hume on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 30vw, 100vw",
  },
  marcos: {
    src: `${unsplash}/photo-1500648767791-00dcc994a43e?auto=format&w=700&q=80&fit=crop`,
    alt: "Retrato en blanco y negro de Marcos Paz, arquitecto socio — Austin Distel on Unsplash",
    credit: "Austin Distel on Unsplash",
    treatment: "grayscale",
    sizes: "(min-width: 768px) 30vw, 100vw",
  },
} satisfies Record<string, SiteImage>;

export const projects: ProjectCardData[] = [
  {
    slug: "casa-olivos",
    title: "Casa Olivos",
    location: "Buenos Aires, Argentina",
    category: "Residencial",
    image: images.featuredHouse,
    aspect: "wide",
  },
  {
    slug: "estudio-24",
    title: "Estudio 24",
    location: "Madrid, España",
    category: "Comercial",
    image: images.studioInterior,
    aspect: "portrait",
  },
  {
    slug: "casa-delta",
    title: "Casa Delta",
    location: "Tigre, Argentina",
    category: "Residencial",
    image: images.delta,
    aspect: "square",
  },
  {
    slug: "casa-del-bosque",
    title: "Casa del Bosque",
    location: "Valdivia, Chile",
    category: "Residencial",
    image: images.forestHouse,
    aspect: "wide",
  },
];

export const casaOlivos: ProjectDetailData = {
  slug: "casa-olivos",
  title: "Casa Olivos",
  meta: {
    typology: "Residencial",
    location: "San Isidro",
    area: "280 m²",
    year: "2026",
  },
  hero: images.casaOlivosHero,
  description: [
    "Casa Olivos nace de la premisa de integrar el habitar interior con el entorno natural preexistente. La propuesta arquitectónica busca desmaterializar los límites tradicionales, utilizando grandes paños vidriados que enmarcan la vegetación añososa del terreno.",
    "El diseño espacial se articula alrededor de un vacío central, un patio interno que funciona como pulmón de luz y organizador de las funciones públicas y privadas. La circulación se concibe como un recorrido perimetral fluido, donde cada espacio goza de vistas cruzadas y una profunda conexión con el exterior.",
  ],
  materiality: {
    title: "Materialidad y Espacialidad",
    body: "La paleta material es austera y sincera. El hormigón visto proporciona anclaje y masa, mientras que los revestimientos en madera de incienso aportan calidez táctil. Esta dualidad entre lo frío y lo cálido, lo masivo y lo ligero, define el carácter del espacio interior.",
    image: images.forestHouse,
  },
  gallery: [
    {
      image: images.staircase,
      placement: "feature",
    },
    {
      image: images.bathroom,
      placement: "left",
    },
    {
      image: images.facadeDetail,
      placement: "right",
      caption: "Detalle de Fachada Sur",
    },
  ] satisfies GalleryImage[],
  process: {
    image: images.plans,
    body: "Desde los primeros trazos en papel hasta la modelación rigurosa de los detalles constructivos, el desarrollo de Casa Olivos supuso un constante ir y venir entre la intuición espacial y la resolución técnica, buscando la esencia más pura de la idea inicial.",
  },
  testimonial: {
    quote:
      "El estudio logró interpretar exactamente cómo queríamos vivir. La casa no solo es hermosa, sino que cada espacio tiene un propósito y una calma que no sabíamos que necesitábamos.",
    author: "— María y Federico, Propietarios",
    cta: "¿Tenés un proyecto similar? Hablemos.",
  },
};

export const estudio24: ProjectDetailData = {
  slug: "estudio-24",
  title: "Estudio 24",
  meta: {
    typology: "Comercial",
    location: "Madrid",
    area: "180 m²",
    year: "2025",
  },
  hero: images.studioInterior,
  description: [
    "La transformación de un antiguo espacio industrial en un estudio creativo contemporáneo. Estudio 24 nace de la necesidad de un entorno de trabajo que fomente la colaboración sin sacrificar la concentración. La intervención se centra en maximizar la luz natural y crear una fluidez espacial ininterrumpida.",
    "Se respetó la cáscara original del edificio, desnudando la estructura para revelar su carácter industrial, mientras que las nuevas inserciones actúan como volúmenes limpios y autónomos que organizan el programa sin tocar los límites perimetrales.",
  ],
  materiality: {
    eyebrow: "Concepto",
    title: "Materialidad",
    body: "El diálogo entre lo crudo y lo refinado. El hormigón visto y las instalaciones expuestas establecen la base industrial, mitigada por la calidez táctil del mobiliario de roble y la iluminación cuidadosamente orquestada.",
    image: images.material,
    features: [
      {
        title: "Hormigón Visto",
        body: "Estructura original preservada.",
        motif: "structure",
      },
      {
        title: "Iluminación Técnica",
        body: "Luminarias suspendidas de perfil bajo.",
        motif: "light",
      },
      {
        title: "Madera Cálida",
        body: "Roble natural para puntos de contacto.",
        motif: "wood",
      },
    ],
  },
};

export const casaDelta: ProjectDetailData = {
  slug: "casa-delta",
  title: "Casa Delta",
  meta: {
    typology: "Residencial",
    location: "Tigre",
    area: "215 m²",
    year: "2025",
  },
  hero: images.delta,
  description: [
    "Casa Delta emerge como una respuesta arquitectónica directa a las condiciones únicas de su entorno. Situada en un terreno inundable, la estructura se eleva sobre pilotes, permitiendo que el paisaje fluvial fluya libremente por debajo. Esta decisión no solo resuelve el desafío técnico, sino que establece un diálogo poético con el agua, transformándola en un elemento fundamental de la experiencia espacial.",
    "Los grandes ventanales de piso a techo desdibujan los límites entre el interior y el exterior, invitando a la naturaleza salvaje del delta a convertirse en el telón de fondo constante de la vida doméstica. La disposición de los volúmenes busca capturar las vistas panorámicas del río mientras mantiene la privacidad, creando un refugio de contemplación silenciosa.",
  ],
  materiality: {
    title: "Ingeniería Palafítica y Transparencia",
    body: "Elevada sobre una estructura de perfiles metálicos y hormigón hidrófugo, Casa Delta resiste las crecidas del río con ligereza. El uso extensivo de vidrio termoacústico y maderas de guatambú genera un refugio náutico de gran calidez.",
    image: images.facadeDetail,
    features: [
      {
        title: "Pilotes de Acero",
        body: "Elevación estructural ante crecidas del delta.",
        motif: "structure",
      },
      {
        title: "Vidrio de Control Solar",
        body: "Aislamiento térmico y visuales panorámicas.",
        motif: "light",
      },
      {
        title: "Madera Fluvial",
        body: "Revestimientos tratados contra la humedad.",
        motif: "wood",
      },
    ],
  },
  gallery: [
    {
      image: images.staircase,
      placement: "feature",
    },
    {
      image: images.studioInterior,
      placement: "left",
      caption: "Espacio de estar continuo",
    },
    {
      image: images.bathroom,
      placement: "right",
      caption: "Baño con luz cenital",
    },
  ],
  testimonial: {
    quote:
      "Vivir sobre el agua requería una solución técnica que no perdiera la poesía del Delta. NØRMA logró exactamente ese equilibrio.",
    author: "— Agustín V., Casa Delta",
    cta: "¿Tenés un proyecto con desafíos de terreno? Hablemos.",
  },
};

export const casaDelBosque: ProjectDetailData = {
  slug: "casa-del-bosque",
  title: "Casa del Bosque",
  meta: {
    typology: "Residencial",
    location: "Valdivia, Chile",
    area: "310 m²",
    year: "2025",
  },
  hero: images.forestHouse,
  description: [
    "Ubicada en una ladera boscosa de la Patagonia, Casa del Bosque dialoga con la topografía escarpada y el clima húmedo del sur. La volumetría fragmentada en dos niveles se inserta respetando los árboles nativos preexistentes, minimizando el impacto sobre el suelo natural.",
    "Las aberturas estratégicas capturan la luz cenital y las visuales hacia la copa de los árboles, mientras que la cubierta inclinada responde con solidez técnica a los altos regímenes de lluvia, fusionando la tradición constructiva local con líneas contemporáneas depuradas.",
  ],
  materiality: {
    title: "Materia, Resguardo y Clima",
    body: "La piel exterior combina madera termotratada con placas de acero corten, materiales que maduran con las estaciones. En el interior, los revoques a la cal y los pisos de roble reciclado generan una atmósfera de abrigo y silencio.",
    image: images.material,
    features: [
      {
        title: "Envolvente Térmica",
        body: "Aislación bioclimática continua para clima lluvioso.",
        motif: "structure",
      },
      {
        title: "Lucernarios Cenitales",
        body: "Ingreso de luz natural filtrada entre el follaje.",
        motif: "light",
      },
      {
        title: "Maderas Nativas",
        body: "Alerce y roble certificado para interiores.",
        motif: "wood",
      },
    ],
  },
  gallery: [
    {
      image: images.featuredHouse,
      placement: "feature",
    },
    {
      image: images.staircase,
      placement: "left",
      caption: "Escalera escultórica integrada a la estructura",
    },
    {
      image: images.bathroom,
      placement: "right",
      caption: "Apertura visual hacia la vegetación",
    },
  ],
  testimonial: {
    quote:
      "La integración con el entorno boscoso es total. En invierno la casa es un refugio cálido y en verano se abre completamente hacia los árboles.",
    author: "— Joaquín y Camila, Propietarios",
    cta: "¿Pensando en construir en un entorno natural? Conversemos.",
  },
};

export const projectDetails: ProjectDetailData[] = [
  casaOlivos,
  estudio24,
  casaDelta,
  casaDelBosque,
];

export function getProjectBySlug(slug: string): ProjectDetailData | undefined {
  return projectDetails.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string): {
  prev: ProjectDetailData;
  next: ProjectDetailData;
} {
  const index = projectDetails.findIndex((p) => p.slug === slug);
  const currentIndex = index === -1 ? 0 : index;
  const prevIndex = (currentIndex - 1 + projectDetails.length) % projectDetails.length;
  const nextIndex = (currentIndex + 1) % projectDetails.length;
  return {
    prev: projectDetails[prevIndex],
    next: projectDetails[nextIndex],
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Lucía Varela",
    role: "Arquitecta socia",
    image: images.lucia,
  },
  {
    name: "Marcos Paz",
    role: "Arquitecto socio",
    image: images.marcos,
  },
];

export const additionalTeamMembers: TeamMember[] = [
  {
    name: "Sofía Herrera",
    role: "Arquitecta de proyecto",
  },
  {
    name: "Tomás Bernal",
    role: "Arquitecto de proyecto",
  },
  {
    name: "Clara Montes",
    role: "Especialista en interiorismo",
  },
];

export { images };

