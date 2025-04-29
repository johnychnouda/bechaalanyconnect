import CategoryBreadcrumbs from "@/components/categories/category-breadcrumbs";
import PageLayout from "@/components/ui/page-layout";
import { dummyProducts } from "@/utils/product.dummy";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import React from "react";

export default function ProductPage({
  product,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <PageLayout className="flex flex-col min-h-screen gap-6 px-12 py-6">
      <CategoryBreadcrumbs category={product.category} product={product} />
    </PageLayout>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { id } = ctx.query;

  if (!id) {
    return {
      notFound: true,
    };
  }

  const product = dummyProducts.find((product) => product.id === +id!);

  if (!product) {
    return {
      notFound: true,
    };
  }

  return { props: { product } };
}
