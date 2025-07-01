import ProductDetail from "@/components/product-detail";
import { stripe } from "@/lib/stripe";
import React from "react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const productId = (await params).id;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });
  return <ProductDetail product={product} />;
}

export default ProductPage;
