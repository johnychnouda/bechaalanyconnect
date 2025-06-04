import Category from "@/components/categories/category";
import HomePageHeader from "@/components/home-page/home-page-header";
import Product from "@/components/products/product";
import PageGrid from "@/components/ui/page-grid";
import PageLayout from "@/components/ui/page-layout";
import { dummyCategories } from "@/utils/category.dummy";
import { dummyProducts } from "@/utils/product.dummy";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("homePage");

  return (
    <PageLayout className={`flex flex-col min-h-screen gap-16 pb-32`}>
      <HomePageHeader />
      <section className="flex flex-col gap-20 px-12">
        <PageGrid
          items={dummyCategories}
          label={t("categories")}
          viewMoreHref="/categories"
          renderItem={(item) => <Category key={item.id} category={item} />}
        />
        <PageGrid
          items={dummyProducts}
          label={t("featuredProducts")}
          viewMoreHref="/products"
          itemsContainerClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          renderItem={(item) => <Product key={item.id} product={item} />}
        />
        <PageGrid
          items={dummyProducts}
          label={t("latestProducts")}
          viewMoreHref="/products"
          itemsContainerClassName="grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          renderItem={(item) => <Product key={item.id} product={item} />}
        />
      </section>
    </PageLayout>
  );
}
