import React from "react";

// Import Data
import { CustomersData } from "../data/customers";

// Import Components
import Solution from "../components/Solution";

// Import React Router Hooks
import { useParams } from "react-router-dom";

// interface CustomerProps {
//   name: string;
//   image: string;
//   description: string;
//   services: any;
// }

const Customer = () => {
  const { CustomerID } = useParams();
  const customer = CustomersData.find(
    (customer) => customer.id == CustomerID
  );
  console.log(customer);

  const { name, image, description, services } = customer

  return (
    <div className="px-[100px] py-[50px]">
      <section className="__box flex items-center justify-between border-2 border-black rounded-3xl mx-5 p-[100px]">
        <div className="max-w-[900px]">
          <h2 className="text-[70px] font-bold capitalize">{name}</h2>
          <p className="text-xl my-5">{description}</p>
        </div>
        <div>
          <img className="w-[498px]" src={image} alt="" />
        </div>
      </section>
      <section className="flex items-center justify-evenly text-center my-[70px]">
        {services.map((item) => {
          return (
            <div className="service__card flex flex-col justify-center items-center" key={item.id}>
              <img className="h-[100px]" src={item.image} alt="" />
              <h4 className="text-2xl font-medium mt-5 w-[250px]">{item.name}</h4>
            </div>
          );
        })}
      </section>
      <Solution />
    </div>
  );
};

export default Customer;
