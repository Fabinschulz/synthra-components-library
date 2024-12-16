import { Stack, Skeleton } from '@mui/material';

type ListSkeletonProps = {
  isLoading: boolean;
  rowsPerPage: number;
  children: React.ReactNode;
};

export const ListSkeleton: React.FC<ListSkeletonProps> = ({ isLoading, children, rowsPerPage }) => {
  if (!isLoading) <>{children}</>;

  const height: { [key: number]: number } = {
    1: 50,
    5: 400,
    10: 600,
    15: 800,
    20: 1000
  };

  const borderSx = {
    borderRadius: '8px'
  };

  return (
    <Stack>
      <Stack
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto auto',
          gap: 1,
          mb: 1
        }}
      >
        <Skeleton
          variant="rectangular"
          width="100%"
          height={height[1]}
          animation="wave"
          sx={borderSx}
        />
        <Skeleton
          variant="rectangular"
          height={height[1]}
          width="100%"
          animation="wave"
          sx={borderSx}
        />
      </Stack>
      <Skeleton
        variant="rectangular"
        height={height[rowsPerPage]}
        width="100%"
        animation="wave"
        sx={borderSx}
      />
    </Stack>
  );
};
