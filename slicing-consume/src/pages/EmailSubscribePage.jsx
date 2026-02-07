import Button from "../components/Button";
import LampImg from "../assets/lamp.jpg";

export default function EmailSubscribePage () {
    return (
      <div
        className="relative w-full min-h-[700px] bg-center bg-cover font-saira flex flex-col items-end justify-end px-10"
        style={{ backgroundImage: `url(${LampImg})` }}
      >
        <div className="flex flex-col w-1/3 mr-25 mb-30 gap-10 p-4 rounded-md text-white">
          <h1 className="text-white text-[60px]">
            Get more discount Off your order
          </h1>
          <span className="font-normal text-[30px]">Join our mailing list</span>
          <div className="flex w-ful gap-4">
            <input
              type="Email"
              placeholder="Your Email Address"
              className="bg-white
              w-full font-normal text-black rounded-sm p-4"
            />
            <Button
              text="Shop Now"
              className="font-semibold text-lg bg-bluedark w-40 rounded-lg p-2"
            />
          </div>
        </div>
      </div>
    );
}