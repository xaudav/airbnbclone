import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";

export type ListingWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  listingCreatedBy?: UserWhereUniqueInput;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  photos?: JsonFilter;
  place?: StringFilter;
  placeAmenities?: JsonFilter;
  placeSpace?: JsonFilter;
  price?: FloatFilter;
  title?: StringFilter;
  trips?: TripListRelationFilter;
  wishlists?: WishlistListRelationFilter;
};
