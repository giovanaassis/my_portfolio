function TechStackSection() {
  const frontendStack: string[] = [
    "html",
    "css",
    "javascript",
    "typescript",
    "react",
    "tailwindcss",
  ];
  const backendStack: string[] = [
    "node.js",
    "express",
    "postgresql",
    "apis rest",
  ];
  const othersStack: string[] = ["git", "github", "jest", "npm", "figma"];

  return (
    <section>
      <h1 className="highlightTitle mx-auto">Tecnologias que uso</h1>

      <div className="flex flex-col items-center justify-center gap-10 mt-20">
        <div>
          <h3>frontend</h3>
          <div className="techStacks"> 
            {frontendStack.map((stack) => (
              <span>{stack}</span>
            ))}
          </div>
        </div>
        {/* STYLED LINE */}
        <div className="w-50 bg-primary-purple h-2"></div>

        <div>
          <h3>backend</h3>
          <div className="techStacks">
            {backendStack.map((stack) => (
              <span>{stack}</span>
            ))}
          </div>
        </div>
        {/* STYLED LINE */}
        <div className="w-50 bg-primary-purple h-2"></div>

        <div>
          <h3>outros</h3>
          <div className="techStacks">
            {othersStack.map((stack) => (
              <span>{stack}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStackSection;
