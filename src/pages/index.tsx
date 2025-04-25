import HomePageHeader from "@/components/home-page/home-page-header";
import PageLayout from "@/components/ui/page-layout";

export default function Home() {
  return (
    <PageLayout className={`flex min-h-screen`}>
      <HomePageHeader />
    </PageLayout>
  );
}
