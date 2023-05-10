interface TitleProps {
  title: string;
}
const PageTitle = ({title}: TitleProps) => {
  return (
    <div className="">
      <h1>{title}</h1>
    </div>
  );
};

export default PageTitle;