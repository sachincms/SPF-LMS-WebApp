import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

// Structured sample case stories for easy lookup
const sampleCaseStories = {
  "Outcome Journals": {
    "Phase 1 Journal": {
      "Pratham": `
# From Tea Gardens to Thriving Careers: A Story of Transformation
The tea gardens of India, while picturesque, often present limited opportunities for the youth residing within them. Recognizing the risk of tea garden closures and the challenges posed by low wages, a vocational training program has emerged as a catalyst for change, empowering youth from these communities to pursue alternative livelihoods in the formal economy.

**Youth from Tea Gardens**: Every 45 days, youth are equipped with industry-relevant practical and theoretical skills, alongside crucial soft skills, at the Dhupguri Training Center. This comprehensive training, delivered through a hybrid skilling program, combines digital content, virtual and in-person instruction, and hands-on practical experience. The program's success lies in its multi-faceted approach:

**Mobilization Efforts**: Community engagement activities, in collaboration with local stakeholders like community leaders and Aanganwadi/ASHA workers, raise awareness about the benefits of vocational education.
**Training Activities**: A three-tiered training system ensures a solid foundation: Level 1 focuses on awareness, Level 2 on foundational skills, and Level 3 on hands-on practical training.
**Placement Efforts**: The program actively maps trainees to suitable job opportunities, prepares them for interviews through focused counseling, and leverages a network of over 7000 industry partners across India.
**Post-Placement Efforts**: Continuous support is provided through regular phone interviews, addressing employment-related issues, facilitating job retention, and offering multiple placement support. Regional alumni chapters and a dedicated Instagram handle foster a sense of community, while a toll-free helpline offers ongoing assistance.
**The outcome is clear**: Tea garden workers are adopting alternative livelihood options in the formal economy, reducing their dependence on tea gardens as their sole source of income. This shift is significant, given the precarious nature of tea garden employment and the struggle to manage household expenses on meager wages. Evidence of this transformation is documented through enrollment forms, NSDC certifications, placement offer letters, and MIS data.

**Youth and their Families**: From April 2023 to March 2024, youth who secured placements demonstrated remarkable job retention, providing crucial financial support to their families. This translates to improved financial stability and an enhanced standard of living. This observation is noteworthy because it signifies a tangible improvement in the socioeconomic status of these families. Formal employment provides not only stable incomes but also access to social security, healthcare, and career growth opportunities, fostering long-term financial planning and overall well-being. MIS retention data serves as evidence of this positive trend.

**Youth in Communities**: The program's impact extends beyond individual beneficiaries, fostering a culture of skill development within tea garden communities. After placement, from April 2023 to March 2024, youth transitioned from passive participants to proactive advocates for the vocational program. They actively reached out to others, sharing their positive experiences and motivating peers to join. This proactive outreach demonstrates increased confidence and leadership, with these youth emerging as informal leaders, guiding others towards beneficial opportunities. These youth role models inspire and motivate others to pursue vocational-led employment pathways, fostering a culture of skill development and sustainable livelihoods. This is a catalyst for positive social change, breaking down stigmas associated with vocational training and encouraging more youth to consider these pathways. The program's community engagement, visibility of success stories, and alumni experience sharing have all contributed to this transformative shift. MIS data further supports this observation.

In conclusion, this vocational training program is not just providing skills; it is building futures, strengthening families, and transforming communities. By empowering youth with the tools and support they need to thrive in the formal economy, the program is creating a ripple effect of positive change that promises a brighter future for the tea gardens of India.
      `
    }
  },
  "Progress Report Partners": {
    "Sign of Hope": `
# From Silence to Sound: Empowering Tribal Communities in the Sundarbans
**Context**: The Sundarbans, a UNESCO World Heritage Site in India, is home to diverse tribal communities facing increasing vulnerability due to climate change and systemic marginalization. This story highlights how a targeted intervention is amplifying their voices and building resilience in the face of adversity.

**The Problem**: Indigenous communities in the Sundarbans grapple with a multitude of challenges, including a lack of access to essential resources, government schemes, and information. A significant portion of tribal households lack tribal identity cards, hindering their ability to claim their rights and access crucial support. Climate change further exacerbates their vulnerability, threatening their livelihoods and traditional way of life.

**The Intervention**: Sign of Hope, with support from the Oak Foundation, launched a project to strengthen tribal voices and build community-led solutions. The intervention involved:

**Comprehensive Needs Assessment**: Conducting ethnographic surveys, participatory vulnerability and capacity assessments (PVCA), and action research to understand the specific challenges and needs of the communities.
**Empowerment and Access**: Assisting community members in obtaining caste certificates and accessing government schemes.
**Knowledge Dissemination**: Establishing Information Hubs to provide access to education, employment opportunities, natural resource management (NRM) information, weather forecasts, and hazard warnings in the local Bengali language.
**Community Mobilization**: Forming Women's Self-Help Groups (WSHGs) and Youth Groups to foster collective action and build leadership within the communities.
**Capacity Building**: Providing training to community members on various topics, including climate-resilient agriculture, disaster preparedness, and sustainable livelihoods.
**Healthcare Support**: Organizing health camps for women and advocating for vaccination drives in collaboration with local government offices.
**Multi-hazard Mapping**: Using GIS and remote sensing to map vulnerabilities and communicate weather forecasts and crop advisories to farmers.
**Outcomes / Change Observed**: The project has yielded significant results:

Hundreds of community members have obtained caste certificates, enabling them to access government schemes and assert their rights.
Vulnerability assessments have provided valuable insights into the specific challenges faced by different communities, informing targeted interventions.
Information Hubs have become vital resources for accessing information and building knowledge within the communities.
Women's Self-Help Groups and Youth Groups are empowering community members to take collective action and address their shared challenges.
Health camps have provided essential healthcare services to women in underserved communities.
**What’s Next / Sustainability**: The project is designed to be sustainable by building local capacity and fostering community ownership. Future steps include:

Scaling up successful interventions based on the lessons learned from the pilot project.
Strengthening partnerships with local government agencies to ensure the long-term sustainability of the project.
Continuing to empower tribal communities to advocate for their rights and participate in decision-making processes.
Replicating the project model in other vulnerable communities facing similar challenges.
    `,
  }
};

