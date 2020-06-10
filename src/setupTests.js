import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import mockOmit from 'just-omit';

const mockForwardRef = React.forwardRef;

export default (() => {
  const mockAstroturf = (Component) => {
    const outer = () => {
      const styledReturn = mockForwardRef((props, ref) => {
        // eslint-disable-next-line react/forbid-foreign-prop-types
        const propKeys = ['as', ...Object.keys(styledReturn.propTypes || {})];
        return (
          <Component
            ref={ref}
            className="astroturf"
            data-testid={props['data-testid']}
            {...mockOmit(props, propKeys)}
          />
        );
      });

      if (typeof Component === 'string') {
        const forwardedRef = mockForwardRef((props, ref) => {
          // eslint-disable-next-line react/forbid-foreign-prop-types
          const propKeys = ['as', ...Object.keys(forwardedRef.propTypes || {})];
          const Tag = props.as || Component;
          return (
            <Tag
              ref={ref}
              className="astroturf"
              {...mockOmit(props, propKeys)}
            />
          );
        });

        forwardedRef.attrs = () => forwardedRef;

        return forwardedRef;
      }

      return styledReturn;
    };
    return outer;
  };

  jest.mock('astroturf', () => ({
    __esModule: true,
    default: mockAstroturf,
    css: () => ({}),
  }));
})();
