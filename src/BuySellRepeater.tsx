import RepeaterItem from "./RepeaterItem";

function BuySellRepeater() {
  return (
    <div className="flex flex-col bg-neutral">
      <RepeaterItem
        imgSrc="/src/assets/Kitchen.jpg"
        title="For Buyers"
        buttonName="Buy a Property"
      >
        If you’re looking for a forever agent who is invested in helping your
        family build generational wealth, you’ve found your girl. Let’s chat
        about how I can help.
      </RepeaterItem>
      <RepeaterItem
        imgSrc="/src/assets/Property.jpg"
        title="For Sellers"
        buttonName="Sell a Property"
      >
        Even in a market that’s moving at warp speed, your property deserves to
        get every ounce of admiration it deserves to get you top dollar.
      </RepeaterItem>
    </div>
  );
}

export default BuySellRepeater;
