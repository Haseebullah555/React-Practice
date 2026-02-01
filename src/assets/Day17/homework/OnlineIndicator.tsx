import useOnlineStatus from "./useOnlineStatus";

function OnlineIndicator() {
  const isOnline = useOnlineStatus();

  return (
    <h1>
      Status: {isOnline ? "🟢 Online" : "🔴 Offline"}
    </h1>
  );
}

export default OnlineIndicator;
