// app/api/external/omnigateway/locations.ts
import { City, Country, State } from "@/types/locations-types";
import { createOmniGateway } from "./omni-gateway";

export const createLocationsApi = (apiKey: string) => {
  const api = createOmniGateway(apiKey);

  return {
    // Get all countries
    getCountries: async (): Promise<Country[]> => {
      const { data } = await api.get("/locations/countries");
      return data;
    },

    // Get states by country ID
    getStates: async (countryId: string): Promise<State[]> => {
      const { data } = await api.get(
        `/locations/states?countryId=${countryId}`
      );
      return data;
    },

    // Get cities by state ID
    getCities: async (stateId: string): Promise<City[]> => {
      const { data } = await api.get(`/locations/cities?stateId=${stateId}`);
      return data;
    },
  };
};
