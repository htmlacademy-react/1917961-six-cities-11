type PremiumMarkProps = {
  isPremium: boolean;
  className: string;
}

function PremiumMark({isPremium, className}: PremiumMarkProps) {
  return (
    isPremium ?
      <div className={className}>
        <span>Premium</span>
      </div> : <div />
  );
}

export default PremiumMark;
