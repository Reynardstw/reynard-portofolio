interface SectionHeadingProps {
  index: string;
  label: string;
  title?: string;
  description?: string;
}

export function SectionHeading({ index, label, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <p className="section-kicker">
        <span>{index}</span>
        {label}
      </p>
      {title ? <h2>{title}</h2> : null}
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
