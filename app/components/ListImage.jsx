import { basePath } from "@/next.config.mjs";


export default function ListImage
(
{
    width,
    height,
    dotSize = "base"
}   
) {

    const dotSizes = {
        sm: "text-sm",
        base: "text-base",
        lg: "text-lg",
        xl: "text-xl",
        "2xl": "text-2xl",
        "6xl": "text-6xl",
        "9xl": "text-9xl",
    };


    return (
        <div className="flex items-center justify-center  text-xl opacity-100">
            <img src={`${basePath}/img/10.png`} alt="Logo1" width={width} height={height} className="rounded-3xl object-cover"/>
            <span className={`text-muni-azul ${dotSizes[dotSize] || "text-base"}`}>•</span>
            <img src={`${basePath}/img/11.png`} alt="Descripción" width={width} height={height} className="rounded-3xl object-cover"/>
            <span className={`text-muni-azul ${dotSizes[dotSize] || "text-base"}`}>•</span>
            <img src={`${basePath}/img/12.png`} alt="Descripción" width={width} height={height} className="rounded-3xl object-cover"/>
        </div>
    );

}