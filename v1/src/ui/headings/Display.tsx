interface DisplayProps {
  children: string;
}

function Display({ children }: DisplayProps) {
  return <h1 className="display">{children}</h1>;
}

export default Display;
