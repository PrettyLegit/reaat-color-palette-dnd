import Paleltte from "@/components/Palette";

import colorPalette from "@/util/seedPalettes";

export default function Home() {
  return (
    <main>
      <Paleltte palette={colorPalette[5]} />
    </main>
  );
}
