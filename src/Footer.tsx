import CustomLogo from "./CustomLogo";

function Footer() {
  return (
    <div className="flex flex-col p-9 w-full space-y-6">
      <div className="flex flex-col items-center space-y-5">
        <h3 className=" text-4xl text-center">Newsletter</h3>
        <p className="text-center">
          For exclusive news and market updates sign up for our newsletter.
        </p>
        <input
          className="input input-bordered w-full max-w-xs text-black"
          type="email"
          name="newsLetterEmail"
          id="email"
          placeholder="Email"
        />
        <input
          className="input input-bordered w-full max-w-xs text-black"
          type="tel"
          name="newsLetterCellNumber"
          id="newsLetterCellNumber"
          placeholder="Phone Number"
        />
        <button className="btn btn-outline text-black bg-secondary hover:text-white w-full">
          Submit
        </button>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <div className="flex justify-center p-5">
          <CustomLogo width="80" color="black"></CustomLogo>
        </div>
        <h3 className="font-bold">Christopher Jackson</h3>
        <h4>(909) 222-3241</h4>
        <h4>chris@guidemerealty.com</h4>
        <h4>DRE#02168194</h4>
        <h4>Get Christopher's DBC</h4>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center max-md:hidden">
          <img
            className="w-[150px]"
            src="/src/assets/CRRE_LOGO_text_only.png"
            alt=""
          />
        </div>
        <div>
          <h4 className="text-xs font-bold text-center">
            CROWN ROYAL REAL ESTATE INC.
          </h4>
          <p className="text-xs text-center">
            8440 Maple Pl Suite 102, Rancho Cucamonga, CA 91730
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
