interface SectionTitleProps {
  title: string;
  isPoint: boolean;
}

function SectionTitle({ title, isPoint }: SectionTitleProps) {
  return (
    <div className="sectionTitle">
      <h1 className="headingOne">
        {title}
        {isPoint && <span style={{ color: '#305cde' }}>. </span>}{' '}
      </h1>
    </div>
  );
}

export default SectionTitle;
