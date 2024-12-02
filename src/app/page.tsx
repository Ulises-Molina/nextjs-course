import api from "@/api";
import Card from "@/components/card";
import SearchBox from "@/components/SearchBox";

export default async function HomePage({searchParams}: {searchParams: {q?: string}}) {
  const restaurants = await api.search(searchParams.q);

  return (
    <section>
      <SearchBox/>
      <section className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
      { restaurants.length > 0 ? restaurants.map((restaurant) => (
            <Card
              key={restaurant.name}
              description={restaurant.description}
              id={restaurant.id}
              image={restaurant.image}
              name={restaurant.name}
              ratings={restaurant.ratings}
              score={restaurant.score}
            />
        )): <p>No results with that name</p>}
      </section>
    </section>
  );
}
