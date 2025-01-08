function Hero() {
  return (
    <>
      <div className="w-full h-auto relative bg-black xl:h-[800px] ">
        <video
          className=" object-cover relative opacity-20 xl:h-[800px]"
          width="100%"
          height="auto"
          autoPlay
          muted
          loop
        >
          <source src="/src/assets/HeroVideo.mp4" typeof="video/mp4" />
        </video>
      </div>

      <div className="absolute flex flex-col items-center justify-center space-y-3 z-[2] ">
        <h1 className=" text-3xl text-center text-white">GET THE BEST DEAL</h1>
        <div className=" bg-white w-[50px] h-[2px]"></div>
        <h2 className=" text-1xl text-center text-white">
          Whether You’re <span className="text-yellow-500">Buying</span> or{" "}
          <span className="text-yellow-500">Selling</span>
        </h2>
        <button
          type="button"
          className="uppercase text-white bg-black rounded-none py-3 px-6"
        >
          Start Now!
          <a href="#about"></a>
        </button>
      </div>
    </>
  );
}

export default Hero;
