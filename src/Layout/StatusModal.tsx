import { AnimatePresence, motion } from "framer-motion";
import MotionFade from "../containers/MotionFade";
import type { InitialPending } from "../hooks/usePending";
import { SuccessPath, ErrorPath, LoadingPath, Loading } from "../img/icons";

interface IPendingModalProps {
  pending: InitialPending;
}

export default function PendingModal({
  pending,
}: IPendingModalProps): JSX.Element {
  const { status, message } = pending;

  return (
    <div className="pointer-events-none fixed z-20 min-h-screen w-full">
      <AnimatePresence>
        {status === "isLoading" && (
          <MotionFade>
            <div key={status} className="relative -mt-4">
              <img src={LoadingPath} alt="" className="w-28 " />
              <Loading className=" absolute left-1/2 bottom-0 -translate-x-1/2 -translate-y-1/2" />
            </div>
          </MotionFade>
        )}
        {status === "isSuccess" && (
          <MotionFade>
            <div
              key={status}
              className="relative flex min-h-[150px] min-w-[200px] grow-0 flex-col items-center justify-between"
            >
              <img src={SuccessPath} alt="" className="w-28" />
              <p className="text-white">{message}</p>
            </div>
          </MotionFade>
        )}
        {status === "isError" && (
          <MotionFade>
            <div
              key={status}
              className="relative flex min-h-[150px] min-w-[200px] grow-0 flex-col items-center justify-between"
            >
              <img src={ErrorPath} alt="" className="mb-3 w-28" />
              <p className="text-white">{message}</p>
            </div>
          </MotionFade>
        )}
      </AnimatePresence>
    </div>
  );
}
