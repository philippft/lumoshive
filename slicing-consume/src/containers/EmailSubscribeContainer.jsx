import { useState } from "react";
import { subscribeMail } from "../services/api";
import EmailSubscribePage from "../pages/EmailSubscribePage";

export default function EmailSubscribe() {
  const [modal, setModal] = useState(null);

  const handleSubscribe = async (email) => {
    const cleanEmail = email.trim();

    if (!cleanEmail) return;

    if (!cleanEmail.includes("@")) {
      setModal({
        status: "error",
        message: "Masukkan alamat email yang valid.",
      });
      return;
    }

    try {
      await subscribeMail({ email: cleanEmail });
      setModal({ status: "success", message: "Berhasil!" });
    } catch (err) {
      console.log(err);
      setModal({ status: "error", message: "Gagal berlangganan." });
    }
  };

  return (
    <EmailSubscribePage
      handleSubscribe={handleSubscribe}
      modal={modal}
      onClose={() => setModal(null)}
    />
  );
}
