import ToastButton from "@/components/Buttons/ToastButton";

const Home = () => {
  return (
    <section className="grid h-[78dvh] place-items-center md:h-[82dvh] lg:h-[84dvh]">
      <section className="space-y-4 px-6 text-center">
        <h1 className="text-3xl font-semibold lg:text-5xl">
          React + Vite Starter Kit
        </h1>

        <h2 className="text-lg lg:text-3xl">
          Production-grade React frontend starter template
        </h2>

        <ToastButton />
      </section>
    </section>
  );
};

export default Home;
