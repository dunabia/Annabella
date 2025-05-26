import { useEffect } from "react";

function YotpoWidgetInit() {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof yotpoWidgetsContainer !== "undefined") {
        yotpoWidgetsContainer.initWidgets();
        console.log("Yotpo widgets initialized");
      } else {
        console.warn("yotpoWidgetsContainer not found");
      }
    }, 1000);

    return () => clearTimeout(timer); // Cleanup if component unmounts
  }, []);

  return null; // This component doesn't render anything
}

export default YotpoWidgetInit;
