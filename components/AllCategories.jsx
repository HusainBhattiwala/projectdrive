import Container from 'rolnew/comp/Container';
import Title from 'rolnew/section/home/Title';

export default function CategoriesComponent({ categoriesData }) {
  const categories = ['Restaurants', 'Museums', 'Hotels', 'Intercity'];

  return (
    <Container className="bg-[#223544] sm:py-8 py-6 text-center">
      <Title
        subTitle={categoriesData?.subTitle}
        mainTitle={categoriesData?.title}
        description=""
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 mx-6 px-14 mt-7">
        {categoriesData ? (
          <>
            {' '}
            {categoriesData?.categories.map((category) => (
              <div key={category} className="text-center">
                <p className="text-lg mb-3">{category}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            {' '}
            {categories.map((category) => (
              <div key={category} className="text-center">
                <p className="text-lg mb-3">{category}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </Container>
  );
}
