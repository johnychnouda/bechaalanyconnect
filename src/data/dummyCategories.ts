import { Category } from "@/types/category.type";

export const dummyCategories: Category[] = [
  {
    id: 1,
    title: "Electronics",
    image: "/categories/electronics.jpg",
    category: null,
  },
  {
    id: 2,
    title: "Clothing",
    image: "/categories/clothing.jpg",
    category: null,
  },
  {
    id: 3,
    title: "Home & Garden",
    image: "/categories/home-garden.jpg",
    category: null,
  },
  {
    id: 4,
    title: "Smartphones",
    image: "/categories/smartphones.jpg",
    category: {
      id: 1,
      title: "Electronics",
      image: "/categories/electronics.jpg",
      category: null,
    },
  },
  {
    id: 5,
    title: "Laptops",
    image: "/categories/laptops.jpg",
    category: {
      id: 1,
      title: "Electronics",
      image: "/categories/electronics.jpg",
      category: null,
    },
  },
  {
    id: 6,
    title: "Men's Clothing",
    image: "/categories/mens-clothing.jpg",
    category: {
      id: 2,
      title: "Clothing",
      image: "/categories/clothing.jpg",
      category: null,
    },
  },
  {
    id: 7,
    title: "Women's Clothing",
    image: "/categories/womens-clothing.jpg",
    category: {
      id: 2,
      title: "Clothing",
      image: "/categories/clothing.jpg",
      category: null,
    },
  },
  {
    id: 8,
    title: "Furniture",
    image: "/categories/furniture.jpg",
    category: {
      id: 3,
      title: "Home & Garden",
      image: "/categories/home-garden.jpg",
      category: null,
    },
  },
  {
    id: 9,
    title: "Garden Tools",
    image: "/categories/garden-tools.jpg",
    category: {
      id: 3,
      title: "Home & Garden",
      image: "/categories/home-garden.jpg",
      category: null,
    },
  },
  {
    id: 10,
    title: "iPhone",
    image: "/categories/iphone.jpg",
    category: {
      id: 4,
      title: "Smartphones",
      image: "/categories/smartphones.jpg",
      category: {
        id: 1,
        title: "Electronics",
        image: "/categories/electronics.jpg",
        category: null,
      },
    },
  },
  {
    id: 11,
    title: "Samsung",
    image: "/categories/samsung.jpg",
    category: {
      id: 4,
      title: "Smartphones",
      image: "/categories/smartphones.jpg",
      category: {
        id: 1,
        title: "Electronics",
        image: "/categories/electronics.jpg",
        category: null,
      },
    },
  },
];

export const dummyFeaturedCategories = [
  {
    id: 1,
    title: "Electronics",
    image: "/categories/electronics.jpg",
    category: null,
  },
  {
    id: 4,
    title: "Smartphones",
    image: "/categories/smartphones.jpg",
    category: {
      id: 1,
      title: "Electronics",
      image: "/categories/electronics.jpg",
      category: null,
    },
  },
  {
    id: 5,
    title: "Laptops",
    image: "/categories/laptops.jpg",
    category: {
      id: 1,
      title: "Electronics",
      image: "/categories/electronics.jpg",
      category: null,
    },
  },
  {
    id: 6,
    title: "Men's Clothing",
    image: "/categories/mens-clothing.jpg",
    category: {
      id: 2,
      title: "Clothing",
      image: "/categories/clothing.jpg",
      category: null,
    },
  },
];
