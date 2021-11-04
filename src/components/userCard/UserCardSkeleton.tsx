import React from 'react';

// Components
import { Box } from '../../themes/box/Box';
import { SkeletonElement } from '../../themes/loadingSkeletons/SkeletonElement';
import { SystemAnimatableBox } from '../../themes/systemAnimatableBox/SystemAnimatableBox';

type UserCardSkeleton = {
  testID?: string;
};

export const UserCardSkeleton: React.FC<UserCardSkeleton> = ({ testID }) => {
  return (
    <SystemAnimatableBox
      flexDirection="row"
      animation="flash"
      iterationCount="infinite"
      alignItems="center"
      useNativeDriver={true}
    >
      <SkeletonElement variant="avatar" />
      <Box width="100%" marginLeft="s" testID={testID}>
        <SkeletonElement variant="title" />
      </Box>
    </SystemAnimatableBox>
  );
};
