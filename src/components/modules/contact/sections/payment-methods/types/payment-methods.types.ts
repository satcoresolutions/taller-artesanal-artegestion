export interface PaymentMethod {
  icon: string;
}

export interface PaymentMethodsContent {
  badge: string;

  title: string;

  description: string;

  methods: PaymentMethod[];
}