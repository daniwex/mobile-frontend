import Accordion from "../components/Accordion";
import { ChallengeRequirements } from "../utils/common";

type Requirements = {
  requirementOverview: ChallengeRequirements;
};

export default function RequirementsTab({ requirementOverview }: Requirements) {
  const bonus = {
    id: "bonus",
    title: "Bonus requirements",
    description: "Nice to have features that will make your project stand out.",
    items: requirementOverview.bonus,
  };
  const data = [...requirementOverview.sections, bonus];
  return (
    <div className="">
      <div className="flex flex-col gap-y-2">
        <span className="h3 font-bold">{requirementOverview.title}</span>
        <span className="text-sm">{requirementOverview.description}</span>
      </div>
      <div className="flex flex-col gap-y-2 mt-5">
        {data.map((el, index) => (
          <Accordion
            key={el.title}
            defaultExpanded={index == 0}
            index={index + 1}
            data={el}
          />
        ))}
      </div>
    </div>
  );
}
