import Showcase from "./components/home/Showcase";
import Mission from "./components/home/Mission";
import Articles from "./components/home/Articles";
import Features from "./components/home/Features";
import Pinned from "./components/home/Pinned";
import Topics from "./components/home/Topics";
import Manifesto from "./components/home/Manifesto";
import Ad from "./components/home/Ad";

export default function Home() {
  return (
    <>
      <Showcase />
      <Mission />
      <Articles />
      <Features />
      <Pinned />
      <Topics />
      <Manifesto />
      <Ad />
    </>
  );
}
