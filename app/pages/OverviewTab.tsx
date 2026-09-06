import TextBubble from "../components/TextBubble";
import { ChallengeOverview } from "../utils/common";

type Overview = {
  challengeOverview: ChallengeOverview;
  skills: string[];
};

export default function OverviewTab({ challengeOverview, skills }: Overview) {
  return (
    <div className="border border-gray-500/30 rounded-md">
      <div className="md:flex md:flex-col px-7 py-3 gap-y-2 border-b border-gray-500/30">
        <span className="h3 font-bold">Challenge overview</span>
        <span className="md:w-2/3 text-sm">{challengeOverview.mission}</span>
      </div>

      <div className="md:grid md:grid-cols-2 px-7 py-3 border-b border-gray-500/30">
        <div className="md:flex md:flex-col gap-y-2">
          <span className="h3 font-bold">Requirements</span>
          <div className="md:flex md:flex-col gap-y-2 text-sm">
            {challengeOverview.requirementsSummary.map((el) => (
              <span key={el}>{el}</span>
            ))}
          </div>
        </div>
        <div>
          <div className="md:flex md:flex-col gap-y-2">
            <span className="h3 font-bold">Bonus</span>
            <div className="md:flex md:flex-col gap-y-2 text-sm">
              {challengeOverview.bonusSummary.map((el) => (
              <span key={el}>{el}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-500/30">
        <div className="md:flex md:flex-col px-7 py-3 gap-y-2 ">
          <span className="h3 font-bold">Assets included</span>
          <div className="flex gap-x-2 text-sm">
            {challengeOverview.assetsSummary.map((el) => (
              <TextBubble key={el} text={el} />
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div className="md:flex md:flex-col px-7 py-3 gap-y-2 ">
          <span className="h3 font-bold">What you'll practice</span>
          <div className="flex gap-x-2 text-sm">
            {skills.map((el) => (
              <TextBubble key={el} text={el} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
