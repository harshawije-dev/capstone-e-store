import React from "react";
import CategoryItem from "../components/CategoryItem";
import * as Catalog from "../data/categories.json";

const Home = () => {
  const module = { keygen: Catalog };

  return (
    <div className="container mx-auto">
      <div className="py-5 px-4 flex gap-2 justify-evenly">
        {module.keygen.categories.map(({ title, id, imageUrl }) => {
          return <CategoryItem key={id} title={title} img={imageUrl} />;
        })}
      </div>
    </div>
  );
};

export default Home;
