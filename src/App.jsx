import Badge from "./Components/Badge";

const colors = ["red", "yellow", "green", "blue", "indigo", "pink", "gray"];

export default function App() {
  return (
    <main>
      <section className="square">
        {colors.map((color) => (
          <Badge key={color} variant={"square"} color={color}>
            Badge
          </Badge>
        ))}
      </section>
      <section className="pill">
        {colors.map((color) => (
          <Badge key={color} variant={"pill"} color={color}>
            Badge
          </Badge>
        ))}
      </section>
    </main>
  );
}
