export interface IWaypoint {
  onEnter?: () => void;
  onLeave?: () => void;
  spyOn: string;
  oneWay?: boolean;
}
