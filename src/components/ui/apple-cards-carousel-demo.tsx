"use client";

import { Card, Carousel, type CarouselItem } from "@/components/ui/apple-cards-carousel";
import aparelhoFixoImg from "@/assets/aparelho-fixo.jpg";
import alinhadoresImg from "@/assets/alinhadores.jpg";
import ortopedistaImg from "@/assets/ortopedista.jpg";
import diagnosticoImg from "@/assets/diagnostico.jpg";
import interceptacaoImg from "@/assets/interceptacao.jpg";
import manutencaoImg from "@/assets/manutencao.jpg";

const treatmentContent = (
  title: string,
  description: string,
  items: string[],
) => (
  <div className="space-y-8">
    <div className="rounded-[1.75rem] bg-cream p-6 md:p-8">
      <p className="text-sm font-medium uppercase tracking-[0.22em] text-gold-deep">Tratamento</p>
      <h4 className="mt-3 font-display text-3xl text-deep md:text-4xl">{title}</h4>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-deep-soft">{description}</p>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      {items.map((item) => (
        <div key={item} className="rounded-2xl border border-deep/10 bg-sand p-4 text-sm leading-relaxed text-deep-soft">
          {item}
        </div>
      ))}
    </div>
  </div>
);

const data: CarouselItem[] = [
  {
    category: "Aparelho fixo",
    title: "Sorriso alinhado",
    src: aparelhoFixoImg,
    content: treatmentContent(
      "Aparelho fixo",
      "Correção da mordida, do espaço e do alinhamento com acompanhamento firme e personalizado em cada etapa do tratamento.",
      [
        "Ajustes planejados com frequência ideal para cada caso.",
        "Melhora da função mastigatória e da estética facial.",
        "Acompanhamento individualizado para maior previsibilidade.",
      ],
    ),
  },
  {
    category: "Alinhadores",
    title: "Discrição e conforto",
    src: alinhadoresImg,
    content: treatmentContent(
      "Alinhadores transparentes",
      "Uma alternativa discreta para quem busca conforto, estética e previsibilidade, com etapas claras do início ao fim.",
      [
        "Planejamento digital com etapas objetivas.",
        "Remoção para alimentação e limpeza com praticidade.",
        "Tratamento com bom equilíbrio entre estética e funcionalidade.",
      ],
    ),
  },
  {
    category: "Ortopedista",
    title: "Crescimento guiado",
    src: ortopedistaImg,
    content: treatmentContent(
      "Aparelho ortopédico",
      "Atuação na fase de crescimento para orientar o desenvolvimento da arcada e reduzir a necessidade de intervenções mais complexas depois.",
      [
        "Intervenção precoce com melhor previsibilidade.",
        "Correção de padrões de crescimento e mordida.",
        "Atendimento com atenção às necessidades da criança e do adolescente.",
      ],
    ),
  },

  {
    category: "Diagnóstico",
    title: "Plano individualizado",
    src: diagnosticoImg,
    content: treatmentContent(
      "Planejamento ortodôntico",
      "Análise clínica e documental para que cada decisão seja baseada em diagnóstico, objetivos e conforto do paciente.",
      [
        "Documentação e exames detalhados.",
        "Estratégia personalizada para o seu caso.",
        "Explicação clara de etapas, prazos e cuidado durante o processo.",
      ],
    ),
  },

  {
    category: "Interceptação",
    title: "Tempo certo",
    src: interceptacaoImg,
    content: treatmentContent(
      "Ortodontia interceptiva",
      "Intervenção estratégica na infância e adolescência para prevenir problemas maiores, com mais qualidade de vida e menos complexidade no futuro.",
      [
        "Atenção ao momento ideal de tratamento.",
        "Prevenção de desgaste e comprometimento funcional.",
        "Melhor evolução e menor necessidade de correções prolongadas.",
      ],
    ),
  },

  {
    category: "Manutenção",
    title: "Resultado estável",
    src: manutencaoImg,
    content: treatmentContent(
      "Acompanhamento e contenção",
      "Cuidados de manutenção para preservar o resultado final, garantir estabilidade e manter o sorriso saudável a longo prazo.",
      [
        "Acompanhamento regular e orientações práticas.",
        "Contenção para estabilidade do resultado.",
        "Atendimento focado na manutenção da saúde e estética do sorriso.",
      ],
    ),
  },

];

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => <Card key={card.title} card={card} index={index} />);

  return (
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-36">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="mb-3 inline-block text-[0.65rem] font-bold uppercase tracking-[0.35em] text-gold-deep">
            ESPECIALIDADES & TRATAMENTOS
          </span>
          <h2 className="mx-auto max-w-3xl font-sans text-3xl font-bold leading-[1.18] tracking-tight text-deep sm:text-4xl md:text-5xl">
            Ortodontia pensada para <br className="hidden sm:inline" />
            <span className="font-serif italic font-normal text-gold-deep">cada etapa</span> da sua vida.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#525f61] md:text-lg">
            Diagnóstico sincero, planejamento individualizado e <strong className="font-semibold text-deep">opções de tratamento sob medida</strong> para crianças, adolescentes e adultos.
          </p>
        </div>

        <div className="mt-16">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}
