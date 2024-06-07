import Container from 'rolnew/comp/Container';

export default function CategoriesComponent() {
  const categories = ['Restaurants', 'Museums', 'Hotels', 'Intercity'];

  return (
    <Container className="bg-[#223544] sm:py-8 py-6 text-center">
      <h2 className="text-center text-3xl font-bold mb-8">All Categories</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mx-6 px-14">
        {categories.map((category) => (
          <div key={category} className="text-center">
            <p className="text-lg mb-3">{category}</p>
            <p className="text-lg mb-3">{category}</p>
            <p className="text-lg mb-3">{category}</p>
            <p className="text-lg mb-3">{category}</p>
            <p className="text-lg mb-3">{category}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
