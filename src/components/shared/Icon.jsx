import { iconMap } from "../../assets/icons/iconsMap";

export default function Icon(props) {
  const name = props.name;
  function EmptyIcon() {
    return <span />;
  }
  const IconComponent = iconMap[name] || EmptyIcon;
  return (
    <IconComponent
      className={`max-h-full max-w-full ${props.className ?? ""}`}
    />
  );
}
