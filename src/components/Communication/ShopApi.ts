import type {
  IApi,
  IOrder,
  IOrderResponse,
  IProductListResponse,
} from "../../types";

//ShopApi получает IApi через конструктор и использует его методы get и post.
//API_URL уже содержит базовую часть адреса /api/weblarek, поэтому в методы передаются только пути '/product/' и '/order/'.
export class ShopApi {
  constructor(private readonly api: IApi) {}

  //getProductList() запрашивает список товаров и типизирует ответ как IProductListResponse.
  getProductList(): Promise<IProductListResponse> {
    return this.api.get<IProductListResponse>("/product/");
  }

  //createOrder() передаёт заказ типа IOrder и возвращает ответ типа IOrderResponse.
  createOrder(order: IOrder): Promise<IOrderResponse> {
    return this.api.post<IOrderResponse>("/order/", order);
  }
}
