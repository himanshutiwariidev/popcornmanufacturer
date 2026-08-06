export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      
      <div className="hidden md:block h-[600px]">
        <img
          src="/banner.jpeg"
          alt="Freshly popped TipTop Kernels popcorn on the production line"
          className="h-full w-full object-cover"
        />
       
      </div>

      <div className="md:hidden h-[560px] ">
        <img
          src="/mobilebanner.jpeg"
          alt="Freshly popped TipTop Kernels popcorn on the production line"
          className="h-full w-full object-cover"
        />
       
      </div>


    </section>
  );
}
