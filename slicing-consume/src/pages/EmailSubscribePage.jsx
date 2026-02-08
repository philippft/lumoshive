import Button from "../components/Button";
import LampImg from "../assets/lamp.jpg";
import Modal from "../components/Modal";
import { useState } from "react";

export default function EmailSubscribePage({ handleSubscribe, modal, onClose }) {

  const [email, setEmail] = useState("");

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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-white
              w-full font-normal text-black rounded-sm p-4"
          />
          <Button
            text="Shop Now"
            onClick={() => handleSubscribe(email)}
            className="font-semibold text-lg bg-bluedark w-40 rounded-lg p-2"
          />
        </div>
      </div>

      {modal && (
        <Modal
          status={modal.status}
          message={modal.message}
          onClose={onClose}
        />
      )}
    </div>
  );
}
