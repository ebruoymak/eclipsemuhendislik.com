import { StitchHomeHeader } from "@/components/stitch-home/StitchHomeHeader";
import { StitchHomeHero } from "@/components/stitch-home/StitchHomeHero";
import { StitchSplitStage } from "@/components/stitch-home/StitchSplitStage";
import { StitchHomePhilosophy } from "@/components/stitch-home/StitchHomePhilosophy";
import { StitchHomeFooter } from "@/components/stitch-home/StitchHomeFooter";

export default function StitchHome() {
  return (
    <div className="shhome">
      <StitchHomeHeader />
      <main className="shhome-main">
        <StitchHomeHero />
        <StitchSplitStage />
        <StitchHomePhilosophy />
      </main>
      <StitchHomeFooter />
    </div>
  );
}
