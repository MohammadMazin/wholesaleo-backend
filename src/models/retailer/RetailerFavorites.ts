import mongoose, { Document, Schema } from "mongoose";

export interface IRetailerFavorites {
  retailerId: string;
  itemId: mongoose.Types.ObjectId;
}

export interface IRetailerFavoritesModel extends IRetailerFavorites, Document {}

const RetailerFavoritesSchema: Schema = new Schema({
  retailerId: { type: Schema.Types.ObjectId, ref: "Retailer", required: true },
  itemId: {
    type: Schema.Types.ObjectId,
    ref: "Item",
    required: true,
  },
});

export default mongoose.model<IRetailerFavoritesModel>(
  "RetailerFavorites",
  RetailerFavoritesSchema
);