const PENALTY = 150000;
const FIELDS_COUNT = 10;

let currentPenaltyValue = 2;
const PenaltyComp = () => {
  for(let index = 2; index < PENALTY; index++) {
    currentPenaltyValue = currentPenaltyValue ** index;
  }
  return null;
}

export default PenaltyComp;