import { useEffect, useRef } from "react";
import mermaid from "mermaid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Architecture = () => {
  const componentDiagramRef = useRef<HTMLDivElement>(null);
  const sequenceDiagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
    });

    const renderDiagrams = async () => {
      if (componentDiagramRef.current) {
        const componentDiagram = `flowchart TD
    %% Nodes
    UI["User Interface<br/>(Microsoft Copilot Studio)"]:::purple

    Teams["Teams Integration<br/>(Teams Connector)"]:::blue
    Emails["Emails Integration<br/>(Outlook Connector)"]:::blue
    AzureAPI["Azure DevOps<br/>(AzureDevOps Connector)"]:::blue
    SharePoint["Future Sources<br/>(SharePoint, Figma Connectors)"]:::blue
    Audio["Audio Sources<br/>(Meeting Transcripts, Voice Notes)"]:::blue
    Video["Video Sources<br/>(Recordings, Demos)"]:::blue

    AIEngine["AI Processing Engine<br/>NLP • ML Models • Risk Analysis<br/>Dependency Detection • Automation Assessment"]:::pink
    ManualTC["Azure DevOps<br/>(Manual Test Cases)"]:::green
    ADO["Azure DevOps MCP"]:::blue
    Config["Test Configuration<br/>(URL, Browser, Env, Tags, Parallelism)"]:::green
    MCP["Playwright MCP"]:::blue
    PWTests["Playwright Tests Execution<br/>(Using Build Pipeline)"]:::pink

    %% Connections
    UI --> Teams
    UI --> Emails
    UI --> AzureAPI
    UI --> SharePoint
    UI --> Audio
    UI --> Video

    Teams --> AIEngine
    Emails --> AIEngine
    AzureAPI --> AIEngine
    SharePoint --> AIEngine
    Audio --> AIEngine
    Video --> AIEngine

    AIEngine -->|Manual Test Case will be saved <br/>in Azure DevOps as Test Case Items| ManualTC
    ManualTC -->|Pulls Test Case Descriptions<br/>from Azure DevOps Items| ADO
   
    Config --> MCP
    ADO -->|Passes Browser, Env, Tags<br/>for Test Generation| MCP
    MCP -->|Generates Playwright Tests<br/>from Config + Descriptions| PWTests

    %% Styling
    classDef purple fill:#6C63FF,stroke:#333,stroke-width:1px,color:#fff;
    classDef blue fill:#4C9AFF,stroke:#333,stroke-width:1px,color:#fff;
    classDef green fill:#3DBE29,stroke:#333,stroke-width:1px,color:#fff;
    classDef pink fill:#C063FF,stroke:#333,stroke-width:1px,color:#fff;`;

        const { svg } = await mermaid.render('componentDiagram', componentDiagram);
        componentDiagramRef.current.innerHTML = svg;
      }

      if (sequenceDiagramRef.current) {
        const sequenceDiagram = `sequenceDiagram
    participant User
    participant Copilot as Copilot Studio
    participant AI as AI Agent
    participant Teams as Teams/Data Sources
    participant ADO as Azure DevOps
    participant ADOMCP as Azure DevOps MCP
    participant Config as Test Configuration
    participant PWMCP as Playwright MCP
    participant Pipeline as Build Pipeline

    User->>Copilot: 1. Select work item
    Copilot->>AI: 2. Trigger agent
    AI->>Teams: 3. Fetch Teams/Email/Audio data
    Teams-->>AI: 4. Return requirements
    
    Note over AI: AI Processing<br/>Analyze & Generate
    
    AI->>ADO: 5. Create manual test cases
    ADO-->>Copilot: 6. Show in Copilot
    Copilot-->>User: 7. Display tests
    
    User->>Copilot: 8. Trigger automation
    Copilot->>ADOMCP: 9. Request automation
    ADOMCP->>ADO: 10. Read test cases
    ADO-->>ADOMCP: 11. Return test case descriptions
    Config->>PWMCP: 12. Provide environment config
    ADOMCP->>PWMCP: 13. Send test cases + config
    PWMCP->>Pipeline: 14. Generate & execute Playwright tests
    Pipeline-->>User: 15. Test results`;

        const { svg } = await mermaid.render('sequenceDiagram', sequenceDiagram);
        sequenceDiagramRef.current.innerHTML = svg;
      }
    };

    renderDiagrams();
  }, []);

  return (
    <section id="architecture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">System Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable, secure, and intelligent architecture powering TestWise
          </p>
        </div>

        {/* Component Diagram Section */}
        <div className="mb-20">
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Component Diagram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-8 overflow-x-auto">
                <div ref={componentDiagramRef} className="flex justify-center" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sequence Diagram Section */}
        <div>
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Sequence Diagram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-8 overflow-x-auto">
                <div ref={sequenceDiagramRef} className="flex justify-center" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
