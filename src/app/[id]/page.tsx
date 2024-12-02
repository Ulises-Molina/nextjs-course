import api from "@/api";
import Card from "@/components/card";

export async function generateMetadata({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}

export default async function RestaurantPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return (
    <Card
        key={restaurant.id}
        description={restaurant.description}
        image={restaurant.image}
        name={restaurant.name}
        ratings={restaurant.ratings}
        score={restaurant.score}
    />
);
}