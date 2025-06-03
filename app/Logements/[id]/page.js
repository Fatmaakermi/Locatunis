'use client';


import DetailsLogementCard from "@/app/components/logementdetail";
import { logements } from "@/app/data/page";
import { notFound } from "next/navigation";
import { useParams } from 'next/navigation';


export default function LogementDetailsPage() {
  const { id } = useParams();
  const logement = logements.find((l) => l.id.toString() === id);

  if (!logement) return notFound();

  return (
    <main className="py-10">
      <DetailsLogementCard logement={logement} />
    </main>
  );
}