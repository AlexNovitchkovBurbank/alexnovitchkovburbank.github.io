import "./FormatCard.css"

type FormatProps = {
  title: string;
  url: string;
  whyThisWay: string;
};

const FormatCard = (props: FormatProps) => {
  const { title, url, whyThisWay } = props;

  return (
    <div className="container">
      <div className="title">{title}</div>
      <img src={url} className="img" />
      <div>{whyThisWay}</div>
    </div>
  );
};

export default FormatCard;
