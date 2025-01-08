function AboutSection() {
  return (
    <div className="flex-row justify-between w-full">
      <div className="flex justify-center bg-white h-auto w-full py-9">
        <img
          className="w-auto h-[350px]"
          src="/src/assets/FamilyPhoto.png"
          alt="Family Photo"
        />
      </div>
      <div className="flex flex-col items-end bg-gray-100 h-auto p-9">
        <h2 className="w-full text-right text-4xl mb-6">MY MISSION</h2>
        <p className="w-full text-right">
          It is my mission to redefine your real estate experience by putting
          your needs and goals first. I believe that God has positioned me in
          this industry to serve you with honesty, purpose and passion. I am
          committed to offering expert advice, 100% honesty, and acting in your
          best interest at all times. Whether buying or selling, I will fight to
          get you the best possible outcome, using innovative marketing
          strategies, daily efforts to find qualified buyers, and clear,
          proactive communication. I strive to make every step of your real
          estate journey smooth, enjoyable, and rewarding. By combining my
          passion for service with a deep dedication to professionalism, I aim
          to build lasting relationships and earn your trust and
          recommendations.
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
