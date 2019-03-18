import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({
  prefixCls, type, size, className, ...props
}) => {
  const cls = classNames({
    [`${prefixCls}-icon-${type}`]: true,
    [className]: className,
    [size]: size,
  });

  return (
    <i className={cls} {...props} />
  );
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  prefixCls: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large']),
};

Icon.defaultProps = {
  prefixCls: 'pile'
}

export default Icon;
