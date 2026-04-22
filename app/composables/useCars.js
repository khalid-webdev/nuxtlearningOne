import cars from '@/data/car.json';
import makes from "@/data/makes.json"
import listings from '@/data/listings.json';
export const useCars =()=>{
  return{
    cars,
    makes,
    listings
  }
}
