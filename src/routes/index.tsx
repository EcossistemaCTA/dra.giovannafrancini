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
  { icon: Smile, b: "Dentes desalinhados", t: "ou apinhados, por falta de espaço." },
  { icon: AlignCenter, b: "Problemas de mordida", t: "que afetam mastigação e desgaste dos dentes." },
  { icon: Activity, b: "Alterações no desenvolvimento", t: "em crianças e adolescentes, que pedem intervenção no tempo certo." },
  { icon: Scan, b: "Vergonha de sorrir", t: "em fotos, conversas e no dia a dia." },
  { icon: Sparkles, b: "Vontade de mudar", t: "mas sem saber qual tratamento é o certo para o seu caso." },
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
        <SectionHeader index="01 — Reconhecimento">
          Algo no seu sorriso te incomoda?
        </SectionHeader>

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
          <span className="font-display text-deep">Quase sempre existe algo maior por trás.</span>{" "}
          Não é só sobre dentes alinhados: é sobre voltar a se sentir seguro para sorrir, falar e
          se relacionar. E isso começa com um diagnóstico bem feito.
        </motion.p>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-deep px-7 py-3.5 text-sm text-cream transition hover:bg-deep-soft"
        >
          Quero avaliar meu caso
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
        alt="Dra. Giovanna Francini sentada, sorrindo"
        className="absolute inset-0 h-full w-full object-cover object-center"
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
            Sou cirurgiã-dentista com dedicação especial à Ortodontia. Escolhi essa profissão pela
            possibilidade de cuidar da saúde e, ao mesmo tempo, transformar autoestima e qualidade
            de vida.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-cream/90">
            Meu diferencial está em unir conhecimento técnico, planejamento individualizado e
            proximidade real com o paciente. Cada caso é único — e merece ser tratado como tal,
            com ética, transparência e honestidade sobre o que faz sentido para você.
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
    "Diagnóstico e planejamento individualizado",
    "Cada etapa explicada de forma clara",
    "Atualização constante em novas tecnologias",
    "Indicação honesta: só o tratamento que faz sentido",
  ];

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">
            Como eu trabalho
          </p>
          <h2 className="font-display text-3xl leading-tight text-deep md:text-4xl">
            Tratamento planejado, humanizado e feito para o seu caso.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-deep-soft">
            Ética, responsabilidade, transparência, respeito e humanização são inegociáveis no meu
            atendimento. Antes de indicar qualquer aparelho, eu entendo o que você busca e explico
            o porquê de cada escolha.
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

const avaliacoes = [
  "Ortodontia interceptiva",
  "Planejamento ortodôntico",
  "Manutenção e contenção",
  "Clínica geral",
  "Odontologia Legal",
];

const beneficios = [
  { b: "Saúde", t: "mordida equilibrada e prevenção de desgastes e problemas futuros." },
  { b: "Função", t: "mastigação e fala mais confortáveis no dia a dia." },
  { b: "Estética", t: "harmonia entre dentes, sorriso e rosto." },
  { b: "Conforto", t: "tratamento no seu ritmo, com etapas previsíveis." },
  { b: "Confiança", t: "para sorrir, falar e se relacionar sem se esconder." },
];

function BeneficiosSection() {
  return (
    <section className="bg-cream px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-2xl font-display text-3xl leading-tight text-deep md:text-5xl">
          Muito mais do que
          <span className="block text-gold-deep">uma mudança estética.</span>
        </h2>
        <p className="mt-6 text-[0.65rem] uppercase tracking-[0.4em] text-deep-soft">
          O que você ganha
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
    <section className="bg-deep px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold">
          Meu compromisso
        </p>
        <h2 className="mt-6 font-display text-3xl leading-tight text-cream md:text-5xl">
          Que você termine o tratamento
          <span className="block text-gold">mais confiante e feliz consigo.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/70">
          Se algo no seu sorriso te incomoda, vamos conversar. Na avaliação eu entendo o seu caso e
          te mostro, com clareza, o melhor caminho — sem promessas vazias.
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
