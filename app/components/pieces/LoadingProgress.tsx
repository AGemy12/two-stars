"use client";
import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function LoadingProgress(props: CircularProgressProps & { value: number }) {
  return (
    <div className="fixed left-0 top-0  bg-black bg-section_bg bg-center bg-contain bg-no-repeat">
      <div className="flex items-center justify-center w-screen h-screen relative after:absolute after:left-0 after:top-0 after:w-full after:h-full after:bg-[rgba(0,0,0,0.97)]">
        <Box className="relative flex items-center justify-center w-[80px] h-[80px] z-50">
          <CircularProgress
            variant="determinate"
            {...props}
            className="!text-gold !w-full !h-full "
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              className="text-off_wihte !text-xl"
            >{`${Math.round(props.value)}%`}</Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
}

export default function CircularWithValueLabel() {
  const [progress, setProgress] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (isLoading) {
      const timer = setInterval(() => {
        setProgress((prevProgress) =>
          prevProgress >= 100 ? 100 : prevProgress + 10
        );
      }, 100);

      const loadingTimeout = setTimeout(() => {
        setIsLoading(false); // Stop loading after 3 seconds
      }, 3000);

      return () => {
        clearInterval(timer);
        clearTimeout(loadingTimeout);
      };
    }
  }, [isLoading]);

  return isLoading ? <LoadingProgress value={progress} /> : null;
}
