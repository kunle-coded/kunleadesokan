interface HeadingFourProps {
  children: string;
}

function HeadingFour({ children }: HeadingFourProps) {
  return <h4 className="headingFour">{children}</h4>;
}

export default HeadingFour;
