"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { CompaniesLogo } from "../../data/CompaniesLogo";
import TrustedCompanies from "../TrustedCompanies";
import { useRouter } from "next/navigation";
import { basePath } from "@/next.config.mjs";
 
export default function Modal({openFromQuery=false}) {
  const [size, setSize] = React.useState(null);
  const router = useRouter();
 
  React.useEffect(() => {
    if(openFromQuery){
      setSize("lg");
    }
  }, [openFromQuery]);

  const handleClose = () => {
    setSize(null);
    router.push("/", { scroll: false }); // limpia ?modal=aleados
  };

  return (
    <>
      <Dialog
        open={ size === "lg" }
        size={size || "lg"}
        handler={handleClose}
        className="bg-white/30 backdrop-blur-md shadow-none"

      >
        <DialogHeader>
            <Button
                variant="text"
                onClick={handleClose}
                className="p-2 text-red-600"
            >
             <img src={`${basePath}/img/closeModal.png`} alt="Cerrar Modal" />
            </Button>
        </DialogHeader>
        <DialogBody className="max-h-[70vh]">
          <div className="">
            <TrustedCompanies companies={CompaniesLogo} />                
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleClose}
            className="mr-1"
          >
            <span>Cerrar</span>
          </Button>
          {/* <Button
            variant="gradient"
            color="green"
            onClick={() => handleOpen(null)}
          >
            <span>Confirm</span>
          </Button> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}