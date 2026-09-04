export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatar?: string;
}

export interface Chapter {
  number: string;
  title: string;
  benefit: string;
  detail: string;
}

export interface RecipePhoto {
  placeholderId: string;
  title: string;
  description: string;
  imageUrl: string;
  fallbackUrl?: string;
  tag: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const PAIN_POINTS = [
  {
    number: "01",
    quote: "¿Qué cocino hoy?",
    description: "La pregunta diaria que agota tu energía mental antes de siquiera prender la estufa.",
  },
  {
    number: "02",
    quote: "No tengo tiempo.",
    description: "Jornadas laborales y responsabilidades del hogar que no dejan margen para cocinar cada día.",
  },
  {
    number: "03",
    quote: "Mejor pido algo.",
    description: "El recurso rápido ante el cansancio que desbalancea tu presupuesto y la nutrición familiar.",
  },
  {
    number: "04",
    quote: "Compré esto y nunca lo usé.",
    description: "Verduras que se dañan en la nevera y alimentos que terminan en la basura por falta de plan.",
  },
  {
    number: "05",
    quote: "Quiero comer mejor.",
    description: "El deseo constante de alimentar saludablemente a los tuyos sin saber por dónde estructurarlo.",
  },
  {
    number: "06",
    quote: "Mañana vuelvo a empezar.",
    description: "El ciclo de frustración que se repite semana tras semana por no contar con un método.",
  },
];

export const CHAPTERS: Chapter[] = [
  {
    number: "01",
    title: "Inicio Inteligente",
    benefit: "Fundamentos claros para preparar tu cocina sin complicaciones.",
    detail: "Aprende los principios base del sistema para que tu cocina funcione con fluidez desde el primer momento.",
  },
  {
    number: "02",
    title: "Planificación Estratégica",
    benefit: "Cómo diseñar tu semana de comidas sin improvisar ni un solo día.",
    detail: "Estructura el menú semanal adaptado a los gustos de tu familia sin pasar horas frente a una hoja en blanco.",
  },
  {
    number: "03",
    title: "Compras Inteligentes",
    benefit: "Listas optimizadas para comprar solo lo necesario y evitar el desperdicio.",
    detail: "Llega al supermercado con una guía exacta: compra con intención, ahorra dinero y evita compras de último momento.",
  },
  {
    number: "04",
    title: "Cocina por Lotes",
    benefit: "El paso a paso para cocinar múltiples preparaciones en una sola sesión.",
    detail: "Técnicas de preparación simultánea: hornos, fuegos y cortes organizados para dejar comidas listas para varios días.",
  },
  {
    number: "05",
    title: "Congela y Conserva",
    benefit: "Técnicas seguras para mantener sabor, textura y frescura intactos.",
    detail: "Aprende qué recipientes usar, cómo congelar correctamente y cómo descongelar para que la comida sepa a recién hecha.",
  },
  {
    number: "06",
    title: "Disfruta y Mantén el Hábito",
    benefit: "Sostenibilidad real para que la organización sea parte de tu estilo de vida.",
    detail: "Pautas prácticas para sostener el hábito semana a semana sin agotamiento y disfrutando de tiempo libre con los tuyos.",
  },
];

// Curated high quality food photography from Unsplash strictly focused on real home batch-cooked recipes & meal prep containers
export const RECIPE_PHOTOS: RecipePhoto[] = [
  {
    placeholderId: "[ FOTO RECETA 01 ]",
    title: "Pechugas al Limón y Hierbas con Vegetales Asados",
    description: "Preparación por lotes para proteína magra jugosa que mantiene su frescura durante toda la semana.",
    tag: "Aves & Vegetales",
    imageUrl: "https://i.imgur.com/UXioabC.jpeg",
    fallbackUrl: "/assets/gallery-card-1.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 02 ]",
    title: "Bowls Mediterráneos de Quinoa, Legumbres y Verduras",
    description: "Combinaciones ricas en fibra y nutrientes listas en recipientes para calentar y servir al instante.",
    tag: "Legumbres & Granos",
    imageUrl: "https://i.imgur.com/fs9rQr3.jpeg",
    fallbackUrl: "/assets/gallery-card-2.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 03 ]",
    title: "Salmón al Horno con Espárragos y Papas Doradas",
    description: "Bandeja única al horno para resolver múltiples porciones saludables de forma simultánea.",
    tag: "Pescados & Horno",
    imageUrl: "https://i.imgur.com/98aQC9O.jpeg",
    fallbackUrl: "/assets/gallery-card-3.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 04 ]",
    title: "Guiso Casero de Lentejas y Vegetales con Especias",
    description: "Perfecto para congelar en porciones individuales o familiares con sabor concentrado reconfortante.",
    tag: "Guisos & Congelador",
    imageUrl: "https://i.imgur.com/7FNRKYO.jpeg",
    fallbackUrl: "/assets/gallery-card-4.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 05 ]",
    title: "Carne Desmechada en Salsa Casera de Tomates Asados",
    description: "Proteína versátil preparada en lote para usar en bowls, tacos saludables o con arroz integral.",
    tag: "Proteínas Versátiles",
    imageUrl: "https://i.imgur.com/bSD0M4a.jpeg",
    fallbackUrl: "/assets/gallery-card-5.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 06 ]",
    title: "Verduras Asadas al Romero y Aceite de Oliva",
    description: "Guarnición base lista para acompañar cualquier plato de la semana sin cocinar desde cero.",
    tag: "Acompañamientos",
    imageUrl: "https://i.imgur.com/qrNcKtB.jpeg",
    fallbackUrl: "/assets/gallery-card-6.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 07 ]",
    title: "Pollo Dorado al Horno con Especias y Limón",
    description: "Piezas jugosas sazonadas para descongelar y disfrutar con sabor a recién salido del horno.",
    tag: "Aves & Especias",
    imageUrl: "https://i.imgur.com/2xdZPoa.jpeg",
    fallbackUrl: "/assets/gallery-card-7.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 08 ]",
    title: "Cortes de Carne Salteados con Vegetales Mixtos",
    description: "Porciones listas con verduras crujientes y salsa ligera para cenas express.",
    tag: "Carnes & Salteados",
    imageUrl: "https://i.imgur.com/cCw0Ava.jpeg",
    fallbackUrl: "/assets/gallery-card-8.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 09 ]",
    title: "Filete de Pescado Blanco con Cítricos y Finas Hierbas",
    description: "Cocción suave que retiene toda la humedad y nutrientes esenciales para descongelar al instante.",
    tag: "Pescados & Cítricos",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    placeholderId: "[ FOTO RECETA 10 ]",
    title: "Contenedores de Batch Cooking con Granos y Vegetales Frescos",
    description: "Organización por porciones individuales para llevar al trabajo o resolver almuerzos en casa.",
    tag: "Meal Prep & Bowls",
    imageUrl: "https://i.imgur.com/xEOxc1A.jpeg",
    fallbackUrl: "/assets/gallery-card-10.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 11 ]",
    title: "Albóndigas Caseras en Salsa Rústica de Tomate",
    description: "Un clásico reconfortante que conserva su suavidad y textura ideal tras congelar.",
    tag: "Platos Caseros & Salsas",
    imageUrl: "https://i.imgur.com/95tkmMN.jpeg",
    fallbackUrl: "/assets/gallery-card-11.jpg",
  },
  {
    placeholderId: "[ FOTO RECETA 12 ]",
    title: "Snacks y Bocaditos Fit Dulces Porcionados",
    description: "Opciones saludables listas para calmar antojos sin romper tu plan de alimentación.",
    tag: "Snacks & Postres Fit",
    imageUrl: "https://i.imgur.com/I6ubdnC.jpeg",
    fallbackUrl: "/assets/gallery-card-12.jpg",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "testimonio-1",
    quote: "Hice el pollo al limón, lo congelé y nos rindió toda la semana. Sabía como si lo acabara de cocinar, nada de comida de congelador triste.",
    name: "Carolina Méndez",
    location: "Bogotá, Colombia",
  },
  {
    id: "testimonio-2",
    quote: "El plan de meal prep literalmente me cambió la vida. Llego del trabajo y la comida ya está lista. Cero estrés.",
    name: "Paula Santos",
    location: "Medellín, Colombia",
  },
  {
    id: "testimonio-3",
    quote: "Yo de cocina NADA, pero las recetas son a prueba de bobos. Saqué toda la semana en una tarde de domingo.",
    name: "Mariana Castro",
    location: "Cali, Colombia",
  },
  {
    id: "testimonio-4",
    quote: "No he botado comida ni una sola vez desde que lo compré. Solo con la lista de mercado me ahorré un montón este mes.",
    name: "Julia Olivera",
    location: "Barranquilla, Colombia",
  },
  {
    id: "testimonio-5",
    quote: "Soy intolerante a la lactosa y tener las etiquetas sin lácteos ahí mismo me hace la vida muchísimo más fácil.",
    name: "Fernanda Lima",
    location: "Cartagena, Colombia",
  },
  {
    id: "testimonio-6",
    quote: "Bajé casi 4 kilos en un mes comiendo estas comidas. Saludable, fácil y de verdad muy ricas.",
    name: "Beatriz Álvarez",
    location: "Bucaramanga, Colombia",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "¿Necesito saber cocinar para utilizar el método?",
    answer: "No. El método está diseñado paso a paso con instrucciones claras, directas y fáciles de seguir, incluso si tienes poca experiencia en la cocina.",
  },
  {
    question: "¿Cuánto tiempo necesito para hacer Batch Cooking?",
    answer: "El sistema está pensado para que dediques una sesión de preparación organizada (por ejemplo, 2 o 3 horas un fin de semana o tarde libre) para dejar resueltas las comidas de varios días de la semana.",
  },
  {
    question: "¿Qué necesito para comenzar?",
    answer: "Solo necesitas los utensilios básicos que ya tienes en tu cocina habitual (ollas, sartén o bandeja de horno) y recipientes adecuados (preferiblemente herméticos o de vidrio) para almacenar y conservar tus preparaciones.",
  },
  {
    question: "¿Puedo adaptar las recetas?",
    answer: "Totalmente. El método te enseña los principios de preparación y conservación, lo que te permite sustituir ingredientes según los gustos de tu familia, disponibilidad local o restricciones alimentarias.",
  },
  {
    question: "¿Chef Carol solo sirve para darme recetas?",
    answer: "No. Chef Carol es un complemento del método que te ayuda a generar ideas de comidas con lo que tienes a mano, apoyarte en la planificación culinaria y calcular macros y calorías de tus preparaciones.",
  },
  {
    question: "¿Los bonos están incluidos?",
    answer: "Los 3 bonos exclusivos (Sistema de Etiquetado e Inventario para el Congelador, Calendario Mensual de Planificación y 30 Menús Saludables para Todo el Mes) están incluidos en la Opción B — Método + Organización Completa por solo USD $3 adicionales.",
  },
  {
    question: "¿Cuál es la diferencia entre las dos opciones?",
    answer: "La Opción A (USD $6) incluye el sistema central del Método Inteligente de Batch Cooking, las Recetas Saludables de Cocina y el acceso a Chef Carol — Agente de IA. La Opción B (USD $9) incluye todo lo anterior más los 3 bonos de planificación, organización y menús mensuales.",
  },
  {
    question: "¿Hay garantía?",
    answer: "Sí. Tu compra cuenta con una garantía de satisfacción de 7 días [Supuesto]. Si durante los primeros 7 días consideras que el método no cumple con tus expectativas, podrás solicitar el reembolso siguiendo el procedimiento establecido por la plataforma de compra.",
  },
];

