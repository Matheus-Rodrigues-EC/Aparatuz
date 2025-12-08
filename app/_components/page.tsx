export const PageContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-6 p-5"> {children} </div>;
};

export const PageSectionTitle = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <h2 className="text-foreground text-xs font-semibold uppercase">
      {children}
    </h2>
  );
};

export const PageSection = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <div className="space-y-3 ">{children}</div>;
};

export const SectionScroller = ({ children }: { children: React.ReactNode }) => {
  return <div className="[&:: -webkit-scrollbar]:hidden mb-5 flex gap-4 overflow-x-auto">{children}</div>
} 