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
    <div className="Palette">
      <div className="Palette-colors">hi mom</div>
    </div>
  );
}
