import "./Palette.scss";
import ColorBox from "../ColorBox/ColorBox";

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
    <div className="palette">
      <div className="palette-colors">
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
