import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: {
    reviewsId: string;
    productId: string;
  };
}) {
  if (parseInt(params.reviewsId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>
        This is the review {params.reviewsId} of product {params.productId}
      </h1>
    </>
  );
}
