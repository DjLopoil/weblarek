import "./scss/styles.scss";
import { Api } from "./components/base/Api";
import { ShopApi } from "./components/Communication/ShopApi";
import { Products } from "./components/Models/Products";
import { API_URL } from "./utils/constants";

const api = new Api(API_URL);
const shopApi = new ShopApi(api);
const products = new Products();

shopApi
  .getProductList()
  .then((response) => {
    products.setItems(response.items);
    console.log("Каталог с сервера:", products.getItems());
  })
  .catch((error: unknown) => {
    console.error("Не удалось получить каталог товаров:", error);
  });
