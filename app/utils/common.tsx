import OverviewTab from "../pages/OverviewTab";
import RequirementsTab from "../pages/RequirementsTab";
import SubmissionsTab from "../pages/SubmissionsTab";
import AssetsTab from "../pages/AssetsTab";

export type Difficulty = "beginner" | "junior" | "intermediate" | "advanced";

export type AccessLevel = "free" | "pro";

export type Platform = "android" | "ios" | "flutter" | "react-native";

export type AssetType = "images" | "archive" | "json" | "document";

export type SubmissionSortOption = "most-popular" | "newest" | "most-viewed";

export interface EstimatedTime {
  minHours: number;
  maxHours: number;
}

export interface ChallengeOverview {
  mission: string;
  requirementsSummary: string[];
  bonusSummary: string[];
  assetsSummary: string[];
}

export interface RequirementSection {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface ChallengeRequirements {
  title: string;
  description: string;
  sections: RequirementSection[];
  bonus: string[];
  implementationNote: string;
}

export interface ChallengeAsset {
  id: string;
  label: string;
  description: string;
  type: AssetType;
  format: string;
  size: string;
  access: AccessLevel;
  path: string;
}

export interface ChallengeAssets {
  title: string;
  description: string;
  items: ChallengeAsset[];
}

export interface SubmissionRules {
  requiresGithubRepo: boolean;
  requiresScreenshots: boolean;
  requiresPlatform: boolean;
  allowsDescription: boolean;
  allowPrivateSubmission: boolean;
}

export interface FeaturedSubmission {
  id: string;
  title: string;
  author: string;
  platform: Platform;
  technologies: string[];
  likes: number;
  views: number;
}

export interface ChallengeSubmissions {
  title: string;
  description: string;
  filters: Array<"all" | Platform>;
  sortOptions: SubmissionSortOption[];
  rules: SubmissionRules;
  featured: FeaturedSubmission[];
}

export interface ChallengeTabs {
  overview: ChallengeOverview;
  requirements: ChallengeRequirements;
  assets: ChallengeAssets;
  submissions: ChallengeSubmissions;
}

export interface Challenge {
  id: string;
  slug: string;
  title: string;
  description: string;
  difficulty: Difficulty;
  access: AccessLevel;
  estimatedTime: EstimatedTime;
  screens: number;
  platforms: Platform[];
  previewImages: string[];
  skills: string[];
  tabs: ChallengeTabs;
}

export interface ChallengesData {
  challenges: Challenge[];
}

export type Tab = "overview" | "requirements" | "assets" | "submissions";

export function renderTabContent(activeTab: Tab, challenge: Challenge) {
  const currentTab = challenge.tabs[activeTab]
  switch (activeTab) {
    case "overview":
      return (
        <OverviewTab
          challengeOverview={currentTab as ChallengeOverview}
          skills={challenge.skills}
        />
      );

    case "requirements":
      return <RequirementsTab
        requirementOverview={currentTab as ChallengeRequirements}
      />;

    case "assets":
      return <AssetsTab />;

    case "submissions":
      return <SubmissionsTab />;

    default:
      return null;
  }
}
