import React from "react";
import { SiOpenai, SiPytorch, SiTensorflow } from "react-icons/si";
import { TbNetwork, TbRobot, TbSparkles } from "react-icons/tb";
import Reveal from "../Reveal";

type AISkill = {
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
  span?: string;
};

const aiSkills: AISkill[] = [
  {
    title: "LLM Integration",
    description: "Building product features on OpenAI, Anthropic Claude, and Google Gemini APIs — prompt engineering, function/tool calling, and streaming.",
    icon: <SiOpenai />,
    tags: ["OpenAI", "Claude", "Gemini"],
    span: "md:col-span-2",
  },
  {
    title: "Agentic AI & MCP",
    description: "Designing autonomous agents, multi-agent orchestration, and Model Context Protocol integrations.",
    icon: <TbRobot />,
    tags: ["Agents", "MCP", "Tool use"],
  },
  {
    title: "RAG & Vector Search",
    description: "Retrieval-augmented generation pipelines with embeddings and vector databases for grounded, context-aware AI.",
    icon: <TbNetwork />,
    tags: ["Embeddings", "Vector DB", "RAG"],
  },
  {
    title: "Model Training & Deep Learning",
    description: "Training, fine-tuning, and deploying models with PyTorch and TensorFlow.",
    icon: (
      <span className="flex items-center gap-2">
        <SiPytorch /> <SiTensorflow />
      </span>
    ),
    tags: ["PyTorch", "TensorFlow", "Fine-tuning"],
    span: "md:col-span-2",
  },
];

const AISkills: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-semibold tracking-tight text-ink">AI & ML capabilities</h3>
        <span className="pill text-accent">
          <TbSparkles /> Applied AI
        </span>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {aiSkills.map((skill, index) => (
          <Reveal key={skill.title} delayMs={index * 80} className={skill.span ?? ""}>
            <div className="card-surface flex h-full flex-col gap-3 p-5">
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-xl text-accent">
                  {skill.icon}
                </span>
              </div>
              <h4 className="text-lg font-semibold text-ink">{skill.title}</h4>
              <p className="flex-1 text-sm leading-relaxed text-muted">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};

export default AISkills;
