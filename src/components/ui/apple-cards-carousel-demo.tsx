"use client";

import { Card, Carousel, type CarouselItem } from "@/components/ui/apple-cards-carousel";
import aparelhoFixoImg from "@/assets/aparelho-fixo.png.asset.json";
import alinhadoresImg from "@/assets/alinhadores.png.asset.json";

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
    src: aparelhoFixoImg.url,
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
    src: alinhadoresImg.url,
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
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
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
    src: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop",
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
    <section className="bg-sand px-6 py-24 font-sans md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[0.65rem] uppercase tracking-[0.4em] text-gold-deep">Tratamentos</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-deep md:text-5xl">
            Ortodontia pensada para cada etapa da sua vida.
          </h2>
          <p className="mt-4 text-base text-deep-soft">
            Diagnóstico sincero, planejamento individualizado e opções de tratamento para crianças,
            adolescentes e adultos.
          </p>
        </div>

        <div className="mt-10">
          <Carousel items={cards} />
        </div>
      </div>
    </section>
  );
}
