import { Category } from "@/types/category.type";

export function generateCategoriesBreadcrumbItems(category?: Category | null) {
  const res: Category[] = [];

  let cur = category;

  while (cur) {
    res.push(cur);
    cur = cur.category;
  }

  return res.reverse();
}
