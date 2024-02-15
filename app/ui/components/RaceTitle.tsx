export default function RaceTitle({
  className,
  children,
}: Readonly<{
  className?: string;
  children: JSX.Element | JSX.Element[];
}>) {
  return (
    <div
      className={`flex flex-row items-center justify-center text-mk-red font-bold text-2xl checkered-background text-center skew py-4 my-4 ${className}`}
    >
      {children}
    </div>
  );
}
