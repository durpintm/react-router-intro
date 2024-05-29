import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
} from "./store/atoms/atoms";

const App3 = () => {
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

  return (
    <div>
      <button>Home</button>
      <button> Network ({networkCount >= 100 ? "99+" : networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>
        Notification ({notificationCount >= 100 ? "99+" : notificationCount})
      </button>

      <ButtonUpdater />
    </div>
  );
}

function ButtonUpdater() {
  const setMessagingCount = useSetRecoilState(messagingAtom);
  return (
    <button
      onClick={() => {
        setMessagingCount((messagingCount) => messagingCount + 1);
      }}
    >
      Me
    </button>
  );
}
export default App3;
