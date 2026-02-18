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
import Link from "next/link";

 
export default function ModalDescarga({openFromQuery=false}) {
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
        className="bg-white/30 backdrop-blur-md shadow-none rounded-3xl "
      >
        <DialogHeader className="flex items-center rounded-t-3xl justify-between px-6 py-4 bg-gradient-to-r from-[#F57EB6]/90 via-[#E8F216]/80 to-[#23C9A7]/90 text-muni-azul">



            <div className="flex flex-row items-center gap-5">
                <img src={`${basePath}/img/4.png`} alt="" className="max-w-10" />                
                <p className={`${MontserratMediumItalic.className} text-base md:text-2xl font-semibold text-center`}>
                  Descarga Documentos
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
            <div className="grid grid-cols-1 md:grid-cols-2 items-start justify-start gap-3">
                    <a
                      href={`${basePath}/docs/2. AGENDA FEBRERO 250 AÑOS CIUDAD GUATEMALA.pdf`}
                      // download
                      target="_blank"
                      className="inline-block w-full h-full object-contain
                      transition-transform duration-1000 ease-in-out
                      hover:scale-102"
                    >
                      <div className="flex items-center justify-start gap-6 bg-white rounded-2xl px-4 py-4 border-muni-azul border-1">
                        <img src={`${basePath}/img/documentos/portadaAgenda.svg`} alt="" className="max-w-25" />

                        <div className="flex items-center gap-3">
                          <p className={`${MontserratMediumItalic.className} text-lg md:text-xl text-muni-azul text-start`}>
                            AGENDA FEBRERO 250 AÑOS CIUDAD GUATEMALA
                          </p>
                        </div>
                      </div>
                    </a>          
            </div>
        </DialogBody>
      </Dialog>
    </>
  );
}