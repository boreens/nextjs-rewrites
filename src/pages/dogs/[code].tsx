export default function BreedPage({
  dog,
}: {
  dog: any;
}) {


  return (
    <>
      <h1>Single Breed Page</h1>

      <h2>{dog.attributes.name}</h2>
      <p>{dog.attributes.description}</p>
    </>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export async function getStaticProps(context) {
  const code = context.params?.code;

  const dog = await fetch(`https://dogapi.dog/api/v2/breeds/${code}`)
  const data = await dog.json();

  if (!data || !data.data) {
    return {
      notFound: true,
      revalidate: 1,
    };
  }

  return {
    props: {
      dog: data.data,
      revalidate: 3600, // Revalidate every hour
    },
  };
}
