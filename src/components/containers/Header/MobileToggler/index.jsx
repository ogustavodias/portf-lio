// Styles with styled-components
import * as S from "./styles";

const MobileToggler = ({expanded, setExpanded}) => {
  return (
    <S.MobileToggler data-expanded={expanded} onClick={() => setExpanded(previous => !previous)}>
      <svg width="100%" height="100%" fill="var(--WHITE)">
        <rect className="top" height="5" width="100%" rx="4" x="0" y="0"></rect>
        <rect className="middle" height="5" width="100%" rx="4" x="0" y="8"></rect>
        <rect className="bottom" height="5" width="100%" rx="4" x="0" y="16"></rect>
      </svg>
    </S.MobileToggler>
  );
};

export default MobileToggler;
