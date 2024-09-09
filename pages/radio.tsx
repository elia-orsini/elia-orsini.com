import Header from "@components/Header";
import Navigation from "@components/Navigation";
import RadioPlayer from "@components/radio/RadioComponent";

export default function Code() {
  return (
    <Navigation>
      <Header
        title={`radio | elia orsini`}
        description="radio"
      />

      <div className="flex w-full mb-20">
        <RadioPlayer />
      </div>
    </Navigation>
  );
}
