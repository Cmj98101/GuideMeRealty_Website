const ReviewSection = () => {
  const reviews = [
    {
      name: "Angel",
      review:
        "Chris did an amazing job throughout the whole selling process. He made it extremely easy and smooth. The only thing I had to do was accept an offer. He took care of everything. He managed the listing, the photos,the walkthroughs, pretty much everything. Kept constant communication with me and explained every detail to me. I couldn’t ask for a more professional, honest, easy to talk to realtor. I will always recommend Chris. 5/5.",
    },
    {
      name: "Geranda",
      review:
        "Working with Chris was the most amazing experience. This was my first time selling and purchasing a home and he made it very easy. When I tell people how fast my house sold they are in amazement because of the amount of days. He went above and beyond to get my house ready for showing. He was always available for me when I called. He went to open houses for me when I couldn't make it. He found the beautiful house that I'm living in now. Chris has become a good friend to me and my family. He has the best work ethic for anyone I've ever met in this business field.",
    },
    {
      name: "Katie",
      review:
        "Christopher helped me buy my first home and was a great support throughout the entire process. Christopher is kind, knowledgeable, and readily available should you have any questions. Being that it was my first time buying a home, I had a lot of questions, worries, and doubts, but Christopher was there every step of the way for me. I found my perfect first home, which I wasn’t sure would ever be possible, and it’s all thanks to Christopher.",
    },
    {
      name: "Rhona & Donnie",
      review:
        "It was obvious from the outset that Christopher loves this career and that's vital, as you don't want to work with an agent who is only interested in the bottom line. What we wanted was more important to him. He is truly a gentleman. He exhibited patience where sometimes we had none. He stressed how important it was for us to make sure we were happy with the home we were moving into. Many times we felt we were usurping too much of Christopher's time because he always made himself available. If it didn't work out, we would have definitely tapped Christopher to help us until we found what we were looking for.",
    },
    {
      name: "Rosa & David",
      review:
        "Our journey toward buying our home wasn’t easy, but we got through it with great success because we had you by our side. Thank you for your hard work, patience, and diligence along the way, and most of all, thank you for helping us find our dream home. We appreciate all you did. The work you PUT IN to verify, clarify, and to make sure we wouldn't get scammed in the process.",
    },
    {
      name: "Tineia",
      review:
        "Chris has been wonderful to work with! He worked so hard to find a property that was suited just for me! He is attentive, responds quickly and always follows through. When we found my condo the sellers accepted another offer and my offer was a backup. The first offer fell through while Chris was on a trip out of the country but he still took care of everything even from a completely opposite time zone! He suggested lenders to work with when I didn’t think I would qualify. He made sure to inform me about things like home warranties and helped me ask for things from the seller that I didn’t know I could request... More of the Review on Zillow.",
    },
  ];
  return (
    <div className="carousel w-full h-[400px]">
      {reviews.map((review) => (
        <div className="carousel-item  w-full bg-black flex-col justify-center items-center">
          <h3 className="text-white text-center ">{review.name}</h3>
          <p className="text-white text-center p-9">{review.review}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
