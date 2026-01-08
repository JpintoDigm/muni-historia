import BottomMenu from "@/app/components/BottomMenu";
import { basePath } from "@/next.config.mjs";

export default function Conmemoracion() {
  return (
    <main className="w-full min-h-screen bg-white">
        
        <section className="bg-white w-full">
            <img className="w-full h-180 object-contain" src={`${basePath}/img/conmemoracion/1.png`} alt="" />
        </section>
        <section className="bg-white w-full">
            <img className="w-full h-180 object-contain" src={`${basePath}/img/conmemoracion/2.png`} alt="" />
        </section>
        <section className="bg-white w-full">
            <img className="w-full h-180 object-contain" src={`${basePath}/img/conmemoracion/3.png`} alt="" />
        </section>

        <BottomMenu />
    </main>
  );
}