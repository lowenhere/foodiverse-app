import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus } from "lucide-react";

interface MenuItemCardProps {
  id: string;
  name: string;
  price: number;
  isAvailable: boolean;
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
  imageUrl?: string;
}

export default function MenuItemCard({
  id,
  name,
  price,
  isAvailable,
  initialQuantity,
  onQuantityChange,
  imageUrl,
}: MenuItemCardProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <Card className="w-full max-w-sm flex flex-col justify-between">
      <div className="relative">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-48 object-cover rounded-t-md"
          />
        )}
        <Badge
          variant={isAvailable ? "default" : "secondary"}
          className="absolute top-2 right-2"
        >
          {isAvailable ? "Available" : "Unavailable"}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>{name}</span>
        </CardTitle>
      </CardHeader>
      <CardFooter className="flex flex-col items-center mt-auto">
        <div className="flex justify-between items-center w-full">
          <p className="text-xl font-bold">${price.toFixed(2)}</p>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity - 1)}
              disabled={!isAvailable || quantity === 0}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="text-xl font-semibold">{quantity}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              disabled={!isAvailable}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
