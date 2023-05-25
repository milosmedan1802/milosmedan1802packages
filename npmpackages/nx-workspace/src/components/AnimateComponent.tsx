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
      oneWay={true}
      onEnter={() => {
        console.log('on enter');
      }}
      onLeave={() => {
        console.log('on leave');
      }}
    >
      <div className="bg-green">
        <span
          className="animate"
          data-delay={1}
          data-dur={0.4}
          data-anime={JSON.stringify({
            from: {
              opacity: 0,
              transform: 'translate(-100%, 0%)',
            },
            to: {
              opacity: 1,
              transform: 'translate(0%, 0%)',
            },
          })}
        >
          ovo animarfnkajfdas
        </span>
        {arr.map((item, index) => {
          return (
            <div key={index}>
              <span
                className="miki"
                data-delay={index * 1}
                data-dur={0.4}
                data-anime={JSON.stringify({
                  from: {
                    opacity: 0,
                    transform: 'translate(100%, 0%)',
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
