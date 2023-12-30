import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutListingsInput } from "./TripCreateNestedManyWithoutListingsInput";
import { WishlistCreateNestedManyWithoutListingsInput } from "./WishlistCreateNestedManyWithoutListingsInput";

export type ListingCreateInput = {
  description?: string | null;
  listingCreatedBy: UserWhereUniqueInput;
  locationData: InputJsonValue;
  locationType: string;
  mapData: InputJsonValue;
  photos: InputJsonValue;
  place: string;
  placeAmenities: InputJsonValue;
  placeSpace: InputJsonValue;
  price: number;
  title: string;
  trips?: TripCreateNestedManyWithoutListingsInput;
  wishlists?: WishlistCreateNestedManyWithoutListingsInput;
};
