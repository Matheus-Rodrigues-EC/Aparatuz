import Image from "next/image";
import Header from "./_components/header";
import SearchInput from "./_components/search-input";
import banner from "../public/banner.png";
import BookingItem from "./_components/booking-item";
import { prisma } from "../lib/prisma";
import BarbershopItem from "./_components/barbershop-item";

const Home = async () => {
  const recommendedBarbershops = await prisma.barbershop.findMany({
    include: {
      services: true,
      bookings: true,
    },
    orderBy: { name: "asc" },
    take: 10,
  });

  const popularBarbershops = await prisma.barbershop.findMany({
    include: {
      services: true,
      bookings: true,
    },
    orderBy: { name: "desc" },
    take: 10,
  });

  return (
    <main>
      <Header />
      <div className="space-y-4 p-5">
        <SearchInput />
        <Image
          src={banner}
          alt="Agende agora!"
          sizes="100vw"
          className="h-auto w-full"
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Agendamentos
        </h2>
        <BookingItem
          serviceName="Corte de Cabelo"
          barbershopName="Barbearia do João"
          barbershopImage="https://utfs.io/f/988646ea-dcb6-4f47-8a03-8d4586b7bc21-16v.png"
          date={new Date()}
        />
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Barbearias
        </h2>
        <div className="[&:: -webkit-scrollbar]:hidden mb-5 flex gap-4 overflow-x-auto">
          {recommendedBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
        <h2 className="text-foreground text-xs font-semibold uppercase">
          Recomendados
        </h2>
        <div className="[&:: -webkit-scrollbar]:hidden mb-5 flex gap-4 overflow-x-auto">
          {popularBarbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
