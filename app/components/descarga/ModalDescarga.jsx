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
                <p className="text-xs md:text-base  tracking-[0.18em] font-semibold text-center">
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
                    <button className="flex items-center justify-start gap-6 bg-white rounded-2xl px-4 py-4 border-muni-azul border-1">
                        <img src={`${basePath}/img/2.png`} alt="" className="max-w-25" />

                        <div className="flex items-center gap-3">
                            {/* <img src={`${basePath}/img/4.png`} alt="icono descarga" width={30} className=""/> */}
                            <p className="text-xl md:text-2xl text-black text-center">Libro 250</p>
                        </div>
                    </button>           
                    <button className="flex items-center justify-start gap-6 bg-white rounded-2xl px-4 py-4 border-muni-azul border-1">
                        <img src={`${basePath}/img/2.png`} alt="" className="max-w-25" />

                        <div className="flex items-center gap-3">
                            {/* <img src={`${basePath}/img/4.png`} alt="icono descarga" width={30} className=""/> */}
                            <p className="text-xl md:text-2xl text-black text-center">Libro 250</p>
                        </div>
                    </button>           
                    <button className="flex items-center justify-start gap-6 bg-white rounded-2xl px-4 py-4 border-muni-azul border-1">
                        <img src={`${basePath}/img/2.png`} alt="" className="max-w-25" />

                        <div className="flex items-center gap-3">
                            {/* <img src={`${basePath}/img/4.png`} alt="icono descarga" width={30} className=""/> */}
                            <p className="text-xl md:text-2xl text-black text-center">Libro 250</p>
                        </div>
                    </button>           
            </div>
        </DialogBody>
      </Dialog>
    </>
  );
}