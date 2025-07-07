import Badge from "./Components/Badge";
import Banner from "./Components/Banner";

const colors = ["red", "yellow", "green", "blue", "indigo", "pink", "gray"];

export default function App() {
  return (
    <main>
      <section>
        <Banner type={"success"}>Congratulations!</Banner>
        <Banner type={"warning"}>Attention!</Banner>
        <Banner type={"error"}>There is a problem with your application</Banner>
        <Banner type={"neutral"}>Update avaliable!</Banner>
      </section>
    </main>
  );
}
