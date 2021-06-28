/// <reference path="./index.d.ts" />

type UrlReportSummary = {
  testsslGrade?: string;
  codescanCount?: number;
  codescanGrade?: string;
  dependabotCount?: number;
  dependabotGrade?: string;
  httpGrade?: string;
  lighthouse_performance?: number;
  lighthouse_performanceGrade?: string;
  lighthouse_seo?: number;
  lighthouse_seoGrade?: string;
  lighthouse_pwa?: number;
  lighthouse_pwaGrade?: string;
  lighthouse_accessibility?: number;
  lighthouse_accessibilityGrade?: string;
  "lighthouse_best-practices"?: number;
  "lighthouse_best-practicesGrade"?: string;
  nmapGrade?: string;
  nmapOpenPortsCount?: number;
  nmapOpenPortsGrade?: string;
  trackersCount?: number;
  trackersGrade?: string;
  cookiesCount?: number;
  cookiesGrade?: string;
  uptime?: number;
  uptimeGrade?: string;
  apdex?: number;
  apdexGrade?: string;
  statsGrade?: string;
};