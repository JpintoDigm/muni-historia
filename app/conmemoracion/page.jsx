import BottomMenu from "@/app/components/BottomMenu";
import { basePath } from "@/next.config.mjs";

export default function Conmemoracion() {
  return (
    <main className="w-full min-h-screen">
        
        <section className="relative bg-muni-verde w-full h-170 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${basePath}/img/conmemoracion/1.png)` }}>
          <div className="absolute">
            {/* <img className="w-full h-180 object-contain" src={`${basePath}/img/conmemoracion/1.png`} alt="" /> */}

            <div class="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>

          </div>

        </section>
        <section className="bg-muni-verde w-full h-170 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${basePath}/img/conmemoracion/2.png)` }}>
            {/* <img className="w-full h-180 object-contain" src={`${basePath}/img/conmemoracion/2.png`} alt="" /> */}
        </section>
        <section className="bg-muni-verde w-full h-170 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${basePath}/img/conmemoracion/3.png)` }}>
            {/* <img className="w-full h-180 object-contain" src={`${basePath}/img/conmemoracion/3.png`} alt="" /> */}
        </section>
        <section className="bg-muni-verde w-full h-170 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${basePath}/img/conmemoracion/4.png)` }}>
            {/* <img className="w-full h-180 object-contain" src={`${basePath}/img/conmemoracion/3.png`} alt="" /> */}
        </section>

        <BottomMenu />
    </main>
  );
}