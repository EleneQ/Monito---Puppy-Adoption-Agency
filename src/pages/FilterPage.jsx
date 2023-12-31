import { FiltersContext } from "../context/FiltersContext";
import { Navbar, CTADogs, Filter, Footer } from "../components";
import { useSearchParams } from "react-router-dom";

const FilterPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filters = {
    gender:
      searchParams.get("gender") === "null"
        ? null
        : searchParams.get("gender") || null,
    colors: searchParams.getAll("colors") || [],
    size:
      searchParams.get("size") === "null"
        ? null
        : searchParams.get("size") || null,
  };

  // const [filters, setFilters] = useState({
  //   gender: null,
  //   colors: [],
  //   size: null,
  // });

  const filterValues = Object.values(filters).filter(
    (value) => value !== null && value.length !== 0
  );

  return (
    <>
      <FiltersContext.Provider
        value={{ filters, searchParams, setSearchParams }}
      >
        <Navbar />
        <main>
          <p className="capitalize px-p-x-xs sm:px-p-x-md lg:px-p-x-lg max-w-max-width mx-auto text-gray-500 mb-3">{`Home > ${filterValues.join(
            " > "
          )}`}</p>
          <CTADogs />
          <Filter />
        </main>
        <Footer />
      </FiltersContext.Provider>
    </>
  );
};

export default FilterPage;
