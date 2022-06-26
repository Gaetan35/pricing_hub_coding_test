import classNames from "classnames";
import { ReactNode } from "react";
import { RoundArrowIcon } from "../../../../assets/icons/RoundArrowIcon";
import styles from "./CategoryNode.module.scss";

type ProductLabelProps = {
  isOpen: boolean;
  toggleIsOpen: () => void;
  category: string;
  children: ReactNode;
  isSelected: boolean;
  setSelectedCategory: (product: string) => void;
};

export const CategoryNode = ({
  isOpen,
  toggleIsOpen,
  category,
  children,
  isSelected,
  setSelectedCategory,
}: ProductLabelProps) => (
  <>
    <div className={styles.categoryNodeContainer}>
      <button onClick={toggleIsOpen} className={styles.roundArrowButton}>
        <RoundArrowIcon
          className={
            isOpen ? styles.rotateRoundArrowUp : styles.rotateRoundArrowDown
          }
        />
      </button>
      <button onClick={() => setSelectedCategory(category)}>
        <p
          className={classNames(styles.categoryLabel, {
            [styles.selectedCategory]: isSelected,
          })}
        >
          {category}
        </p>
      </button>
    </div>

    {isOpen && <div className={styles.descendantsContainer}> {children} </div>}
  </>
);
