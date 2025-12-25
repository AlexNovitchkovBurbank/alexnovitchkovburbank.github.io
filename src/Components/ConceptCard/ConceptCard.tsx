import "./ConceptCard.css";

type ConceptCardProps = {
  title: string;
  description: string;
};

const ConceptCard = (props: ConceptCardProps) => {
  const { title, description } = props;

  return (
    <div className="container">
      <div className="title">{title}</div>
      <div>{description}</div>
    </div>
  );
};

export default ConceptCard;
