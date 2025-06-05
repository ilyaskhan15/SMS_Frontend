import { FaUser, FaClipboardCheck, FaChalkboardTeacher, FaMoneyBill, FaBook, FaRegChartBar } from "react-icons/fa";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: FaUser,
    title: "Student Records",
    description: "Easily manage student profiles, grades, and progress reports.",
  },
  {
    icon: FaClipboardCheck,
    title: "Attendance Tracking",
    description: "Keep accurate records of student attendance in real time.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "Teacher Dashboard",
    description: "Enable teachers to track class performance and communicate with parents.",
  },
  {
    icon: FaMoneyBill,
    title: "Fee Management",
    description: "Handle billing, payments, and invoicing with ease.",
  },
  {
    icon: FaBook,
    title: "Library System",
    description: "Organize and manage library resources catalogs.",
  },
  {
    icon: FaRegChartBar,
    title: "Exam Results",
    description: "Generate and distribute exam results and reports.",
  },
];

const FeatureGrid = () => (
  <section className="py-5 bg-light">
    <div className="container">
      <div className="row g-4">
        {features.map((feature, idx) => (
          <div className="col-md-4" key={idx}>
            <FeatureCard {...feature} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeatureGrid;