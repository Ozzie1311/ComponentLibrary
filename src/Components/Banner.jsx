import {
  FaCircleCheck,
  FaTriangleExclamation,
  FaCircleXmark,
  FaCircleInfo,
} from "react-icons/fa6";

const bannerConfig = {
  success: { icon: FaCircleCheck, class: "success" },
  warning: { icon: FaTriangleExclamation, class: "warning" },
  error: { icon: FaCircleXmark, class: "error" },
  neutral: { icon: FaCircleInfo, class: "neutral" },
};

export default function Banner({ children, type }) {
  const Icon = bannerConfig[type].icon;
  return (
    <div className={`banner banner-${type}`}>
      <Icon className={`svg-${type}`} />
      {children}
    </div>
  );
}
