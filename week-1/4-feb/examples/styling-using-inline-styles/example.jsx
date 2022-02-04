import React from "react";

// Man kan styla komponenter med s.k. inline style på detta viset.
// 
// Det ena exemplet, på div'en samt h1'n visar hur man kan passa med
// ett objekt med css-properties för att styla ett element.
// Den stora skillnaden är att css du normalt sett hade skrivit
// exempelvis: font-size, blir camelCase: fontSize. 
// 
// Det andra exemplet, med texten och knappen visar hur du kan
// definiera din style som ett objekt utanför, och passa med den
// till komponenten. I grund och botten gör de samma sak - 
// men det blir mindre kod i din return-statement och blir inte lika
// lätt rörigt :)

const buttonStyle = {
  background: "orange",
  color: "#f3f3f3",
};
const textStyle = { lineHeight: 1.2, color: "#424242" };

function Example() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          fontSize: "32px",
          color: "#323232",
          textDecoration: "underline",
        }}
      >
        Hello World
      </h1>
      <p style={textStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
        deleniti?
      </p>
      <button style={buttonStyle}>I'm a button</button>
    </div>
  );
}

export default Example;
