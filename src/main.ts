import "./scss/styles.scss";
import { Api } from "./components/base/Api";
import { ShopApi } from "./components/Communication/ShopApi";
import { Basket } from "./components/Models/Basket";
import { Buyer } from "./components/Models/Buyer";
import { Products } from "./components/Models/Products";
import { API_URL } from "./utils/constants";
import { apiProducts } from "./utils/data";

const api = new Api(API_URL);
const shopApi = new ShopApi(api);
const products = new Products();

products.setItems(apiProducts.items);
console.log("Тест каталога:", products.getItems());

const firstProduct = apiProducts.items[0];
const secondProduct = apiProducts.items[1];
products.setSelectedProduct(firstProduct);
console.log("Товар для просмотра:", products.getSelectedProduct());
console.log("Поиск товара по id:", products.getItem(firstProduct.id));

const basket = new Basket();
basket.addItem(firstProduct);
basket.addItem(secondProduct);
basket.addItem(firstProduct);
basket.addItem(apiProducts.items[2]);
console.log("Товары в корзине:", basket.getItems());
console.log("Количество товаров:", basket.getCount());
console.log("Стоимость корзины:", basket.getTotal());
console.log("Товар есть в корзине:", basket.hasItem(firstProduct.id));
basket.removeItem(firstProduct.id);
console.log("Корзина после удаления:", basket.getItems());
basket.clear();
console.log("Корзина после очистки:", basket.getItems());

const buyer = new Buyer();
console.log("Ошибки пустых данных покупателя:", buyer.validate());
buyer.setData({ payment: "card", address: "Москва" });
console.log("Ошибки первого шага:", buyer.validate(["payment", "address"]));
buyer.setData({ email: "buyer@example.com", phone: "+70000000000" });
console.log("Данные покупателя:", buyer.getData());
console.log("Ошибки заполненных данных:", buyer.validate());
buyer.clear();
console.log("Данные покупателя после очистки:", buyer.getData());

shopApi
  .getProductList()
  .then((response) => {
    products.setItems(response.items);
    console.log("Каталог с сервера:", products.getItems());
  })
  .catch((error: unknown) => {
    console.error("Не удалось получить каталог товаров:", error);
  });
