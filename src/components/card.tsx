"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import Image from "next/image";

function FavoriteButton({restaurant}: {
  restaurant: {
    id: string;
    name: string;
    image: string;
    description: string;
    score: number;
    ratings: number;
  };
}) {
  const isFavourite = window.localStorage.getItem('favorites')?.includes(restaurant.id)

  return (
    <button type="button" className={`text-red-500 text-xl ${isFavourite ? 'opacity-100' : 'opacity-20'}`}>♥</button>
  )
}

// Creamos un componente dinámico para que no se renderice en el servidor
const DynamicFavoriteButton = dynamic(async () => FavoriteButton, { ssr: false });

interface CardProps {
  id: string;
  key: string;
  name: string;
  image: string;
  score: number;
  ratings: number;
  description: string;
}

export default function Card({id,
key,
description,
image,
name,
ratings,
score,
}: CardProps) {

  const isFavourite = window.localStorage.getItem('favorites')?.includes(id)

  return (
    <article key={name}>
      <Link href={`/${id}`}>
      <Image
        alt={name}
        className="mb-3 h-[300px] w-full rounded object-cover shadow-md shadow-stone-800/50"
        height={300}
        src={image.trim()}
        width={500}
      />
      </Link>
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <Link href={`/${id}`}>{name}</Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{score}</span>
          <span className="font-normal opacity-75">({ratings})</span>
        </small>
        <DynamicFavoriteButton/>
      </h2>
      <p className="opacity-90">{description}</p>
    </article>
  );
}
