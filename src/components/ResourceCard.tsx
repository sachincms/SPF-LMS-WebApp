import React from "react";

// Icon SVGs for file types
const fileIcons: Record<string, React.JSX.Element> = {
  pdf: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#E63946">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 7.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm6 1.414L18.586 10H14a2 2 0 0 1-2-2V3.414z"/>
    </svg>
  ),
  ppt: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#F77F00">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 7.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm6 1.414L18.586 10H14a2 2 0 0 1-2-2V3.414z"/>
    </svg>
  ),
  xls: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#38B000">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 7.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm6 1.414L18.586 10H14a2 2 0 0 1-2-2V3.414z"/>
    </svg>
  ),
  doc: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#1976D2">
      <path d="M6 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.828A2 2 0 0 0 19.414 7.414l-4.828-4.828A2 2 0 0 0 12.172 2H6zm6 1.414L18.586 10H14a2 2 0 0 1-2-2V3.414z"/>
    </svg>
  ),
  other: (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="#adb5bd">
      <rect x="4" y="4" width="16" height="16" rx="2" />
    </svg>
  )
};

type ResourceCardProps = {
  title: string;
  fileType: "pdf" | "ppt" | "xls" | "doc" | string;
  description?: string;
  url: string;
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  fileType,
  description,
  url
}) => {
  // Pick icon based on fileType
  const icon = fileIcons[fileType] || fileIcons.other;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        textDecoration: "none",
        color: "inherit"
      }}
      className="resource-card-link"
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "1rem",
          boxShadow: "0 2px 12px rgba(2,62,138,0.07)",
          padding: "1.2rem 1.2rem",
          minWidth: 180,
          maxWidth: 240,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "box-shadow 0.2s, transform 0.2s",
          cursor: "pointer"
        }}
        className="resource-card"
      >
        <div style={{ marginBottom: "0.8rem" }}>{icon}</div>
        <div style={{
          fontWeight: 700,
          color: "#023E8A",
          fontSize: "1.08rem",
          marginBottom: "0.4rem",
          textAlign: "center",
          wordBreak: "break-word"
        }}>
          {title}
        </div>
        {description && (
          <div style={{
            color: "#495057",
            fontSize: "0.97rem",
            textAlign: "center",
            marginBottom: "0.3rem"
          }}>
            {description}
          </div>
        )}
        <div style={{
          marginTop: "0.5rem",
          color: "#00B4D8",
          fontWeight: 600,
          fontSize: "0.98rem",
          display: "flex",
          alignItems: "center",
          gap: "0.3rem"
        }}>
          <i className="bi bi-box-arrow-up-right" />
          View
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;