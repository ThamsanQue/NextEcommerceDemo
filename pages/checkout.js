import dynamic from "next/dynamic";

const DynamicCheckout = dynamic(
  () => import("../components").then((mod) => mod.Checkout),
  {
    ssr: false,
  }
);
const checkout = () => {
  return (
    <>
      <DynamicCheckout />
    </>
  );
};

export default checkout;
