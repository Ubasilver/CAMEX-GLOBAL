import { Header } from '@/components/Header';
import { NinHub } from '@/components/NinHub';
import { ExpressServices } from '@/components/ExpressServices';
import { Footer } from '@/components/Footer';

function App() {
  return <div className="min-h-screen bg-cream">
    <Header />
    <main className="grid grid-cols-1 lg:grid-cols-2 border-b border-olive">
      <NinHub />
      <ExpressServices />
    </main>
    <Footer />
  </div>;
}

export default App;
