import CustomLogo from "./CustomLogo";

const ExclusiveListingsForm = () => {
  return (
    <div className="flex flex-col justify-center bg-black text-white w-full p-9 space-y-6">
      <div className="flex justify-center p-5">
        <CustomLogo width="100" color="white"></CustomLogo>
      </div>
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-center text-2xl uppercase font font-bold">
          Recieve Exclusive Listings In your Inbox
        </h2>
        <p className="text-center">
          Are you interested in buying a home? Look no further than working with
          a real estate expert.
        </p>
      </div>
      <div className="flex flex-row justify-center space-x-6">
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered w-full max-w-xs text-black"
        />
        <button className="btn btn-outline text-white hover:text-secondary">
          Submit
        </button>
      </div>

      <div className="flex flex-row justify-center space-x-4 items-start">
        <input type="checkbox" defaultChecked className="checkbox" />
        <p className="text-left text-xs">
          I agree to receive marketing and customer service emails, calls and
          text messages from GUIDE ME REALTY LLC Consent is not a condition of
          purchase. Msg/data rates may apply. Msg frequency varies. Reply STOP
          to unsubscribe. Privacy Policy & Terms of Service.
        </p>
      </div>
    </div>
  );
};

export default ExclusiveListingsForm;
