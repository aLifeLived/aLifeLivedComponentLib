import React from 'react';

// Components
import { Box } from '../../themes/box/Box';
import { SkeletonElement } from '../../themes/loadingSkeletons/SkeletonElement';
import { SystemAnimatableBox } from '../../themes/systemAnimatableBox/SystemAnimatableBox';

export const UserCardSkeleton = () => {
  return (
    <SystemAnimatableBox
      flexDirection="row"
      alignContent="center"
      alignItems="center"
      animation="flash"
      iterationCount="infinite"
      useNativeDriver={true}
    >
      <SkeletonElement variant="avatar" />
      <Box flexDirection="column" width="100%" marginLeft="s">
        <SkeletonElement variant="title" />
        <SkeletonElement variant="text" />
      </Box>
    </SystemAnimatableBox>
  );
};
