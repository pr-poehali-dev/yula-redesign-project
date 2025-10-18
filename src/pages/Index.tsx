import Header from '@/components/home/Header';
import Hero from '@/components/home/Hero';
import Advantages from '@/components/home/Advantages';
import Services from '@/components/home/Services';
import Portfolio from '@/components/home/Portfolio';
import OrderForm from '@/components/home/OrderForm';
import Contacts from '@/components/home/Contacts';
import Footer from '@/components/home/Footer';
import FloatingActions from '@/components/home/FloatingActions';

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={scrollToSection} />
      <Hero 
        onOrderClick={() => scrollToSection('order')} 
        onPortfolioClick={() => scrollToSection('portfolio')} 
      />
      <Advantages />
      <Services />
      <Portfolio />
      <OrderForm />
      <Contacts />
      <Footer onNavigate={scrollToSection} />
      <FloatingActions />
    </div>
  );
}
