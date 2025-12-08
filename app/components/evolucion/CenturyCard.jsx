
import { MontserratLightItalic, MontserratMediumItalic } from "@/app/layout";

export default function CenturyCard( {century, year, imageSrc, imageAlt} ) {

    return(

        <div className="flex flex-col items-center">
            <div className={`${MontserratMediumItalic.className} w-[150px] text-center px-6 py-2 rounded-full bg-[#8BC53F] text-muni-azul font-bold text-sm shadow`}>
            {century}
            </div>
            <div className="mt-[10px] bg-white px-6 py-8 rounded-xl shadow text-center w-[150px]">
                {/* <p className="text-2xl font-extrabold text-black">XVI</p> */}
                <p className={`${MontserratLightItalic.className} text-xl text-slate-900`}>{year}</p>
            </div>

            <img src={imageSrc} alt={imageAlt} width={65} height={40} className="hidden md:inline-block h-10 opacity-80" />
        </div>

    );

}

