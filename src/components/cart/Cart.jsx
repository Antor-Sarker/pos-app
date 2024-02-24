import Calculate from "./calculate/Calculate";
import Items from "./items/Items";
import Navbar from "./navbar/Navbar";

export default function Cart() {
  return (
    <div className="">
      <Navbar />
      <Items />
      <Items />
      <Items />
      <Calculate />
    </div>
  );
}
