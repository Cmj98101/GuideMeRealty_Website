export const HomesSoldCarousel = () => {
  return (
    <div className="carousel carousel-center bg-neutral space-x-2 h-[300px]">
      <div className="carousel-item">
        <img src="/src/assets/SunCity_Property.jpg" alt="Pizza" />
      </div>
      <div className="carousel-item">
        <video src="/src/assets/Ranchero_Ariel.mp4" muted />
      </div>
      <div className="carousel-item">
        <img src="/src/assets/Victorville_Property.jpg" alt="Pizza" />
      </div>
    </div>
  );
};

export default HomesSoldCarousel;
