import { companiesLogo } from "../data/CompaniesLogo";

export default function TrustedCompanies({ companies = [] }) {
  const duplicated = [...companies, ...companies];

  return (
    <div className="w-full py-8">

      {/* Ventana del marquee */}
      <div className=" overflow-hidden group">
        {/* Track que se mueve */}
        <div
          className="
            flex
            w-max
            items-center
            gap-10
            animate-[marquee_18s_linear_infinite]
            group-hover:[animation-play-state:paused]
          "
        >
          {duplicated.map((company, index) => (
            <img
              key={`${company.name}-${index}`}
              className="h-10 w-auto object-contain opacity-90 hover:opacity-100 transition"
              src={company.logo}
              alt={company.name}
              width={120}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

