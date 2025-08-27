import Hero from "@/components/Hero";
import ProductHighlights from "@/components/ProductHighlights";
import Image from "next/image";

export default function Home() {
  return (
   <section>
    <div>
 <Hero></Hero>
    </div>
   <div>
    <ProductHighlights></ProductHighlights>
   </div>
   </section>
   
  );
}
