export default function SectionTitle(props) {
  const { smTitle, title, description } = props;

  return (
    <>
      <div className="section-title">
        <span className="eyebrow">{smTitle ? smTitle : "Services"}</span>
        <h2>{title ? title : "Our Services"}</h2>
        <div className="line-bot"></div>
        <p>
          {description
            ? description
            : "All the lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet."}
        </p>
      </div>
    </>
  );
}
