import { Waypoint } from 'src/npm/Waypoint';

const AnimateComponent = () => {
  let arr = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2,
    3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8,
    9, 10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];
  return (
    <Waypoint
      spyOn={'.animate'}
      oneWay={false}
      onEnter={() => {
        console.log('on enter');
      }}
      onLeave={() => {
        console.log('on leave');
      }}
    >
      <div className="bg-green">
        {arr.map((item, index) => {
          return (
            <div key={index}>
              <span
                className="animate miki"
                data-delay={index * 0.05}
                data-dur={0.4}
                data-anime={JSON.stringify({
                  from: {
                    opacity: 0,
                    transform: 'translate(0%, 1000%)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translate(0%, 0%)',
                  },
                })}
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
