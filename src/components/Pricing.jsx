import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import { pricingOptions } from '../constants'
function Pricing() {
  return (
    <div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Pricing Plans
      </h2>
      <div className="flex flex-wrap justify-center">
        {pricingOptions.map((option, index) => (
          <div key={index} className="p-4 w-full sm:w-1/2 lg:w-1/3">
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">{option.title}</h3>
              <p className="text-lg mb-4">{option.price}</p>
              <ul className="mb-4">
                {option.features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="bg-blue-500 text-white py-2 px-4 rounded">
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing