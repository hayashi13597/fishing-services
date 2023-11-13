import { ICartItems } from "./cart.type";

/**
 * CartServices help save cart product at localstorage
 * with many method help you dev good hahaha
 * Design with Hoài Nam
 */
class CartServices {
  _name = "carts";
  _maxAmmount = 10;
  _product: ICartItems[] =
    JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem(this._name) || ""
        : ""
    ) || [];
  _save() {
    const products = JSON.stringify(this._product);
    localStorage.setItem(this._name, products);
  }
  _isExist(id: string) {
    return this._product.some((p) => p.id === id);
  }

  add(data: ICartItems) {
    if (this._isExist(data.id)) {
      const findProduct = this.get(data.id);
      findProduct.amount++;
    } else {
      this._product.push(data);
    }
    this._save();
    return this;
  }
  delete(id: string) {
    this._product = this._product.filter((p) => p.id != id);
    this._save();
    return this;
  }
  updateAmount(id: string, amount: number) {
    if (this._isExist(id)) {
      const findProduct = this.get(id);
      findProduct.amount += amount;
      if (findProduct.amount >= this._maxAmmount) {
        findProduct.amount = this._maxAmmount;
      } else if (findProduct.amount < 1) {
        this.delete(id);
      }
      this._save();
    }

    return this;
  }
  get(id: string) {
    return this._product.find((p) => p.id === id) || undefined;
  }
  getAll() {
    return this._product;
  }
}
export default new CartServices();
