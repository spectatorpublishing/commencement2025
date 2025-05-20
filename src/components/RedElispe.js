const RedCircleIcon = ({ number, size = "10%"  }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 94 94" fill="none">
      <circle cx="47" cy="47" r="47" fill="#EE352E" />
      <text
      x="50%"
      y="50%"
      textAnchor="middle"
      dominantBaseline="central"
      fill="#FFF"
      fontFamily="Arial"
      fontSize="67.873px"
      fontStyle="normal"
      fontWeight="700"
    >
      {number}
    </text>
    </svg>
  );
  
  export default RedCircleIcon;
  