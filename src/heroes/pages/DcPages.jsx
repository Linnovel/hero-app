import { HeroList } from "../components/HeroList";

const DcPages = () => {
  return (
    <>
      <h1>Dc Comics</h1>
      <hr />
      <ul>
        <HeroList publisher="DC Comics" />
      </ul>
    </>
  );
};

export default DcPages;
