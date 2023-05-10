import Header from "./components/Header";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const personalDetails = {
    name: "Priyanjith Priyanga",
    location: "Colombo, SL",
    tagline: "I'm a full-stack Developer",
    email: "priyanjithpr@gmail.com",
    availability: "Open for work",
    brand:
      "I'm a full-stack developer who's passionate about technology and building robust web applications. With a keen eye for detail and a knack for problem-solving, I enjoy creating functional and visually appealing solutions that meet the needs of users. Let's collaborate and bring your ideas to reality!",
  };

  return (
    <>
      <Header />
      <AnimatedRoutes personalDetails={personalDetails} />
    </>
  );
}

export default App;
