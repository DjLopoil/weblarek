import type { IProduct } from "../../types";

export class Basket {
  private items: IProduct[] = [];

  getItems(): IProduct[] {
    return this.items;
  }

  //addItem проверяет товар по id, чтобы один и тот же товар нельзя было добавить повторно.
  addItem(item: IProduct): void {
    if (!this.hasItem(item.id)) {
      this.items.push(item);
    }
  }

  //removeItem принимает именно id и удаляет соответствующий товар.
  removeItem(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  clear(): void {
    this.items = [];
  }

  getTotal(): number {
    return this.items.reduce((total, item) => total + (item.price ?? 0), 0);
  }

  getCount(): number {
    return this.items.length;
  }

  hasItem(id: string): boolean {
    return this.items.some((item) => item.id === id);
  }
}
