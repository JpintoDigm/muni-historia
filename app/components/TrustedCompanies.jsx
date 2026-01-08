import { companiesLogo } from "../data/CompaniesLogo";

export default function TrustedCompanies({ companies = [] }) {
  return (
    <div className="w-full py-8">
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-6
          gap-6
        "
      >
        {companies.map((company, index) => (
          <div
            key={`${company.name}-${index}`}
            className="
              w-full
              aspect-square
              flex
              items-center
              justify-center
              bg-white
              rounded-xl
              shadow-sm
              p-3
              border-1
              border-muni-azul
            "
          >
            <img
              src={company.logo}
              alt={company.name}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}


