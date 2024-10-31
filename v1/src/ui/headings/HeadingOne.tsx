interface HeadingOneProps {
  children: string;
}

function HeadingOne({ children }: HeadingOneProps) {
  return <h1 className="headingOne">{children}</h1>;
}

export default HeadingOne;
