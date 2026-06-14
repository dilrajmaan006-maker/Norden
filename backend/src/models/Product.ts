import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  sizes: string[];
  colors: string[];
  stock: number;
  sku: string;
  supplier: {
    name: string;
    productId: string;
  };
  createdAt: Date;
  updatedAt: Date;
}

const ProductSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    images: [String],
    category: String,
    sizes: [String],
    colors: [String],
    stock: {
      type: Number,
      default: 0,
    },
    sku: String,
    supplier: {
      name: String,
      productId: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model<IProduct>('Product', ProductSchema);
