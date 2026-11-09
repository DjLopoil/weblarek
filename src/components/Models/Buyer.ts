import type { IBuyer } from "../../types";

export class Buyer {
  private data: Partial<IBuyer> = {};

  setData(data: Partial<IBuyer>): void {
    this.data = { ...this.data, ...data };
  }

  //getData() возвращает копию объекта.
  getData(): Partial<IBuyer> {
    return { ...this.data };
  }

  clear(): void {
    this.data = {};
  }

  //validate() возвращает ошибки только для незаполненных полей.
  validate(
    fields: (keyof IBuyer)[] = ["payment", "address", "email", "phone"],
  ): Partial<Record<keyof IBuyer, string>> {
    const errors: Partial<Record<keyof IBuyer, string>> = {};
    const messages: Record<keyof IBuyer, string> = {
      payment: "Не выбран способ оплаты",
      address: "Укажите адрес",
      email: "Укажите email",
      phone: "Укажите телефон",
    };

    for (const field of fields) {
      if (!this.data[field]) {
        errors[field] = messages[field];
      }
    }

    return errors;
  }
}
