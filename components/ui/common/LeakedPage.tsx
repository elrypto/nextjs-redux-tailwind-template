
export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  size?: string;
  leakedSection?: React.ReactNode;
  sectionSpacer?: number;
  leakedTitle?: string;
}


const LeakedPage: React.FC<Props> = ({ leakedSection, size, children, sectionSpacer, className, leakedTitle }) => {
  const pageSize = size ? `max-w-${size}` : 'max-w-md';
  const spacer = sectionSpacer ? `mt-${sectionSpacer}` : 'mt-6';

  const leakedToRender = leakedSection ||
    (<div className="mt-10 text-center">
      <h1 className="text-gray-700 text-2xl font-semibold">{leakedTitle}</h1>
    </div>);

  return (
    <>
      <div>
        {leakedToRender}
      </div>
      <div className={`mx-auto ${spacer} ${pageSize} shadow-lg rounded-lg bg-white ${className}`}>
        {children}
      </div>
    </>
  );
}

export default LeakedPage;
