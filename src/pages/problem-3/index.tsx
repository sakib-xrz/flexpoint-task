import Button from "./components/Button";

export default function Problem3() {
  return (
    <div className="flex items-center justify-center h-screen gap-4">
      <Button variant="primary" onClick={() => alert("Primary Button Clicked")}>
        Primary Button
      </Button>

      <Button
        variant="secondary"
        onClick={() => alert("Secondary Button Clicked")}
      >
        Secondary Button
      </Button>

      <Button
        variant="icon-arrow-primary"
        onClick={() => alert("Icon Arrow Primary Button Clicked")}
      >
        Icon Arrow Primary Button
      </Button>

      <Button
        variant="icon-arrow-secondary"
        onClick={() => alert("Icon Arrow Secondary Button Clicked")}
      >
        Icon Arrow Secondary Button
      </Button>
    </div>
  );
}
