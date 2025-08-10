import ResourceCard from "../components/ResourceCard";

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
                url="src/assets/SPF_Resources/final_MEL Foundational Training/Outcome Mapping Guide_English.pdf"
            />
            <ResourceCard
                title="Session 1 MEL Fundamentals-I"
                fileType="ppt"
                description="Introduction to MEL Concepts"
                url="src\assets\SPF_Resources\final_MEL Foundational Training\Session 1_ MEL Fundamentals-I.pptx"
            />
            <ResourceCard
                title="Session 2 MEL Fundamentals-II"
                fileType="ppt"
                description="Introduction to MEL Concepts"
                url="src\assets\SPF_Resources\final_MEL Foundational Training\Session 2_MEL Fundamentals-II.pptx"
            />
            <ResourceCard
                title="Session 3 Outcome Mapping and Indicator Development-I"
                fileType="ppt"
                description="Learn about the background and key issues to identify the right kind of outcomes."
                url="src\assets\SPF_Resources\final_MEL Foundational Training\Session 3_Outcome Mapping and Indicator Development-I.pptx"
            />

            <ResourceCard
                title="Handout-Outcome Harvesting"
                fileType="doc"
                description="Learn about the concept of Outcome Harvesting."
                url="src\assets\SPF_Resources\final_Outcome Harvesting\Handout-Outcome Harvesting.docx"
            />

            <ResourceCard
                title="Outcome Harvesting Workshop Deck"
                fileType="ppt"
                description="Learn about the concept of Outcome Harvesting."
                url="src\assets\SPF_Resources\final_Outcome Harvesting\OH Workshop_Deck.pptx"
            />
        </div>
    );
}

export default Resources;