type RoundArrowIconProps = {
  className?: string;
};

export const RoundArrowIcon = ({ className }: RoundArrowIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={className}
  >
    <g data-name="Groupe 9498">
      <path
        data-name="Tracé 11277"
        d="M10 0A10 10 0 1 1 0 10 10 10 0 0 1 10 0z"
        transform="rotate(90 10 10)"
        style={{ fill: "#7992bc" }}
      />
      <g data-name="icons Q2">
        <path
          data-name="Tracé 11223"
          d="M20.113 15.174 16.2 19.091a.7.7 0 0 0 .07 1.109.776.776 0 0 0 1-.074l4.4-4.434a.7.7 0 0 0 0-1.035l-4.4-4.434a.776.776 0 0 0-1-.074.7.7 0 0 0-.074 1.109z"
          transform="rotate(90 16.55 8.624)"
          style={{ fill: "#fff" }}
        />
      </g>
    </g>
  </svg>
);
