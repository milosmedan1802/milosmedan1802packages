import { Waypoint } from 'src/npm/Waypoint';

const AnimateComponent = () => {
  let arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 11, 12, 13, 14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0,
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1,
    2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14,
  ];
  return (
    <Waypoint spyOn={'.animate'} oneWay={true}>
      <div className="bg-green">
        {arr.map((item, index) => {
          return (
            <div key={index}>
              <span
                data-from="cssClassFrom"
                data-to="cssClassTo"
                className="animate"
                data-delay={index * 0.05}
              >
                Milos
              </span>
            </div>
          );
        })}
      </div>
    </Waypoint>
  );
};

export { AnimateComponent };
