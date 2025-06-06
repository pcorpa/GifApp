interface Props {
  title: String;
}

export const Title = ({ title }: Props) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
