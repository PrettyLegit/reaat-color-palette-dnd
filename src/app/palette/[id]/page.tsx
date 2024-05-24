import Paleltte from "@/components/Palette/Palette";
import colorPalette from "@/util/seedPalettes";
import { generatePalette } from "@/util/colorHelper";

export default function Page({ params }: { params: { id: string } }) {
  function findPalette(id: string) {
    return colorPalette.find((palette) => palette.id === id);
  }
  return <Paleltte palette={generatePalette(findPalette(params.id))} />;
}
