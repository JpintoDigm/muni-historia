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
import { MontserratBlack3, MontserratMediumItalic, muni } from "@/app/fonts/fonts";
 
export default function Modal({openFromQuery=false}) {
  const [size, setSize] = React.useState(null);
  const router = useRouter();
 
  React.useEffect(() => {
    if(openFromQuery){
      setSize("xl");
    }
  }, [openFromQuery]);

  const handleClose = () => {
    setSize(null);
    router.push("/", { scroll: false }); // limpia ?modal=aleados
  };

  return (
    <>
      <Dialog
        open={ size === "xl" }
        size={size || "xl"}
        handler={handleClose}
        className="bg-white/30 backdrop-blur-xl shadow-none rounded-3xl "
      >
        <DialogHeader className="flex items-center rounded-t-3xl justify-between px-6 py-4 bg-gradient-to-r from-[#F57EB6]/90 via-[#E8F216]/80 to-[#23C9A7]/90 text-muni-azul">

            <div>
              <p className={`${MontserratMediumItalic.className} text-lg md:text-2xl font-semibold text-center`}>
                Aleados Estratégicos
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
        <DialogBody className="max-h-[50vh] sm:max-h-[70vh] overflow-y-auto">
          <div className="">
            {/* <TrustedCompanies companies={CompaniesLogo} /> */}

            <img src={`${basePath}/img/companiesLogo/logosExpo.svg`}  alt="" />
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}