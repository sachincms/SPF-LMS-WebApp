
const icons = {
  book: (
    <svg width="36" height="36" fill="#023E8A" viewBox="0 0 16 16">
      <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893C6.255 1.77 7.578 2 8 2s1.745-.23 3.612-.065C12.846 2.06 14.115 2.46 15 2.828V14c-.885-.37-2.154-.769-3.388-.893C9.745 13.23 8.422 13 8 13s-1.745.23-3.612.065C3.154 13.94 1.885 13.54 1 13.172V2.828z"/>
    </svg>
  ),
  chatbot: (
    <svg width="36" height="36" fill="#00B4D8" viewBox="0 0 16 16">
      <path d="M8 1a7 7 0 1 0 6.32 4.906A3.5 3.5 0 0 1 8 1zm0 1a6 6 0 1 1-5.197 9.03A3.5 3.5 0 0 1 8 2zm0 2a4 4 0 1 0 3.197 6.03A3.5 3.5 0 0 1 8 4z"/>
    </svg>
  ),
  chart: (
    <svg width="36" height="36" fill="#38B000" viewBox="0 0 16 16">
      <path d="M0 0h1v15h15v1H0V0zm13 13V7h-1v6h1zm-3 0V3h-1v10h1zm-3 0V9H6v4h1zm-3 0V5H3v8h1z"/>
    </svg>
  ),
  rocket: (
    <svg width="36" height="36" fill="#FF6F00" viewBox="0 0 16 16">
      <path d="M6.5 15.5a.5.5 0 0 1-.5-.5v-2.086l-2.293-2.293a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0l2.293 2.293a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414 0L6.5 13.414V15a.5.5 0 0 1-.5.5z"/>
    </svg>
  ),
};



function Landing() {

  return (
    <div style={{ background: "linear-gradient(135deg, #e0f7fa 0%, #f8fafc 100%)", minHeight: "100vh", width: "100vw" }}>
      {/* Hero Section */}
      <section style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "2rem 4vw 0rem 8vw",
        minHeight: 320,
        gap: "2rem"
      }}>
        {/* Left */}
        <div style={{ flex: "1 1 340px", minWidth: 200, maxWidth: 540 }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, color: "#023E8A", marginBottom: "1.2rem", lineHeight: 1.1 }}>
            A One-Stop Learning Hub for SPF Partners
          </h1>
          <h3 style={{ fontWeight: 500, color: "#495057", marginBottom: "2rem" }}>
            Centralised resources, intelligent support, and real-time progress tracking — all in one place.
          </h3>
        </div>
        {/* Right */}
        <div style={{ flex: "1 1 320px", minWidth: 260, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{
            background: "#fff",
            borderRadius: "1.5rem",
            boxShadow: "0 4px 24px rgba(2,62,138,0.08)",
            padding: "2.5rem 2rem",
            minWidth: 260,
            maxWidth: 400,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img
              src="src/assets/learning-illustration.png"
              alt="Learning Illustration"
              style={{ width: "100%", maxWidth: 220, marginBottom: "1.2rem" }}
            />
          </div>
        </div>
      </section>


      <section style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "2rem",
        padding: "1rem 4vw"
      }}>
        {/* Card 1 */}
        <div style={{
          background: "#fff",
          borderRadius: "1.25rem",
          boxShadow: "0 2px 12px rgba(2,62,138,0.07)",
          padding: "2rem 1.5rem",
          minWidth: 220,
          maxWidth: 300,
          flex: "1 1 220px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          {icons.book}
          <h4 style={{ fontWeight: 700, margin: "1rem 0 0.5rem 0", color: "#023E8A" }}>Centralised Knowledge Repository</h4>
          <p style={{ color: "#495057", fontSize: "1rem", textAlign: "center" }}>
            Access every document, template, and update in one location.
          </p>
        </div>
        {/* Card 2 */}
        <div style={{
          background: "#fff",
          borderRadius: "1.25rem",
          boxShadow: "0 2px 12px rgba(2,62,138,0.07)",
          padding: "2rem 1.5rem",
          minWidth: 220,
          maxWidth: 300,
          flex: "1 1 220px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          {icons.chatbot}
          <h4 style={{ fontWeight: 700, margin: "1rem 0 0.5rem 0", color: "#00B4D8" }}>Intelligent Chatbot Support</h4>
          <p style={{ color: "#495057", fontSize: "1rem", textAlign: "center" }}>
            Get instant answers, personalised assistance, and 24/7 learning help without waiting.
          </p>
        </div>
        {/* Card 3 */}
        <div style={{
          background: "#fff",
          borderRadius: "1.25rem",
          boxShadow: "0 2px 12px rgba(2,62,138,0.07)",
          padding: "2rem 1.5rem",
          minWidth: 220,
          maxWidth: 300,
          flex: "1 1 220px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          {icons.chart}
          <h4 style={{ fontWeight: 700, margin: "1rem 0 0.5rem 0", color: "#38B000" }}>Progress Tracking & Analytics</h4>
          <p style={{ color: "#495057", fontSize: "1rem", textAlign: "center" }}>
            Visual dashboards to track program outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Landing;
