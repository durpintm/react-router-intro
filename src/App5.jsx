import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalNotificationSelector,
} from "./store/atoms/atoms";

const App5 = () => {
  return (
    <>
      <RecoilRoot>
        <Navbar />
      </RecoilRoot>
    </>
  );
};

function Navbar() {
  const notificationCount = useRecoilValue(notificationAtom);
  const networkCount = useRecoilValue(networkAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const jobsCount = useRecoilValue(jobsAtom);

  // Using useMemo
  // const totalNotificationCount = useMemo(() => {
  //   return notificationCount + networkCount + messagingCount + jobsCount;
  // }, [notificationCount, networkCount, messagingCount, jobsCount]);

  // Using recoil selector
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <div>
      <button>Home</button>
      <button> Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>
        Notification ({notificationCount >= 100 ? "99+" : notificationCount})
      </button>
      <button>Me ({totalNotificationCount})</button>
    </div>
  );
}

export default App5;
