import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import heroRetrato from "@/assets/giovanna-hero.png.asset.json";
import logoTambani from "@/assets/logo-tambani.png.asset.json";
import sobreRetrato from "@/assets/giovanna-sobre.png.asset.json";
import {
  Smile,
  Scan,
  Shield,
  Star,
  Check,
  Sparkles,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  Stethoscope,
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
          alt="Dra. Giovanna Francini, cirurgiã-dentista e ortodontista da Clínica Tambani"
          className="h-full w-full object-cover object-[45%_center] md:object-[35%_center]"
        />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-center px-6 py-24 md:px-10"
      >
        <div className="max-w-xl">
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
            Cirurgiã-Dentista · Ortodontista
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              variants={titleRevealVariants}
              className="font-display text-5xl leading-[0.95] tracking-tight text-cream sm:text-6xl md:text-7xl"
            >
              Giovanna
              <span className="block text-cream">Francini</span>
            </motion.h1>
          </div>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-lg text-base font-light leading-relaxed text-cream/75 md:text-lg"
          >
            Transformar sorrisos com planejamento, conhecimento e cuidado — proporcionando saúde,
            confiança e autoestima.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gold px-8 py-4 text-deep shadow-lg shadow-gold/20 transition duration-500 hover:bg-cream hover:text-deep hover:shadow-xl hover:shadow-gold/30"
            >
              <Calendar className="h-5 w-5 transition-transform duration-500 group-hover:scale-110" />
              <span className="font-display text-lg font-medium">Agendar consulta</span>
              <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>

            <a
              href="#sobre"
              className="inline-flex items-center gap-2 border-b border-cream/25 pb-1 text-sm text-cream/70 transition hover:border-gold hover:text-gold"
            >
              Conheça meu trabalho
            </a>
          </motion.div>
        </div>
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
  { icon: Smile, b: "Sorriso desalinhado", t: "ou dentes apinhados, que incomodam na foto e no dia a dia." },
  { icon: AlignCenter, b: "Mordida cruzada", t: "ou aberta, causando desgaste e dificuldade ao mastigar." },
  { icon: Activity, b: "Dores na mandíbula", t: "rangidos e tensão que afetam sono e qualidade de vida." },
  { icon: Scan, b: "Insegurança com o sorriso", t: "que limita risos, fotos e interações sociais." },
  { icon: Sparkles, b: "Desejo de um sorriso mais harmônico", t: "com planejamento moderno e estético." },
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
        <SectionHeader index="01 — Reconhecimento">Seu sorriso pede atenção?</SectionHeader>

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
          <span className="font-display text-deep">Você não precisa continuar incomodado.</span>{" "}
          A ortodontia pode transformar sua saúde bucal, sua estética e a forma como você se sente
          ao sorrir — no seu tempo e com acompanhamento próximo.
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

  const credenciais = ["Cirurgiã-Dentista", "Especialista em Ortodontia", "Clínica Tambani"];

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative min-h-[110svh] overflow-hidden bg-deep font-sans"
    >
      <motion.img
        style={{ y: imageY, scale: imageScale }}
        src={sobreRetrato.url}
        alt="Dra. Giovanna Francini sentada, sorrindo"
        className="absolute inset-0 h-full w-full object-cover object-[75%_center]"
      />

      <div className="relative z-10 mx-auto flex min-h-[110svh] max-w-6xl items-center px-6 py-28 md:px-10 md:py-40">
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
            className="mt-6 text-base leading-relaxed text-cream/90"
          >
            Sou cirurgiã-dentista e ortodontista, dedicada a cuidar de sorrisos com técnica,
            estética e escuta ativa. Na Clínica Tambani, cada paciente recebe um plano de
            tratamento planejado para as suas necessidades.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-cream/90">
            Atendimento ético, atualizado e acolhedor — para que você se sinta segura em todas as
            etapas do seu processo ortodôntico.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
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
  const beneficios = [
    "Planejamento digital do tratamento",
    "Acompanhamento próximo e humanizado",
    "Tecnologia moderna e materiais estéticos",
    "Resultados funcionais e harmônicos",
  ];

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">
            Ortodontia na Clínica Tambani
          </p>
          <h2 className="font-display text-3xl leading-tight text-deep md:text-4xl">
            Uma abordagem moderna, estética e alinhada às suas necessidades.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-deep-soft">
            Cada sorriso é único. Por isso, combinamos diagnóstico preciso, tecnologia e atenção
            individual para oferecer tratamentos ortodônticos confortáveis e resultados duradouros.
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

const avaliacoes = ["Avaliação ortodôntica", "Aparelho autoligado", "Aparelho estético", "Manutenção e contenção"];

const beneficios = [
  { b: "Estética", t: "do sorriso e harmonia facial." },
  { b: "Função mastigatória", t: "melhorada para uma alimentação saudável." },
  { b: "Saúde bucal", t: "com higiene mais fácil e prevenção de desgastes." },
  { b: "Autoestima", t: "para sorrir, falar e viver com mais confiança." },
  { b: "Postura da mandíbula", t: "reduzindo tensões e desconfortos." },
];

function BeneficiosSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-deep md:text-5xl">
          O que a ortodontia pode
          <span className="block text-gold-deep">transformar no seu sorriso.</span>
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
    icon: Smile,
    t: "Ortodontia individual",
    d: "Avaliação, planejamento e tratamento personalizado para crianças, adolescentes e adultos.",
  },
  {
    icon: Stethoscope,
    t: "Aparelho fixo",
    d: "Correção de desalinhamentos, mordidas cruzadas e apinhamentos com acompanhamento regular.",
  },
  {
    icon: Shield,
    t: "Aparelho autoligado",
    d: "Mais conforto, menos atritos e consultas mais rápidas durante o tratamento.",
  },
  {
    icon: Sparkles,
    t: "Aparelho estético",
    d: "Opções de bráquetes cerâmicos e alinhadores para discrição no tratamento.",
  },
  {
    icon: Heart,
    t: "Odontopediatria",
    d: "Acompanhamento infantil para prevenir problemas e guiar o desenvolvimento dentofacial.",
  },
  {
    icon: Check,
    t: "Manutenção e contenção",
    d: "Cuidados após a retirada do aparelho para manter o resultado a longo prazo.",
  },
  {
    icon: Calendar,
    t: "Consulta de avaliação",
    d: "Exame clínico, discussão das queixas e apresentação do plano de tratamento ideal.",
  },
  {
    icon: Scan,
    t: "Documentação digital",
    d: "Radiografias, fotografias e modelos digitais para planejamento preciso.",
  },
  {
    icon: Star,
    t: "Harmonização do sorriso",
    d: "Planejamento estético para equilibrar dentes, gengiva e proporções do sorriso.",
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
          Ortodontia, aparelhos fixos, estéticos, autoligados, acompanhamento infantil e muito mais.
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
            Outras especialidades
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
            Atendimento para crianças, adolescentes, adultos e idosos.
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
          Antes da primeira consulta.
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
          A ortodontia é um
          <span className="block text-gold">processo de transformação.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70">
          Meu objetivo é cuidar do seu sorriso com técnica, estética e respeito, para que você
          sinta mais saúde, confiança e bem-estar em cada etapa. Se deseja iniciar esse processo,
          será um prazer recebê-lo.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-8 py-4 text-cream transition hover:border-gold hover:bg-gold/20"
        >
          Agendar consulta
          <ArrowUpRight className="h-4 w-4 text-gold" />
        </a>
        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-cream/45">
          — Dra. Giovanna Francini · Cirurgiã-Dentista · Ortodontista · Clínica Tambani
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
