import { basePath } from "@/next.config.mjs";


export default function ListImage
(
{
    widthSize,
    widthSizeMobil,
    heightSize,
    heightSizeMobil,
    dotSize = "base",
    dotSizeMobil = "base"
}   
) {

    const widthMobil = {
        mobilMain: "w-13",
        mobil: "w-25"
    }

    const widthDesktop = {
        sm: "sm:w-40",
        md: "md:w-175"
    }

    const heightMobil = {
        mobilMain: "w-13",
        mobil: "w-25"
    }

    const heightDesktop = {
        sm: "sm:w-40",
        md: "md:w-175"
    }

    const dotMobil = {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "6xl": "text-6xl",
        "9xl": "text-9xl",
    };

    const dotDesktop = {
        sm: "sm:text-sm",
        base: "sm:text-base",
        lg: "sm:text-lg",
        xl: "sm:text-xl",
        "2xl": "sm:text-2xl",
        "6xl": "sm:text-6xl",
        "9xl": "sm:text-9xl",
    };

    return (
        <div className="flex items-center justify-center text-xl opacity-100">
            <img src={`${basePath}/img/10.png`} alt="Descripción" className={`rounded-3xl object-cover ${widthDesktop[widthSize]} ${heightDesktop[heightSize]} ${widthMobil[widthSizeMobil]} ${heightMobil[heightSizeMobil]}`}/>
            <span className={`text-muni-azul ${dotDesktop[dotSize]} ${dotMobil[dotSizeMobil]}`}>•</span>
            <img src={`${basePath}/img/11.png`} alt="Descripción" className={`rounded-3xl object-cover ${widthDesktop[widthSize]} ${heightDesktop[heightSize]} ${widthMobil[widthSizeMobil]} ${heightMobil[heightSizeMobil]}`}/>
            <span className={`text-muni-azul ${dotDesktop[dotSize]} ${dotMobil[dotSizeMobil]}`}>•</span>
            <img src={`${basePath}/img/12.png`} alt="Descripción" className={`rounded-3xl object-cover ${widthDesktop[widthSize]} ${heightDesktop[heightSize]} ${widthMobil[widthSizeMobil]} ${heightMobil[heightSizeMobil]}`}/>
        </div>
    );

}