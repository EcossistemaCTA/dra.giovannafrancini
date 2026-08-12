import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRetrato from "@/assets/giovanna-hero.png.asset.json";
import logoTambani from "@/assets/logo-tambani.png.asset.json";
import sobreRetrato from "@/assets/giovanna-sobre.png.asset.json";
import {
  Waves,
  CloudRain,
  Activity,
  HeartHandshake,
  Compass,
  BatteryLow,
  RefreshCw,
  Brain,
  Users,
  Repeat,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const SITE_URL = "https://clinicatambani.com.br";
const WHATSAPP_URL = "https://wa.me/5569000000000";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#giovanna`,
  name: "Giovanna Francini",
  jobTitle: "Psicóloga · Terapia Cognitivo-Comportamental",
  url: SITE_URL,
  worksFor: { "@type": "Organization", name: "Clínica Tambani" },
  knowsAbout: [
    "Terapia Cognitivo-Comportamental",
    "Ansiedade",
    "Depressão",
    "Avaliação psicológica",
    "Autoconhecimento",
  ],
};

const faq = [
  {
    q: "Como funciona a Terapia Cognitivo-Comportamental?",
    a: "A TCC parte do princípio de que nossos pensamentos influenciam nossas emoções e comportamentos. Identificamos padrões de pensamento que causam sofrimento e desenvolvemos estratégias práticas para promover mudanças.",
  },
  {
    q: "Preciso estar em crise para começar a terapia?",
    a: "Não. A terapia é para quem sofre, mas também para quem deseja se compreender melhor, desenvolver inteligência emocional e investir em qualidade de vida.",
  },
  {
    q: "Quem pode ser atendido?",
    a: "Atendo adolescentes, adultos e idosos. Cada fase da vida tem desafios específicos e a terapia oferece espaço seguro para compreendê-los.",
  },
  {
    q: "Você realiza avaliações psicológicas?",
    a: "Sim: concursos públicos, cirurgia bariátrica, laqueadura e vasectomia, sempre com responsabilidade técnica e ética profissional.",
  },
];

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Giovanna Francini — Psicóloga | Clínica Tambani" },
      {
        name: "description",
        content:
          "Psicóloga na Clínica Tambani. Terapia Cognitivo-Comportamental e avaliação psicológica para adolescentes, adultos e idosos, com escuta ética e acolhedora.",
      },
      { property: "og:title", content: "Dra. Giovanna Francini — Psicóloga | Clínica Tambani" },
      {
        property: "og:description",
        content:
          "Atendimento ético, acolhedor e baseado em evidências. Terapia Cognitivo-Comportamental e avaliações psicológicas.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: `${SITE_URL}${heroRetrato.url}` },
      { name: "twitter:image", content: `${SITE_URL}${heroRetrato.url}` },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(personLd) },
      { type: "application/ld+json", children: JSON.stringify(faqLd) },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap",
      },
      { rel: "preload", as: "image", href: heroRetrato.url },
    ],
  }),
  component: Home,
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.35 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const titleRevealVariants = {
  hidden: { y: "100%", rotate: 2 },
  visible: {
    y: "0%",
    rotate: 0,
    transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

function Hero() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-40px"]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-[100svh] overflow-hidden bg-deep font-sans text-cream"
    >
      <motion.div
        style={{ y: backgroundY, scale: backgroundScale }}
        className="absolute inset-0"
      >
        <img
          src={heroRetrato.url}
          alt="Dra. Giovanna Francini, psicóloga da Clínica Tambani"
          className="h-full w-full object-cover object-[45%_center] md:object-[35%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-transparent to-deep/20" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-6 py-24 md:px-10"
      >
        <motion.img
          variants={itemVariants}
          src={logoTambani.url}
          alt="Clínica Tambani"
          className="mb-10 w-40 md:w-52"
        />

        <motion.p
          variants={itemVariants}
          className="mb-4 text-[0.7rem] uppercase tracking-[0.45em] text-gold"
        >
          Psicóloga
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            variants={titleRevealVariants}
            className="font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl"
          >
            Giovanna
            <span className="block text-gold">Francini</span>
          </motion.h1>
        </div>

        <motion.p
          variants={itemVariants}
          className="mt-8 max-w-lg text-base font-light leading-relaxed text-cream/75 md:text-lg"
        >
          Terapia Cognitivo-Comportamental com escuta ética, acolhedora e baseada em evidências.
          Um espaço seguro para você se reconectar consigo mesma e viver com mais equilíbrio.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full border border-gold/40 bg-gold/10 px-8 py-4 backdrop-blur-md transition duration-500 hover:border-gold hover:bg-gold/20"
          >
            <span className="font-display text-lg text-cream">Agende</span>
            <span className="text-[0.65rem] uppercase tracking-[0.35em] text-gold">
              sua sessão
            </span>
            <ArrowUpRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>

          <a
            href="#sobre"
            className="inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/70 transition hover:border-gold hover:text-gold"
          >
            Conheça a abordagem
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-cream/50">Deslize</span>
        <motion.span
          animate={{ height: [12, 32, 12], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-gold"
        />
      </div>
    </section>
  );
}

function SectionHeader({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="mb-14">
      <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">{index}</p>
      <h2 className="max-w-3xl font-display text-3xl leading-tight text-deep sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

const itens = [
  { icon: RefreshCw, b: "Vivendo no automático,", t: "sem tempo para cuidar de si." },
  { icon: Brain, b: "Carregando culpa,", t: "sobrecarga e autocobrança." },
  { icon: Users, b: "Dificuldade de se posicionar", t: "e estabelecer limites." },
  { icon: Repeat, b: "Repetindo padrões familiares", t: "que não fazem mais sentido." },
  { icon: Sparkles, b: "Se afastando de quem você é", t: "para atender expectativas externas." },
];

function GanchoItem({ icon: Icon, b, t }: (typeof itens)[number]) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-start gap-4 rounded-2xl border border-deep/10 bg-white/70 p-6 transition hover:-translate-y-1 hover:border-gold/40"
    >
      <Icon className="mt-1 h-5 w-5 shrink-0 text-gold-deep" />
      <p className="text-sm leading-relaxed text-deep-soft">
        <span className="font-medium text-deep">{b}</span> {t}
      </p>
    </motion.div>
  );
}

function GanchoSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeader index="01 — Reconhecimento">Você se sente assim?</SectionHeader>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-5 md:grid-cols-3"
        >
          {itens.map((i) => (
            <GanchoItem key={i.b} {...i} />
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-14 max-w-2xl text-lg leading-relaxed text-deep-soft"
        >
          <span className="font-display text-deep">Você não precisa continuar nesse ciclo.</span>{" "}
          A psicoterapia pode ser o espaço seguro para se reconectar consigo, entender suas emoções
          e construir a vida que deseja, no seu tempo.
        </motion.p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep px-7 py-3.5 text-sm text-cream transition hover:bg-deep-soft"
        >
          Quero entender como funciona
          <ArrowUpRight className="h-4 w-4 text-gold" />
        </a>
      </div>
    </section>
  );
}

function SobreSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  const credenciais = ["Psicóloga clínica", "TCC · Avaliação psicológica", "Clínica Tambani"];

  return (
    <section id="sobre" ref={ref} className="relative overflow-hidden bg-deep font-sans">
      <motion.img
        style={{ y: imageY, scale: imageScale }}
        src={sobreRetrato.url}
        alt="Dra. Giovanna Francini sentada, sorrindo"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/90 to-deep/10" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-28 md:px-10 md:py-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-xl"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-[0.65rem] uppercase tracking-[0.4em] text-gold"
          >
            02 — Quem sou
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl leading-tight text-cream md:text-5xl"
          >
            Prazer, sou Giovanna.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-6 text-base leading-relaxed text-cream/75"
          >
            Sou psicóloga e dedico minha carreira a ajudar pessoas a compreenderem suas emoções e a
            enfrentarem desafios com mais equilíbrio, dentro da Clínica Tambani.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-cream/75">
            Atendimento ético, acolhedor e baseado em evidências — cada processo terapêutico é
            construído de forma individual, no seu tempo.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {credenciais.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs text-cream/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {c}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function AbordagemSection() {
  const beneficios = [
    "Prática dentro da sua rotina",
    "Foco em resultados sustentáveis",
    "Acolhimento e escuta ativa",
    "Abordagem baseada em evidências",
  ];

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">
            Terapia Cognitivo-Comportamental
          </p>
          <h2 className="font-display text-3xl leading-tight text-deep md:text-4xl">
            Uma abordagem prática, sensível e alinhada ao seu momento.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-deep-soft">
            Aqui a terapia é pensada para melhorar seu dia a dia, ajudando a transformar
            comportamento, emoções e relações com clareza e respeito.
          </p>
        </div>

        <div className="space-y-4">
          {beneficios.map((texto, idx) => (
            <motion.div
              key={texto}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex items-center gap-5 border-b border-deep/10 pb-4"
            >
              <span className="font-display text-2xl text-gold-deep">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <p className="text-base text-deep">{texto}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const avaliacoes = ["Concursos públicos", "Cirurgia bariátrica", "Laqueadura", "Vasectomia"];

const beneficios = [
  { b: "Clareza", t: "sobre o que sente e deseja." },
  { b: "Leveza", t: "para lidar com os desafios diários." },
  { b: "Posicionamento", t: "e limites saudáveis." },
  { b: "Ressignificação de padrões", t: "que bloqueiam seu crescimento." },
  { b: "Autoestima e confiança", t: "para decidir com segurança." },
];

function BeneficiosSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-deep md:text-5xl">
          O que a psicoterapia pode
          <span className="block text-gold-deep">transformar na sua vida.</span>
        </h2>
        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.4em] text-deep-soft">
          Lista de benefícios
        </p>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {beneficios.map((i) => (
            <motion.div
              key={i.b}
              variants={fadeUp}
              className="rounded-2xl border border-deep/10 bg-white/70 p-7"
            >
              <p className="text-base leading-relaxed text-deep-soft">
                <span className="font-display text-xl text-deep">{i.b}</span> {i.t}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const servicos = [
  {
    icon: HeartHandshake,
    t: "Psicoterapia individual",
    d: "Online e presencial. Um espaço seguro para compreender emoções, padrões e viver com mais equilíbrio.",
  },
  {
    icon: Waves,
    t: "Ansiedade",
    d: "Preocupações que não cessam, tensão constante e sintomas físicos como taquicardia e insônia.",
  },
  {
    icon: CloudRain,
    t: "Depressão",
    d: "Perda de energia, desânimo persistente e dificuldade de sentir prazer no que antes fazia sentido.",
  },
  {
    icon: Activity,
    t: "Transtornos do humor",
    d: "Oscilações intensas entre tristeza e euforia que impactam a rotina, o sono e as relações.",
  },
  {
    icon: Users,
    t: "Orientação familiar",
    d: "Apoio para melhorar a comunicação, fortalecer vínculos e atravessar desafios em conjunto.",
  },
  {
    icon: Compass,
    t: "Autoconhecimento",
    d: "Um espaço para compreender padrões e fazer escolhas mais alinhadas com você.",
  },
  {
    icon: BatteryLow,
    t: "Estresse e esgotamento",
    d: "Cansaço que não passa, sobrecarga e sinais de burnout no trabalho e na vida pessoal.",
  },
  {
    icon: Brain,
    t: "Avaliação psicológica",
    d: "Laudos para concursos, cirurgia bariátrica, laqueadura e vasectomia, com rigor técnico.",
  },
  {
    icon: Repeat,
    t: "Relacionamentos",
    d: "Conflitos afetivos, familiares e dificuldades de comunicação que geram sofrimento recorrente.",
  },
];

function ServicosSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollCards = (direction: number) => {
    if (!scrollerRef.current) return;
    const cardWidth = scrollerRef.current.firstElementChild?.clientWidth ?? 320;
    scrollerRef.current.scrollBy({ left: direction * (cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-3xl leading-tight text-deep md:text-5xl">
          Serviços oferecidos
        </h2>
        <p className="mt-4 max-w-xl text-base text-deep-soft">
          Apoio para ansiedade, depressão, relacionamentos, autoconhecimento e mais.
        </p>

        <div className="mt-8 flex gap-3">
          <button
            type="button"
            onClick={() => scrollCards(-1)}
            aria-label="Ver cards anteriores"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-deep/10 bg-white text-deep shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold-deep"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollCards(1)}
            aria-label="Ver próximos cards"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-deep/10 bg-white text-deep shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold-deep"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div
          ref={scrollerRef}
          className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {servicos.map(({ icon: Icon, t, d }) => (
            <article
              key={t}
              className="w-[300px] shrink-0 snap-start rounded-3xl border border-deep/10 bg-white p-8 transition hover:-translate-y-1 hover:border-gold/40 sm:w-[340px]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-gold-deep">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-6 font-display text-xl text-deep">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-deep-soft">{d}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold-deep">
                Saber mais
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-deep/10 bg-white/70 p-8">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">
            Avaliações psicológicas
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {avaliacoes.map((a) => (
              <span
                key={a}
                className="rounded-full border border-deep/10 px-4 py-2 text-sm text-deep"
              >
                {a}
              </span>
            ))}
          </div>
          <p className="mt-6 text-sm text-deep-soft">
            Atendimento para adolescentes, adultos e idosos.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display text-3xl leading-tight text-deep md:text-5xl">
          Antes da primeira sessão.
        </h2>

        <div className="mt-12 divide-y divide-deep/10 border-y border-deep/10">
          {faq.map((f, idx) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="flex items-start gap-4 font-display text-lg text-deep md:text-xl">
                  <span className="text-sm text-gold-deep">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  {f.q}
                </span>
                <span className="text-2xl text-gold-deep transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-2xl pl-9 text-sm leading-relaxed text-deep-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="bg-deep px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold">
          Meu compromisso com você
        </p>
        <h2 className="mt-6 font-display text-3xl leading-tight text-cream md:text-5xl">
          A psicoterapia é um
          <span className="block text-gold">processo de transformação.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70">
          Meu objetivo é caminhar ao seu lado para que você compreenda melhor suas emoções,
          desenvolva novas formas de enfrentar os desafios da vida e alcance mais qualidade de
          vida. Se deseja iniciar esse processo, será um prazer acolher você.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-cream transition hover:border-gold hover:bg-gold/20"
        >
          Agendar sessão
          <ArrowUpRight className="h-4 w-4 text-gold" />
        </a>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-cream/45">
          — Dra. Giovanna Francini · Psicóloga · Clínica Tambani
        </p>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <GanchoSection />
      <SobreSection />
      <AbordagemSection />
      <BeneficiosSection />
      <ServicosSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
