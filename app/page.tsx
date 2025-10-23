import Showcase from "./components/home/Showcase";
import Mission from "./components/home/Mission";
import Articles from "./components/home/Articles";
import Features from "./components/home/Features";
import Pinned from "./components/home/Pinned";

export default function Home() {
  return (
    <>
      <Showcase />
      <Mission />
      <Articles />
      <Features />
      <Pinned />
    </>
  );
}
