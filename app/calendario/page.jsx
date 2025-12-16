import CalendarioEventos from "@/app/components/calendario/CalendarioEventos";
import BottomMenu from "../components/BottomMenu";

export default function Calendario() {
  return (
    <main className="min-h-screen bg-250">
      <section className="w-full px-4 py-8">
        <CalendarioEventos
          featureLayerUrl="https://TU_SERVIDOR/arcgis/rest/services/TU_SERVICIO/FeatureServer/0"
        />
      </section>

      <BottomMenu />
    </main>
  );
}
