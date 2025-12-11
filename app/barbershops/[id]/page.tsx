import { notFound } from "next/navigation";
import { prisma } from "../../../lib/prisma";
import Image from "next/image";
import { Avatar, AvatarImage } from "../../_components/ui/avatar";
import { Separator } from "../../_components/ui/separator";
import { PageSectionTitle } from "../../_components/page";
import ServiceItem from "../../_components/service-item";
import Footer from "./../../_components/footer";

const BarbershopPage = async (props: PageProps<"/barbershops/[id]">) => {
  const { id } = await props.params;

  const barbershop = await prisma.barbershop.findUnique({
    where: { id },
    include: { services: true },
  });
  if (!barbershop) {
    return notFound();
  }

  return (
    <>
      <div className="flex size-full flex-col items-start overflow-clip">
        <div className="relative h-[297px] w-full">
          <div className="absolute top-0 left-0 h-full w-full">
            <Image
              src={barbershop.imageUrl}
              alt={barbershop.name}
              fill
              className="rounded-b-xl object-cover"
            />
          </div>
        </div>

        <div className="space-y-2 p-4">
          <div className="flex items-center">
            <Avatar>
              <AvatarImage src={barbershop.imageUrl} alt={barbershop.name} />
            </Avatar>
            <h4 className="ml-2 text-xl font-bold">{barbershop.name}</h4>
          </div>
          <p className="text-muted-foreground text-md">{barbershop.address}</p>
        </div>

        <Separator className="my-4" />

        <div className="p-4">
          <PageSectionTitle>Sobre nós</PageSectionTitle>
          <p className="text-md text-muted-foreground text-justify">
            {barbershop.description}
          </p>
        </div>

        <Separator className="my-4" />

        <div className="w-full p-4">
          <PageSectionTitle>Serviços</PageSectionTitle>
          {barbershop.services.map((service) => (
            <ServiceItem key={service.id} service={service} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BarbershopPage;
