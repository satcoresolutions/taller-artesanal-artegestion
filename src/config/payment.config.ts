export type PaymentMethodKey =
  | "nequi"
  | "daviplata"
  | "paypal"
  | "visa"
  | "american"
  | "discover"
  | "pse";

export interface PaymentMethodItem {
  icon: string;

  href?: string;
}

export type PaymentMethodsConfig =
  Record<
    PaymentMethodKey,
    PaymentMethodItem
  >;

export const paymentMethodsConfig: PaymentMethodsConfig = {
  nequi: {
    icon:
      "/images/payments/nequi.webp",
  },

  daviplata: {
    icon:
      "/images/payments/daviplata.webp",
  },

  paypal: {
    icon:
      "/images/payments/paypal.png",

    href:
      "https://www.paypal.com",
  },

  visa: {
    icon:
      "/images/payments/visa-master.png",

    href:
      "https://www.visa.com",
  },

  american: {
    icon:
      "/images/payments/american.png",

    href:
      "https://www.mastercard.com",
  },

  discover: {
    icon:
      "/images/payments/discover.png",

    href:
      "https://www.mastercard.com",
  },

  pse: {
    icon:
      "/images/payments/pse.webp",

    href:
      "https://www.mastercard.com",
  },
};