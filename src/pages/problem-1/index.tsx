import Container from "../../components/Container";
import PriceCard from "./components/PriceCard";

export default function Problem1() {
  return (
    <Container>
      <div className="grid grid-cols-4 gap-4">
        <PriceCard />
        <PriceCard />
        <PriceCard />
        <PriceCard />
      </div>
    </Container>
  );
}
