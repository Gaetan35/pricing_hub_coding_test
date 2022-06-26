import { useState } from "react";
import styles from "./Home.module.scss";

import formattedData from "../../formattedData.json";
import { CategoriesTree } from "./categoriesTree/CategoriesTree";

type FormattedData = {
  rootLevelCategories: string[];
  descendants: { [category: string]: string[] };
  graphByCategory: {
    [category: string]: { date: string; sales: number }[] | undefined;
  };
};

export const Home = () => {
  const { rootLevelCategories, descendants, graphByCategory }: FormattedData =
    formattedData;
  const [selectedCategory, setSelectedCategory] = useState<string>();

  return (
    <div className={styles.homePageContainer}>
      <CategoriesTree
        rootLevelCategories={rootLevelCategories}
        descendants={descendants}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </div>
  );
};
