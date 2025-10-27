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
                <svg viewBox="0 0 1100 700" className="w-full h-auto">
                  {/* Actors/Components */}
                  <rect x="20" y="30" width="90" height="60" rx="8" fill="hsl(262 83% 58%)" />
                  <text x="65" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">
                    User
                  </text>

                  <rect x="150" y="30" width="110" height="60" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="205" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">
                    Copilot Studio
                  </text>

                  <rect x="300" y="30" width="90" height="60" rx="8" fill="hsl(280 85% 65%)" />
                  <text x="345" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="12">
                    AI Agent
                  </text>

                  <rect x="430" y="30" width="100" height="60" rx="8" fill="hsl(142 71% 45%)" />
                  <text x="480" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">
                    Azure DevOps
                  </text>

                  <rect x="570" y="30" width="130" height="60" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="635" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">
                    ADO MCP
                  </text>

                  <rect x="740" y="30" width="130" height="60" rx="8" fill="hsl(220 70% 55%)" />
                  <text x="805" y="65" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">
                    Playwright MCP
                  </text>

                  <rect x="910" y="30" width="140" height="60" rx="8" fill="hsl(280 85% 65%)" />
                  <text x="980" y="60" textAnchor="middle" fill="white" fontWeight="bold" fontSize="11">
                    Build Pipeline
                  </text>

                  {/* Lifelines */}
                  <line x1="65" y1="90" x2="65" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="205" y1="90" x2="205" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="345" y1="90" x2="345" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="480" y1="90" x2="480" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="635" y1="90" x2="635" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="805" y1="90" x2="805" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />
                  <line x1="980" y1="90" x2="980" y2="660" stroke="hsl(240 10% 10%)" strokeWidth="2" strokeDasharray="5,5" />

                  {/* Messages */}
                  <path d="M 70 120 L 200 120" stroke="hsl(262 83% 58%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="135" y="115" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">1. Select work item</text>

                  <path d="M 210 155 L 340 155" stroke="hsl(220 70% 55%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="275" y="150" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">2. Trigger agent</text>

                  <path d="M 350 190 L 475 190" stroke="hsl(280 85% 65%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="412" y="185" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">3. Fetch Teams data</text>

                  <path d="M 475 225 L 350 225" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="412" y="220" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">4. Return requirements</text>

                  <rect x="325" y="250" width="40" height="70" fill="hsl(280 85% 65%)" />
                  <text x="345" y="280" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AI</text>
                  <text x="345" y="295" textAnchor="middle" fill="white" fontSize="9">Process</text>

                  <path d="M 350 340 L 475 340" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="412" y="335" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">5. Create test cases</text>

                  <path d="M 475 375 L 210 375" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="342" y="370" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">6. Show in Copilot</text>

                  <path d="M 200 410 L 70 410" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowgreen)" />
                  <text x="135" y="405" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">7. Display tests</text>

                  <path d="M 70 450 L 200 450" stroke="hsl(262 83% 58%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="135" y="445" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">8. Trigger automation</text>

                  <path d="M 210 485 L 475 485" stroke="hsl(220 70% 55%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="342" y="480" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">9. Request automation</text>

                  <path d="M 485 520 L 630 520" stroke="hsl(142 71% 45%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="557" y="515" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">10. Read test cases</text>

                  <path d="M 640 555 L 800 555" stroke="hsl(220 70% 55%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="720" y="550" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">11. Send to Playwright</text>

                  <path d="M 810 590 L 975 590" stroke="hsl(280 85% 65%)" strokeWidth="3" fill="none" markerEnd="url(#arrowblue)" />
                  <text x="892" y="585" textAnchor="middle" fill="hsl(240 10% 10%)" fontSize="10">12. Generate & execute</text>

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
