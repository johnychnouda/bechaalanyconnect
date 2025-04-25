import { Product } from "@/types/product.type";
import { dummyCategories } from "./category.dummy";

export const dummyProducts: Product[] = [
  {
    id: 1,
    title: "iPhone 15 Pro Max",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-7inch_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1692845702708",
    price: 1299.99,
    category: dummyCategories.find((c) => c.id === 10) || null,
  },
  {
    id: 2,
    title: "Samsung Galaxy S24 Ultra",
    image: "https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-s928-sm-s928bzgdeub-537000001?$650_519_PNG$",
    price: 1199.99,
    category: dummyCategories.find((c) => c.id === 11) || null,
  },
  // Electronics - Laptops
  {
    id: 3,
    title: "MacBook Pro M3",
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp14-spacegray-select-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1697311050000",
    price: 1999.99,
    category: dummyCategories.find((c) => c.id === 5) || null,
  },
  {
    id: 4,
    title: "Dell XPS 15",
    image: "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/xps-notebooks/xps-15-9530/media-gallery/black/notebook-xps-15-9530-t-black-gallery-1.psd?fmt=png-alpha&wid=1000&hei=1000",
    price: 1799.99,
    category: dummyCategories.find((c) => c.id === 5) || null,
  },
  // Clothing - Men's
  {
    id: 5,
    title: "Men's Casual T-Shirt",
    image: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/422990/item/usgoods_69_422990.jpg?width=1000",
    price: 29.99,
    category: dummyCategories.find((c) => c.id === 6) || null,
  },
  {
    id: 6,
    title: "Men's Denim Jeans",
    image: "https://levi.scene7.com/is/image/Levi/501-levis-original-fit-jeans_279940146_front?wid=1000&hei=1000",
    price: 49.99,
    category: dummyCategories.find((c) => c.id === 6) || null,
  },
  // Clothing - Women's
  {
    id: 7,
    title: "Women's Summer Dress",
    image: "https://img.abercrombie.com/is/image/anf/KIC_155-3183-0772-100_prod1?$product-details$",
    price: 39.99,
    category: dummyCategories.find((c) => c.id === 7) || null,
  },
  {
    id: 8,
    title: "Women's Blouse",
    image: "https://image.uniqlo.com/UQ/ST3/us/imagesgoods/444581/item/usgoods_69_444581.jpg?width=1000",
    price: 34.99,
    category: dummyCategories.find((c) => c.id === 7) || null,
  },
  // Home & Garden - Furniture
  {
    id: 9,
    title: "Modern Sofa",
    image: "https://www.ikea.com/us/en/images/products/morabo-sofa-grann-bomstad-golden-brown-wood__0602117_pe680186_s5.jpg?f=s",
    price: 899.99,
    category: dummyCategories.find((c) => c.id === 8) || null,
  },
  {
    id: 10,
    title: "Dining Table Set",
    image: "https://www.ikea.com/us/en/images/products/skogsta-dining-table-acacia__0546603_pe656255_s5.jpg?f=s",
    price: 1299.99,
    category: dummyCategories.find((c) => c.id === 8) || null,
  },
  // Home & Garden - Garden Tools
  {
    id: 11,
    title: "Professional Lawn Mower",
    image: "https://www.homedepot.com/product-images/100669667/svn/honda-self-propelled-lawn-mowers-hrn216vka-64_1000.jpg",
    price: 299.99,
    category: dummyCategories.find((c) => c.id === 9) || null,
  },
  {
    id: 12,
    title: "Garden Tool Set",
    image: "https://m.media-amazon.com/images/I/71VQqpRxIVL._AC_SL1500_.jpg",
    price: 89.99,
    category: dummyCategories.find((c) => c.id === 9) || null,
  },
];
