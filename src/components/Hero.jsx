const Hero = () => {
  return (
    <>
      <div className="relative flex justify-center items-center mb-8">
        <img
          src="/src/assets/images/piv.jpg"
          alt="piv Image"
          className="w-40 h-40 md:w-60 md:h-60 rounded-full shadow-md animate-wave"
        />
      </div>
      <section
        id="home"
        className="bg-gray-800 text-white h-screen flex flex-col justify-center items-center text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to My Portfolio
        </h2>
        <p className="text-lg md:text-2xl mb-8">
          Im a software engineer specializing in React development.
        </p>
        <a
          href="#projects"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          View My Work
        </a>
      </section>
    </>
  );
};

export default Hero;
