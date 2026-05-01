import React from "react";
import Section from "../section";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { STATUS_ITEMS } from "@/constants/items";

function Status() {
  return (
    <Section>
      <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0">
        {STATUS_ITEMS.map((item) => (
          <CardContainer key={item.name}>
            <CardBody>
              <CardItem translateZ={10} className="flex justify-center items-center flex-col">
                <div
                  dir="ltr"
                  className="md:text-7xl text-5xl font-extrabold tracking-tight drop-shadow-xl"
                >
                  {item.number}
                </div>
                <p>{item.name}</p>
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </Section>
  );
}

export default Status;
