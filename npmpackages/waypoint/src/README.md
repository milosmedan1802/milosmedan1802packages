# INSTALL

`npm i @mm1802/waypoint`

## USAGE OF WAYPOINT

```
<Waypoint
      spyOn={'.animate'}
      oneWay={false}
      onEnter={() => {}}
      onLeave={() => {}}
    >
      <div>
        {arr.map((item, index) => {
          return (
            <div key={index}>
            <!-- WILL BE ANIMATED -->
              <span
                className="animate"
                data-delay={index * 0.05}
                data-dur={0.4}
                data-anime={JSON.stringify({
                  from: {
                    opacity: 0,
                    transform: 'translate(0%, -100%)',
                  },
                  to: {
                    opacity: 1,
                    transform: 'translate(0%, 0%)',
                  },
                })}
              >
                <!-- CONTET -->
              </span>
              <!-- WILL BE ANIMATED -->
            </div>
          );
        })}
        <div>
        <!-- WILL BE ANIMATED -->
            <span></span>
        <!-- WILL NOT BE ANIMATED -->
        </div>
      </div>
    </Waypoint>
```

| PROPERTY | TYPE         | DESCRIPTION               |
| -------- | ------------ | ------------------------- |
| children | -            | -                         |
| onEnter  | () => void   | trigger on viewport enter |
| onLeave  | ( ) => void; | trigger on viewport leave |
