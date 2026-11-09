import './scss/styles.scss';
import { Products } from './components/Models/Products';
import { Basket } from './components/Models/Basket';
import { Buyer } from './components/Models/Buyer';
import { apiProducts } from './utils/data';

const products = new Products();
products.setItems(apiProducts.items);
console.log('Каталог:', products.getItems());

const firstProduct = apiProducts.items[0];
products.setSelectedProduct(firstProduct);
console.log('Товар для просмотра:', products.getSelectedProduct());
console.log('Поиск товара по id:', products.getItem(firstProduct.id));

const basket = new Basket();
basket.addItem(firstProduct);
basket.addItem(apiProducts.items[1]);
basket.addItem(firstProduct); // Повторно тот же товар не должен добавиться
console.log('Корзина:', basket.getItems());
console.log('Количество:', basket.getCount());
console.log('Общая стоимость:', basket.getTotal());
console.log('Есть товар в корзине:', basket.hasItem(firstProduct.id));

basket.removeItem(firstProduct.id);
console.log('Корзина после удаления:', basket.getItems());
basket.clear();
console.log('Корзина после очистки:', basket.getItems());

const buyer = new Buyer();
console.log('Ошибки пустых данных покупателя:', buyer.validate());

buyer.setData({ payment: 'card', address: 'Москва' });
console.log('Ошибки первого шага:', buyer.validate(['payment', 'address']));

buyer.setData({ email: 'buyer@example.com', phone: '+70000000000' });
console.log('Данные покупателя:', buyer.getData());
console.log('Ошибки после заполнения:', buyer.validate());

buyer.clear();
console.log('Данные после очистки:', buyer.getData());