import styled from 'styled-components'


const TimelineContainer = styled.div`
  position: relative;
  padding-left: 2rem; 
  z-index: 0;
  &::before {
    content: '';
    position: absolute;
    /* left: 10px;   */
    top: 0;
    bottom: 0;
    width: 2px;
    background: var(--hubspot-accent-color);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin: 2rem 0;
`;

const TimelineBullet = styled.div`
  position: absolute;
  left: -7px; 
  top: 0;
  width: 16px;
  height: 16px;
  background: var(--hubspot-accent-color);
  border-radius: 50%;
`;

const TimelinePanel = styled.div`
  margin-left: 1.5rem; 
  background: var(--core-container-color);
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0,0,0,0.15);
  max-width: 800px;
`;

const PanelTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;
const PanelDate = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
`;

const PanelDescription = styled.p`
  margin: 0;
  font-size: 1rem;
`;

interface Event {
  title: string;
  date: string;
  description: string;
}

interface TimelineProps {
  events: Event[];
}

export const Timeline = ({ events }: TimelineProps) => {
  return (
    <TimelineContainer>
      {events.map((event, idx: number) => (
        <TimelineItem key={idx}>
          <TimelineBullet />
          <TimelinePanel>
            <PanelTitle>{event.title}</PanelTitle>
            <PanelDate>{event.date}</PanelDate>
            <PanelDescription>{event.description}</PanelDescription>
          </TimelinePanel>
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
};