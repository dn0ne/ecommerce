import ProductDetail from "@/components/product-detail";
import { stripe } from "@/lib/stripe";
import React from "react";

async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const productId = (await params).id;
  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const plainProduct = JSON.parse(JSON.stringify(product));
  return <ProductDetail product={plainProduct} />;
}

export default ProductPage;
