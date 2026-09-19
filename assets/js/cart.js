/* Alana Lou Productions LLC — ALPCart
   Small localStorage-backed cart API shared by services/packages/products,
   cart.html and checkout.html. */

const ALPCart = (function () {
  const STORAGE_KEY = "alp_cart_items";

  function readItems() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch (err) {
      return [];
    }
  }

  function writeItems(items) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (err) {
      /* localStorage unavailable (private mode, quota) — cart just won't persist */
    }
    document.dispatchEvent(new CustomEvent("alp-cart-updated", { detail: { items } }));
  }

  function add(item, qty) {
    qty = qty && qty > 0 ? qty : 1;
    const items = readItems();
    const existing = items.find((i) => i.id === item.id);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({
        id: item.id,
        name: item.name,
        price: item.price,
        unit: item.unit || "",
        image: item.image || "",
        qty: qty
      });
    }
    writeItems(items);
    return items;
  }

  function remove(id) {
    const items = readItems().filter((i) => i.id !== id);
    writeItems(items);
    return items;
  }

  function updateQty(id, qty) {
    let items = readItems();
    if (qty <= 0) {
      items = items.filter((i) => i.id !== id);
    } else {
      const existing = items.find((i) => i.id === id);
      if (existing) existing.qty = qty;
    }
    writeItems(items);
    return items;
  }

  function clear() {
    writeItems([]);
  }

  function getItems() {
    return readItems();
  }

  function count() {
    return readItems().reduce((sum, i) => sum + i.qty, 0);
  }

  function subtotal() {
    return readItems().reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function formatMoney(amount) {
    return "$" + Number(amount).toFixed(2);
  }

  return { add, remove, updateQty, clear, getItems, count, subtotal, formatMoney };
})();
