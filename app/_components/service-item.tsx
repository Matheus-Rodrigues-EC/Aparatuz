import { Button } from "./ui/button";
import { Card } from "./ui/card";
import Image from "next/image";

interface ServiceItemProps {
  service: {
    id: string;
    name: string;
    description: string;
    priceInCents: number;
    imageUrl: string;
  };
}

const ServiceItem = ({ service }: ServiceItemProps) => {
  return (
    <Card className="mb-4 w-full p-2">
      <div className="flex items-center space-x-3">
        <div>
          <Image
            src={service.imageUrl}
            alt="Service Image"
            width={140}
            height={140}
            className="rounded-lg object-cover"
          />
        </div>
        <div className="w-[75%] space-y-2">
          <h3 className="mt-2 text-lg font-semibold">{service.name}</h3>
          <p className="text-muted-foreground text-sm">{service.description}</p>
          
          <div className="flex justify-between items-center">
            <p className="text-sm font-semibold">
              R$ {(service.priceInCents / 100).toFixed(2)}
            </p>
            <Button className="rounded-lg" >Reservar</Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceItem;
