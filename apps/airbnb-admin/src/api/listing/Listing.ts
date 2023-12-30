import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";

export type Listing = {
  createdAt: Date;
  description: string | null;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  place: string;
  placeAmenities: JsonValue;
  placeSpace: JsonValue;
  price: number;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishlists?: Array<Wishlist>;
};
