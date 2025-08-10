import ResourceCard from "../components/ResourceCard";
import outcomeMappingGuide from "../assets/SPF_Resources/final_MEL Foundational Training/Outcome Mapping Guide_English.pdf";
// import session1MELFundamentals from "../assets/SPF_Resources/final_MEL Foundational Training/Session 1_ MEL Fundamentals-I.pptx";
// import session2MELFundamentals from "../assets/SPF_Resources/final_MEL Foundational Training/Session 2_MEL Fundamentals-II.pptx";
// import session3OutcomeMapping from "../assets/SPF_Resources/final_MEL Foundational Training/Session 3_Outcome Mapping and Indicator Development-I.pptx";
// import handoutOutcomeHarvesting from "../assets/SPF_Resources/final_Outcome Harvesting/Handout-Outcome Harvesting.docx";
// import outcomeHarvestingWorkshopDeck from "../assets/SPF_Resources/final_Outcome Harvesting/OH Workshop_Deck.pptx";
import session1MELFundamentals from "../assets/SPF_Resources/final_MEL Foundational Training/Outcome Mapping Guide_English.pdf";
import session2MELFundamentals from "../assets/SPF_Resources/final_MEL Foundational Training/Outcome Mapping Guide_English.pdf";
import session3OutcomeMapping from "../assets/SPF_Resources/final_MEL Foundational Training/Outcome Mapping Guide_English.pdf";
import handoutOutcomeHarvesting from "../assets/SPF_Resources/final_MEL Foundational Training/Outcome Mapping Guide_English.pdf";
import outcomeHarvestingWorkshopDeck from "../assets/SPF_Resources/final_MEL Foundational Training/Outcome Mapping Guide_English.pdf";


function Resources() {
    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                justifyContent: "flex-start",
                padding: "2rem 0 5rem 8vw",
            }}
        >
            <ResourceCard
                title="Outcome Mapping Guide_English"
                fileType="pdf"
                description="Building Learning and Reflection into Development Programs"
                url={outcomeMappingGuide}
            />
            <ResourceCard
                title="Session 1 MEL Fundamentals-I"
                fileType="ppt"
                description="Introduction to MEL Concepts"
                url={session1MELFundamentals}
            />
            <ResourceCard
                title="Session 2 MEL Fundamentals-II"
                fileType="ppt"
                description="Introduction to MEL Concepts"
                url={session2MELFundamentals}
            />
            <ResourceCard
                title="Session 3 Outcome Mapping and Indicator Development-I"
                fileType="ppt"
                description="Learn about the background and key issues to identify the right kind of outcomes."
                url={session3OutcomeMapping}
            />

            <ResourceCard
                title="Handout-Outcome Harvesting"
                fileType="doc"
                description="Learn about the concept of Outcome Harvesting."
                url={handoutOutcomeHarvesting}
            />

            <ResourceCard
                title="Outcome Harvesting Workshop Deck"
                fileType="ppt"
                description="Learn about the concept of Outcome Harvesting."
                url={outcomeHarvestingWorkshopDeck}
            />
        </div>
    );
}

export default Resources;