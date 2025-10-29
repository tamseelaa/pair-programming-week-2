import visaImg from "../assets/images/visa.png";
import masterCardImg from "../assets/images/master-card.svg";

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const cardStyles = {
    backgroundColor: bgColor,
    color: color,
    width: "300px",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    fontFamily: "Arial, sans-serif",
  };

  const formattedNumber = `•••• •••• •••• ${number.slice(-4)}`;
  const formattedExpiration = `${expirationMonth.toString().padStart(2, "0")}/${expirationYear.toString().slice(-2)}`;

  return (
    <div style={cardStyles}>
      <div style={{ textAlign: "right" }}>
        <img
          src={type === "Visa" ? visaImg : masterCardImg}
          style={{ height: "30px" }}
        />
      </div>
      <div style={{ fontSize: "2.3em", margin: "20px 0" }}>
        {formattedNumber}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          fontSize: "0.9em",
          gap: "10px",
        }}
      >
        <div>
          <span>Expires {formattedExpiration}</span>
        </div>
        <div>
          <span>{bank}</span>
        </div>
      </div>
      <div style={{ fontSize: "1em", textAlign: "left" }}>{owner}</div>
    </div>
  );
};

export default CreditCard;
