import { useState } from "react";
import CodeBlock from "./CodeBlock";
import { androidCode } from "@/src/content/hero/android";
import { swiftCode } from "@/src/content/hero/swift";
import { dartCode } from "@/src/content/hero/dart";
import { rnCode } from "@/src/content/hero/rn";

type Platform = "android" | "ios" | "flutter" | "react-native";
const platformConfig = {
  android: {
    label: "Android",
    language: "kotlin",
    fileName: "ProfileScreen.kt",
    code: androidCode,
  },
  ios: {
    label: "IOS",
    language: "swift",
    fileName: "ProfileScreen.swift",
    code: swiftCode,
  },
  flutter: {
    label: "Flutter",
    language: "dart",
    fileName: "ProfileScreen.dart",
    code: dartCode,
  },
  "react-native": {
    label: "React Native",
    language: "javascript",
    fileName: "ProfileScreen.tsx",
    code: rnCode,
  },
};

export default function ContentToggle() {
  const [platform, setPlatform] = useState<Platform>("android");
  const currentPlatform = platformConfig[platform];
  return (
    <div className="">
      <div className="w-full flex justify-center">
        <div className="toggle">
          <span
            className={`${platform == "android" ? "active" : "inactive"}`}
            onClick={() => setPlatform("android")}
          >
            Android
          </span>
          <span
            className={`${platform == "ios" ? "active" : "inactive"}`}
            onClick={() => setPlatform("ios")}
          >
            IOS
          </span>
          <span
            className={`${platform == "flutter" ? "active" : "inactive"}`}
            onClick={() => setPlatform("flutter")}
          >
            Flutter
          </span>
          <span
            className={`${platform == "react-native" ? "active" : "inactive"}`}
            onClick={() => setPlatform("react-native")}
          >
            React Native
          </span>
        </div>
      </div>

      <div className="mt-[50px]">
        <CodeBlock
          fileName={currentPlatform.fileName}
          language={currentPlatform.language}
          code={currentPlatform.code}
        />
      </div>
    </div>
  );
}
