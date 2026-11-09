import type { IBuyer, TErrors } from "../../types";

export class Buyer {
  private data: IBuyer = {
    payment: null,
    email: "",
    phone: "",
    address: "",
  };

  setData(data: Partial<IBuyer>): void {
    this.data = { ...this.data, ...data };
  }

  getData(): IBuyer {
    return this.data;
  }

  clear(): void {
    this.data = {
      payment: null,
      email: "",
      phone: "",
      address: "",
    };
  }

  validate(): TErrors {
    const errors: TErrors = {};

    if (!this.data.payment) {
      errors.payment = "Необходимо выбрать способ оплаты";
    }

    if (!this.data.email.trim()) {
      errors.email = "Необходимо указать email";
    }

    if (!this.data.phone.trim()) {
      errors.phone = "Необходимо указать телефон";
    }

    if (!this.data.address.trim()) {
      errors.address = "Необходимо указать адрес";
    }

    return errors;
  }
}
