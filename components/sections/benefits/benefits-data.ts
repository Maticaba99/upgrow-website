import { BarChart2, Settings2, Target } from "lucide-react";

export const benefits = [
  {
    icon: BarChart2,
    title: "Incremento en Ventas",
    value: "$100,000",
    description: "Alcanza un crecimiento exponencial en tus ingresos mensuales con nuestras estrategias comprobadas",
    type: "chart"
  },
  {
    icon: Target,
    title: "Posicionamiento de Marca",
    value: "10X",
    description: "Establece tu marca como líder indiscutible en tu industria y domina tu mercado objetivo",
    type: "icon"
  },
  {
    icon: Settings2,
    title: "Sistema Automatizado",
    value: "100%",
    description: "Implementa sistemas que permitan escalar tu negocio de manera eficiente y sostenible",
    type: "settings"
  }
] as const;