import ColorBox from "./ColorBox";

type PaletteProps = {
  palette: {
    paletteName: string;
    id: string;
    colors: {
      name: string;
      color: string;
    }[];
  };
};
export default function Palette({ palette }: PaletteProps) {
  return (
    <div className="h-screen">
      <div className="h-11/12">
        {palette.colors.map((color) => (
          <ColorBox
            key={color.name}
            name={color.name}
            background={color.color}
          />
        ))}
      </div>
    </div>
  );
}
