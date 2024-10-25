import { PricePlansData } from "../components/PricingPlans/PricePlansType";

export const dataPricePlans: PricePlansData = [
  {
    id: 1,
    name: "Started",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum",
    primary: false,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "50€",
      },
      {
        id: 2,
        name: "/anual",
        price: "550€",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis 24/7",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: true,
      },
      {
        id: 3,
        name: "200 GB storage",
        active: false,
      },
      {
        id: 4,
        name: "Lorem ipsum lorem",
        active: false,
      },
      {
        id: 5,
        name: "Lorem ipsum lorem",
        active: false,
      },
    ],
  },
  {
    id: 2,
    name: "Advance",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum",
    primary: true,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "80€",
      },
      {
        id: 2,
        name: "/anual",
        price: "880€",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis 24/7",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: true,
      },
      {
        id: 3,
        name: "200 Gb storage",
        active: true,
      },
      {
        id: 4,
        name: "Lorem ipsum lorem",
        active: false,
      },
      {
        id: 5,
        name: "Lorem ipsum lorem",
        active: false,
      },
    ],
  },
  {
    id: 3,
    name: "Premium",
    description:
      "Lorem ipsum Lorem ipsum Lorem ipsum, Lorem ipsum Lorem ipsum Lorem ipsum",
    primary: false,
    prices: [
      {
        id: 1,
        name: "/mes",
        price: "100€",
      },
      {
        id: 2,
        name: "/anual",
        price: "1.100€",
      },
    ],
    features: [
      {
        id: 1,
        name: "Se envía mail gratis 24/7",
        active: true,
      },
      {
        id: 2,
        name: "Registro gratuito",
        active: true,
      },
      {
        id: 3,
        name: "200 Gb storage",
        active: true,
      },
      {
        id: 4,
        name: "Lorem ipsum lorem",
        active: true,
      },
      {
        id: 5,
        name: "Lorem ipsum lorem",
        active: true,
      },
    ],
  },
];
