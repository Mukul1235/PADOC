import { useEffect, useState } from "react";
import Layout from "../Layout";
import "./medicines.css";
import _ from "lodash";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MedicineContainer = (props) => {
  const [select, setselect] = useState(props.selected);
  return (
    <div className="medicineContainer">
      <img id="med_pic" srcSet={props.image}></img>
      <br></br>
      <label id="name">{props.name}</label>
      <br></br>
      <label id="cost">{props.cost}</label>
      <br></br>
      <button
        onClick={() => {
          setselect(!select);
          props.onSelect(props.id, select);
        }}
        style={{ backgroundColor: select ? "yellow" : "green" }}
      >
        Add to Cart
      </button>
    </div>
  );
};

const Medicines = () => {
  const Navigate = useNavigate();

  const MedList = [
    { id: "0", name: "Combiflame", img: "Logo.png", cost: 120 },
    { id: "1", name: "Crocin", img: "Logo.png", cost: 10 },
    { id: "2", name: "Dolo", img: "Logo.png", cost: 200 },
    { id: "3", name: "Combiflame", img: "Logo.png", cost: 100 },
    { id: "4", name: "Crocin", img: "Logo.png", cost: 12 },
    { id: "5", name: "Dolo", img: "Logo.png", cost: 1000 },
    { id: "6", name: "Combiflame", img: "Logo.png", cost: 10 },
    { id: "7", name: "Crocin", img: "Logo.png", cost: 130 },
    { id: "8", name: "Dolo", img: "Logo.png", cost: 1200 },
  ];

  const [medname, setmedname] = useState("");
  var [selectmed, setselectmed] = useState(
    JSON.parse(localStorage.getItem("MedInCart")) || []
  );
  const handleChange = (event) => {
    const value = event.target.value;
    setmedname(value);
  };

  const handleSelect = (index, selected) => {
    if (!selected) {
      MedList[index]["itemCount"] = 1;
      setselectmed((prevmed) => [...prevmed, MedList[index]]);
    } else {
      setselectmed(
        selectmed.filter((ele) => {
          return ele.id!=MedList[index].id;
        })
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("MedInCart", JSON.stringify(selectmed));
  }, [selectmed]);

  const handleAddCart = async () => {
    Navigate("/MedicineCart");
  };

  return (
    <>
      <Layout />
      <div className="Med_search">
        <input
          id="med_search"
          value={medname}
          type="search"
          onChange={handleChange}
          name="medname"
          placeholder="Search For Medicines"
        ></input>
      </div>
      <div className="Medicinesearchlist">
        {MedList.filter((medicine) => {
          if (medname === "") {
            return medicine;
          } else if (
            medicine.name.toLowerCase().includes(medname.toLowerCase())
          ) {
            return medicine;
          }
        }).map((medicine, index) => (
          <MedicineContainer
            id={index}
            key={index}
            name={medicine.name}
            cost={medicine.cost}
            image={medicine.img}
            selected={selectmed.some((smed) => medicine.id == smed.id)}
            onSelect={handleSelect}
          />
        ))}
        <div id="AddCart" onClick={handleAddCart}>
          +
        </div>
        {selectmed.length ? (
          <div className="TotalItems">{selectmed.length}</div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Medicines;
