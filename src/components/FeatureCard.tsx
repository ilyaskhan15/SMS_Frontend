import type { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => (
  <div className="card h-100 shadow-sm border-0">
    <div className="card-body text-center">
      <Icon size={32} className="mb-3 text-primary" />
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
  </div>
);

export default FeatureCard;