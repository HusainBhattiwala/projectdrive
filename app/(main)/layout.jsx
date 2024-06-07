import Footer from 'components/shared/Footer';
import Header from 'components/shared/Header';

export default function RootLayout({ children }) {
  return (
    <>
      <div className="min-h-[80vh]">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
}
