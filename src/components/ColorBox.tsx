export default function ColorBox({
  name,
  background,
}: {
  name: string;
  background: string;
}) {
  return (
    <div
      className="group relative mx-auto my-0 -mb-2 inline-block h-1/4 w-1/5 cursor-pointer"
      style={{ backgroundColor: background }}
    >
      <div>
        <div className="absolute bottom-0 left-0 w-full p-2 uppercase tracking-wider text-black">
          <span>{name}</span>
        </div>
        <button className="absolute left-1/2 top-1/2 inline-block h-8 w-24 -translate-x-1/2 -translate-y-1/2 border-none bg-black/[.3] text-center text-base uppercase leading-8 text-white opacity-0 outline-none transition duration-500 ease-in-out group-hover:opacity-100">
          Copy
        </button>
      </div>
      <span className="absolute bottom-0 right-0 h-8 w-14 border-none bg-black/[.3] text-center uppercase leading-8">
        More
      </span>
    </div>
  );
}
