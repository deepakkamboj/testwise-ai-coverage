import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Architecture = () => {
  return (
    <section id="architecture" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">System Architecture</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Scalable, secure, and intelligent architecture powering TestWise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Component Diagram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-8">
                <svg viewBox="0 0 800 600" className="w-full h-auto">
                  {/* User Interface Layer */}
                  <rect x="250" y="30" width="300" height="80" rx="8" fill="hsl(262 83% 58%)" />
                  <text x="400" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">
                    User Interface
                  </text>
                  <text x="400" y="90" textAnchor="middle" fill="white" fontSize="14">
                    Copilot Studio / ADO
                  </text>

                  {/* Integration Layer */}
                  <rect x="50" y="180" width="180" height="70" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="140" y="210" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                    Teams Integration
                  </text>
                  <text x="140" y="235" textAnchor="middle" fill="white" fontSize="12">
                    Requirements API
                  </text>

                  <rect x="310" y="180" width="180" height="70" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="400" y="210" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                    Azure DevOps
                  </text>
                  <text x="400" y="235" textAnchor="middle" fill="white" fontSize="12">
                    Test Cases API
                  </text>

                  <rect x="570" y="180" width="180" height="70" rx="8" fill="hsl(220 70% 55%)" opacity="0.5" />
                  <text x="660" y="210" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                    Future Sources
                  </text>
                  <text x="660" y="235" textAnchor="middle" fill="white" fontSize="12">
                    SharePoint, Figma
                  </text>

                  {/* AI Processing Core */}
                  <rect x="200" y="310" width="400" height="100" rx="8" fill="hsl(280 85% 65%)" />
                  <text x="400" y="345" textAnchor="middle" fill="white" fontWeight="bold" fontSize="18">
                    AI Processing Engine
                  </text>
                  <text x="400" y="370" textAnchor="middle" fill="white" fontSize="14">
                    NLP • ML Models • Risk Analysis
                  </text>
                  <text x="400" y="390" textAnchor="middle" fill="white" fontSize="14">
                    Dependency Detection • Automation Assessment
                  </text>

                  {/* Output Layer */}
                  <rect x="150" y="470" width="200" height="70" rx="8" fill="hsl(142 71% 45%)" />
                  <text x="250" y="500" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                    Manual Test Cases
                  </text>
                  <text x="250" y="520" textAnchor="middle" fill="white" fontSize="12">
                    Azure DevOps
                  </text>

                  <rect x="450" y="470" width="200" height="70" rx="8" fill="hsl(142 71% 45%)" />
                  <text x="550" y="500" textAnchor="middle" fill="white" fontWeight="bold" fontSize="16">
                    Playwright Tests
                  </text>
                  <text x="550" y="520" textAnchor="middle" fill="white" fontSize="12">
                    MCP Generation
                  </text>

                  {/* Arrows */}
                  <path d="M 400 110 L 400 180" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 140 250 L 300 310" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 400 250 L 400 310" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 660 250 L 500 310" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5" opacity="0.5" />
                  <path d="M 350 410 L 280 470" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 450 410 L 520 470" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />

                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="hsl(240 10% 10%)" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Sequence Diagram</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted/50 rounded-lg p-8">
                <svg viewBox="0 0 800 600" className="w-full h-auto">
                  {/* Actors/Components */}
                  <rect x="50" y="30" width="100" height="60" rx="8" fill="hsl(262 83% 58%)" />
                  <text x="100" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                    User
                  </text>

                  <rect x="230" y="30" width="140" height="60" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="300" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                    Copilot Studio
                  </text>

                  <rect x="450" y="30" width="100" height="60" rx="8" fill="hsl(280 85% 65%)" />
                  <text x="500" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                    AI Agent
                  </text>

                  <rect x="650" y="30" width="100" height="60" rx="8" fill="hsl(142 71% 45%)" />
                  <text x="700" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                    Data Sources
                  </text>

                  {/* Lifelines */}
                  <line x1="100" y1="90" x2="100" y2="560" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="300" y1="90" x2="300" y2="560" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="500" y1="90" x2="500" y2="560" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="700" y1="90" x2="700" y2="560" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />

                  {/* Messages */}
                  <path d="M 105 120 L 295 120" stroke="hsl(262 83% 58%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="200" y="115" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="12">1. Select work item</text>

                  <path d="M 305 160 L 495 160" stroke="hsl(220 70% 55%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="400" y="155" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="12">2. Trigger agent</text>

                  <path d="M 505 200 L 695 200" stroke="hsl(280 85% 65%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="600" y="195" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="12">3. Fetch Teams data</text>

                  <path d="M 505 240 L 695 240" stroke="hsl(280 85% 65%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="600" y="235" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="12">4. Analyze requirements</text>

                  <rect x="480" y="270" width="40" height="80" fill="hsl(280 85% 65%)" />
                  <text x="500" y="305" textAnchor="middle" fill="white" fontSize="11" fontWeight="bold">AI</text>
                  <text x="500" y="320" textAnchor="middle" fill="white" fontSize="10">Process</text>

                  <path d="M 495 370 L 305 370" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="400" y="365" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="12">5. Manual test cases</text>

                  <path d="M 295 410 L 105 410" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="200" y="405" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="12">6. Display in ADO</text>

                  <path d="M 105 450 L 295 450" stroke="hsl(262 83% 58%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="200" y="445" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="12">7. Trigger automation</text>

                  <path d="M 305 490 L 495 490" stroke="hsl(220 70% 55%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="400" y="485" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="12">8. Generate Playwright</text>

                  <defs>
                    <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="hsl(220 70% 55%)" />
                    </marker>
                    <marker id="arrowgreen" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                      <polygon points="0 0, 10 3, 0 6" fill="hsl(142 71% 45%)" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
