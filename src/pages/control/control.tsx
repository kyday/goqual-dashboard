import React, { useState } from "react";
import { cilLightbulb } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { Card } from "@/components/common/Card/Card";
import { Modal } from "@/components/common/Modal/Modal";
import Bulb from "@/components/control/Bulb/Bulb";
import ControlHeader from "@/components/control/ControlHeader/ControlHeader";
import ControlProcess from "@/components/control/ControlProcess/ControlProcess";

const Control: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h5 className="text-2xl font-bold">기기 제어</h5>
      </div>

      <Card
        className="w-fit cursor-pointer"
        title=""
        header="전구"
        onClick={() => setIsOpen(true)}
      >
        <CIcon width={100} icon={cilLightbulb} size="xxl" />
      </Card>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="전구 제어">
        <div className="flex flex-col items-center gap-8 p-8 bg-gradient-to-b mx-auto">
          <ControlHeader title="brightness #1" />
          <Bulb />
          <ControlProcess />
        </div>
      </Modal>
    </div>
  );
};

export default Control;
