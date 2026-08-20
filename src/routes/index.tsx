import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRetrato from "@/assets/giovanna-hero.png.asset.json";
import logoTambani from "@/assets/logo-tambani.png.asset.json";
import sobreRetrato from "@/assets/giovanna-sobre.png.asset.json";
import AppleCardsCarouselDemo from "@/components/ui/apple-cards-carousel-demo";
import FAQSections from "@/components/ui/faq-sections";
import {
  Smile,
  Scan,
  Shield,
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Calendar,
  Heart,
  AlignCenter,
  Activity,
} from "lucide-react";

const SITE_URL = "https://clinicatambani.com.br";
const WHATSAPP_URL = "https://wa.me/5569000000000";

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#giovanna`,
  name: "Dra. Giovanna Francini",
  jobTitle: "Cirurgiã-Dentista · Ortodontista",
  url: SITE_URL,
  worksFor: { "@type": "Organization", name: "Clínica Tambani" },
  knowsAbout: [
    "Ortodontia",
    "Aparelho fixo",
    "Aparelho ortopédico",
    "Alinhadores transparentes",
    "Ortodontia interceptiva",
    "Odontologia Legal",
  ],
};

const faq = [
  {
    q: "Qual a idade ideal para começar o tratamento?",
    a: "A primeira avaliação pode ser feita a partir dos 7 anos, quando é possível interceptar alterações do desenvolvimento. Para adultos não há idade limite: dá para alinhar o sorriso em qualquer fase da vida.",
  },
  {
    q: "Alinhador transparente serve para o meu caso?",
    a: "Depende do diagnóstico. Na avaliação eu analiso mordida, espaço e objetivos, e indico entre aparelho fixo, ortopédico ou alinhador — sempre o que realmente faz sentido para você.",
  },
  {
    q: "Quanto tempo dura o tratamento?",
    a: "Varia com a complexidade do caso, em média de 12 a 36 meses. Você recebe o planejamento com as etapas explicadas de forma clara desde o início.",
  },
  {
    q: "Como é a primeira consulta?",
    a: "Conversamos sobre o que te incomoda, faço a avaliação clínica e apresento o plano de tratamento individualizado, com etapas, prazos e valores de forma transparente.",
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
      { title: "Dra. Giovanna Francini — Ortodontia Personalizada | Clínica Tambani" },
      {
        name: "description",
        content:
          "Cirurgiã-dentista e ortodontista na Clínica Tambani. Aparelhos fixos, ortopédicos e alinhadores transparentes com planejamento individualizado para crianças, adolescentes e adultos.",
      },
      { property: "og:title", content: "Dra. Giovanna Francini — Ortodontia Personalizada | Clínica Tambani" },
      {
        property: "og:description",
        content:
          "Transformar sorrisos com planejamento, conhecimento e cuidado: saúde, confiança e autoestima.",
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
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:wght@300;400;500;600;700&display=swap",
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
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.5], ["0px", "-40px"]);

  return (
    <section
      ref={targetRef}
      className="relative min-h-[100svh] overflow-hidden bg-deep font-sans text-cream"
    >
      {/* Full Bleed Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <img
          src={heroRetrato.url}
          alt="Dra. Giovanna Francini"
          className="h-full w-full object-cover object-[55%_center] md:object-[40%_center]"
        />
        {/* Sombra / degradê escuro focado na esquerda para leitura perfeita dos textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07080a] via-[#07080a]/90 via-50% to-transparent pointer-events-none md:w-[60%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/40 pointer-events-none" />
        {/* Degradê de fusão suave no rodapé do Hero */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />
      </motion.div>

      {/* Header Navigation Bar */}
      <header className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <div className="flex items-center gap-3">
          <img src={logoTambani.url} alt="Clínica Tambani" className="h-16 w-auto object-contain md:h-24" />
        </div>
        <nav className="hidden items-center gap-8 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-cream/90 md:flex">
          <a href="#sobre" className="transition hover:text-gold">Sobre</a>
          <a href="#tratamentos" className="transition hover:text-gold">Especialidades</a>
          <a href="#atendimento" className="transition hover:text-gold">Atendimento</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-cream/40 px-6 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-cream transition hover:border-gold hover:bg-gold hover:text-deep"
          >
            Contato
          </a>
        </nav>
      </header>

      {/* Hero Body Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[calc(100svh-120px)] max-w-7xl flex-col justify-center px-6 pb-20 pt-4 md:px-12"
      >
        <div className="max-w-2xl">
          <motion.p
            variants={itemVariants}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-gold"
          >
            ORTODONTIA — APARELHO FIXO — ALINHADORES
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              variants={titleRevealVariants}
              className="font-display text-5xl font-normal leading-[1.05] tracking-tight text-cream sm:text-6xl md:text-7xl"
            >
              Dra. Giovanna
              <span className="block font-normal italic text-gold">Francini</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-lg text-sm leading-relaxed text-cream/80 md:text-base"
          >
            Cirurgiã-dentista e ortodontista com especialização em alinhadores transparentes, aparelhos ortopédicos e diagnóstico individualizado.
          </motion.p>

          {/* Action Pills Row */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#sobre"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-deep shadow-md shadow-gold/20 transition hover:bg-cream hover:text-deep hover:shadow-lg"
            >
              Conheça a Giovanna
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-cream/30 bg-black/30 px-6 py-3.5 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-cream backdrop-blur-md transition hover:border-gold hover:bg-black/50 hover:text-gold"
            >
              Agendamento
              <ArrowUpRight className="h-3.5 w-3.5 text-gold" />
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
        <span className="text-[0.6rem] uppercase tracking-[0.4em] text-cream/50">Deslize</span>
        <motion.span
          animate={{ height: [12, 28, 12], opacity: [0.3, 1, 0.3] }}
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
      <p className="mb-4 text-[0.65rem] font-medium uppercase tracking-[0.4em] text-gold-deep">{index}</p>
      <h2 className="max-w-3xl font-display text-3xl font-normal leading-[1.12] tracking-tight text-deep sm:text-4xl md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

const itensReconhecimento = [
  {
    num: "1",
    titulo: "Estética & Alinhamento",
    detalhe: "Dentes desalinhados, apinhados ou com espaços indesejados.",
  },
  {
    num: "2",
    titulo: "Problemas de Mordida",
    detalhe: "Desencaixe dos dentes que causa desconforto ao mastigar ou desgaste precoce.",
  },
  {
    num: "3",
    titulo: "Insegurança ao Sorrir",
    detalhe: "Hesitação ou desconforto em fotos, reuniões e momentos sociais.",
  },
];

function GanchoSection() {
  return (
    <section className="relative bg-cream px-6 py-32 font-sans md:px-10 md:py-48 min-h-[85vh] flex items-center justify-center">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          01 — RECONHECIMENTO
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          O que pode estar incomodando <br className="hidden sm:inline" />
          o seu <span className="font-serif italic font-normal text-gold-deep">sorriso</span>?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          Identificar a causa é o primeiro passo para <strong className="font-semibold text-deep">conquistar o sorriso</strong> que você deseja.
        </p>

        {/* 3 Colunas com Espaçamento Amplo e Palavras-Chave em Negrito */}
        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">1.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Estética & Alinhamento</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Dentes <strong className="font-semibold text-deep">desalinhados</strong>, <strong className="font-semibold text-deep">apinhados</strong> ou com <strong className="font-semibold text-deep">espaços indesejados</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">2.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Problemas de Mordida</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Desencaixe dos dentes que causa <strong className="font-semibold text-deep">desconforto ao mastigar</strong> ou <strong className="font-semibold text-deep">desgaste precoce</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/80 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">3.</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Insegurança ao Sorrir</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Hesitação ou desconforto em <strong className="font-semibold text-deep">fotos</strong>, <strong className="font-semibold text-deep">reuniões</strong> e momentos sociais.
            </p>
          </motion.div>
        </div>

        <div className="mt-14">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-deep px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-cream shadow-md transition hover:bg-deep-soft hover:shadow-lg"
          >
            Quero avaliar meu caso
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

const sobreContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.05,
    },
  },
};

const sobreItemVariants = {
  hidden: {
    opacity: 0,
    y: 85,
    filter: "blur(14px)",
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    scale: 1,
    transition: {
      duration: 1.15,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

function SobreSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["2%", "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.12, 1.04, 1.12]);

  const credenciais = [
    "Cirurgiã-Dentista",
    "Formação completa em Ortodontia",
    "Especialista em Odontologia Legal",
    "Clínica Tambani",
  ];

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative min-h-[110svh] overflow-hidden bg-deep font-sans"
    >
      <motion.img
        style={{ y: imageY, scale: imageScale }}
        src={sobreRetrato.url}
        alt="Dra. Giovanna Francini sentada na cadeira"
        className="absolute inset-0 h-full w-full object-cover object-[20%_center] md:object-[15%_center]"
      />
      {/* Sombra / degradê preto carvão profundo (#07080a) focado no lado direito para o texto */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#07080a] via-[#07080a]/95 to-transparent pointer-events-none md:left-auto md:right-0 md:w-3/5" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07080a] via-transparent to-[#07080a]/40 pointer-events-none" />
      {/* Degradê de fusão suave no topo do Sobre com o Hero */}
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />
      {/* Degradê de fusão suave no rodapé do Sobre com o Reconhecimento */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#07080a] via-[#07080a]/85 to-transparent pointer-events-none z-10" />

      <div className="relative z-10 mx-auto flex min-h-[110svh] max-w-6xl items-center justify-end px-6 py-28 md:px-10 md:py-40">
        <motion.div
          variants={sobreContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="ml-auto max-w-xl"
        >
          <motion.p
            variants={sobreItemVariants}
            className="mb-5 text-[0.65rem] uppercase tracking-[0.4em] text-gold font-bold"
          >
            QUEM SOU
          </motion.p>
          <motion.h2
            variants={sobreItemVariants}
            className="font-sans text-4xl font-semibold leading-tight text-cream md:text-5xl"
          >
            Prazer, sou <span className="font-serif italic font-normal text-gold">Giovanna</span>.
          </motion.h2>
          <motion.p
            variants={sobreItemVariants}
            className="mt-6 text-base leading-relaxed text-cream/90"
          >
            Sou cirurgiã-dentista com dedicação especial à Ortodontia. Escolhi essa profissão pela
            possibilidade de cuidar da saúde e, ao mesmo tempo, transformar autoestima e qualidade
            de vida.
          </motion.p>
          <motion.p
            variants={sobreItemVariants}
            className="mt-4 text-base leading-relaxed text-cream/90"
          >
            Meu diferencial está em unir conhecimento técnico, planejamento individualizado e
            proximidade real com o paciente. Cada caso é único — e merece ser tratado como tal,
            com ética, transparência e honestidade sobre o que faz sentido para você.
          </motion.p>

          <motion.div
            variants={sobreItemVariants}
            className="mt-10 flex flex-wrap gap-3"
          >
            {credenciais.map((c) => (
              <span
                key={c}
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-4 py-2 text-xs text-cream/90"
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
  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          METODOLOGIA & CUIDADO
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          Como funciona o seu <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-gold-deep">atendimento</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          Tratamento planejado com clareza para você saber exatamente o que <strong className="font-semibold text-deep">esperar de cada etapa</strong>.
        </p>

        {/* 3 Passos Claras com Espaçamento Amplo */}
        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 1</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Consulta Inicial & Diagnóstico</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Conversamos em detalhes sobre <strong className="font-semibold text-deep">suas queixas</strong> e analisamos a <strong className="font-semibold text-deep">saúde da sua boca</strong>.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 2</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Planejamento do Tratamento</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Apresento de forma transparente as <strong className="font-semibold text-deep">melhores opções de aparelhos</strong>, prazos e custos.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-deep/10 bg-white/90 p-8 shadow-sm transition hover:shadow-md"
          >
            <span className="text-sm font-bold text-gold-deep">Passo 3</span>
            <h3 className="mt-3 font-sans text-lg font-bold text-deep">Acompanhamento Contínuo</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Consultas de manutenção no <strong className="font-semibold text-deep">ritmo ideal</strong>, cuidando do seu sorriso do início à contenção.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BeneficiosSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
          O QUE VOCÊ GANHA
        </span>
        <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
          O que você conquista com o <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-gold-deep">tratamento</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
          Resultados que vão além dos dentes alinhados e <strong className="font-semibold text-deep">impactam sua qualidade de vida</strong>.
        </p>

        {/* 3 Cartões Diretos com Destaques em Negrito */}
        <div className="mt-16 grid gap-8 text-left md:grid-cols-3">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Saúde Mastigatória</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Proteção dos dentes e <strong className="font-semibold text-deep">mastigação confortável</strong> sem dores ou desgastes.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Estética Natural</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Dentes alinhados e um <strong className="font-semibold text-deep">sorriso em sintonia natural</strong> com o seu rosto.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-3xl border border-gold/25 bg-[#f5f0e8] p-8 shadow-sm transition hover:shadow-md"
          >
            <h3 className="font-sans text-lg font-bold text-deep">Confiança no Dia a Dia</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#525f61]">
              Liberdade para <strong className="font-semibold text-deep">sorrir, falar em reuniões</strong>, fotos e momentos sociais com segurança.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const servicos = [
  {
    icon: Smile,
    t: "Aparelho fixo",
    d: "Correção de apinhamento, falta de espaço e problemas de mordida com acompanhamento regular.",
  },
  {
    icon: Sparkles,
    t: "Alinhadores transparentes",
    d: "Discrição e conforto para quem quer alinhar o sorriso sem aparecer o aparelho.",
  },
  {
    icon: Shield,
    t: "Aparelho ortopédico",
    d: "Guia o crescimento e corrige alterações de desenvolvimento em crianças e adolescentes.",
  },
  {
    icon: Scan,
    t: "Planejamento ortodôntico",
    d: "Documentação, diagnóstico e plano de tratamento individualizado antes de qualquer aparelho.",
  },
  {
    icon: Heart,
    t: "Ortodontia interceptiva",
    d: "Intervenção no momento certo da infância para evitar tratamentos mais complexos depois.",
  },
  {
    icon: Check,
    t: "Acompanhamento e contenção",
    d: "Manutenções e cuidado após o aparelho para manter o resultado a longo prazo.",
  },
  {
    icon: Calendar,
    t: "Consulta de avaliação",
    d: "Escuta da sua queixa, exame clínico e apresentação clara do caminho de tratamento.",
  },
];

function ServicosSection() {
  return <AppleCardsCarouselDemo />;
}

function FAQSection() {
  return <FAQSections items={faq.map((f) => ({ question: f.q, answer: f.a }))} />;
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-deep px-6 py-24 font-sans md:px-10 md:py-32">
      <img
        src="/DRACTA.png"
        alt="Dra. Giovanna Francini em atendimento"
        className="absolute inset-[-4%_0_-10%_0] h-[120%] w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/50" />

      <div className="relative z-10 mx-auto flex min-h-[420px] max-w-3xl items-end justify-center py-16 text-center md:min-h-[520px] md:py-24">
        <div className="max-w-md space-y-4">
          <p className="text-[0.65rem] uppercase tracking-[0.35em] text-gold/90">Seu sorriso merece cuidado</p>
          <h2 className="font-display text-2xl font-normal leading-tight text-white md:text-3xl">
            Comece pelo <span className="font-normal italic text-gold">diagnóstico certo</span>.
          </h2>
          <p className="text-sm leading-relaxed text-cream/80">
            Avaliação clara, planejamento individual e sorriso com mais confiança.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-white transition hover:border-gold hover:bg-gold/20"
          >
            Agendar consulta
            <ArrowUpRight className="h-4 w-4 text-gold" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <SobreSection />
      <GanchoSection />
      <ServicosSection />
      <AbordagemSection />
      <BeneficiosSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
