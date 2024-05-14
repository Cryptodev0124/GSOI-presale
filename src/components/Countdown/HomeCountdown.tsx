import React from 'react';
import styled from 'styled-components';
import Countdown, { CountdownRenderProps } from 'react-countdown';

interface ProgressCountdownProps {
  base: Date;
  deadline: Date;
  hideBar?: boolean;
  description?: string;
}

const HomeCountdown: React.FC<ProgressCountdownProps> = ({ base, deadline, hideBar }) => {
  const percentage =
    Date.now() >= deadline.getTime()
      ? 100
      : ((Date.now() - base.getTime()) / (deadline.getTime() - base.getTime())) * 100;

  const countdownRenderer = (countdownProps: CountdownRenderProps) => {
    const { days, hours, minutes, seconds } = countdownProps;
    const d = String(days)
    const h = String(hours);
    const m = String(minutes);
    const s = String(seconds);
    return (
      <StyledCountdown>
        <div style={{marginLeft: '20px', marginRight: '15px', alignItems: 'center', width: '40px', textAlign: 'center'}}>
          {d.padStart(2, '0')}
          <p style={{fontSize: '16px', color: 'black'}}>Days</p>
        </div>
        <div style={{marginLeft: '15px', marginRight: '15px', alignItems: 'center', width: '40px', textAlign: 'center'}}>
          {h.padStart(2, '0')}
          <p style={{fontSize: '16px', color: 'black'}}>Hours</p>
        </div>
        <div style={{marginLeft: '15px', marginRight: '15px', alignItems: 'center', width: '40px', textAlign: 'center'}}>
          {m.padStart(2, '0')}
          <p style={{fontSize: '16px', color: 'black'}}>Minutes</p>
        </div>
        <div style={{marginLeft: '15px', marginRight: '20px', alignItems: 'center', width: '40px', textAlign: 'center'}}>
          {s.padStart(2, '0')}
          <p style={{fontSize: '16px', color: 'black'}}>Seconds</p>
        </div>

      </StyledCountdown>
    );
  };
  return (
    // <Card>
    <StyledCardContentInner>
      {/* <StyledDesc>{description}</StyledDesc> */}
      <Countdown key={new Date().getTime()} date={deadline} renderer={countdownRenderer} />
      {hideBar ? (
        ''
      ) : (
        <StyledProgressOuter>
          <StyledProgress progress={percentage} />
        </StyledProgressOuter>
      )}
    </StyledCardContentInner>
    // </Card>
  );
};

const StyledCountdown = styled.p`
  background: white;
  display: flex;
  flex-direction: row;
  border-radius: 12px;
  font-size: 36px;
  font-weight: 700;
  color: red; 
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 1);
  margin: 0 0 6px 0;
`;

const StyledProgressOuter = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 3px;
  background: ${(props) => props.theme.color.grey[700]};
`;

const StyledProgress = styled.div<{ progress: number }>`
  width: ${(props) => props.progress}%;
  height: 100%;
  border-radius: 3px;
  background: ${(props) => props.theme.color.grey[100]};
`;

const StyledCardContentInner = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // padding: ${(props) => props.theme.spacing[2]}px ${(props) => props.theme.spacing[4]}px;
`;

export default HomeCountdown;