const outcomeJournalsDropdowns = {
  phase: ["Phase 1 Journal"],
  org: ["Pratham"]
};

const progressPartnersDropdowns = {
  org: ["Sign of Hope"]
};

const CaseStories: React.FC = () => {
  // Filter state
  const [option, setOption] = useState<"Outcome Journals" | "Progress Report Partners">("Outcome Journals");
  const [dropdown1, setDropdown1] = useState("Phase 1 Journal");
  const [dropdown2, setDropdown2] = useState("Pratham");

  // Get dropdown options based on radio selection
  const phaseOptions = outcomeJournalsDropdowns.phase;
  const orgOptions = option === "Outcome Journals"
    ? outcomeJournalsDropdowns.org
    : progressPartnersDropdowns.org;

  // Get the current case story to display
  let caseStory = "";
  if (option === "Outcome Journals") {
    caseStory = sampleCaseStories["Outcome Journals"][dropdown1]?.[dropdown2] || "";
  } else if (option === "Progress Report Partners") {
    caseStory = sampleCaseStories["Progress Report Partners"][dropdown2] || "";
  }

  // Handle radio change
  const handleOptionChange = (val: "Outcome Journals" | "Progress Report Partners") => {
    setOption(val);
    if (val === "Outcome Journals") {
      setDropdown1("Phase 1 Journal");
      setDropdown2("Pratham");
    } else {
      setDropdown1(""); // not used
      setDropdown2("Sign of Hope");
    }
  };

  // Handle dropdown changes
  const handleDropdown1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdown1(e.target.value);
    setDropdown2("Pratham"); // reset org to default for phase
  };
  const handleDropdown2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDropdown2(e.target.value);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "row",
        background: "transparent", // let App.tsx background show through
      }}
    >
      {/* Sidebar spacer */}
      <div style={{ width: 240, flexShrink: 0 }} />
      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center", // centers vertically
          minHeight: "100vh",
          padding: "2rem 4vw",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 900,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // centers horizontally
            justifyContent: "center",
          }}
        >
          <h3 style={{ color: "#03045E", fontWeight: 700, marginBottom: "1.5rem", textAlign: "center" }}>
            Case Stories
          </h3>

          {/* Filter Section */}
          <div style={{ marginBottom: "2rem", display: "flex", flexDirection: "column", alignItems: "center" }}>
            {/* Radio Buttons Row */}
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
              marginBottom: "1.2rem",
              justifyContent: "center",
              width: "100%"
            }}>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: option === "Outcome Journals" ? "#e9f2ff" : "#fff",
                  border: option === "Outcome Journals" ? "2px solid #023E8A" : "1px solid #e3e6f0",
                  borderRadius: "2rem",
                  padding: "0.5rem 1.2rem",
                  fontWeight: 600,
                  color: "#023E8A",
                  cursor: "pointer",
                  boxShadow: option === "Outcome Journals" ? "0 2px 8px rgba(2,62,138,0.07)" : "none",
                  transition: "all 0.2s"
                }}
              >
                <input
                  type="radio"
                  name="caseOption"
                  value="Outcome Journals"
                  checked={option === "Outcome Journals"}
                  onChange={() => handleOptionChange("Outcome Journals")}
                  style={{
                    marginRight: "0.7rem",
                    accentColor: "#023E8A",
                    width: 18,
                    height: 18
                  }}
                />
                Outcome Journals
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: option === "Progress Report Partners" ? "#e9f2ff" : "#fff",
                  border: option === "Progress Report Partners" ? "2px solid #023E8A" : "1px solid #e3e6f0",
                  borderRadius: "2rem",
                  padding: "0.5rem 1.2rem",
                  fontWeight: 600,
                  color: "#023E8A",
                  cursor: "pointer",
                  boxShadow: option === "Progress Report Partners" ? "0 2px 8px rgba(2,62,138,0.07)" : "none",
                  transition: "all 0.2s"
                }}
              >
                <input
                  type="radio"
                  name="caseOption"
                  value="Progress Report Partners"
                  checked={option === "Progress Report Partners"}
                  onChange={() => handleOptionChange("Progress Report Partners")}
                  style={{
                    marginRight: "0.7rem",
                    accentColor: "#023E8A",
                    width: 18,
                    height: 18
                  }}
                />
                Progress Report Partners
              </label>
            </div>
            {/* Dropdowns Row */}
            <div style={{
              display: "flex",
              gap: "1.5rem",
              alignItems: "center",
              justifyContent: "center",
              width: "100%"
            }}>
              {option === "Outcome Journals" && (
                <>
                  <select
                    value={dropdown1}
                    onChange={handleDropdown1Change}
                    style={{
                      padding: "0.6rem 1.2rem",
                      borderRadius: "0.75rem",
                      border: "1.5px solid #90e0ef",
                      background: "#f8fafc",
                      fontWeight: 500,
                      color: "#023E8A",
                      fontSize: "1rem",
                      outline: "none",
                      boxShadow: "0 2px 8px rgba(2,62,138,0.04)",
                      transition: "border 0.2s"
                    }}
                  >
                    {phaseOptions.map(phase => (
                      <option key={phase} value={phase}>{phase}</option>
                    ))}
                  </select>
                  <select
                    value={dropdown2}
                    onChange={handleDropdown2Change}
                    style={{
                      padding: "0.6rem 1.2rem",
                      borderRadius: "0.75rem",
                      border: "1.5px solid #90e0ef",
                      background: "#f8fafc",
                      fontWeight: 500,
                      color: "#023E8A",
                      fontSize: "1rem",
                      outline: "none",
                      boxShadow: "0 2px 8px rgba(2,62,138,0.04)",
                      transition: "border 0.2s"
                    }}
                  >
                    {orgOptions.map(org => (
                      <option key={org} value={org}>{org}</option>
                    ))}
                  </select>
                </>
              )}
              {option === "Progress Report Partners" && (
                <select
                  value={dropdown2}
                  onChange={handleDropdown2Change}
                  style={{
                    padding: "0.6rem 1.2rem",
                    borderRadius: "0.75rem",
                    border: "1.5px solid #90e0ef",
                    background: "#f8fafc",
                    fontWeight: 500,
                    color: "#023E8A",
                    fontSize: "1rem",
                    outline: "none",
                    boxShadow: "0 2px 8px rgba(2,62,138,0.04)",
                    transition: "border 0.2s"
                  }}
                >
                  {orgOptions.map(org => (
                    <option key={org} value={org}>{org}</option>
                  ))}
                </select>
              )}
            </div>
          </div>
          {/* End Filter Section */}

          <div
            style={{
              background: "#f8fafc",
              borderRadius: "1rem",
              padding: "1.2rem",
              color: "#212529",
              fontSize: "1.08rem",
              fontFamily: "inherit",
              boxShadow: "0 1px 4px rgba(2,62,138,0.04)",
              minHeight: 180,
              textAlign: "justify",
              marginBottom: "2rem",
              width: "100%",
              maxWidth: 900,
              alignSelf: "center"
            }}
          >
            {caseStory ? (
              <ReactMarkdown>{caseStory}</ReactMarkdown>
            ) : (
              <span style={{ color: "#adb5bd" }}>No case story available for the selected filters.</span>
            )}
          </div>

          <form 
            // onSubmit={handleSend} 
            style={{ display: "flex", gap: 8, width: "100%", maxWidth: 900 }}
          >
            <input
              type="text"
              placeholder="Type your message..."
              style={{
                flex: 1,
                border: "1px solid #e3e6f0",
                borderRadius: "0.75rem",
                padding: "0.6rem 1rem",
                fontSize: "1rem",
                outline: "none",
              }}
            />
            <button
              type="submit"
              style={{
                background: "#03045E",
                color: "#fff",
                border: "none",
                borderRadius: "0.75rem",
                padding: "0.6rem 1.3rem",
                fontWeight: 600,
                fontSize: "1rem",
                transition: "background 0.2s"
              }}
            >
              <i className="bi bi-arrow-up-circle-fill" style={{ fontSize: "1.2rem" }} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CaseStories;