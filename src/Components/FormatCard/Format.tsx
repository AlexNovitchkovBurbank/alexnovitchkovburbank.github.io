import "./Format.css"

type FormatProps = {
  title: string;
  folderStructureUrl: string;
  whyThisWay: string;
};

const Format = (props: FormatProps) => {
  const { title, folderStructureUrl, whyThisWay } = props;

  return (
    <div id="container">
      <div className="title">{title}</div>
      <div>{folderStructureUrl}</div>
      <div>{whyThisWay}</div>
    </div>
  );
};

export default Format;
