import { Category } from "@/types/category.type";

export const dummyCategories: Category[] = [
  {
    id: 1,
    title: "Electronics",
    image: "https://picsum.photos/seed/electronics/800/600",
    category: null,
  },
  {
    id: 2,
    title: "Clothing",
    image: "https://picsum.photos/seed/clothing/800/600",
    category: null,
  },
  {
    id: 3,
    title: "Home & Garden",
    image: "https://picsum.photos/seed/home-garden/800/600",
    category: null,
  },
  {
    id: 4,
    title: "Smartphones",
    image: "https://picsum.photos/seed/smartphones/800/600",
    category: {
      id: 1,
      title: "Electronics",
      image: "https://picsum.photos/seed/electronics/800/600",
      category: null,
    },
  },
  {
    id: 5,
    title: "Laptops",
    image: "https://picsum.photos/seed/laptops/800/600",
    category: {
      id: 1,
      title: "Electronics",
      image: "https://picsum.photos/seed/electronics/800/600",
      category: null,
    },
  },
  {
    id: 6,
    title: "Men's Clothing",
    image: "https://picsum.photos/seed/mens-clothing/800/600",
    category: {
      id: 2,
      title: "Clothing",
      image: "https://picsum.photos/seed/clothing/800/600",
      category: null,
    },
  },
  {
    id: 7,
    title: "Women's Clothing",
    image: "https://picsum.photos/seed/womens-clothing/800/600",
    category: {
      id: 2,
      title: "Clothing",
      image: "https://picsum.photos/seed/clothing/800/600",
      category: null,
    },
  },
  {
    id: 8,
    title: "Furniture",
    image: "https://picsum.photos/seed/furniture/800/600",
    category: {
      id: 3,
      title: "Home & Garden",
      image: "https://picsum.photos/seed/home-garden/800/600",
      category: null,
    },
  },
  {
    id: 9,
    title: "Garden Tools",
    image: "https://picsum.photos/seed/garden-tools/800/600",
    category: {
      id: 3,
      title: "Home & Garden",
      image: "https://picsum.photos/seed/home-garden/800/600",
      category: null,
    },
  },
  {
    id: 10,
    title: "iPhone",
    image: "https://picsum.photos/seed/iphone/800/600",
    category: {
      id: 4,
      title: "Smartphones",
      image: "https://picsum.photos/seed/smartphones/800/600",
      category: {
        id: 1,
        title: "Electronics",
        image: "https://picsum.photos/seed/electronics/800/600",
        category: null,
      },
    },
  },
  {
    id: 11,
    title: "Samsung",
    image: "https://picsum.photos/seed/samsung/800/600",
    category: {
      id: 4,
      title: "Smartphones",
      image: "https://picsum.photos/seed/smartphones/800/600",
      category: {
        id: 1,
        title: "Electronics",
        image: "https://picsum.photos/seed/electronics/800/600",
        category: null,
      },
    },
  },
];

export const dummyFeaturedCategories = [
  {
    id: 1,
    title: "Electronics",
    image: "https://picsum.photos/seed/electronics/800/600",
    category: null,
  },
  {
    id: 4,
    title: "Smartphones",
    image: "https://picsum.photos/seed/smartphones/800/600",
    category: {
      id: 1,
      title: "Electronics",
      image: "https://picsum.photos/seed/electronics/800/600",
      category: null,
    },
  },
  {
    id: 5,
    title: "Laptops",
    image: "https://picsum.photos/seed/laptops/800/600",
    category: {
      id: 1,
      title: "Electronics",
      image: "https://picsum.photos/seed/electronics/800/600",
      category: null,
    },
  },
  {
    id: 6,
    title: "Men's Clothing",
    image: "https://picsum.photos/seed/mens-clothing/800/600",
    category: {
      id: 2,
      title: "Clothing",
      image: "https://picsum.photos/seed/clothing/800/600",
      category: null,
    },
  },
];
