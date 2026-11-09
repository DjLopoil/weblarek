export type ApiPostMethods = "POST" | "PUT" | "DELETE";

export interface IApi {
  get<T extends object>(uri: string): Promise<T>;
  post<T extends object>(
    uri: string,
    data: object,
    method?: ApiPostMethods,
  ): Promise<T>;
}

//TPayment ограничивает способ оплаты двумя допустимыми значениями.
export type TPayment = "card" | "cash";

//IProduct описывает один товар.
export interface IProduct {
  id: string;
  description: string;
  image: string;
  title: string;
  category: string;
  price: number | null;
}

//IBuyer описывает данные покупателя.
export interface IBuyer {
  payment: TPayment;
  email: string;
  phone: string;
  address: string;
}

//IOrder — отправляемый заказ.
export interface IOrder extends IBuyer {
  items: string[];
}

//IProductListResponse описывает ответ сервера со списком товаров.
export interface IProductListResponse {
  total: number;
  items: IProduct[];
}

//IOrderResponse — ответ сервера с id заказа и total стоимостью.
export interface IOrderResponse {
  id: string;
  total: number;
}
