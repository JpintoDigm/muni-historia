"use client";
import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { basePath } from "@/next.config.mjs";
import { CompaniesLogo } from "../../data/CompaniesLogo";
import TrustedCompanies from "../TrustedCompanies";
 
export default function Modal() {
  const [size, setSize] = React.useState(null);
 
  const handleOpen = (value) => setSize(value);
 
  return (
    <>
      <div className="mb-3 flex gap-3">
        <Button onClick={() => handleOpen("lg")} variant="gradient">
          Open Modal LG
        </Button>
      </div>
      <Dialog
        open={ size === "lg" }
        size={size || "lg"}
        handler={handleOpen}
        className="bg-white shadow-none"

      >
        <DialogHeader>
            <Button
                variant="text"
                color="red"
                onClick={() => handleOpen(null)}
                className="p-2"
            >
                <span>X</span>
            </Button>
        </DialogHeader>
        <DialogBody>
            <div className="grid grid-cols-5 gap-4">
                <div class="">
                    <TrustedCompanies companies={CompaniesLogo} />                
                </div>
            </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => handleOpen(null)}
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