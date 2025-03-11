"use client";

import React, { useState, useEffect } from "react";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  PDFDownloadLink,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

interface Experience {
  company: string;
  location: string;
  title: string;
  period: string;
  description: string;
  achievements: string[];
}

interface CV {
  name: string;
  contact: string;
  summary: string[];
  experience: Experience[];
}

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 40,
    fontFamily: "Helvetica",
  },
  header: {
    marginBottom: 30,
    textAlign: "center",
  },
  name: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 8,
  },
  contact: {
    fontSize: 11,
    marginBottom: 25,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 12,
    textTransform: "uppercase",
    borderBottom: "1 solid #000",
    paddingBottom: 2,
  },
  bulletPoint: {
    flexDirection: "row",
    marginBottom: 8,
    paddingLeft: 2,
  },
  bullet: {
    width: 12,
    fontSize: 11,
  },
  bulletText: {
    flex: 1,
    fontSize: 11,
    lineHeight: 1.4,
  },
  companyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  company: {
    fontSize: 13,
    fontWeight: "bold",
  },
  location: {
    fontSize: 11,
  },
  positionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  jobTitle: {
    fontSize: 12,
    fontStyle: "italic",
  },
  period: {
    fontSize: 11,
  },
  companyDescription: {
    fontSize: 11,
    fontStyle: "italic",
    marginTop: 10,
    marginBottom: 10,
    lineHeight: 1.4,
  },
  experienceBlock: {
    marginBottom: 20,
    paddingBottom: 5,
  },
  achievementsContainer: {
    marginTop: 6,
  },
});

const sanitizeCV = (cv: any): CV => {
  if (!cv) {
    return {
      name: "Nome Sobrenome",
      contact: "Cidade, País | E-mail | linkedin.com/in/seu-linkedin",
      summary: ["Summary"],
      experience: [],
    };
  }

  return {
    name: cv.name || "Nome Sobrenome",
    contact:
      cv.contact || "Cidade, País | E-mail | linkedin.com/in/seu-linkedin",
    summary: Array.isArray(cv.summary) ? [...cv.summary] : ["Summary"],
    experience: Array.isArray(cv.experience)
      ? cv.experience.map((exp: any) => ({
          company: exp?.company || "Company",
          location: exp?.location || "Location",
          title: exp?.title || "Title",
          period: exp?.period || "Period",
          description: exp?.description || "Description",
          achievements: Array.isArray(exp?.achievements)
            ? [...exp.achievements]
            : ["Item"],
        }))
      : [],
  };
};

const CVDocument = ({ cv }: { cv: CV }) => {
  const safeCV = sanitizeCV(cv);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header with Name and Contact Info */}
        <View style={styles.header}>
          <Text style={styles.name}>{safeCV.name}</Text>
          <Text style={styles.contact}>{safeCV.contact}</Text>
        </View>

        {/* Summary Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>SUMMARY</Text>
          {safeCV.summary.map((bullet: string, index: number) => (
            <View key={index} style={styles.bulletPoint}>
              <Text style={styles.bullet}>• </Text>
              <Text style={styles.bulletText}>{bullet}</Text>
            </View>
          ))}
        </View>

        {/* Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PROFESSIONAL EXPERIENCE</Text>

          {safeCV.experience.map((exp: Experience, index: number) => (
            <View key={index} style={styles.experienceBlock}>
              {/* Company and Location Row */}
              <View style={styles.companyRow}>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>

              {/* Job Title and Period Row */}
              <View style={styles.positionRow}>
                <Text style={styles.jobTitle}>{exp.title}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>

              {/* Company Description */}
              <Text style={styles.companyDescription}>{exp.description}</Text>

              {/* Achievements */}
              <View style={styles.achievementsContainer}>
                {exp.achievements.map((achievement: string, i: number) => (
                  <View key={i} style={styles.bulletPoint}>
                    <Text style={styles.bullet}>• </Text>
                    <Text style={styles.bulletText}>{achievement}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

const PDFDownloadButton = ({ cv }: { cv: CV }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    try {
      setHasError(false);

      if (!cv || !Array.isArray(cv.summary) || !Array.isArray(cv.experience)) {
        console.warn("Invalid CV data structure:", cv);
      }

      setShouldRender(false);

      const timer = setTimeout(() => {
        setShouldRender(true);
      }, 300);

      return () => clearTimeout(timer);
    } catch (err) {
      setHasError(true);
      setShouldRender(false);
    }
  }, [cv]);

  if (hasError) {
    return (
      <Button variant="default" disabled title="Erro ao gerar PDF">
        <Download className="h-4 w-4 mr-2" />
        Erro ao gerar PDF
      </Button>
    );
  }

  if (!shouldRender) {
    return (
      <Button variant="outline" disabled>
        <Download className="h-4 w-4 mr-2" />
        Preparando PDF...
      </Button>
    );
  }

  try {
    return (
      <ErrorBoundary
        fallback={
          <Button variant="outline" disabled>
            <Download className="h-4 w-4 mr-2" />
            Erro ao gerar PDF
          </Button>
        }
      >
        <PDFDownloadLink
          document={<CVDocument cv={cv} />}
          fileName={`${cv.name
            .trim()
            .toLowerCase()
            .replace(/\s+/g, "-")}-cv.pdf`}
          className="inline-flex"
        >
          {({ loading, error }) => {
            if (error) {
              console.error("PDFDownloadLink error:", error);
              return (
                <Button variant="outline" disabled>
                  <Download className="h-4 w-4 mr-2" />
                  Erro ao gerar PDF
                </Button>
              );
            }
            return (
              <Button variant="default" disabled={loading}>
                <Download className="h-4 w-4 mr-2" />
                {loading ? "Preparando PDF..." : "Baixar PDF"}
              </Button>
            );
          }}
        </PDFDownloadLink>
      </ErrorBoundary>
    );
  } catch (err) {
    return (
      <Button variant="outline" disabled>
        <Download className="h-4 w-4 mr-2" />
        Erro ao gerar PDF
      </Button>
    );
  }
};

class ErrorBoundary extends React.Component<{
  children: React.ReactNode;
  fallback: React.ReactNode;
}> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("PDF rendering error caught by boundary:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export default React.memo(PDFDownloadButton);
