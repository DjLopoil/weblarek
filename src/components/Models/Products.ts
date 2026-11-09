import type { IProduct } from "../../types";

export class Products {
  //items — каталог.
  private items: IProduct[] = [];
  //selectedProduct — товар, выбранный для просмотра.
  private selectedProduct: IProduct | null = null;

  //setItems и getItems записывают и возвращают каталог.
  setItems(items: IProduct[]): void {
    this.items = items;
  }

  getItems(): IProduct[] {
    return this.items;
  }

  //getItem ищет товар по id.
  getItem(id: string): IProduct | undefined {
    return this.items.find((item) => item.id === id);
  }

  //setSelectedProduct и getSelectedProduct сохраняют и возвращают выбранный товар.
  setSelectedProduct(product: IProduct): void {
    this.selectedProduct = product;
  }

  getSelectedProduct(): IProduct | null {
    return this.selectedProduct;
  }
}
