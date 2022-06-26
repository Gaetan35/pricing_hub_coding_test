import classNames from "classnames";
import { useState } from "react";
import styles from "./CategoriesTree.module.scss";
import { CategoryNode } from "./categoryNode/CategoryNode";

type CategoriesTreeProps = {
  rootLevelCategories: string[];
  descendants: { [category: string]: string[] };
  selectedCategory?: string;
  setSelectedCategory: (category: string) => void;
};

export const CategoriesTree = ({
  rootLevelCategories,
  descendants,
  selectedCategory,
  setSelectedCategory,
}: CategoriesTreeProps) => {
  const [openCategories, setOpenCategories] = useState<{
    [category: string]: boolean;
  }>({});

  const toggleIsOpen = (category: string) =>
    setOpenCategories({
      ...openCategories,
      [category]: !openCategories[category],
    });

  return (
    <div className={styles.categoriesTreeContainer}>
      {rootLevelCategories.map((category) => (
        <CategoryNode
          key={category}
          isOpen={openCategories[category]}
          toggleIsOpen={() => toggleIsOpen(category)}
          category={category}
          isSelected={selectedCategory === category}
          setSelectedCategory={setSelectedCategory}
        >
          {descendants[category].map((level2Category) => (
            <CategoryNode
              key={level2Category}
              isOpen={openCategories[level2Category]}
              toggleIsOpen={() => toggleIsOpen(level2Category)}
              category={level2Category}
              isSelected={selectedCategory === level2Category}
              setSelectedCategory={setSelectedCategory}
            >
              <ul>
                {descendants[level2Category].map((lastLevelCategory) => (
                  <li key={lastLevelCategory}>
                    <button
                      className={classNames(styles.lastLevelCategory, {
                        [styles.selectedCategory]:
                          selectedCategory === lastLevelCategory,
                      })}
                      onClick={() => setSelectedCategory(lastLevelCategory)}
                    >
                      {lastLevelCategory}
                    </button>
                  </li>
                ))}
              </ul>
            </CategoryNode>
          ))}
        </CategoryNode>
      ))}
    </div>
  );
};
