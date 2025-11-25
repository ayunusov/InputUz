import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ClientLogos } from "./components/ClientLogos";
import { Services } from "./components/Services";
import { LicensesTable } from "./components/LicensesTable";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <ClientLogos />
      <Services />
      <LicensesTable />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}