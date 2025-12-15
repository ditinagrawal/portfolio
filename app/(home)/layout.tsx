import { Footer } from "@/components/shared/footer";
import { Header } from "@/components/shared/header";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="pt-16">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
