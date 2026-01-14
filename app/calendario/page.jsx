import CalendarioEventos from "@/app/components/calendario/CalendarioEventos";
import BottomMenu from "../components/BottomMenu";

export default function Calendario() {
  return (
    <main className="min-h-screen bg-250">
      <section className="w-full px-4 py-8">
        <CalendarioEventos
          featureLayerUrl="https://gis.muniguate.com/server/rest/services/gerencia_planificacion/250anios/FeatureServer/2"
        />
      </section>

      <BottomMenu />
    </main>
  );
}
