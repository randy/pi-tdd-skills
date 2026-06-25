import type { Extension } from "@earendil-works/pi-coding-agent";

const extension: Extension = {
  name: "pi-tdd-skills",
  skills: [
    {
      source: "git:github.com/mattpocock/skills",
      paths: [
        "skills/engineering/tdd/SKILL.md",
        "skills/engineering/tdd/mocking.md",
        "skills/engineering/tdd/refactoring.md",
        "skills/engineering/tdd/tests.md"
      ]
    }
  ]
};

export default extension;
