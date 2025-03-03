/* eslint-disable react-hooks/exhaustive-deps */
import { BusinessFormData } from "@/app/api/external/omnigateway/types/business";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { businessTypes, plans } from "@/constants/subscription-data";
import { useLocations } from "@/hooks/useLocations";
import { Building2, Loader } from "lucide-react";
import React, { useEffect } from "react";

interface SubscriptionStepProps {
  billingCycle: string;
  selectedPlan: string | null;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  handleFormChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  formData: BusinessFormData;
  isSubmitting?: boolean;
  setStep: (value: number) => void;
}

const SubscriptionStepTwo = ({
  billingCycle,
  selectedPlan,
  handleSubmit,
  formData,
  handleFormChange,
  isSubmitting,
  setStep,
}: SubscriptionStepProps) => {
  const {
    fetchCountries,
    fetchCities,
    fetchStates,
    cities,
    countries,
    states,
  } = useLocations();

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (formData.address.country) {
      fetchStates(formData.address.country);
    }
  }, [formData.address.country, countries]);

  useEffect(() => {
    if (formData.address.country && formData.address.state) {
      fetchCities(formData.address.state);
    }
  }, [formData.address.country, formData.address.state, states]);

  const handleSelectChange = (name: string, value: string) => {
    const syntheticEvent = {
      target: {
        name,
        value,
      },
    } as React.ChangeEvent<HTMLSelectElement>;

    handleFormChange(syntheticEvent);
  };

  const inputStyles =
    "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-gray-900 placeholder-gray-500";

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white border border-[#DEE5ED] rounded-2xl p-8">
        <div className="flex items-center mb-6">
          <Building2 className="w-6 h-6 text-[#0A0A0A] mr-2" />
          <h3 className="text-2xl font-bold">Business Details</h3>
        </div>

        <div className="mb-4 p-4 bg-[#F8FAFC] rounded-lg">
          <p className="text-[#3d495b]">
            You&apos;ve selected the{" "}
            <span className="font-semibold">
              {plans.find((p) => p.id === selectedPlan)?.name}
            </span>{" "}
            with {billingCycle} billing.
          </p>
        </div>

        <p className="mb-6 text-[#3d495b]">
          Please provide some additional details about your business (optional):
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Business Type
              </label>
              <select
                name="businessType"
                className={inputStyles}
                value={formData.businessType}
                onChange={handleFormChange}
              >
                {businessTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 (123) 456-7890"
                className={inputStyles}
                value={formData.phone}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-3">Address Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Street Address
                </label>
                <input
                  type="text"
                  name="address.street"
                  className={inputStyles}
                  value={formData.address.street}
                  onChange={handleFormChange}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Country
                </label>
                <Select
                  value={formData.address.country}
                  onValueChange={(value) =>
                    handleSelectChange("address.country", value)
                  }
                >
                  <SelectTrigger className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-gray-900">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country.value} value={country.value}>
                        {country.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State/Province
                </label>
                <Select
                  value={formData.address.state}
                  onValueChange={(value: string) =>
                    handleSelectChange("address.state", value)
                  }
                  disabled={!formData.address.country || states.length === 0}
                >
                  <SelectTrigger className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-gray-900">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    {states.map((state) => (
                      <SelectItem key={state.value} value={state.value}>
                        {state.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <Select
                  value={formData.address.city}
                  onValueChange={(value) =>
                    handleSelectChange("address.city", value)
                  }
                  disabled={!formData.address.state || cities.length === 0}
                >
                  <SelectTrigger className="w-full px-4 py-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white shadow-sm text-gray-900">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Postal Code
                </label>
                <input
                  type="text"
                  name="address.zip"
                  className={inputStyles}
                  value={formData.address.zip}
                  onChange={handleFormChange}
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tax ID (Optional)
              </label>
              <input
                type="text"
                name="taxId"
                className={inputStyles}
                value={formData.taxId}
                onChange={handleFormChange}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                VAT Number (Optional)
              </label>
              <input
                type="text"
                name="vatNumber"
                className={inputStyles}
                value={formData.vatNumber}
                onChange={handleFormChange}
              />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="px-6 py-3 border border-[#DEE5ED] rounded-xl hover:bg-gray-50"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[#0A0A0A] text-white py-3 rounded-xl hover:bg-black/90 transition-colors flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <Loader className="animate-spin mr-2" size={20} />
                  Processing...
                </>
              ) : (
                "Continue to Payment"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionStepTwo;
