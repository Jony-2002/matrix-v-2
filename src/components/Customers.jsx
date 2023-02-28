import React from "react";

// Import Components
import CustomerCard from "./UI/CustomerCard";

// Import Data
import { CustomersData } from "../data/customers";

const Customers = () => {
  return (
    <div className="container px-[100px] py-[50px]">
      <h3 className="text-7xl text-center font-bold mb-10">Customers</h3>
      <div className="flex justify-center items-center gap-[200px] flex-wrap">
        {CustomersData.map((customer) => {
          return (
            <CustomerCard
              key={customer.id}
              id={customer.id}
              image={customer.image}
              name={customer.name}
              url={`/Customer/${customer.id}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Customers;
