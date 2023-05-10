interface TitleProps {
  title: string;
}
const PageTitle = ({title}: TitleProps) => {
  return (
    <div style={{fontSize: "2.5em"}}>
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;