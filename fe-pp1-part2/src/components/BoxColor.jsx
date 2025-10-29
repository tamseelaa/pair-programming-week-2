const BoxColor = ({ r, g, b }) => {
  const rgbToHex = (r, g, b) =>
    "#" + [r, g, b].map((v) => v.toString(16).padStart(2, "0")).join("");
  const hex = rgbToHex(r, g, b);

  const boxcolor = {
    backgroundColor: `rgb(${r},${g},${b})`,
    width: "auto",
    border: "1px solid #000",
    padding: "20px",
    margin: "10px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <div style={boxcolor}>
      <p>
        rgb({r},{g},{b})
      </p>
      <p>#{hex}</p>
    </div>
  );
};

export default BoxColor;
