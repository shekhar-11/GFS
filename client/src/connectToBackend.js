export const sendGestureToBackend = async (gesture) => {
    try {
      await fetch("http://localhost:5000/gesture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gesture }),
      });
      console.log("Gesture sent to backend:", gesture);
    } catch (error) {
      console.error("Error sending gesture:", error);
    }
  };
