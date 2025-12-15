import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";
import { Container } from "@/components/ui/container";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="pt-16">
      <Header />
      <Container>{children}</Container>
      <Footer />
    </main>
  );
}
