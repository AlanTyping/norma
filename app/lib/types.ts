export type ActiveNav = "home" | "projects" | "studio";

export type ProjectCategory =
  | "Residencial"
  | "Comercial"
  | "Reformas"
  | "Interiorismo";

export type ProjectSlug =
  | "casa-olivos"
  | "estudio-24"
  | "casa-delta"
  | "casa-del-bosque";

export type ImageTreatment = "color" | "grayscale" | "hero";

export interface SiteImage {
  src: string;
  alt: string;
  credit?: string;
  treatment?: ImageTreatment;
  sizes?: string;
}

export interface ProjectMeta {
  typology: string;
  location: string;
  area: string;
  year: string;
}

export interface ProjectCardData {
  slug: ProjectSlug;
  title: string;
  location: string;
  category: ProjectCategory;
  image: SiteImage;
  aspect: "wide" | "portrait" | "square";
}

export interface MaterialFeature {
  title: string;
  body: string;
  motif: "structure" | "light" | "wood";
}

export interface MaterialityData {
  title: string;
  eyebrow?: string;
  body: string;
  image: SiteImage;
  features?: MaterialFeature[];
}

export interface GalleryImage {
  image: SiteImage;
  caption?: string;
  placement: "feature" | "left" | "right";
}

export interface ProjectDetailData {
  slug: ProjectSlug;
  title: string;
  meta: ProjectMeta;
  hero: SiteImage;
  description: string[];
  materiality?: MaterialityData;
  gallery?: GalleryImage[];
  process?: {
    image: SiteImage;
    body: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    cta?: string;
  };
}

export interface TeamMember {
  name: string;
  role: string;
  image?: SiteImage;
}

export interface ContactFormValues {
  name: string;
  email: string;
  projectType: string;
  message: string;
}
