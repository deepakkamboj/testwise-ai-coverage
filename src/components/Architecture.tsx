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
                <svg viewBox="0 0 800 670" className="w-full h-auto">
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
                  <rect x="250" y="470" width="150" height="70" rx="8" fill="hsl(142 71% 45%)" />
                  <text x="325" y="495" textAnchor="middle" fill="white" fontWeight="bold" fontSize="15">
                    Azure DevOps
                  </text>
                  <text x="325" y="515" textAnchor="middle" fill="white" fontSize="12">
                    Manual Test Cases
                  </text>

                  {/* MCP Layer */}
                  <rect x="170" y="580" width="140" height="60" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="240" y="605" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                    Azure DevOps
                  </text>
                  <text x="240" y="625" textAnchor="middle" fill="white" fontSize="11">
                    MCP
                  </text>

                  <rect x="330" y="580" width="140" height="60" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="400" y="605" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                    Playwright MCP
                  </text>
                  <text x="400" y="625" textAnchor="middle" fill="white" fontSize="11">
                    + Environment
                  </text>

                  <rect x="490" y="580" width="140" height="60" rx="8" fill="hsl(280 85% 65%)" />
                  <text x="560" y="605" textAnchor="middle" fill="white" fontWeight="bold" fontSize="14">
                    Playwright Tests
                  </text>
                  <text x="560" y="625" textAnchor="middle" fill="white" fontSize="11">
                    Build Pipeline
                  </text>

                  {/* Arrows */}
                  <path d="M 400 110 L 400 180" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 140 250 L 300 310" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 400 250 L 400 310" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 660 250 L 500 310" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,5" opacity="0.5" />
                  <path d="M 350 410 L 325 470" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 325 540 L 240 580" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 280 610 L 330 610" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />
                  <path d="M 470 610 L 490 610" stroke="hsl(240 10% 10%)" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />

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
                <svg viewBox="0 0 900 700" className="w-full h-auto">
                  {/* Actors/Components */}
                  <rect x="30" y="30" width="90" height="60" rx="8" fill="hsl(262 83% 58%)" />
                  <text x="75" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">
                    User
                  </text>

                  <rect x="180" y="30" width="120" height="60" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="240" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">
                    Copilot Studio
                  </text>

                  <rect x="360" y="30" width="100" height="60" rx="8" fill="hsl(280 85% 65%)" />
                  <text x="410" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="13">
                    AI Agent
                  </text>

                  <rect x="520" y="30" width="100" height="60" rx="8" fill="hsl(142 71% 45%)" />
                  <text x="570" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">
                    Azure DevOps
                  </text>

                  <rect x="680" y="30" width="100" height="60" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="730" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">
                    MCP + Pipeline
                  </text>

                  {/* Lifelines */}
                  <line x1="75" y1="90" x2="75" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="240" y1="90" x2="240" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="410" y1="90" x2="410" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="570" y1="90" x2="570" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="730" y1="90" x2="730" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />

                  {/* Messages */}
                  <path d="M 80 120 L 235 120" stroke="hsl(262 83% 58%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="157" y="115" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">1. Select work item</text>

                  <path d="M 245 155 L 405 155" stroke="hsl(220 70% 55%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="325" y="150" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">2. Trigger agent</text>

                  <path d="M 415 190 L 565 190" stroke="hsl(280 85% 65%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="490" y="185" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">3. Fetch Teams data</text>

                  <path d="M 565 225 L 415 225" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="490" y="220" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">4. Return requirements</text>

                  <rect x="390" y="250" width="40" height="80" fill="hsl(280 85% 65%)" />
                  <text x="410" y="285" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AI</text>
                  <text x="410" y="300" textAnchor="middle" fill="white" fontSize="9">Process</text>

                  <path d="M 415 350 L 565 350" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="490" y="345" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">5. Create test cases</text>

                  <path d="M 565 385 L 235 385" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="400" y="380" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">6. Show in Copilot</text>

                  <path d="M 235 420 L 80 420" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="157" y="415" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">7. Display tests</text>

                  <path d="M 80 460 L 235 460" stroke="hsl(262 83% 58%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="157" y="455" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">8. Trigger automation</text>

                  <path d="M 245 495 L 565 495" stroke="hsl(220 70% 55%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="405" y="490" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">9. Request automation</text>

                  <path d="M 575 530 L 725 530" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="650" y="525" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="11">10. ADO MCP reads</text>

                  <path d="M 725 565 L 725 595" stroke="hsl(220 70% 55%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <rect x="705" y="595" width="50" height="40" fill="hsl(220 70% 55%)" />
                  <text x="730" y="610" textAnchor="middle" fill="white" fontSize="9">Playwright</text>
                  <text x="730" y="622" textAnchor="middle" fill="white" fontSize="9">MCP +</text>
                  <text x="730" y="634" textAnchor="middle" fill="white" fontSize="9">Pipeline</text>

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
