export default function ColorBox({
  name,
  background,
}: {
  name: string;
  background: string;
}) {
  return (
    <div
      className="w-1/5 h-1/4 my-0 mx-auto inline-block relative cursor-pointer"
      style={{ backgroundColor: background }}
    >
       <span>{name}</span>
       <span>MORE</span>
    </div>
  );
}
