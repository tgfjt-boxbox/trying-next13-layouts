import { Nav } from "../ui/Nav";
import { Footer } from "../ui/Footer";


export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <div>
      <Nav />
      <div id="content">
        {children}
      </div>
      <Footer />
    </div>
  );
}
