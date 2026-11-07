
import { useState } from "react";
import GiftForm from "./components/GiftForm";
import GiftBox from "./components/GiftBox";

function App() {
  const [step, setStep] = useState("form");

  const [formData, setFormData] = useState({
    name: "",
    nickname: "",
    relation: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.nickname.trim() ||
      !formData.relation
    ) {
      return;
    }

    setStep("gift");
  };

  const handleClose = () => {
    setStep("form");

    // Reset form for a new gift
    setFormData({
      name: "",
      nickname: "",
      relation: ""
    });
  };

  return (
    <>
      {step === "form" && (
        <GiftForm
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
        />
      )}

      {step === "gift" && (
        <GiftBox
          formData={formData}
          onClose={handleClose}
        />
      )}
    </>
  );
}

export default App;
