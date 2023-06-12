import React from "react";
import Andorra from "../asset/andorra.png";
import Austria from "../asset/austria.png";
import Belgium from "../asset/belgium.png";
import Bulgaria from "../asset/bulgaria.png";
import Croatia from "../asset/croatia.png";
import Czech from "../asset/czechre.png";
import Denmark from "../asset/flag-denmark.png";
import Estonia from "../asset/flag-estonia.png";
import Fin from "../asset/flag-finland.png";
import France from "../asset/flag-france.png";
import Germany from "../asset/flag-germany.png";
import Greece from "../asset/flag-greece.png";
import Holland from "../asset/flag-holland.png";
import Hungary from "../asset/flag-hungary.png";
import Iceland from "../asset/flag-iceland.png";
import Ireland from "../asset/flag-ireland.png";
import Italy from "../asset/flag-italy.png";
import Mon from "../asset/flag-montenegro.png";
import Norway from "../asset/flag-norway.png";
import Poland from "../asset/flag-poland.png";
import Portu from "../asset/flag-portugal.png";
import Romania from "../asset/flag-romania.png";
import Russia from "../asset/flag-russia.png";
import San from "../asset/flag-sanmarino.png";
import Slova from "../asset/flag-slovakia.png";
import Slovenia from "../asset/flag-slovenia.png";
import Spain from "../asset/flag-spain.png";
import Sweden from "../asset/flag-sweden.png";
import Switzerland from "../asset/flag-switzerland.png";
import Ukraine from "../asset/flag-ukranie.png";
import Us from "../asset/usa.png";
import Latvia from "../asset/flag-latvia.png";
import Lie from "../asset/flag-liechtenstein.png";
import Lit from "../asset/flag-lithuania.png";
import Lux from "../asset/flag-luxembourg.png";
import Malta from "../asset/flag-malta.png";
import Monaco from "../asset/flag-monaco.png";

const europe = [
  {
    img: Andorra,
    name: "ANDORRA",
  },
  {
    img: Austria,
    name: "AUSTRIA",
  },
  {
    img: Belgium,
    name: "BELGIUM",
  },
  {
    img: Bulgaria,
    name: "BULGARIA",
  },
  {
    img: Croatia,
    name: "CROATIA",
  },
  {
    img: Czech,
    name: "CYPRUS",
  },
  {
    img: Czech,
    name: "CZECH REPUBLIC ",
  },
  {
    img: Denmark,
    name: "DENMARK",
  },
  {
    img: Estonia,
    name: "ESTONIA",
  },
  {
    img: Fin,
    name: "FINLAND",
  },
  {
    img: France,
    name: "FRANCE",
  },
  {
    img: Germany,
    name: "GERMANY",
  },
  {
    img: Greece,
    name: "GREECE",
  },

  {
    img: Holland,
    name: "HOLLAND",
  },
  {
    img: Hungary,
    name: "HUNGARY",
  },
  {
    img: Iceland,
    name: "ICELAND",
  },
  {
    img: Ireland,
    name: "IRELAND",
  },
  {
    img: Italy,
    name: "ITALY",
  },
  {
    img: Latvia,
    name: "LATVIA",
  },

  {
    img: Lie,
    name: "LIECHTENSTEIN",
  },
  {
    img: Lit,
    name: "LITHUANIA",
  },
  {
    img: Lux,
    name: "LUXEMBOURG",
  },
  {
    img: Malta,
    name: "MALTA",
  },
  {
    img: Monaco,
    name: "MONACO",
  },
  {
    img: Mon,
    name: "MONTENEGRO",
  },

  {
    img: Norway,
    name: "NORWAY",
  },
  {
    img: Poland,
    name: "POLAND",
  },
  {
    img: Portu,
    name: "PORTUGAL",
  },
  {
    img: Romania,
    name: "ROMANIA",
  },
  {
    img: Russia,
    name: "RUSSIA",
  },
  {
    img: San,
    name: "SAN MARINO",
  },

  {
    img: Slova,
    name: "SLOVAKIA",
  },
  {
    img: Slovenia,
    name: "SLOVENIA",
  },
  {
    img: Spain,
    name: "SPAIN",
  },
  {
    img: Sweden,
    name: "SWEDEN",
  },
  {
    img: Switzerland,
    name: "SWITZERLAND",
  },
  {
    img: Ukraine,
    name: "UKRAINE",
  },

  {
    img: Us,
    name: "UNITED KINGDOM",
  },
];

function Europe() {
  return (
    <React.Fragment>
      <div className="pt-14 pb-32 border-b-[1px] border-text-200 ">
        <div className=" grid grid-cols-1">
          <div>
            <h5 className="text-[1.5rem] md:text-[2.5rem] lg:text-[2.5rem] xl:text-[2.5rem]  leading-[3.0rem] md:leading-[5.0rem] font-normal text-text ml-8 md:ml-16 lg:ml-20 xl:ml-28 font-displace">
              Europe
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-6 lg:w-[83%] xl:w-[83%] mx-auto mt-5 ">
          {europe.map((user) => (
            <div className="flex ml-8  md:ml-16 lg:ml-0  mt-5 lg:mt-0 py-5">
              <img
                className="w-[5%] md:w-[3%]  lg:w-[10%]  h-[50%] self-center"
                src={user.img}
              />
              <p className="ml-4 text-[15px] self-center">{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Europe;
