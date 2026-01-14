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
        className="bg-white/30 backdrop-blur-md shadow-none rounded-3xl"

      >
        <DialogHeader className="flex items-center rounded-t-3xl justify-between px-6 py-4 bg-gradient-to-r from-[#F57EB6]/90 via-[#E8F216]/80 to-[#23C9A7]/90 text-muni-azul">

            <div>
              <p className="text-xs uppercase tracking-[0.18em] font-semibold text-center">
                ALEADOS ESTRATÉGICOS
              </p>
            </div>

            <Button
                variant="text"
                onClick={handleClose}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-muni-azul text-lg font-bold shadow-md hover:bg-white/30"
            >
              ✕
            </Button>
        </DialogHeader>
        <DialogBody className="max-h-[70vh]">
          <div className="">
            <TrustedCompanies companies={CompaniesLogo} />                
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}