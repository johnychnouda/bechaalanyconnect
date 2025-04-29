import PageGrid from "@/components/ui/page-grid";
import PageLayout from "@/components/ui/page-layout";
import { dummyCategories } from "@/data/dummyCategories";
import React from "react";
import Category from "@/components/categories/category";
import { useTranslations } from "next-intl";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import CategoryBreadcrumbs from "@/components/categories/category-breadcrumbs";
export default function Categories({
  category,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(category);
  const t = useTranslations("header");

  return (
    <PageLayout className="flex flex-col min-h-screen gap-6 px-12 py-6">
      <CategoryBreadcrumbs category={category} />
      <PageGrid
        items={dummyCategories}
        label={category?.title?.toUpperCase() || t("categories")}
        renderItem={(item) => <Category category={item} />}
      />
    </PageLayout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id } = ctx.query;
  console.log(id);

  if (!id) {
    return {
      props: {
        category: null,
      },
    };
  }

  const mainId = (id as string[])[id?.length - 1];

  const category = dummyCategories.find((category) => category.id === +mainId);

  if (!category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      category,
    },
  };
}
