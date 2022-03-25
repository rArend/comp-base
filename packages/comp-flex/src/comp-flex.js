import React from 'react';

const Flex = (props) => {
  const {
    className,
    container,
    justifyContent,
    flexDirection,
    flexGrow,
    flexBasis,
    flexShrink,
    flexWrap,
    flex,
    alignItems,
    margin,
    padding,
    width,
    height,
    maxWidth,
    children,
  } = props;

  return (
    <div
      className={className}
      
      style={{
        display: container ? 'block' : 'flex',
        justifyContent: justifyContent || 'flex-start',
        flexDirection: flexDirection || 'row',
        flexGrow: flexGrow || 0,
        flexBasis: flexBasis || 'auto',
        flexShrink: flexShrink || 1,
        flexWrap: flexWrap || 'nowrap',
        flex: flex || '0 1 auto',
        alignItems: alignItems || 'stretch',
        margin: margin || '0',
        padding: padding || '0',
        width: width || 'auto',
        height: height || 'auto',
        maxWidth: maxWidth || 'none'
      }}
    >
      {children}
    </div>
  )
}

export { Flex };