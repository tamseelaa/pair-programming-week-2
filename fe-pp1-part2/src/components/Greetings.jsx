function Greetings({ children, lang }) {
  switch (lang) {
    case "de":
      return <div>Hallo, {children} </div>;
    case "fr":
      return <div>Bonjour, {children}</div>;
    case "es":
      return <div>Hola, {children}</div>;
    case "fi":
      return <div>Moi, {children}</div>;
    case "en":
      return <div>Hello, {children}</div>;
  }
}

export default Greetings;
