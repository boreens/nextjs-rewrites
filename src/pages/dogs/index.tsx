import Link from 'next/link';

export default function DogsPage({
  dogs,
}: {
  dogs: any[];
}) {


  return (
    <>
      <h1>Dog breeds</h1>

      <ul>
        {dogs?.map(dog => (
          <li key={dog.id}>
            <Link href={`/hunder/${dog.id}`}>
              {dog.attributes.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getStaticProps() {
  const dogs = await fetch('https://dogapi.dog/api/v2/breeds')
  const data = await dogs.json();

  return {
    props: {
      dogs: data.data,
      revalidate: 3600, // Revalidate every hour
    },
  };
}
