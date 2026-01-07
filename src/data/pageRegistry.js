// src/data/pageRegistry.js

/* ===========================
   Corporate Overview Pages
=========================== */

import GulfOilIndiaAtAGlance from '../pages/corporate_overview/GulfOilIndiaAtAGlance';
import HindujaGroup from '../pages/corporate_overview/HindujaGroup';
import GulfOilInternational from '../pages/corporate_overview/GulfOilInternational';
import BoardOfDirectors from '../pages/corporate_overview/BoardOfDirectors';
import FromTheChairmansDesk from '../pages/corporate_overview/FromTheChairmansDesk';
import StrategicInsightsFromTheMdAndCeo from '../pages/corporate_overview/StrategicInsightsFromTheMdAndCeo';
import SeniorManagementTeam from '../pages/corporate_overview/SeniorManagementTeam';
import OurRobustBusinessModel from '../pages/corporate_overview/OurRobustBusinessModel';
import GulfOilLubricantsIndiaLimited from '../pages/corporate_overview/GulfOilLubricantsIndiaLimited';
import CfosReviewOfFinancialPerformance from '../pages/corporate_overview/CfosReviewOfFinancialPerformance';
import LeadershipTeam from '../pages/corporate_overview/LeadershipTeam';
import ManufacturingAndRdProwess from '../pages/corporate_overview/ManufacturingAndRdProwess';
import MarketingInitiatives from '../pages/corporate_overview/MarketingInitiatives';
import StrategicPartnerships from '../pages/corporate_overview/StrategicPartnerships';
import IntellectualStrengthDigital from '../pages/corporate_overview/IntellectualStrengthDigital';
import IntegratedEMobilitySolutions from '../pages/corporate_overview/IntegratedEMobilitySolutions';
import OurPeople from '../pages/corporate_overview/OurPeople';
import Sustainability from '../pages/corporate_overview/Sustainability';
import Communities from '../pages/corporate_overview/Communities';
import Awards from '../pages/corporate_overview/Awards';

/* ===========================
   Statutory Reports Pages
=========================== */

import ManagementDiscussionAndAnalysis from '../pages/statutory_reports/ManagementDiscussionAndAnalysis';
import BoardsReports from '../pages/statutory_reports/BoardsReports';
import BusinessResponsibilityAndSustainabilityReports from '../pages/statutory_reports/BusinessResponsibilityAndSustainabilityReports';
import CorporateGovernanceReports from '../pages/statutory_reports/CorporateGovernanceReports';

/* ===========================
   Financial Statements Pages
=========================== */

import Standalone from '../pages/financials/Standalone';
import Consolidated from '../pages/financials/Consolidated';

/* ===========================
   Notice Pages
=========================== */

import NoticeOfThe16thAnnualGeneralMeeting from '../pages/notice/NoticeOfThe16thAnnualGeneralMeeting';

/* ===========================
   PAGE REGISTRY MAP
=========================== */

export const PAGE_MAP = {
  /* Corporate Overview */
  'gulf-oil-india-at-a-glance': GulfOilIndiaAtAGlance,
  'hinduja-group': HindujaGroup,
  'gulf-oil-international': GulfOilInternational,
  'board-of-directors': BoardOfDirectors,
  'from-the-chairmans-desk': FromTheChairmansDesk,
  'strategic-insights-from-the-md-and-ceo': StrategicInsightsFromTheMdAndCeo,
  'senior-management-team': SeniorManagementTeam,
  'our-robust-business-model': OurRobustBusinessModel,
  'gulf-oil-lubricants-india-limited': GulfOilLubricantsIndiaLimited,
  'cfos-review-of-financial-performance': CfosReviewOfFinancialPerformance,
  'leadership-team': LeadershipTeam,
  'manufacturing-and-rd-prowess': ManufacturingAndRdProwess,
  'marketing-initiatives': MarketingInitiatives,
  'strategic-partnerships': StrategicPartnerships,
  'intellectual-strength-digital': IntellectualStrengthDigital,
  'integrated-e-mobility-solutions': IntegratedEMobilitySolutions,
  'our-people': OurPeople,
  'sustainability': Sustainability,
  'communities': Communities,
  'awards': Awards,

  /* Statutory Reports */
  'management-discussion-and-analysis': ManagementDiscussionAndAnalysis,
  'boards-reports': BoardsReports,
  'business-responsibility-and-sustainability-reports':
    BusinessResponsibilityAndSustainabilityReports,
  'corporate-governance-reports': CorporateGovernanceReports,

  /* Financial Statements */
  'standalone': Standalone,
  'consolidated': Consolidated,

  /* Notice */
  'notice-of-the-16th-annual-general-meeting':
    NoticeOfThe16thAnnualGeneralMeeting,
};
